# Linkup Prompt Optimizer

A web app that transforms natural language queries into optimized prompts for [Linkup's agentic search API](https://linkup.so). Powered by Claude Sonnet 4.

## What It Does

1. **Enter a query** — describe what you're searching for in plain language
2. **Configure output** — choose output type (search results, sourced answer, or structured JSON) and search depth
3. **Answer clarifying questions** — the optimizer may ask 1-2 questions to sharpen intent
4. **Get an optimized prompt** — receive a tailored prompt with recommended depth, suggested parameters, and auto-generated schemas

The optimizer encodes Linkup's best practices — query specificity, sequential search patterns, domain filtering, date scoping, and role-based prompting — so you don't have to memorize them.

## Use Cases

The app includes 9 detailed guides at `/use-cases`, each with copy-paste prompts, JSON schemas, and Python code examples:

- CRM Enrichment
- News Search
- Supplier Research
- Legal Agents
- Product Enrichment
- Coding Agents
- People Lists
- Personalized Onboarding
- Company Research

## Tech Stack

- **Next.js 15** (App Router, TypeScript)
- **React 19** + **Tailwind CSS 3.4**
- **Anthropic SDK** (Claude Sonnet 4)
- **Space Grotesk** font

## Getting Started

### Prerequisites

- Node.js 18+
- Anthropic API key

### Setup

```bash
git clone https://github.com/shauryajain21/prompt-optimizer-linkup.git
cd prompt-optimizer-linkup
npm install
```

Create `.env.local`:

```
ANTHROPIC_API_KEY=your-api-key
```

Run the dev server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## API

### `POST /api/optimize`

**Request:**

```json
{
  "prompt": "Find top 10 AI startups founded in 2024",
  "outputType": "sourcedAnswer",
  "depthPreference": "auto",
  "schema": null,
  "conversation": []
}
```

**Response:**

```json
{
  "optimizedPrompt": "...",
  "recommendedDepth": "standard",
  "explanation": "...",
  "suggestedParameters": {
    "fromDate": "2024-01-01",
    "toDate": "2024-12-31"
  }
}
```

Output types: `searchResults`, `sourcedAnswer`, `structuredOutput`

Search depths: `auto`, `standard` ($0.005/call), `deep` ($0.05/call, up to 10 iterations)

## Batch Testing

```bash
# Requires dev server running
node scripts/run-optimizer-batch.js
```

Tests 11 sample prompts across depth settings and outputs results to `output/optimized_prompts.csv`.
