import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs";
import { prisma } from "@/lib/db";
import { headers } from "next/headers";

export async function GET(req) {
  try {
    const { userId } = auth();
    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const { searchParams } = new URL(req.url);
    const competitorId = searchParams.get("competitorId");
    const platform = searchParams.get("platform");
    const page = parseInt(searchParams.get("page")) || 1;
    const limit = parseInt(searchParams.get("limit")) || 10;

    const business = await prisma.business.findFirst({
      where: { userId },
    });

    if (!business) {
      return new NextResponse("Business not found", { status: 404 });
    }

    const where = {
      competitor: {
        businessId: business.id,
      },
    };

    if (competitorId) {
      where.competitorId = competitorId;
    }

    if (platform) {
      where.platform = platform;
    }

    const adAnalyses = await prisma.adAnalysis.findMany({
      where,
      include: {
        competitor: true,
      },
      orderBy: {
        createdAt: "desc",
      },
      skip: (page - 1) * limit,
      take: limit,
    });

    const total = await prisma.adAnalysis.count({ where });

    // Parse JSON strings back to arrays
    const parsedAdAnalyses = adAnalyses.map((ad) => ({
      ...ad,
      emotions: JSON.parse(ad.emotions || "[]"),
    }));

    return NextResponse.json({
      adAnalyses: parsedAdAnalyses,
      pagination: {
        total,
        pages: Math.ceil(total / limit),
        currentPage: page,
      },
    });
  } catch (error) {
    console.error("Error fetching ad analyses:", error);
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
    const business = await prisma.business.findFirst({
      where: { userId },
    });

    if (!business) {
      return new NextResponse("Business not found", { status: 404 });
    }

    // Ensure emotions is stored as a JSON string
    const adAnalysis = await prisma.adAnalysis.create({
      data: {
        ...data,
        emotions: JSON.stringify(data.emotions),
      },
      include: {
        competitor: true,
      },
    });

    // Parse emotions back to array for response
    return NextResponse.json({
      ...adAnalysis,
      emotions: JSON.parse(adAnalysis.emotions),
    });
  } catch (error) {
    console.error("Error creating ad analysis:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
