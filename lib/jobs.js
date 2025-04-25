import { prisma } from "./db";
import { scrapeAds } from "./scraper";
import { analyzeAds } from "./analyzer";

// Job status types
export const JOB_STATUS = {
  PENDING: "PENDING",
  RUNNING: "RUNNING",
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
};

/**
 * Create a new job in the database
 */
export async function createJob(businessId, type, data = {}) {
  return await prisma.job.create({
    data: {
      businessId,
      type,
      status: JOB_STATUS.PENDING,
      data: JSON.stringify(data),
    },
  });
}

/**
 * Process a job based on its type
 */
export async function processJob(job) {
  try {
    // Update job status to running
    await prisma.job.update({
      where: { id: job.id },
      data: { status: JOB_STATUS.RUNNING },
    });

    // Process based on job type
    switch (job.type) {
      case "SCRAPE_ADS":
        await processScrapeAdsJob(job);
        break;
      case "ANALYZE_ADS":
        await processAnalyzeAdsJob(job);
        break;
      default:
        throw new Error(`Unknown job type: ${job.type}`);
    }

    // Update job status to completed
    await prisma.job.update({
      where: { id: job.id },
      data: {
        status: JOB_STATUS.COMPLETED,
        completedAt: new Date(),
      },
    });

    return true;
  } catch (error) {
    console.error(`Error processing job ${job.id}:`, error);

    // Update job status to failed
    await prisma.job.update({
      where: { id: job.id },
      data: {
        status: JOB_STATUS.FAILED,
        error: error.message,
        completedAt: new Date(),
      },
    });

    return false;
  }
}

/**
 * Process a scrape ads job
 */
async function processScrapeAdsJob(job) {
  const data = JSON.parse(job.data);
  const { competitorId, platform, keywords } = data;

  // Get competitor details
  const competitor = await prisma.competitor.findUnique({
    where: { id: competitorId },
  });

  if (!competitor) {
    throw new Error(`Competitor not found: ${competitorId}`);
  }

  // Scrape ads
  const ads = await scrapeAds(competitor.name, platform, keywords);

  // Save ads to database
  for (const ad of ads) {
    await prisma.ad.create({
      data: {
        competitorId,
        platform: ad.platform,
        content: ad.content,
        imageUrl: ad.imageUrl,
        videoUrl: ad.videoUrl,
        url: ad.url,
        metadata: ad.metadata,
      },
    });
  }

  return ads;
}

/**
 * Process an analyze ads job
 */
async function processAnalyzeAdsJob(job) {
  const data = JSON.parse(job.data);
  const { businessId, competitorIds } = data;

  // Get ads for the specified competitors
  const ads = await prisma.ad.findMany({
    where: {
      competitorId: {
        in: competitorIds,
      },
    },
    include: {
      competitor: true,
    },
  });

  // Analyze ads
  const analysis = await analyzeAds(ads);

  // Save analysis to database
  await prisma.analysis.create({
    data: {
      businessId,
      data: JSON.stringify(analysis),
    },
  });

  return analysis;
}

/**
 * Start the job processor
 */
export async function startJobProcessor() {
  console.log("Starting job processor...");

  // Process jobs every 30 seconds
  setInterval(async () => {
    try {
      // Get pending jobs
      const pendingJobs = await prisma.job.findMany({
        where: { status: JOB_STATUS.PENDING },
        orderBy: { createdAt: "asc" },
        take: 5, // Process up to 5 jobs at a time
      });

      // Process each job
      for (const job of pendingJobs) {
        await processJob(job);
      }
    } catch (error) {
      console.error("Error in job processor:", error);
    }
  }, 30000);
}
