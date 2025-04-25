import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs";
import { prisma } from "@/lib/db";
import { headers } from "next/headers";

export async function GET() {
  try {
    const { userId } = auth();
    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const business = await prisma.business.findFirst({
      where: { userId },
      include: {
        competitors: {
          include: {
            adAnalyses: {
              orderBy: {
                createdAt: "desc",
              },
              take: 5,
            },
          },
        },
      },
    });

    if (!business) {
      return new NextResponse("Business not found", { status: 404 });
    }

    // Parse keywords from string to array if needed
    const parsedBusiness = {
      ...business,
      keywords:
        typeof business.keywords === "string"
          ? JSON.parse(business.keywords || "[]")
          : business.keywords || [],
    };

    return NextResponse.json(parsedBusiness);
  } catch (error) {
    console.error("Error fetching business:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

export async function POST(req) {
  try {
    const { userId } = auth();
    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const data = await req.json();
    console.log("Received data:", data);

    // Map businessName to name
    const { businessName, competitors, ...rest } = data;

    // Ensure keywords is a string
    const keywords =
      typeof rest.keywords === "string"
        ? rest.keywords
        : JSON.stringify(rest.keywords || []);

    // Create the business first
    const business = await prisma.business.create({
      data: {
        name: businessName,
        industry: rest.industry,
        location: rest.location || null,
        keywords: keywords,
        userId: userId,
      },
    });

    // If competitors are provided, create them
    if (competitors && typeof competitors === "string" && competitors.trim()) {
      const competitorNames = competitors.split(",").map((c) => c.trim());
      await Promise.all(
        competitorNames.map((name) =>
          prisma.competitor.create({
            data: {
              businessId: business.id,
              name,
              platform: "Unknown", // Default platform, will be updated when ads are analyzed
            },
          })
        )
      );
    }

    // Fetch the business with competitors to return
    const businessWithCompetitors = await prisma.business.findUnique({
      where: { id: business.id },
      include: { competitors: true },
    });

    return NextResponse.json(businessWithCompetitors);
  } catch (error) {
    console.error("Error creating business:", error);
    return new NextResponse(JSON.stringify({ message: error.message }), {
      status: 500,
    });
  }
}
