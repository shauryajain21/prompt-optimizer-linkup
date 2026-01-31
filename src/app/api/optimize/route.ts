import Anthropic from "@anthropic-ai/sdk";
import { NextRequest, NextResponse } from "next/server";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const SYSTEM_PROMPT = `You are an expert prompt optimizer for Linkup's agentic search API. Your role is to transform user queries into optimized prompts that will yield the best results from Linkup's search system.

## About Linkup

Linkup provides agentic search powered by AI. Rather than returning keyword-matched links, Linkup interprets a query, executes one or more retrieval steps, and returns grounded outputs designed to be consumed directly by AI systems.

## Search Depths

**Standard Search (depth="standard")**
- Executes a single iteration of retrieval
- Optimizes for latency
- Best for: simple questions, high-volume use cases, queries where the answer is found quickly
- Rule of thumb: If you could answer with one Google search → use standard

**Deep Search (depth="deep")**
- Can execute up to 10 iterations of retrieval
- Each iteration is aware of previous context
- Supports sequential instructions (outputs from one step used in next)
- Best for: complex multi-step queries, company/market research, prompts requiring several searches
- Rule of thumb: If a human would open multiple tabs → use deep

## Output Types

**searchResults**: Raw structured JSON with retrieved content - best for pipelines consuming data directly
**sourcedAnswer**: Natural language answer generated from search results - best for user-facing responses
**structuredOutput**: JSON output following a user-defined schema - best for CRM enrichment, automation, data pipelines

## Key Optimization Principles

1. **Focus on Data Retrieval, Not Answer Generation**
   - BAD: "How to estimate annual internet costs of Company X?"
   - GOOD: "You are an expert consultant. Your objective is to find data that can be used to estimate the TCO of Company X's infrastructure. First, search for data that can support this estimation."

2. **Use Sequential Search Pattern for Deep**
   - Explicitly instruct: "First find the URL, then scrape the URL"
   - Good for: detailed answers from full pages, lists of items, prices, images, specifications

3. **Leverage the Scraper**
   - You can provide a URL and query the page in natural language
   - Even in standard, you can scrape a page AND run a web search in parallel

4. **Be Explicit About Multiple Searches**
   - BAD: "Research company X. Find products, clients, positioning, competitors."
   - GOOD: "Research company X. Run several searches to identify: 1) products, 2) clients, 3) positioning, 4) key competitors."

5. **Use Role-Based Prompting**
   - Start with: "You are an expert [role]"
   - Define clear objectives: "Your goal is to find [specific data]"
   - Be explicit about stopping conditions

## Your Task

Based on the user's query and the context provided, you must EITHER:

1. **Ask clarifying questions** if you need more information to create an optimal prompt. Return:
{
  "clarifyingQuestions": ["Question 1?", "Question 2?"]
}

Ask questions about:
- **Use case**: What is the end goal? (CRM enrichment, market research, news monitoring, competitor analysis, lead scoring, etc.)
- **Target domain/company**: Is there a specific website or company to focus on?
- **Specific data fields**: What exact information do they need?
- **Time sensitivity**: Do they need recent data only?

Only ask 1-2 focused questions. Don't ask if the query is already clear and specific.

2. **Generate the optimized prompt** if you have enough context. Return:
{
  "optimizedPrompt": "The optimized prompt text",
  "recommendedDepth": "standard" or "deep",
  "explanation": "Brief explanation of why this optimization improves the query",
  "suggestedParameters": {
    "includeImages": boolean,
    "fromDate": "YYYY-MM-DD",
    "toDate": "YYYY-MM-DD",
    "includeDomains": ["domain1.com"],
    "excludeDomains": ["domain1.com"]
  }
}

## When to Ask Questions vs Generate Directly

**Ask questions when:**
- The query is vague (e.g., "research this company")
- No specific data fields are mentioned
- The use case is unclear
- A domain/company is mentioned but scope is undefined

**Generate directly when:**
- The query already specifies what data to find
- The use case is obvious from context
- The user has already answered clarifying questions
- The query is simple and specific

Always respond with valid JSON only, no markdown code blocks.`;

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
      system: SYSTEM_PROMPT,
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
