import { PrismaClient } from "./generated/prisma";

// PrismaClient is attached to the `global` object in development to prevent
// exhausting your database connection limit.
const globalForPrisma = global;

export const prisma = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}

export async function createBusiness(data) {
  try {
    // Convert keywords array to JSON string
    const keywordsArray = data.keywords.split(",").map((k) => k.trim());
    const keywordsJson = JSON.stringify(keywordsArray);

    const business = await prisma.business.create({
      data: {
        userId: data.userId,
        name: data.businessName,
        industry: data.industry,
        location: data.location,
        keywords: keywordsJson,
      },
    });

    // If competitors are provided, create them
    if (data.competitors) {
      const competitorNames = data.competitors.split(",").map((c) => c.trim());
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

    return business;
  } catch (error) {
    console.error("Error creating business:", error);
    throw error;
  }
}

export async function getBusinessByUserId(userId) {
  try {
    const business = await prisma.business.findFirst({
      where: { userId },
      include: {
        competitors: true,
        adAnalyses: {
          include: {
            competitor: true,
          },
          orderBy: {
            createdAt: "desc",
          },
        },
      },
    });

    // Parse JSON strings back to arrays
    if (business) {
      business.keywords = JSON.parse(business.keywords);
      business.adAnalyses = business.adAnalyses.map((analysis) => {
        if (analysis.emotions) {
          analysis.emotions = JSON.parse(analysis.emotions);
        }
        return analysis;
      });
    }

    return business;
  } catch (error) {
    console.error("Error fetching business:", error);
    throw error;
  }
}
