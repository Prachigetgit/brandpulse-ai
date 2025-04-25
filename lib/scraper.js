import { prisma } from "./db";
import puppeteer from "puppeteer";

/**
 * Identifies potential competitors based on business information
 * @param {Object} business - Business information
 * @returns {Promise<Array>} - List of identified competitors
 */
export async function identifyCompetitors(business) {
  // In a real implementation, this would use APIs or web scraping
  // to find competitors based on industry, keywords, and location

  // For now, we'll simulate finding competitors
  const mockCompetitors = [
    { name: `${business.name} Competitor 1`, platform: "Facebook" },
    { name: `${business.name} Competitor 2`, platform: "Instagram" },
    { name: `${business.name} Competitor 3`, platform: "Google" },
  ];

  return mockCompetitors;
}

/**
 * Scrapes ad data from various platforms for a given competitor
 * @param {Object} competitor - Competitor information
 * @returns {Promise<Object>} - Scraping results
 */
export async function scrapeAds(competitor) {
  if (!competitor) {
    throw new Error("Competitor object is required");
  }

  if (!competitor.url) {
    throw new Error(
      `No URL provided for competitor: ${competitor.name || "unknown"}`
    );
  }

  try {
    // Validate URL
    const url = new URL(competitor.url);

    // Add default protocol if missing
    if (!url.protocol) {
      url.protocol = "https:";
    }

    // Fetch the page content
    const response = await fetch(url.toString(), {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
      },
    });

    if (!response.ok) {
      throw new Error(
        `Failed to fetch ${url.toString()}: ${response.status} ${
          response.statusText
        }`
      );
    }

    const html = await response.text();

    // Extract ad information
    const ads = extractAdsFromHtml(html, competitor);

    return {
      success: true,
      ads,
      competitor: {
        id: competitor.id,
        name: competitor.name,
        url: url.toString(),
      },
    };
  } catch (error) {
    console.error(`Error scraping ads for ${competitor.name}:`, error);
    return {
      success: false,
      error: error.message,
      competitor: {
        id: competitor.id,
        name: competitor.name,
        url: competitor.url,
      },
    };
  }
}

function extractAdsFromHtml(html, competitor) {
  // Basic ad extraction logic
  const ads = [];

  // Extract meta tags for basic information
  const titleMatch = html.match(/<title>(.*?)<\/title>/i);
  const descriptionMatch = html.match(
    /<meta[^>]*name="description"[^>]*content="([^"]*)"[^>]*>/i
  );

  if (titleMatch || descriptionMatch) {
    ads.push({
      title: titleMatch ? titleMatch[1] : "Untitled Ad",
      content: descriptionMatch ? descriptionMatch[1] : "",
      platform: "website",
      adType: "display",
      url: competitor.url,
      score: 5, // Default score
      emotions: ["neutral"],
      targetDemographic: "general",
      designStyle: "standard",
    });
  }

  return ads;
}

/**
 * Scrape Facebook ads
 */
async function scrapeFacebookAds(page) {
  return await page.evaluate(() => {
    const ads = [];
    // Select ad containers
    const adElements = document.querySelectorAll('[data-ad-preview="message"]');

    adElements.forEach((element) => {
      const content = element.textContent.trim();
      const imageElement = element.querySelector("img");
      const videoElement = element.querySelector("video");

      ads.push({
        content,
        imageUrl: imageElement ? imageElement.src : null,
        videoUrl: videoElement ? videoElement.src : null,
      });
    });

    return ads;
  });
}

/**
 * Scrape Instagram ads
 */
async function scrapeInstagramAds(page) {
  return await page.evaluate(() => {
    const ads = [];
    // Select sponsored posts
    const adElements = document.querySelectorAll(
      'article[role="presentation"]'
    );

    adElements.forEach((element) => {
      const content =
        element.querySelector('div[class*="caption"]')?.textContent.trim() ||
        "";
      const imageElement = element.querySelector("img");
      const videoElement = element.querySelector("video");

      ads.push({
        content,
        imageUrl: imageElement ? imageElement.src : null,
        videoUrl: videoElement ? videoElement.src : null,
      });
    });

    return ads;
  });
}

