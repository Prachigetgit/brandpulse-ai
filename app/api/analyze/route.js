import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs";
import { processBusinessCompetitors } from "@/lib/scraper";
import { prisma } from "@/lib/db";

export async function POST(req) {
  try {
    const { userId } = auth();
    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const data = await req.json();
    const { businessName, ...rest } = data;

    if (!businessName) {
      return new NextResponse("Business name is required", { status: 400 });
    }

    const keywords =
      typeof rest.keywords === "string"
        ? rest.keywords
        : JSON.stringify(rest.keywords || []);

    console.log("Creating business with:", {
      ...rest,
      businessName,
      keywords,
      userId,
    });

    const business = await prisma.business.create({
      data: {
        ...rest,
        name: businessName,
        keywords,
        userId,
      },
    });

    return NextResponse.json(business);
  } catch (error) {
    console.error("Error creating business:", error);
    return new NextResponse(JSON.stringify({ message: error.message }), {
      status: 500,
    });
  }
}
