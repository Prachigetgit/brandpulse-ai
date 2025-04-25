import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs";
import { prisma } from "@/lib/db";
import { headers } from "next/headers";

export async function GET(req, { params }) {
  try {
    const { userId } = auth();

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const businessId = params.id;
    const business = await prisma.business.findFirst({
      where: {
        id: businessId,
        userId: userId,
      },
      include: {
        competitors: true,
      },
    });

    if (!business) {
      return new NextResponse("Business not found", { status: 404 });
    }

    return NextResponse.json(business);
  } catch (error) {
    console.error("Error fetching business:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

export async function PUT(req, { params }) {
  try {
    const { userId } = auth();

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const businessId = params.id;
    const data = await req.json();

    // Verify business ownership
    const existingBusiness = await prisma.business.findFirst({
      where: {
        id: businessId,
        userId: userId,
      },
    });

    if (!existingBusiness) {
      return new NextResponse("Business not found", { status: 404 });
    }

    // Update business details
    const updatedBusiness = await prisma.business.update({
      where: {
        id: businessId,
      },
      data: {
        name: data.name,
        industry: data.industry,
        location: data.location,
        keywords: data.keywords,
      },
    });

    // Handle competitors update if provided
    if (data.competitors) {
      const competitorNames = data.competitors
        .split(",")
        .map((name) => name.trim())
        .filter(Boolean);

      // Delete existing competitors
      await prisma.competitor.deleteMany({
        where: {
          businessId: businessId,
        },
      });

      // Create new competitors
      await Promise.all(
        competitorNames.map((name) =>
          prisma.competitor.create({
            data: {
              name,
              platform: "Unknown",
              businessId: businessId,
            },
          })
        )
      );
    }

    return NextResponse.json(updatedBusiness);
  } catch (error) {
    console.error("Error updating business:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
