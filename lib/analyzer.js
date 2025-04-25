import { Configuration, OpenAIApi } from "openai";
import { prisma } from "./db";

// Initialize OpenAI
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

/**
 * Analyze a collection of ads
 */
export async function analyzeAds(ads) {
  if (!ads || ads.length === 0) {
    throw new Error("No ads provided for analysis");
  }

  // Group ads by competitor
  const adsByCompetitor = ads.reduce((acc, ad) => {
    if (!acc[ad.competitor.name]) {
      acc[ad.competitor.name] = [];
    }
    acc[ad.competitor.name].push(ad);
    return acc;
  }, {});

  // Analyze each competitor's ads
  const competitorAnalyses = await Promise.all(
    Object.entries(adsByCompetitor).map(
      async ([competitorName, competitorAds]) => {
        return await analyzeCompetitorAds(competitorName, competitorAds);
      }
    )
  );

  // Generate overall analysis
  const overallAnalysis = await generateOverallAnalysis(competitorAnalyses);

  return {
    competitors: competitorAnalyses,
    overall: overallAnalysis,
    timestamp: new Date().toISOString(),
  };
}

/**
 * Analyze ads for a specific competitor
 */
async function analyzeCompetitorAds(competitorName, ads) {
  // Prepare ad content for analysis
  const adContents = ads.map((ad) => ({
    content: ad.content,
    platform: ad.platform,
    hasImage: !!ad.imageUrl,
    hasVideo: !!ad.videoUrl,
  }));

  // Generate analysis using OpenAI
  const prompt = generateCompetitorAnalysisPrompt(competitorName, adContents);
  const completion = await openai.createChatCompletion({
    model: "gpt-4",
    messages: [
      {
        role: "system",
        content:
          "You are an expert marketing analyst specializing in digital advertising. Analyze the provided ads and provide insights about messaging, targeting, and creative strategies.",
      },
      {
        role: "user",
        content: prompt,
      },
    ],
    temperature: 0.7,
    max_tokens: 1000,
  });

  const analysis = completion.data.choices[0].message.content;

  // Extract key metrics
  const metrics = {
    totalAds: ads.length,
    platforms: [...new Set(ads.map((ad) => ad.platform))],
    withImages: ads.filter((ad) => ad.imageUrl).length,
    withVideos: ads.filter((ad) => ad.videoUrl).length,
  };

  return {
    competitorName,
    metrics,
    analysis,
    ads: adContents,
  };
}

/**
 * Generate overall analysis comparing all competitors
 */
async function generateOverallAnalysis(competitorAnalyses) {
  const prompt = generateOverallAnalysisPrompt(competitorAnalyses);

  const completion = await openai.createChatCompletion({
    model: "gpt-4",
    messages: [
      {
        role: "system",
        content:
          "You are an expert marketing analyst specializing in competitive analysis. Compare the advertising strategies of different competitors and provide strategic insights.",
      },
      {
        role: "user",
        content: prompt,
      },
    ],
    temperature: 0.7,
    max_tokens: 1000,
  });

  return completion.data.choices[0].message.content;
}

/**
 * Generate prompt for competitor analysis
 */
function generateCompetitorAnalysisPrompt(competitorName, ads) {
  return `Analyze the advertising strategy for ${competitorName} based on the following ads:

${ads
  .map(
    (ad, index) => `
Ad ${index + 1}:
Platform: ${ad.platform}
Content: ${ad.content}
Media: ${ad.hasImage ? "Image" : ""}${ad.hasVideo ? "Video" : ""}
`
  )
  .join("\n")}

Please provide:
1. Key messaging themes and value propositions
2. Target audience insights
3. Creative strategy analysis
4. Platform-specific tactics
5. Strengths and weaknesses of their approach`;
}

/**
 * Generate prompt for overall analysis
 */
function generateOverallAnalysisPrompt(competitorAnalyses) {
  return `Compare the advertising strategies of the following competitors:

${competitorAnalyses
  .map(
    (analysis) => `
${analysis.competitorName}:
${analysis.analysis}
`
  )
  .join("\n")}

Please provide:
1. Competitive landscape overview
2. Common themes and patterns
3. Unique approaches by each competitor
4. Market positioning analysis
5. Strategic recommendations`;
}
