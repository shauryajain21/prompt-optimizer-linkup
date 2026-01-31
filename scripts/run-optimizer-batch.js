const fs = require('fs');
const path = require('path');

const PROMPTS = [
  "Find more details about shaurya jain working at linkup",
  "What are some legal guidelines I should be aware of about starting a steel moding comany in paris",
  "Can you tell me the latest news evets around BTC",
  "What should be the ideal price of steel coil I want to buy in london",
  "Can you help me enrish this list of people which their background",
  `You are an expert business analyst. Your role is to find the official website of a company.The official name of the company is {company_name}.Run several searches to find the most likely website of the company.This company's industry NAAC code is: {code}Return the website domain, and nothing else.`,
  "What are the current evnets happening in New York.",
  "What are some AI conenten ideas currently treding on social media",
  "Find the right documentation for clawdbot and how to install it",
  "Montior the repuation of the company - antrhopic",
  "how much money has exa raised so far"
];

const API_URL = 'http://localhost:3000/api/optimize';

async function optimizePrompt(prompt, depthPreference) {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      prompt,
      outputType: 'sourcedAnswer',
      depthPreference,
      // Pass conversation to force direct optimization without clarifying questions
      conversation: [
        { role: 'user', content: 'Please optimize this prompt directly without asking any clarifying questions. Generate the optimized prompt now.' }
      ]
    }),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`API error (${response.status}): ${error}`);
  }

  return response.json();
}

function escapeCSV(value) {
  if (value === null || value === undefined) return '';
  const str = String(value);
  // If contains comma, newline, or quote, wrap in quotes and escape internal quotes
  if (str.includes(',') || str.includes('\n') || str.includes('"')) {
    return `"${str.replace(/"/g, '""')}"`;
  }
  return str;
}

async function main() {
  console.log('Starting batch optimization...\n');

  const results = [];

  for (let i = 0; i < PROMPTS.length; i++) {
    const prompt = PROMPTS[i];
    console.log(`Processing prompt ${i + 1}/${PROMPTS.length}: "${prompt.substring(0, 50)}..."`);

    try {
      // Run with standard depth
      console.log('  - Running with standard depth...');
      const standardResult = await optimizePrompt(prompt, 'standard');

      // Run with deep depth
      console.log('  - Running with deep depth...');
      const deepResult = await optimizePrompt(prompt, 'deep');

      results.push({
        original_prompt: prompt,
        optimized_prompt_standard: standardResult.optimizedPrompt || '',
        optimized_prompt_deep: deepResult.optimizedPrompt || '',
        rationale_standard: standardResult.explanation || '',
        rationale_deep: deepResult.explanation || '',
        suggested_params_standard: JSON.stringify(standardResult.suggestedParameters || {}),
        suggested_params_deep: JSON.stringify(deepResult.suggestedParameters || {}),
      });

      console.log('  - Done!\n');

      // Small delay to avoid rate limiting
      await new Promise(resolve => setTimeout(resolve, 500));

    } catch (error) {
      console.error(`  - Error processing prompt: ${error.message}`);
      results.push({
        original_prompt: prompt,
        optimized_prompt_standard: `ERROR: ${error.message}`,
        optimized_prompt_deep: `ERROR: ${error.message}`,
        rationale_standard: '',
        rationale_deep: '',
        suggested_params_standard: '{}',
        suggested_params_deep: '{}',
      });
    }
  }

  // Generate CSV
  const headers = [
    'original_prompt',
    'optimized_prompt_standard',
    'optimized_prompt_deep',
    'rationale_standard',
    'rationale_deep',
    'suggested_params_standard',
    'suggested_params_deep'
  ];

  const csvLines = [headers.join(',')];

  for (const row of results) {
    const values = headers.map(h => escapeCSV(row[h]));
    csvLines.push(values.join(','));
  }

  const csvContent = csvLines.join('\n');
  const outputPath = path.join(__dirname, '..', 'output', 'optimized_prompts.csv');

  fs.writeFileSync(outputPath, csvContent, 'utf8');

  console.log(`\nCSV saved to: ${outputPath}`);
  console.log(`Total prompts processed: ${results.length}`);
}

main().catch(console.error);
