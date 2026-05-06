"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

function SparklesIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3l1.912 5.813a2 2 0 0 0 1.275 1.275L21 12l-5.813 1.912a2 2 0 0 0-1.275 1.275L12 21l-1.912-5.813a2 2 0 0 0-1.275-1.275L3 12l5.813-1.912a2 2 0 0 0 1.275-1.275L12 3z"/>
    </svg>
  );
}

function CopyIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
    </svg>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20,6 9,17 4,12"/>
    </svg>
  );
}

function LoadingSpinner({ className }: { className?: string }) {
  return (
    <svg className={`animate-spin ${className}`} width="20" height="20" viewBox="0 0 24 24" fill="none">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
    </svg>
  );
}

function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6,9 12,15 18,9"/>
    </svg>
  );
}

function SendIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="22" y1="2" x2="11" y2="13"/>
      <polygon points="22,2 15,22 11,13 2,9"/>
    </svg>
  );
}

function BookOpenIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
    </svg>
  );
}

function SearchIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8"/>
      <line x1="21" y1="21" x2="16.65" y2="16.65"/>
    </svg>
  );
}

function SlidersIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="4" y1="21" x2="4" y2="14"/>
      <line x1="4" y1="10" x2="4" y2="3"/>
      <line x1="12" y1="21" x2="12" y2="12"/>
      <line x1="12" y1="8" x2="12" y2="3"/>
      <line x1="20" y1="21" x2="20" y2="16"/>
      <line x1="20" y1="12" x2="20" y2="3"/>
      <line x1="1" y1="14" x2="7" y2="14"/>
      <line x1="9" y1="8" x2="15" y2="8"/>
      <line x1="17" y1="16" x2="23" y2="16"/>
    </svg>
  );
}

type OutputType = "searchResults" | "sourcedAnswer" | "structuredOutput";
type DepthPreference = "auto" | "fast" | "standard" | "deep";

interface Message {
  role: "user" | "assistant";
  content: string;
}

interface OptimizedResult {
  optimizedPrompt: string;
  recommendedDepth: "fast" | "standard" | "deep";
  explanation: string;
  clarifyingQuestions?: string[];
  suggestedSchema?: object;
  suggestedParameters?: {
    fromDate?: string;
    toDate?: string;
    includeDomains?: string[];
    excludeDomains?: string[];
  };
}

