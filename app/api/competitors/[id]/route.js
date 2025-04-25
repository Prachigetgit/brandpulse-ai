import { NextResponse } from "next/server";
import { getAuth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/db";
import { headers } from "next/headers";

export async function GET(req, { params }) {
  try {
    const headersList = await headers();
    const { userId } = await getAuth({ headers: headersList });

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const competitorId = params.id;
    const competitor = await prisma.competitor.findFirst({
      where: {
        id: competitorId,
        business: {
          userId: userId,
        },
      },
      include: {
        adAnalyses: {
          orderBy: {
            createdAt: "desc",
          },
        },
      },
    });

    if (!competitor) {
      return new NextResponse("Competitor not found", { status: 404 });
    }

    return NextResponse.json(competitor);
  } catch (error) {
    console.error("Error fetching competitor:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

export async function PUT(req, { params }) {
  try {
    const headersList = await headers();
    const { userId } = await getAuth({ headers: headersList });

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const competitorId = params.id;
    const data = await req.json();

    // Verify competitor ownership
    const existingCompetitor = await prisma.competitor.findFirst({
      where: {
        id: competitorId,
        business: {
          userId: userId,
        },
      },
    });

    if (!existingCompetitor) {
      return new NextResponse("Competitor not found", { status: 404 });
    }

    // Update competitor details
    const updatedCompetitor = await prisma.competitor.update({
      where: {
        id: competitorId,
      },
      data: {
        name: data.name,
        platform: data.platform,
        url: data.url,
      },
    });

    return NextResponse.json(updatedCompetitor);
  } catch (error) {
    console.error("Error updating competitor:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