/**
 * Scrape Google ads
 */
async function scrapeGoogleAds(page) {
  return await page.evaluate(() => {
    const ads = [];
    // Select Google ad containers
    const adElements = document.querySelectorAll('div[aria-label*="Ad"]');

    adElements.forEach((element) => {
      const content = element.textContent.trim();
      const imageElement = element.querySelector("img");

      ads.push({
        content,
        imageUrl: imageElement ? imageElement.src : null,
        videoUrl: null, // Google ads typically don't have videos
      });
    });

    return ads;
  });
}

/**
 * Generic ad scraper for unsupported platforms
 */
async function scrapeGenericAds(page) {
  return await page.evaluate(() => {
    const ads = [];
    // Look for common ad indicators
    const adElements = document.querySelectorAll(
      'div[class*="ad"], div[class*="sponsored"], div[id*="ad"], div[id*="sponsored"]'
    );

    adElements.forEach((element) => {
      const content = element.textContent.trim();
      const imageElement = element.querySelector("img");
      const videoElement = element.querySelector("video");

      ads.push({
        content,
        imageUrl: imageElement ? imageElement.src : null,
        videoUrl: videoElement ? videoElement.src : null,
      });
    });

    return ads;
  });
}

/**
 * Analyzes media content using AI
 * @param {Object} adData - Ad data including media URL
 * @returns {Promise<Object>} - Enhanced ad data with AI analysis
 */
export async function analyzeMedia(adData) {
  // In a real implementation, this would use AI services like
  // Google Cloud Vision, Azure Computer Vision, or similar

  // For now, we'll simulate AI analysis
  const mockAnalysis = {
    ...adData,
    emotions: JSON.stringify(["excitement", "trust", "curiosity"]),
    targetDemographic: "Young professionals, 25-35",
    designStyle: "Modern minimalist with vibrant accents",
  };

  return mockAnalysis;
}

/**
 * Processes a business and its competitors to gather ad data
 * @param {String} businessId - ID of the business
 * @returns {Promise<Object>} - Processing results
 */
export async function processBusinessCompetitors(businessId) {
  try {
    // Get business and existing competitors
    const business = await prisma.business.findUnique({
      where: { id: businessId },
      include: { competitors: true },
    });

    if (!business) {
      throw new Error("Business not found");
    }

    // Identify additional competitors if needed
    let competitors = business.competitors;
    if (competitors.length < 3) {
      const newCompetitors = await identifyCompetitors(business);

      // Add new competitors to the database
      for (const comp of newCompetitors) {
        const existing = competitors.find((c) => c.name === comp.name);
        if (!existing) {
          const newCompetitor = await prisma.competitor.create({
            data: {
              businessId,
              name: comp.name,
              platform: comp.platform,
            },
          });
          competitors.push(newCompetitor);
        }
      }
    }

    // Scrape and analyze ads for each competitor
    const results = {
      businessId,
      competitorsProcessed: competitors.length,
      adsAnalyzed: 0,
    };

    for (const competitor of competitors) {
      const scrapeResult = await scrapeAds(competitor);

      if (!scrapeResult.success) {
        console.error(
          `Error scraping ads for ${competitor.name}:`,
          scrapeResult.error
        );
        continue;
      }

      const ads = scrapeResult.ads;

      // Analyze each ad with AI
      for (const ad of ads) {
        const analyzedAd = await analyzeMedia(ad);

        // Save the analyzed ad to the database
        await prisma.adAnalysis.create({
          data: {
            businessId,
            competitorId: competitor.id,
            ...analyzedAd,
          },
        });

        results.adsAnalyzed++;
      }
    }

    return results;
  } catch (error) {
    console.error("Error processing competitors:", error);
    throw error;
  }
}