export default function Home() {
  const [inputPrompt, setInputPrompt] = useState("");
  const [outputType, setOutputType] = useState<OutputType>("sourcedAnswer");
  const [depthPreference, setDepthPreference] = useState<DepthPreference>("auto");
  const [result, setResult] = useState<OptimizedResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [schemaCopied, setSchemaCopied] = useState(false);
  const [schemaExpanded, setSchemaExpanded] = useState(true);

  const [conversation, setConversation] = useState<Message[]>([]);
  const [clarifyingAnswer, setClarifyingAnswer] = useState("");
  const [schema, setSchema] = useState("");

  const [advancedOpen, setAdvancedOpen] = useState(false);
  const [needsClarification, setNeedsClarification] = useState(false);

  const handleOptimize = async () => {
    if (!inputPrompt.trim()) return;
    setIsLoading(true);
    setError(null);
    setResult(null);
    setConversation([]);
    setNeedsClarification(false);

    try {
      const response = await fetch("/api/optimize", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          prompt: inputPrompt,
          outputType,
          depthPreference,
          schema: outputType === "structuredOutput" ? schema : undefined,
          conversation: [],
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Failed to optimize prompt");
      }

      const data = await response.json();

      if (data.clarifyingQuestions && data.clarifyingQuestions.length > 0) {
        setConversation([{
          role: "assistant",
          content: data.clarifyingQuestions.join("\n\n")
        }]);
        setNeedsClarification(true);
      } else {
        setResult(data);
        setNeedsClarification(false);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  const handleClarificationSubmit = async () => {
    if (!clarifyingAnswer.trim()) return;

    setIsLoading(true);
    setError(null);

    const updatedConversation = [
      ...conversation,
      { role: "user" as const, content: clarifyingAnswer }
    ];
    setConversation(updatedConversation);
    setClarifyingAnswer("");

    try {
      const response = await fetch("/api/optimize", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          prompt: inputPrompt,
          outputType,
          depthPreference,
          schema: outputType === "structuredOutput" ? schema : undefined,
          conversation: updatedConversation,
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Failed to optimize prompt");
      }

      const data = await response.json();

      if (data.clarifyingQuestions && data.clarifyingQuestions.length > 0) {
        setConversation(prev => [...prev, {
          role: "assistant",
          content: data.clarifyingQuestions.join("\n\n")
        }]);
      } else {
        setResult(data);
        setNeedsClarification(false);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  const handleStartOver = () => {
    setInputPrompt("");
    setOutputType("sourcedAnswer");
    setDepthPreference("auto");
    setSchema("");
    setResult(null);
    setConversation([]);
    setClarifyingAnswer("");
    setError(null);
    setNeedsClarification(false);
    setAdvancedOpen(false);
  };

  const handleCopy = async () => {
    if (!result?.optimizedPrompt) return;
    try {
      await navigator.clipboard.writeText(result.optimizedPrompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      console.error("Failed to copy");
    }
  };

  const handleCopySchema = async () => {
    if (!result?.suggestedSchema) return;
    try {
      await navigator.clipboard.writeText(JSON.stringify(result.suggestedSchema, null, 2));
      setSchemaCopied(true);
      setTimeout(() => setSchemaCopied(false), 2000);
    } catch {
      console.error("Failed to copy schema");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) {
      e.preventDefault();
      handleOptimize();
    }
  };

  return (
    <div className="min-h-screen bg-linkup-bg">
      {/* Header */}
      <header className="pt-6 pb-4">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Image
                src="/linkup-logo.png"
                alt="Linkup"
                width={120}
                height={40}
                className="h-9 w-auto"
              />
            </div>
            <nav className="flex items-center gap-4">
              <a
                href="https://docs.linkup.so"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-linkup-text-muted hover:text-linkup-text transition-colors"
              >
                Docs
              </a>
              <a
                href="https://linkup.so"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium bg-[#5A5A5A] text-white px-4 py-2 rounded-full hover:bg-[#3F3F3F] transition-all"
              >
                Get Started Free
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="pb-24">
        <div className="max-w-3xl mx-auto px-6">
          {/* Hero */}
          <div className="text-center pt-12 pb-8">
            <h1 className="font-serif text-6xl md:text-7xl leading-[1.05] tracking-tight text-zinc-950 mb-6">
              Optimize your
              <br />
              prompts
            </h1>
            <p className="font-sans text-lg text-zinc-700 max-w-md mx-auto leading-relaxed">
              Transform natural language queries into optimized prompts for Linkup&apos;s agentic search API.
            </p>
          </div>

          {/* Pill Tabs */}
          <div className="flex items-center justify-center mb-6">
            <div className="inline-flex items-center gap-1 p-1 bg-white rounded-full border border-zinc-200 shadow-sm">
              <button
                className="flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium bg-linkup-gray text-white transition-all"
              >
                <SparklesIcon className="w-4 h-4" />
                <span>Optimizer</span>
              </button>
              <Link
                href="/use-cases"
                className="flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-all"
              >
                <BookOpenIcon className="w-4 h-4" />
                <span>Use Cases</span>
              </Link>
            </div>
          </div>

          {/* Search Box Card */}
          <div className="bg-white rounded-xl border border-zinc-200 shadow-sm overflow-hidden">
            {/* Top zone: textarea */}
            <div className="flex items-start gap-3 px-6 py-5">
              <SearchIcon className="w-5 h-5 text-zinc-400 mt-1 flex-shrink-0" />
              <textarea
                value={inputPrompt}
                onChange={(e) => setInputPrompt(e.target.value)}
                onKeyDown={handleKeyDown}
                autoFocus
                placeholder="What would you like to search for?"
                className="flex-1 min-h-[80px] bg-transparent text-lg text-zinc-900 placeholder-zinc-400 focus:outline-none resize-none leading-relaxed"
              />
            </div>

            {/* Bottom bar */}
            <div className="flex items-center justify-between px-5 py-3 border-t border-zinc-100">
              <button
                onClick={() => setAdvancedOpen(!advancedOpen)}
                className={`p-2 rounded-lg transition-colors ${
                  advancedOpen
                    ? "bg-zinc-100 text-zinc-900"
                    : "text-zinc-500 hover:bg-zinc-50 hover:text-zinc-700"
                }`}
                aria-label="Advanced options"
              >
                <SlidersIcon className="w-5 h-5" />
              </button>
              <button
                onClick={handleOptimize}
                disabled={isLoading || !inputPrompt.trim()}
                className="flex items-center gap-2 px-5 py-2 bg-linkup-green hover:bg-linkup-green-hover text-white text-sm font-medium rounded-full disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                {isLoading ? (
                  <LoadingSpinner className="w-4 h-4" />
                ) : (
                  <SparklesIcon className="w-4 h-4" />
                )}
                <span>{isLoading ? "Optimizing..." : "Optimize"}</span>
              </button>
            </div>

            {/* Advanced panel */}
            {advancedOpen && (
              <div className="border-t border-zinc-100 px-5 py-5 bg-zinc-50/50">
                <div className="mb-5">
                  <label className="block text-xs font-medium text-zinc-600 uppercase tracking-wide mb-2">Output Type</label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { value: "searchResults", label: "Search Results", desc: "Raw JSON" },
                      { value: "sourcedAnswer", label: "Sourced Answer", desc: "Natural language" },
                      { value: "structuredOutput", label: "Structured", desc: "Custom schema" },
                    ].map((option) => (
                      <button
                        key={option.value}
                        onClick={() => setOutputType(option.value as OutputType)}
                        className={`p-3 rounded-lg text-left transition-all ${
                          outputType === option.value
                            ? "bg-linkup-green/10 ring-1 ring-linkup-green/40"
                            : "bg-white border border-zinc-200 hover:bg-zinc-50"
                        }`}
                      >
                        <span className={`text-sm font-medium block ${
                          outputType === option.value ? "text-linkup-green-dark" : "text-zinc-800"
                        }`}>
                          {option.label}
                        </span>
                        <p className="text-xs text-zinc-500 mt-0.5">{option.desc}</p>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mb-1">
                  <label className="block text-xs font-medium text-zinc-600 uppercase tracking-wide mb-2">Search Depth</label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {[
                      { value: "auto", label: "Auto", desc: "AI decides" },
                      { value: "fast", label: "Fast", desc: "Quickest" },
                      { value: "standard", label: "Standard", desc: "Balanced" },
                      { value: "deep", label: "Deep", desc: "Thorough" },
                    ].map((option) => (
                      <button
                        key={option.value}
                        onClick={() => setDepthPreference(option.value as DepthPreference)}
                        className={`p-3 rounded-lg text-left transition-all ${
                          depthPreference === option.value
                            ? "bg-linkup-green/10 ring-1 ring-linkup-green/40"
                            : "bg-white border border-zinc-200 hover:bg-zinc-50"
                        }`}
                      >
                        <span className={`text-sm font-medium block ${
                          depthPreference === option.value ? "text-linkup-green-dark" : "text-zinc-800"
                        }`}>
                          {option.label}
                        </span>
                        <p className="text-xs text-zinc-500 mt-0.5">{option.desc}</p>
                      </button>
                    ))}
                  </div>
                </div>

                {outputType === "structuredOutput" && (
                  <div className="mt-5">
                    <div className="flex items-center gap-2 mb-2">
                      <label className="text-xs font-medium text-zinc-600 uppercase tracking-wide">Output Schema</label>
                      <span className="text-xs text-linkup-green-dark bg-linkup-green/10 px-2 py-0.5 rounded-full">Optional</span>
                    </div>
                    <p className="text-xs text-zinc-500 mb-2">Leave blank to auto-generate a schema based on your query.</p>
                    <textarea
                      value={schema}
                      onChange={(e) => setSchema(e.target.value)}
                      placeholder={`Example:
{
  "type": "object",
  "properties": {
    "company_name": { "type": "string" },
    "founded_year": { "type": "number" }
  }
}`}
                      className="w-full h-28 p-3 bg-white border border-zinc-200 rounded-lg text-xs font-mono text-zinc-800 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-linkup-green/20 resize-none transition-all"
                    />
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Helper text */}
          <p className="text-center text-xs text-zinc-400 mt-3">
            ⌘ + Enter to optimize
          </p>

          {/* Error */}
          {error && (
            <div className="mt-6 p-4 bg-red-50 border border-red-100 rounded-xl text-sm text-red-700">
              {error}
            </div>
          )}

          {/* Clarification card */}
          {needsClarification && !result && (
            <div className="mt-8 bg-white rounded-xl border border-zinc-200 shadow-sm p-5">
              <div className="space-y-3 mb-4">
                {conversation.map((msg, idx) => (
                  <div
                    key={idx}
                    className={`p-3 rounded-xl ${
                      msg.role === "assistant"
                        ? "bg-linkup-green/5 border border-linkup-green/20"
                        : "bg-zinc-50 ml-6"
                    }`}
                  >
                    {msg.role === "assistant" && (
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-5 h-5 bg-linkup-green rounded-md flex items-center justify-center">
                          <SparklesIcon className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-xs font-medium text-linkup-green-dark">Linkup</span>
                      </div>
                    )}
                    <p className="text-sm text-zinc-800 whitespace-pre-wrap leading-relaxed">
                      {msg.content}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex gap-2">
                <input
                  type="text"
                  value={clarifyingAnswer}
                  onChange={(e) => setClarifyingAnswer(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !isLoading) {
                      e.preventDefault();
                      handleClarificationSubmit();
                    }
                  }}
                  placeholder="Type your answer..."
                  className="flex-1 px-4 py-2.5 bg-zinc-50 border border-zinc-200 rounded-xl text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-linkup-green/20 focus:bg-white transition-all"
                />
                <button
                  onClick={handleClarificationSubmit}
                  disabled={isLoading || !clarifyingAnswer.trim()}
                  className="px-4 bg-linkup-green text-white rounded-xl hover:bg-linkup-green-hover disabled:opacity-40 transition-all"
                >
                  {isLoading ? <LoadingSpinner className="w-5 h-5" /> : <SendIcon className="w-5 h-5" />}
                </button>
              </div>
            </div>
          )}

          {/* Result */}
          {result && (
            <div className="mt-8 space-y-4">
              {/* Optimized prompt */}
              <div className="bg-white rounded-xl border border-zinc-200 shadow-sm p-5">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-medium text-zinc-500 uppercase tracking-wide">Optimized prompt</span>
                    <span className={`px-2 py-0.5 text-xs font-medium rounded-md ${
                      result.recommendedDepth === "deep"
                        ? "bg-amber-100 text-amber-700"
                        : "bg-linkup-green/10 text-linkup-green-dark"
                    }`}>
                      {result.recommendedDepth}
                    </span>
                    <span className="px-2 py-0.5 text-xs bg-zinc-100 text-zinc-600 rounded-md">
                      {outputType}
                    </span>
                  </div>
                  <button
                    onClick={handleCopy}
                    className="flex items-center gap-1.5 px-2 py-1 text-xs text-zinc-500 hover:text-linkup-green-dark rounded transition-colors"
                  >
                    {copied ? (
                      <>
                        <CheckIcon className="w-3.5 h-3.5 text-linkup-green-dark" />
                        <span className="text-linkup-green-dark">Copied</span>
                      </>
                    ) : (
                      <>
                        <CopyIcon className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="bg-[#1a1a1a] rounded-xl p-4 overflow-x-auto">
                  <pre className="text-sm text-gray-300 whitespace-pre-wrap font-mono leading-relaxed">
                    {result.optimizedPrompt}
                  </pre>
                </div>
              </div>

              {/* Schema */}
              {result.suggestedSchema && (
                <div className="bg-white rounded-xl border border-zinc-200 shadow-sm overflow-hidden">
                  <button
                    onClick={() => setSchemaExpanded(!schemaExpanded)}
                    className="w-full flex items-center justify-between p-5 hover:bg-zinc-50 transition-colors"
                  >
                    <p className="text-xs font-medium text-zinc-500 uppercase tracking-wide">
                      Generated Schema
                    </p>
                    <ChevronDownIcon className={`w-4 h-4 text-zinc-400 transition-transform duration-200 ${
                      schemaExpanded ? "rotate-180" : ""
                    }`} />
                  </button>
                  {schemaExpanded && (
                    <div className="px-5 pb-5">
                      <div className="flex items-center justify-between mb-2">
                        <p className="text-xs text-zinc-500">
                          Auto-generated based on your query
                        </p>
                        <button
                          onClick={handleCopySchema}
                          className="flex items-center gap-1.5 px-2 py-1 text-xs text-zinc-500 hover:text-linkup-green-dark rounded transition-colors"
                        >
                          {schemaCopied ? (
                            <>
                              <CheckIcon className="w-3.5 h-3.5 text-linkup-green-dark" />
                              <span className="text-linkup-green-dark">Copied</span>
                            </>
                          ) : (
                            <>
                              <CopyIcon className="w-3.5 h-3.5" />
                              <span>Copy</span>
                            </>
                          )}
                        </button>
                      </div>
                      <div className="bg-[#1a1a1a] rounded-xl p-4 overflow-x-auto">
                        <pre className="text-xs text-gray-300 whitespace-pre-wrap font-mono leading-relaxed">
                          {JSON.stringify(result.suggestedSchema, null, 2)}
                        </pre>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Explanation */}
              <div className="bg-white rounded-xl border border-zinc-200 shadow-sm p-5">
                <p className="text-xs font-medium text-zinc-500 uppercase tracking-wide mb-2">Why this optimization</p>
                <p className="text-sm text-zinc-800 leading-relaxed">
                  {result.explanation}
                </p>
              </div>

              {/* Suggested Parameters */}
              {result.suggestedParameters && (
                result.suggestedParameters.fromDate ||
                result.suggestedParameters.toDate ||
                (result.suggestedParameters.includeDomains && result.suggestedParameters.includeDomains.length > 0) ||
                (result.suggestedParameters.excludeDomains && result.suggestedParameters.excludeDomains.length > 0)
              ) && (
                <div className="bg-white rounded-xl border border-zinc-200 shadow-sm p-5">
                  <p className="text-xs font-medium text-zinc-500 uppercase tracking-wide mb-3">Suggested Parameters</p>
                  <div className="flex flex-wrap gap-2">
                    {result.suggestedParameters.fromDate && (
                      <code className="text-xs bg-zinc-50 px-2.5 py-1.5 rounded-lg text-linkup-green-dark border border-zinc-200">
                        fromDate: &quot;{result.suggestedParameters.fromDate}&quot;
                      </code>
                    )}
                    {result.suggestedParameters.toDate && (
                      <code className="text-xs bg-zinc-50 px-2.5 py-1.5 rounded-lg text-linkup-green-dark border border-zinc-200">
                        toDate: &quot;{result.suggestedParameters.toDate}&quot;
                      </code>
                    )}
                    {result.suggestedParameters.includeDomains && result.suggestedParameters.includeDomains.length > 0 && (
                      <code className="text-xs bg-zinc-50 px-2.5 py-1.5 rounded-lg text-linkup-green-dark border border-zinc-200">
                        includeDomains: [{result.suggestedParameters.includeDomains.map(d => `"${d}"`).join(", ")}]
                      </code>
                    )}
                    {result.suggestedParameters.excludeDomains && result.suggestedParameters.excludeDomains.length > 0 && (
                      <code className="text-xs bg-zinc-50 px-2.5 py-1.5 rounded-lg text-linkup-green-dark border border-zinc-200">
                        excludeDomains: [{result.suggestedParameters.excludeDomains.map(d => `"${d}"`).join(", ")}]
                      </code>
                    )}
                  </div>
                </div>
              )}

              <button
                onClick={handleStartOver}
                className="w-full py-2.5 text-sm text-zinc-600 hover:text-zinc-900 border border-zinc-200 rounded-xl hover:bg-white transition-all"
              >
                Start over
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
