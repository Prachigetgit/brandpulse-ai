import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs";
import { prisma } from "@/lib/db";

export async function POST(req) {
  try {
    const { userId } = auth();
    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    // Get the business for the current user
    const business = await prisma.business.findFirst({
      where: { userId },
      include: {
        competitors: {
          include: {
            adAnalyses: {
              take: 10,
              orderBy: {
                createdAt: "desc",
              },
            },
          },
        },
      },
    });

    if (!business) {
      return new NextResponse("Business not found", { status: 404 });
    }

    const { message } = await req.json();

    if (!message) {
      return new NextResponse("Message is required", { status: 400 });
    }

    // For now, we'll use a simple keyword-based response system
    // In a real implementation, this would use an AI model
    const response = generateAIResponse(message, business);

    return NextResponse.json({ response });
  } catch (error) {
    console.error("Error processing AI assistant request:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

/**
 * Generates a simulated AI response based on business data
 * @param {string} message - User message
 * @param {Object} business - Business data
 * @returns {string} - AI response
 */
function generateAIResponse(message, business) {
  // Parse keywords from business data
  const keywords = business.keywords ? JSON.parse(business.keywords) : [];
  const competitors = business.competitors || [];
  const adAnalyses = competitors.flatMap((comp) => comp.adAnalyses || []);

  // Simple keyword matching for demonstration
  const lowerMessage = message.toLowerCase();

  if (lowerMessage.includes("competitor")) {
    return `I found ${competitors.length} competitors for your business. Would you like to know more about any specific competitor?`;
  }

  if (lowerMessage.includes("ad") || lowerMessage.includes("campaign")) {
    return `I've analyzed ${adAnalyses.length} ads from your competitors. What specific aspects would you like to know about?`;
  }

  if (lowerMessage.includes("industry") || lowerMessage.includes("market")) {
    return `Your business operates in the ${business.industry} industry. Would you like to know about market trends or competitor strategies?`;
  }

  if (
    lowerMessage.includes("help") ||
    lowerMessage.includes("what can you do")
  ) {
    return `I can help you analyze competitor ads, track market trends, and provide insights about your industry. What would you like to know?`;
  }

  return "I'm here to help you analyze your competitors and market. You can ask me about competitor ads, market trends, or specific insights you're looking for.";
}
