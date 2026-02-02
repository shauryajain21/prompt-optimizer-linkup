/**
 * PROMPT BUILDER
 *
 * This module provides functions to build dynamic system prompts
 * based on the user's query, including only relevant use cases.
 *
 * Usage:
 *   import { buildSystemPrompt } from '@/lib/prompts';
 *   const systemPrompt = buildSystemPrompt(userQuery);
 *
 * To revert to the legacy full prompt:
 *   import { LEGACY_SYSTEM_PROMPT } from '@/lib/prompts/legacy-system-prompt';
 */

import { BASE_PROMPT_INTRO, BASE_PROMPT_TASK } from "./base-prompt";
import { getRelevantUseCases, getMatchedUseCaseIds } from "./use-cases";

// Re-export for convenience
export { LEGACY_SYSTEM_PROMPT } from "./legacy-system-prompt";
export { getMatchedUseCaseIds } from "./use-cases";

/**
 * Build a dynamic system prompt based on the user's query
 *
 * @param query - The user's query
 * @param options - Configuration options
 * @returns The complete system prompt string
 */
export function buildSystemPrompt(
  query: string,
  options: {
    maxUseCases?: number;
    includeUseCases?: boolean;
  } = {}
): string {
  const { maxUseCases = 2, includeUseCases = true } = options;

  // Start with the base intro (always included)
  let prompt = BASE_PROMPT_INTRO;

  // Add relevant use cases if enabled
  if (includeUseCases && query) {
    const relevantUseCases = getRelevantUseCases(query, maxUseCases);

    if (relevantUseCases.length > 0) {
      prompt += "\n\n---\n\n## Relevant Use Case Examples\n\n";
      prompt += relevantUseCases.join("\n\n---\n\n");
    }
  }

  // Add the task instructions (always included)
  prompt += BASE_PROMPT_TASK;

  return prompt;
}

/**
 * Get statistics about the prompt
 * Useful for debugging and monitoring
 */
export function getPromptStats(query: string): {
  matchedUseCases: string[];
  basePromptLength: number;
  totalPromptLength: number;
  tokenEstimate: number;
} {
  const matchedUseCases = getMatchedUseCaseIds(query);
  const fullPrompt = buildSystemPrompt(query);
  const baseOnly = BASE_PROMPT_INTRO + BASE_PROMPT_TASK;

  return {
    matchedUseCases,
    basePromptLength: baseOnly.length,
    totalPromptLength: fullPrompt.length,
    // Rough estimate: ~4 chars per token
    tokenEstimate: Math.ceil(fullPrompt.length / 4),
  };
}
