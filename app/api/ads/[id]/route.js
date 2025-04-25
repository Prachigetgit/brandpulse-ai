import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs";
import { prisma } from "@/lib/db";

export async function GET(req, { params }) {
  try {
    const { userId } = auth();

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const adAnalysis = await prisma.adAnalysis.findFirst({
      where: {
        id: params.id,
        competitor: {
          business: {
            userId: userId,
          },
        },
      },
      include: {
        competitor: true,
      },
    });

    if (!adAnalysis) {
      return new NextResponse("Ad analysis not found", { status: 404 });
    }

    // Parse JSON strings back to arrays
    const parsedAdAnalysis = {
      ...adAnalysis,
      emotions: JSON.parse(adAnalysis.emotions || "[]"),
      keywords: JSON.parse(adAnalysis.keywords || "[]"),
      recommendations: JSON.parse(adAnalysis.recommendations || "[]"),
    };

    return NextResponse.json(parsedAdAnalysis);
  } catch (error) {
    console.error("Error fetching ad analysis:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

export async function PUT(req, { params }) {
  try {
    const { userId } = auth();

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const adAnalysisId = params.id;
    const data = await req.json();

    // Verify ad analysis ownership
    const existingAdAnalysis = await prisma.adAnalysis.findFirst({
      where: {
        id: adAnalysisId,
        competitor: {
          business: {
            userId: userId,
          },
        },
      },
    });

    if (!existingAdAnalysis) {
      return new NextResponse("Ad analysis not found", { status: 404 });
    }

    // Ensure emotions is stored as a JSON string
    const emotionsString = JSON.stringify(data.emotions || []);

    // Update ad analysis details
    const updatedAdAnalysis = await prisma.adAnalysis.update({
      where: {
        id: adAnalysisId,
      },
      data: {
        title: data.title,
        platform: data.platform,
        adType: data.adType,
        content: data.content,
        mediaUrl: data.mediaUrl,
        landingPage: data.landingPage,
        cta: data.cta,
        emotions: emotionsString,
        targetDemographic: data.targetDemographic,
        designStyle: data.designStyle,
        score: data.score,
      },
    });

    // Parse emotions back to array for response
    return NextResponse.json({
      ...updatedAdAnalysis,
      emotions: JSON.parse(updatedAdAnalysis.emotions),
    });
  } catch (error) {
    console.error("Error updating ad analysis:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
