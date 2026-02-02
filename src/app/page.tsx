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

type OutputType = "searchResults" | "sourcedAnswer" | "structuredOutput";
type DepthPreference = "auto" | "standard" | "deep";

interface Message {
  role: "user" | "assistant";
  content: string;
}

interface OptimizedResult {
  optimizedPrompt: string;
  recommendedDepth: "standard" | "deep";
  explanation: string;
  clarifyingQuestions?: string[];
  suggestedSchema?: object;
  suggestedParameters?: {
    includeImages?: boolean;
    fromDate?: string;
    toDate?: string;
    includeDomains?: string[];
    excludeDomains?: string[];
  };
}

type SectionId = "prompt" | "parameters" | "clarification" | "result";

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

  const [expandedSections, setExpandedSections] = useState<Set<SectionId>>(new Set(["prompt"]));
  const [completedSections, setCompletedSections] = useState<Set<SectionId>>(new Set());
  const [needsClarification, setNeedsClarification] = useState(false);

  const toggleSection = (section: SectionId) => {
    setExpandedSections(prev => {
      const next = new Set(prev);
      if (next.has(section)) {
        next.delete(section);
      } else {
        next.add(section);
      }
      return next;
    });
  };

  const handlePromptComplete = () => {
    if (!inputPrompt.trim()) return;
    setCompletedSections(prev => new Set(prev).add("prompt"));
    setExpandedSections(prev => {
      const next = new Set(prev);
      next.delete("prompt");
      next.add("parameters");
      return next;
    });
  };

  const handleOptimize = async () => {
    setIsLoading(true);
    setError(null);

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
        setCompletedSections(prev => new Set(prev).add("parameters"));
        setExpandedSections(prev => {
          const next = new Set(prev);
          next.delete("parameters");
          next.add("clarification");
          return next;
        });
      } else {
        setResult(data);
        setNeedsClarification(false);
        setCompletedSections(prev => {
          const next = new Set(prev);
          next.add("parameters");
          next.add("clarification");
          return next;
        });
        setExpandedSections(prev => {
          const next = new Set(prev);
          next.delete("parameters");
          next.add("result");
          return next;
        });
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
        setCompletedSections(prev => new Set(prev).add("clarification"));
        setExpandedSections(prev => {
          const next = new Set(prev);
          next.delete("clarification");
          next.add("result");
          return next;
        });
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
    setCompletedSections(new Set());
    setExpandedSections(new Set(["prompt"]));
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
      handlePromptComplete();
    }
  };

  const SectionHeader = ({
    id,
    number,
    title,
    summary,
    isCompleted,
    isExpanded,
    disabled = false
  }: {
    id: SectionId;
    number: number;
    title: string;
    summary?: string;
    isCompleted: boolean;
    isExpanded: boolean;
    disabled?: boolean;
  }) => (
    <button
      onClick={() => !disabled && toggleSection(id)}
      disabled={disabled}
      className={`w-full flex items-center gap-4 p-4 transition-all duration-200 ${
        disabled
          ? "opacity-50 cursor-not-allowed"
          : "hover:bg-linkup-cream/30 cursor-pointer"
      }`}
    >
      <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold transition-all duration-200 ${
        isCompleted
          ? "bg-linkup-green text-white"
          : isExpanded
            ? "bg-linkup-green/15 text-linkup-green"
            : "bg-linkup-cream text-linkup-text-muted"
      }`}>
        {isCompleted ? <CheckIcon className="w-3.5 h-3.5" /> : number}
      </div>
      <div className="flex-1 text-left">
        <p className={`text-base font-semibold transition-colors duration-200 ${
          isExpanded ? "text-linkup-text" : "text-linkup-text-muted"
        }`}>
          {title}
        </p>
        {summary && !isExpanded && (
          <p className="text-xs text-linkup-text-light truncate mt-0.5">
            {summary}
          </p>
        )}
      </div>
      <ChevronDownIcon className={`w-4 h-4 text-linkup-text-light transition-transform duration-200 ${
        isExpanded ? "rotate-180" : ""
      }`} />
    </button>
  );

  return (
    <div className="min-h-screen bg-[#E8E6E1]">
      <div>
      {/* Minimal Header */}
      <header className="pt-6 pb-4">
        <div className="max-w-4xl mx-auto px-6">
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
                className="text-sm font-medium bg-[#1a1a1a] text-white px-4 py-2 rounded-full hover:bg-[#2a2a2a] transition-all"
              >
                Get Started Free
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Tool Toggle */}
      <div className="sticky top-0 z-10 pt-2 pb-6">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center justify-center">
            <div className="inline-flex items-center gap-1 p-1 bg-white/80 rounded-full shadow-sm border border-linkup-border/40">
              <button
                className="flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium transition-all bg-linkup-green text-white shadow-sm"
              >
                <SparklesIcon className="w-4 h-4" />
                <span>Optimizer</span>
              </button>
              <Link
                href="/use-cases"
                className="flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium transition-all text-linkup-text-muted hover:text-linkup-text hover:bg-linkup-cream/50"
              >
                <BookOpenIcon className="w-4 h-4" />
                <span>Use Cases</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="pb-20">
        <div className="max-w-3xl mx-auto px-6">
          {/* Title Section */}
          <div className="text-center mb-10">
            <h1 className="text-2xl font-semibold text-linkup-text mb-2">
              Prompt Optimizer
            </h1>
            <p className="text-linkup-text-muted">
              Transform your queries into optimized prompts for Linkup&apos;s search API
            </p>
          </div>

          {/* Optimizer Card */}
          <div className="bg-white rounded-2xl shadow-sm border border-linkup-border/50 overflow-hidden">
            {/* Section 1: Prompt Input */}
            <div className="border-b border-linkup-border/50">
              <SectionHeader
                id="prompt"
                number={1}
                title="Enter your query"
                summary={inputPrompt || undefined}
                isCompleted={completedSections.has("prompt")}
                isExpanded={expandedSections.has("prompt")}
              />

              {expandedSections.has("prompt") && (
                <div className="px-5 pb-5">
                  <textarea
                    value={inputPrompt}
                    onChange={(e) => setInputPrompt(e.target.value)}
                    onKeyDown={handleKeyDown}
                    autoFocus
                    placeholder="What would you like to search for?

Examples:
• Find the top 10 AI startups founded in 2024
• Research competitor pricing for CRM software
• Get the latest news about renewable energy"
                    className="w-full h-32 p-4 bg-linkup-cream/30 rounded-xl text-sm text-linkup-text placeholder-linkup-text-light focus:outline-none focus:ring-2 focus:ring-linkup-green/20 focus:bg-white resize-none transition-all"
                  />
                  <div className="mt-3 flex justify-between items-center">
                    <span className="text-xs text-linkup-text-light">⌘ + Enter to continue</span>
                    <button
                      onClick={handlePromptComplete}
                      disabled={!inputPrompt.trim()}
                      className="px-4 py-2 bg-linkup-green text-white text-sm rounded-lg font-medium hover:bg-linkup-green-hover disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                    >
                      Continue
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Section 2: Parameters */}
            <div className="border-b border-linkup-border/50">
              <SectionHeader
                id="parameters"
                number={2}
                title="Configure output"
                summary={completedSections.has("parameters") ? `${outputType} • ${depthPreference}` : undefined}
                isCompleted={completedSections.has("parameters")}
                isExpanded={expandedSections.has("parameters")}
                disabled={!completedSections.has("prompt") && !expandedSections.has("parameters")}
              />

              {expandedSections.has("parameters") && (
                <div className="px-5 pb-5">
                  <div className="mb-5">
                    <label className="block text-xs font-medium text-linkup-text-muted uppercase tracking-wide mb-2">Output Type</label>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { value: "searchResults", label: "Search Results", desc: "Raw JSON" },
                        { value: "sourcedAnswer", label: "Sourced Answer", desc: "Natural language" },
                        { value: "structuredOutput", label: "Structured", desc: "Custom schema" },
                      ].map((option) => (
                        <button
                          key={option.value}
                          onClick={() => setOutputType(option.value as OutputType)}
                          className={`p-3 rounded-xl text-left transition-all ${
                            outputType === option.value
                              ? "bg-linkup-green/10 ring-1 ring-linkup-green/30"
                              : "bg-linkup-cream/30 hover:bg-linkup-cream/50"
                          }`}
                        >
                          <span className={`text-sm font-medium block ${
                            outputType === option.value ? "text-linkup-green" : "text-linkup-text"
                          }`}>
                            {option.label}
                          </span>
                          <p className="text-xs text-linkup-text-muted mt-0.5">{option.desc}</p>
                        </button>
                      ))}
                    </div>
                  </div>

                  {outputType === "structuredOutput" && (
                    <div className="mb-5">
                      <div className="flex items-center gap-2 mb-2">
                        <label className="text-xs font-medium text-linkup-text-muted uppercase tracking-wide">Output Schema</label>
                        <span className="text-xs text-linkup-green bg-linkup-green/10 px-2 py-0.5 rounded-full">Optional</span>
                      </div>
                      <div className="flex items-center gap-2 p-2 bg-blue-50 rounded-lg mb-2">
                        <svg className="w-4 h-4 text-blue-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <p className="text-xs text-blue-700">
                          Leave blank to auto-generate a schema based on your query
                        </p>
                      </div>
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
                        className="w-full h-28 p-3 bg-linkup-cream/30 rounded-xl text-xs font-mono text-linkup-text placeholder-linkup-text-light/60 focus:outline-none focus:ring-2 focus:ring-linkup-green/20 focus:bg-white resize-none transition-all"
                      />
                    </div>
                  )}

                  <div className="mb-5">
                    <label className="block text-xs font-medium text-linkup-text-muted uppercase tracking-wide mb-2">Search Depth</label>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { value: "auto", label: "Auto", desc: "AI decides" },
                        { value: "standard", label: "Standard", desc: "Fast" },
                        { value: "deep", label: "Deep", desc: "Thorough" },
                      ].map((option) => (
                        <button
                          key={option.value}
                          onClick={() => setDepthPreference(option.value as DepthPreference)}
                          className={`p-3 rounded-xl text-left transition-all ${
                            depthPreference === option.value
                              ? "bg-linkup-green/10 ring-1 ring-linkup-green/30"
                              : "bg-linkup-cream/30 hover:bg-linkup-cream/50"
                          }`}
                        >
                          <span className={`text-sm font-medium block ${
                            depthPreference === option.value ? "text-linkup-green" : "text-linkup-text"
                          }`}>
                            {option.label}
                          </span>
                          <p className="text-xs text-linkup-text-muted mt-0.5">{option.desc}</p>
                        </button>
                      ))}
                    </div>
                  </div>

                  {error && (
                    <div className="mb-4 p-3 bg-red-50 rounded-xl text-sm text-red-600">{error}</div>
                  )}

                  <button
                    onClick={handleOptimize}
                    disabled={isLoading}
                    className="w-full flex items-center justify-center gap-2 py-3 bg-linkup-green text-white rounded-xl font-medium hover:bg-linkup-green-hover disabled:opacity-60 transition-all"
                  >
                    {isLoading ? (
                      <>
                        <LoadingSpinner className="w-4 h-4" />
                        <span>Optimizing...</span>
                      </>
                    ) : (
                      <>
                        <SparklesIcon className="w-4 h-4" />
                        <span>Optimize Prompt</span>
                      </>
                    )}
                  </button>
                </div>
              )}
            </div>

            {/* Section 3: Clarification */}
            {needsClarification && (
              <div className="border-b border-linkup-border/50">
                <SectionHeader
                  id="clarification"
                  number={3}
                  title="Quick questions"
                  isCompleted={completedSections.has("clarification")}
                  isExpanded={expandedSections.has("clarification")}
                />

                {expandedSections.has("clarification") && (
                  <div className="px-5 pb-5">
                    <div className="space-y-3 mb-4">
                      {conversation.map((msg, idx) => (
                        <div
                          key={idx}
                          className={`p-3 rounded-xl ${
                            msg.role === "assistant"
                              ? "bg-linkup-cream/50"
                              : "bg-linkup-green/5 ml-6"
                          }`}
                        >
                          {msg.role === "assistant" && (
                            <div className="flex items-center gap-2 mb-2">
                              <div className="w-5 h-5 bg-linkup-green rounded-md flex items-center justify-center">
                                <SparklesIcon className="w-3 h-3 text-white" />
                              </div>
                              <span className="text-xs font-medium text-linkup-green">Linkup</span>
                            </div>
                          )}
                          <p className="text-sm text-linkup-text whitespace-pre-wrap leading-relaxed">
                            {msg.content}
                          </p>
                        </div>
                      ))}
                    </div>

                    {error && (
                      <div className="mb-4 p-3 bg-red-50 rounded-xl text-sm text-red-600">{error}</div>
                    )}

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
                        className="flex-1 px-4 py-2.5 bg-linkup-cream/30 rounded-xl text-sm text-linkup-text focus:outline-none focus:ring-2 focus:ring-linkup-green/20 focus:bg-white transition-all"
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
              </div>
            )}

            {/* Section 4: Result */}
            {result && (
              <div>
                <SectionHeader
                  id="result"
                  number={needsClarification ? 4 : 3}
                  title="Optimized prompt"
                  isCompleted={true}
                  isExpanded={expandedSections.has("result")}
                />

                {expandedSections.has("result") && (
                  <div className="px-5 pb-5">
                    <div className="bg-linkup-cream/30 rounded-xl p-4 mb-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <span className={`px-2 py-0.5 text-xs font-medium rounded-md ${
                            result.recommendedDepth === "deep"
                              ? "bg-amber-100 text-amber-700"
                              : "bg-linkup-green/10 text-linkup-green"
                          }`}>
                            {result.recommendedDepth}
                          </span>
                          <span className="px-2 py-0.5 text-xs bg-gray-100 text-linkup-text-muted rounded-md">
                            {outputType}
                          </span>
                        </div>
                        <button
                          onClick={handleCopy}
                          className="flex items-center gap-1.5 px-2 py-1 text-xs text-linkup-text-muted hover:text-linkup-green rounded transition-colors"
                        >
                          {copied ? (
                            <>
                              <CheckIcon className="w-3.5 h-3.5 text-linkup-green" />
                              <span className="text-linkup-green">Copied</span>
                            </>
                          ) : (
                            <>
                              <CopyIcon className="w-3.5 h-3.5" />
                              <span>Copy</span>
                            </>
                          )}
                        </button>
                      </div>

                      <div className="bg-[#1a1a1a] rounded-lg p-4 overflow-x-auto">
                        <pre className="text-sm text-gray-300 whitespace-pre-wrap font-mono leading-relaxed">
                          {result.optimizedPrompt}
                        </pre>
                      </div>
                    </div>

                    {result.suggestedSchema && (
                      <div className="bg-linkup-cream/30 rounded-xl mb-4 overflow-hidden">
                        <button
                          onClick={() => setSchemaExpanded(!schemaExpanded)}
                          className="w-full flex items-center justify-between p-4 hover:bg-linkup-cream/50 transition-colors"
                        >
                          <p className="text-xs font-medium text-linkup-text-muted uppercase tracking-wide">
                            Generated Schema
                          </p>
                          <ChevronDownIcon className={`w-4 h-4 text-linkup-text-light transition-transform duration-200 ${
                            schemaExpanded ? "rotate-180" : ""
                          }`} />
                        </button>
                        {schemaExpanded && (
                          <div className="px-4 pb-4">
                            <div className="flex items-center justify-between mb-2">
                              <p className="text-xs text-linkup-text-light">
                                Auto-generated based on your query
                              </p>
                              <button
                                onClick={handleCopySchema}
                                className="flex items-center gap-1.5 px-2 py-1 text-xs text-linkup-text-muted hover:text-linkup-green rounded transition-colors"
                              >
                                {schemaCopied ? (
                                  <>
                                    <CheckIcon className="w-3.5 h-3.5 text-linkup-green" />
                                    <span className="text-linkup-green">Copied</span>
                                  </>
                                ) : (
                                  <>
                                    <CopyIcon className="w-3.5 h-3.5" />
                                    <span>Copy</span>
                                  </>
                                )}
                              </button>
                            </div>
                            <div className="bg-[#1a1a1a] rounded-lg p-4 overflow-x-auto">
                              <pre className="text-xs text-gray-300 whitespace-pre-wrap font-mono leading-relaxed">
                                {JSON.stringify(result.suggestedSchema, null, 2)}
                              </pre>
                            </div>
                          </div>
                        )}
                      </div>
                    )}

                    <div className="bg-linkup-cream/30 rounded-xl p-4 mb-4">
                      <p className="text-xs font-medium text-linkup-text-muted uppercase tracking-wide mb-2">Why this optimization</p>
                      <p className="text-sm text-linkup-text leading-relaxed">
                        {result.explanation}
                      </p>
                    </div>

                    {result.suggestedParameters && Object.keys(result.suggestedParameters).length > 0 && (
                      <div className="bg-linkup-cream/30 rounded-xl p-4 mb-4">
                        <p className="text-xs font-medium text-linkup-text-muted uppercase tracking-wide mb-3">Suggested Parameters</p>
                        <div className="flex flex-wrap gap-2">
                          {result.suggestedParameters.includeImages && (
                            <code className="text-xs bg-white px-2.5 py-1.5 rounded-lg text-linkup-green border border-linkup-border/50">
                              includeImages: true
                            </code>
                          )}
                          {result.suggestedParameters.fromDate && (
                            <code className="text-xs bg-white px-2.5 py-1.5 rounded-lg text-linkup-green border border-linkup-border/50">
                              fromDate: &quot;{result.suggestedParameters.fromDate}&quot;
                            </code>
                          )}
                          {result.suggestedParameters.toDate && (
                            <code className="text-xs bg-white px-2.5 py-1.5 rounded-lg text-linkup-green border border-linkup-border/50">
                              toDate: &quot;{result.suggestedParameters.toDate}&quot;
                            </code>
                          )}
                        </div>
                      </div>
                    )}

                    <button
                      onClick={handleStartOver}
                      className="w-full mt-4 py-2.5 text-sm text-linkup-text-muted hover:text-linkup-text border border-linkup-border/50 rounded-xl hover:bg-linkup-cream/30 transition-all"
                    >
                      Start over
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

        </div>
      </main>
      </div>
    </div>
  );
}
