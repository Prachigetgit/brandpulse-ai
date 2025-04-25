import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs";
import { prisma } from "@/lib/prisma";
import { scrapeAds } from "@/lib/scraper";
import { analyzeAd } from "@/lib/ai";

export async function POST(req, { params }) {
  try {
    const { userId } = auth();
    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const business = await prisma.business.findUnique({
      where: { id: params.id },
      include: { competitors: true },
    });

    if (!business) {
      return new NextResponse("Business not found", { status: 404 });
    }

    if (business.userId !== userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const results = [];
    const errors = [];

    for (const competitor of business.competitors) {
      try {
        const scrapeResult = await scrapeAds(competitor);

        if (!scrapeResult.success) {
          errors.push({
            competitor: competitor.name,
            error: scrapeResult.error,
          });
          continue;
        }

        const ads = scrapeResult.ads;

        // Analyze each ad with AI
        const analyzedAds = await Promise.all(
          ads.map(async (ad) => {
            try {
              const analysis = await analyzeAd(ad);
              return {
                ...ad,
                ...analysis,
                competitorId: competitor.id,
              };
            } catch (error) {
              console.error(
                `Error analyzing ad for ${competitor.name}:`,
                error
              );
              return null;
            }
          })
        );

        // Filter out failed analyses
        const validAds = analyzedAds.filter((ad) => ad !== null);

        // Save analyzed ads
        const savedAds = await Promise.all(
          validAds.map((ad) =>
            prisma.adAnalysis.create({
              data: {
                title: ad.title,
                content: ad.content,
                platform: ad.platform,
                adType: ad.adType,
                mediaUrl: ad.mediaUrl,
                landingPage: ad.landingPage,
                cta: ad.cta,
                emotions: ad.emotions,
                targetDemographic: ad.targetDemographic,
                designStyle: ad.designStyle,
                score: ad.score,
                competitorId: ad.competitorId,
                businessId: business.id,
              },
            })
          )
        );

        results.push({
          competitor: competitor.name,
          ads: savedAds,
        });
      } catch (error) {
        console.error(`Error processing competitor ${competitor.name}:`, error);
        errors.push({
          competitor: competitor.name,
          error: error.message,
        });
      }
    }

    return NextResponse.json({
      success: true,
      results,
      errors: errors.length > 0 ? errors : undefined,
    });
  } catch (error) {
    console.error("Error in business analysis:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
