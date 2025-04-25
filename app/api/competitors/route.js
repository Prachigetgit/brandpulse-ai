import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs";
import { prisma } from "@/lib/db";

export async function GET(req) {
  try {
    const { userId } = auth();
    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const { searchParams } = new URL(req.url);
    const businessId = searchParams.get("businessId");
    const page = parseInt(searchParams.get("page")) || 1;
    const limit = parseInt(searchParams.get("limit")) || 10;

    const business = await prisma.business.findFirst({
      where: { userId },
    });

    if (!business) {
      return new NextResponse("Business not found", { status: 404 });
    }

    const competitors = await prisma.competitor.findMany({
      where: {
        businessId: business.id,
      },
      include: {
        adAnalyses: {
          orderBy: {
            createdAt: "desc",
          },
          take: 5,
        },
      },
      skip: (page - 1) * limit,
      take: limit,
    });

    const total = await prisma.competitor.count({
      where: {
        businessId: business.id,
      },
    });

    return NextResponse.json({
      competitors,
      pagination: {
        total,
        pages: Math.ceil(total / limit),
        currentPage: page,
      },
    });
  } catch (error) {
    console.error("Error fetching competitors:", error);
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

    const competitor = await prisma.competitor.create({
      data: {
        ...data,
        businessId: business.id,
      },
    });

    return NextResponse.json(competitor);
  } catch (error) {
    console.error("Error creating competitor:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
