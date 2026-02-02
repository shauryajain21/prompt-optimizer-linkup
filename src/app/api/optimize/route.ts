import Anthropic from "@anthropic-ai/sdk";
import { NextRequest, NextResponse } from "next/server";
// import { buildSystemPrompt, getMatchedUseCaseIds } from "@/lib/prompts";

// Using legacy full prompt for testing
import { LEGACY_SYSTEM_PROMPT } from "@/lib/prompts/legacy-system-prompt";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export async function POST(request: NextRequest) {
  try {
    const { prompt, outputType, depthPreference, schema, conversation } = await request.json();

    if (!prompt || typeof prompt !== "string") {
      return NextResponse.json(
        { error: "Invalid prompt provided" },
        { status: 400 }
      );
    }

    const apiKey = process.env.ANTHROPIC_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { error: "API key not configured. Please add ANTHROPIC_API_KEY to your environment variables." },
        { status: 500 }
      );
    }

    const anthropic = new Anthropic({
      apiKey: apiKey,
    });

    // Using legacy full prompt for testing
    const systemPrompt = LEGACY_SYSTEM_PROMPT;

    // Build the user message with all context
    let userMessage = `## User's Original Query:\n${prompt}\n\n`;

    userMessage += `## User's Preferences:\n`;
    userMessage += `- Output Type: ${outputType || "searchResults"}\n`;
    userMessage += `- Depth Preference: ${depthPreference || "auto"}\n`;

    // Include schema if structuredOutput is selected
    if (outputType === "structuredOutput" && schema) {
      userMessage += `\n## Output Schema:\nThe user wants the output to follow this JSON schema:\n\`\`\`json\n${schema}\n\`\`\`\n`;
      userMessage += `Make sure the optimized prompt instructs the search to return data matching this schema structure.\n`;
    }

    userMessage += `\n`;

    // Include conversation history if present
    if (conversation && conversation.length > 0) {
      userMessage += `## Previous Conversation:\n`;
      (conversation as Message[]).forEach((msg: Message) => {
        userMessage += `${msg.role === "user" ? "User" : "Assistant"}: ${msg.content}\n`;
      });
      userMessage += `\n## Instructions:\nBased on the user's answers above, now generate the optimized prompt. Do NOT ask more questions.\n`;
    } else {
      userMessage += `## Instructions:\nAnalyze the query. If it's clear and specific enough, generate the optimized prompt directly. If you need clarification about the use case or target domain, ask 1-2 focused questions.\n`;
    }

    const message = await anthropic.messages.create({
      model: "claude-sonnet-4-20250514",
      max_tokens: 2048,
      messages: [
        {
          role: "user",
          content: userMessage,
        },
      ],
      system: systemPrompt,
    });

    // Extract text content from the response
    const textContent = message.content.find((block) => block.type === "text");
    if (!textContent || textContent.type !== "text") {
      throw new Error("No text content in response");
    }

    // Parse the JSON response
    let result;
    try {
      // Remove any potential markdown code block markers
      let jsonText = textContent.text.trim();
      if (jsonText.startsWith("```json")) {
        jsonText = jsonText.slice(7);
      }
      if (jsonText.startsWith("```")) {
        jsonText = jsonText.slice(3);
      }
      if (jsonText.endsWith("```")) {
        jsonText = jsonText.slice(0, -3);
      }
      result = JSON.parse(jsonText.trim());
    } catch {
      // If JSON parsing fails, return the raw text as the optimized prompt
      result = {
        optimizedPrompt: textContent.text,
        recommendedDepth: depthPreference === "auto" ? "standard" : depthPreference,
        explanation: "The prompt has been optimized for Linkup's search API.",
        suggestedParameters: {},
      };
    }

    // If depth preference was set by user, respect it unless it's "auto"
    if (depthPreference && depthPreference !== "auto" && result.recommendedDepth) {
      result.recommendedDepth = depthPreference;
    }

    return NextResponse.json(result);
  } catch (error) {
    console.error("Error optimizing prompt:", error);

    if (error instanceof Anthropic.APIError) {
      return NextResponse.json(
        { error: `API Error: ${error.message}` },
        { status: error.status || 500 }
      );
    }

    return NextResponse.json(
      { error: "Failed to optimize prompt. Please try again." },
      { status: 500 }
    );
  }
}
