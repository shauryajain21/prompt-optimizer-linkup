"use client";

import Link from "next/link";
import { useState } from "react";

function ArrowLeftIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="19" y1="12" x2="5" y2="12"/>
      <polyline points="12,19 5,12 12,5"/>
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

function CodeBracketIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16,18 22,12 16,6"/>
      <polyline points="8,6 2,12 8,18"/>
    </svg>
  );
}

function LightbulbIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/>
      <path d="M9 18h6"/>
      <path d="M10 22h4"/>
    </svg>
  );
}

function ClipboardIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>
      <rect x="8" y="2" width="8" height="4" rx="1" ry="1"/>
    </svg>
  );
}

function GearIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3"/>
      <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
    </svg>
  );
}

function TargetIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <circle cx="12" cy="12" r="6"/>
      <circle cx="12" cy="12" r="2"/>
    </svg>
  );
}

function ShieldCheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      <path d="M9 12l2 2 4-4"/>
    </svg>
  );
}

function LinkIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
    </svg>
  );
}

function GlobeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <line x1="2" y1="12" x2="22" y2="12"/>
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
    </svg>
  );
}

function BookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
    </svg>
  );
}

function BugIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="8" y="6" width="8" height="14" rx="4"/>
      <path d="M19 9h-3M8 9H5M19 15h-3M8 15H5M12 6V2M8 6l-2-2M16 6l2-2"/>
    </svg>
  );
}

function PackageIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16.5 9.4l-9-5.19M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
      <polyline points="3.27,6.96 12,12.01 20.73,6.96"/>
      <line x1="12" y1="22.08" x2="12" y2="12"/>
    </svg>
  );
}

function PromptBlock({ code, title }: { code: string; title?: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-xl overflow-hidden border-2 border-linkup-green/30 bg-linkup-green/5">
      <div className="flex items-center justify-between px-4 py-2.5 bg-linkup-green/10 border-b border-linkup-green/20">
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-linkup-green uppercase tracking-wide">Prompt</span>
          {title && <span className="text-xs text-linkup-green/70">- {title}</span>}
        </div>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 px-2.5 py-1 bg-linkup-green/20 hover:bg-linkup-green/30 rounded text-xs text-linkup-green transition-colors"
        >
          {copied ? (
            <>
              <CheckIcon className="w-3.5 h-3.5" />
              <span>Copied</span>
            </>
          ) : (
            <>
              <CopyIcon className="w-3.5 h-3.5" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>
      <pre className="p-4 bg-white overflow-x-auto">
        <code className="text-sm text-linkup-text font-mono whitespace-pre leading-relaxed">{code}</code>
      </pre>
    </div>
  );
}

function ChevronIcon({ className, isOpen }: { className?: string; isOpen: boolean }) {
  return (
    <svg
      className={`${className} transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="6,9 12,15 18,9"/>
    </svg>
  );
}

function SchemaBlock({ code, title }: { code: string; title?: string }) {
  const [copied, setCopied] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleCopy = async (e: React.MouseEvent) => {
    e.stopPropagation();
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-xl overflow-hidden border border-gray-700 bg-[#1E1E1E]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-4 py-3 hover:bg-[#252525] transition-colors"
      >
        <div className="flex items-center gap-2">
          <ChevronIcon className="w-4 h-4 text-gray-400" isOpen={isOpen} />
          <span className="text-xs font-medium text-gray-400 uppercase tracking-wide">Example Schema</span>
          {title && <span className="text-xs text-gray-500">· {title}</span>}
        </div>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 px-2 py-1 hover:bg-gray-700 rounded text-xs text-gray-400 transition-colors"
        >
          {copied ? (
            <>
              <CheckIcon className="w-3 h-3 text-green-400" />
              <span className="text-green-400">Copied</span>
            </>
          ) : (
            <>
              <CopyIcon className="w-3 h-3" />
              <span>Copy</span>
            </>
          )}
        </button>
      </button>
      {isOpen && (
        <div className="border-t border-gray-700">
          <pre className="p-4 overflow-x-auto">
            <code className="text-sm text-gray-300 font-mono whitespace-pre leading-relaxed">{code}</code>
          </pre>
        </div>
      )}
    </div>
  );
}

function CodeBlock({ code, title, language, dark }: { code: string; title?: string; language?: string; dark?: boolean }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (dark) {
    return (
      <div className="rounded-xl overflow-hidden border border-gray-800">
        <div className="flex items-center justify-between px-4 py-2.5 bg-[#2d2d2d] border-b border-gray-700">
          <div className="flex items-center gap-3">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
              <div className="w-3 h-3 rounded-full bg-[#27ca40]"></div>
            </div>
            {title && <span className="text-xs text-gray-400 font-mono">{title}</span>}
          </div>
          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 px-2.5 py-1 bg-gray-700/50 hover:bg-gray-600 rounded text-xs text-gray-300 transition-colors"
          >
            {copied ? (
              <>
                <CheckIcon className="w-3.5 h-3.5 text-green-400" />
                <span className="text-green-400">Copied</span>
              </>
            ) : (
              <>
                <CopyIcon className="w-3.5 h-3.5" />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>
        <pre className="p-4 bg-[#1E1E1E] overflow-x-auto">
          <code className="text-sm text-gray-200 font-mono whitespace-pre leading-relaxed">{code}</code>
        </pre>
        {language && (
          <div className="px-4 py-1.5 bg-[#252525] border-t border-gray-800">
            <span className="text-xs text-gray-500 font-mono">{language}</span>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="rounded-xl overflow-hidden border border-linkup-border bg-linkup-cream/30">
      <div className="flex items-center justify-between px-4 py-2.5 bg-linkup-cream/50 border-b border-linkup-border">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-linkup-green"></div>
          {title && <span className="text-xs text-linkup-text-muted font-mono">{title}</span>}
        </div>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 px-2.5 py-1 bg-linkup-green/10 hover:bg-linkup-green/20 rounded text-xs text-linkup-green transition-colors"
        >
          {copied ? (
            <>
              <CheckIcon className="w-3.5 h-3.5" />
              <span>Copied</span>
            </>
          ) : (
            <>
              <CopyIcon className="w-3.5 h-3.5" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>
      <pre className="p-4 bg-white overflow-x-auto">
        <code className="text-sm text-linkup-text font-mono whitespace-pre leading-relaxed">{code}</code>
      </pre>
      {language && (
        <div className="px-4 py-1.5 bg-linkup-cream/30 border-t border-linkup-border">
          <span className="text-xs text-linkup-text-muted font-mono">{language}</span>
        </div>
      )}
    </div>
  );
}

function Callout({ type = "tip", children }: { type?: "tip" | "warning" | "note"; children: React.ReactNode }) {
  const styles = {
    tip: {
      bg: "bg-linkup-green/5",
      border: "border-linkup-green/20",
      icon: <LightbulbIcon className="w-4 h-4 text-linkup-green" />,
      label: "Pro Tip",
      labelColor: "text-linkup-green"
    },
    warning: {
      bg: "bg-amber-50",
      border: "border-amber-200",
      icon: <span className="text-amber-500">!</span>,
      label: "Warning",
      labelColor: "text-amber-600"
    },
    note: {
      bg: "bg-blue-50",
      border: "border-blue-200",
      icon: <span className="text-blue-500">i</span>,
      label: "Note",
      labelColor: "text-blue-600"
    }
  };

  const style = styles[type];

  return (
    <div className={`${style.bg} ${style.border} border rounded-xl p-4 my-4`}>
      <div className="flex items-center gap-2 mb-2">
        {style.icon}
        <span className={`text-sm font-semibold ${style.labelColor}`}>{style.label}</span>
      </div>
      <div className="text-sm text-linkup-text-muted leading-relaxed">
        {children}
      </div>
    </div>
  );
}

const useCasesList = [
  { id: "documentation-lookup", title: "Documentation Lookup", description: "Find and extract official API documentation" },
  { id: "error-troubleshooting", title: "Error Troubleshooting", description: "Search for solutions to errors and bugs" },
  { id: "code-example-search", title: "Code Example Search", description: "Find implementation patterns and examples" },
  { id: "library-research", title: "Library & Package Research", description: "Evaluate and compare packages" },
  { id: "api-integration", title: "API Integration Research", description: "Research how to integrate external APIs" },
  { id: "security-lookup", title: "Security & Vulnerability Lookup", description: "Check for CVEs and security advisories" },
];

export default function CodingAgentsPage() {
  return (
    <div className="min-h-screen bg-linkup-bg">
      <main className="max-w-4xl mx-auto px-6 py-8">
        {/* Back Link */}
        <Link
          href="/use-cases"
          className="inline-flex items-center gap-2 text-sm text-linkup-text-muted hover:text-linkup-green mb-8 transition-colors group"
        >
          <ArrowLeftIcon className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Use Cases
        </Link>

        {/* Hero Section */}
        <div className="card p-8 mb-8 bg-gradient-to-br from-white via-white to-linkup-green/5 border-linkup-green/20">
          <div className="flex items-start gap-6">
            <div className="w-16 h-16 bg-linkup-green/10 rounded-2xl flex items-center justify-center text-linkup-green">
              <CodeBracketIcon className="w-8 h-8" />
            </div>
            <div className="flex-1">
              <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-linkup-green/10 text-linkup-green mb-3 inline-block">
                Linkup
              </span>
              <h1 className="text-3xl font-bold text-linkup-text mb-4">
                How to power coding agents with Linkup
              </h1>
              <p className="text-lg text-linkup-text-muted leading-relaxed">
                Enable AI coding assistants to search documentation, find code examples, troubleshoot errors, and research libraries in real-time.
              </p>
            </div>
          </div>
        </div>

        {/* Use Cases List at Top */}
        <div className="card p-6 mb-8">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-1 h-4 bg-linkup-green rounded-full"></div>
            <h2 className="text-lg font-semibold text-linkup-text">In This Guide</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 auto-rows-fr">
            {useCasesList.map((uc, idx) => (
              <a
                key={uc.id}
                href={`#${uc.id}`}
                className="flex items-start gap-3 p-3 rounded-lg bg-linkup-cream/50 hover:bg-linkup-green/10 transition-colors group h-full"
              >
                <span className="w-6 h-6 bg-linkup-green text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <div className="flex-1">
                  <p className="text-sm font-medium text-linkup-text group-hover:text-linkup-green transition-colors">{uc.title}</p>
                  <p className="text-xs text-linkup-text-muted mt-1">{uc.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Quick Navigation */}
        <nav className="mb-10">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-1 h-1 bg-linkup-green rounded-full"></div>
            <span className="text-xs font-semibold text-linkup-text-muted uppercase tracking-wider">Quick Navigation</span>
          </div>
          <div className="flex flex-wrap gap-2">
            <a href="#overview" className="group flex items-center gap-2 px-4 py-2.5 bg-white border border-linkup-border rounded-xl hover:border-linkup-green/40 hover:bg-linkup-green/5 transition-all duration-200">
              <ClipboardIcon className="w-4 h-4 text-linkup-text-muted group-hover:text-linkup-green transition-colors" />
              <span className="text-sm font-medium text-linkup-text group-hover:text-linkup-green transition-colors">Overview</span>
            </a>
            <a href="#configuration" className="group flex items-center gap-2 px-4 py-2.5 bg-white border border-linkup-border rounded-xl hover:border-linkup-green/40 hover:bg-linkup-green/5 transition-all duration-200">
              <GearIcon className="w-4 h-4 text-linkup-text-muted group-hover:text-linkup-green transition-colors" />
              <span className="text-sm font-medium text-linkup-text group-hover:text-linkup-green transition-colors">Configuration</span>
            </a>
            <a href="#use-cases" className="group flex items-center gap-2 px-4 py-2.5 bg-white border border-linkup-border rounded-xl hover:border-linkup-green/40 hover:bg-linkup-green/5 transition-all duration-200">
              <TargetIcon className="w-4 h-4 text-linkup-text-muted group-hover:text-linkup-green transition-colors" />
              <span className="text-sm font-medium text-linkup-text group-hover:text-linkup-green transition-colors">Use Cases</span>
            </a>
            <a href="#best-practices" className="group flex items-center gap-2 px-4 py-2.5 bg-white border border-linkup-border rounded-xl hover:border-linkup-green/40 hover:bg-linkup-green/5 transition-all duration-200">
              <ShieldCheckIcon className="w-4 h-4 text-linkup-text-muted group-hover:text-linkup-green transition-colors" />
              <span className="text-sm font-medium text-linkup-text group-hover:text-linkup-green transition-colors">Best Practices</span>
            </a>
            <a href="#domains" className="group flex items-center gap-2 px-4 py-2.5 bg-white border border-linkup-border rounded-xl hover:border-linkup-green/40 hover:bg-linkup-green/5 transition-all duration-200">
              <GlobeIcon className="w-4 h-4 text-linkup-text-muted group-hover:text-linkup-green transition-colors" />
              <span className="text-sm font-medium text-linkup-text group-hover:text-linkup-green transition-colors">Domain Lists</span>
            </a>
            <a href="#integration" className="group flex items-center gap-2 px-4 py-2.5 bg-white border border-linkup-border rounded-xl hover:border-linkup-green/40 hover:bg-linkup-green/5 transition-all duration-200">
              <LinkIcon className="w-4 h-4 text-linkup-text-muted group-hover:text-linkup-green transition-colors" />
              <span className="text-sm font-medium text-linkup-text group-hover:text-linkup-green transition-colors">Integration</span>
            </a>
          </div>
        </nav>

        {/* Content */}
        <div className="space-y-10">
          {/* Overview */}
          <section id="overview" className="card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-linkup-green/10 rounded-xl flex items-center justify-center">
                <ClipboardIcon className="w-5 h-5 text-linkup-green" />
              </div>
              <h2 className="text-2xl font-semibold text-linkup-text">Overview</h2>
            </div>
            <p className="text-linkup-text-muted mb-8 leading-relaxed">
              Coding agents and AI assistants are only as good as the context they have access to. When an agent encounters an unfamiliar API, a cryptic error message, or needs to implement an integration it hasn&apos;t seen before, it needs real-time access to documentation, examples, and solutions. Linkup provides that bridge—giving coding agents the ability to search docs, find code examples, troubleshoot errors, and research libraries on demand.
            </p>

            <div className="flex items-center gap-2 mb-4">
              <div className="w-1 h-4 bg-linkup-green rounded-full"></div>
              <h3 className="text-lg font-semibold text-linkup-text">Why Linkup for coding agents?</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { code: "deep search", desc: "Find documentation, then scrape full pages for complete context" },
                { code: "structured output", desc: "Returns code examples and API specs in formats agents can consume" },
                { code: "agentic retrieval", desc: "Navigates official docs, GitHub, Stack Overflow, and forums automatically" },
                { code: "version scoping", desc: "Name the version or timeframe in the query to avoid deprecated approaches" }
              ].map((item, idx) => (
                <div key={idx} className="p-4 bg-linkup-cream/50 rounded-xl">
                  <code className="text-sm font-semibold text-linkup-green">{item.code}</code>
                  <p className="text-sm text-linkup-text-muted mt-2">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Recommended Configuration */}
          <section id="configuration" className="card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-linkup-green/10 rounded-xl flex items-center justify-center">
                <GearIcon className="w-5 h-5 text-linkup-green" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-linkup-text">Configuration</h2>
                <p className="text-sm text-linkup-text-muted">Recommended settings for coding agents</p>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-linkup-border">
                    <th className="text-left py-3 px-4 font-semibold text-linkup-text">Parameter</th>
                    <th className="text-left py-3 px-4 font-semibold text-linkup-text">Value</th>
                    <th className="text-left py-3 px-4 font-semibold text-linkup-text">Why</th>
                  </tr>
                </thead>
                <tbody className="text-linkup-text-muted">
                  <tr className="border-b border-linkup-border-light hover:bg-linkup-cream/30 transition-colors">
                    <td className="py-4 px-4"><code className="bg-linkup-beige px-2 py-1 rounded text-linkup-green-dark font-medium">depth</code></td>
                    <td className="py-4 px-4"><code className="bg-linkup-green/10 px-2 py-1 rounded text-linkup-green font-medium">standard</code> or <code className="bg-amber-100 px-2 py-1 rounded text-amber-700 font-medium">deep</code></td>
                    <td className="py-4 px-4">Simple doc lookups work with standard; complex troubleshooting benefits from deep</td>
                  </tr>
                  <tr className="hover:bg-linkup-cream/30 transition-colors">
                    <td className="py-4 px-4"><code className="bg-linkup-beige px-2 py-1 rounded text-linkup-green-dark font-medium">outputType</code></td>
                    <td className="py-4 px-4"><code className="bg-linkup-green/10 px-2 py-1 rounded text-linkup-green font-medium">structured</code></td>
                    <td className="py-4 px-4">Agents need structured data they can parse and act on</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-6">
              <Callout type="tip">
                Name your trusted documentation sites and the library version directly in the query rather
                than pinning them as domain and date filters. Fast-moving ecosystems are exactly where a
                hard filter hurts: the answer often lives in a migration guide, changelog, or issue thread
                on a domain you did not list.
              </Callout>
            </div>
          </section>

          {/* Use Cases Section */}
          <section id="use-cases">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-linkup-green/10 rounded-xl flex items-center justify-center">
                <TargetIcon className="w-5 h-5 text-linkup-green" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-linkup-text">Use Cases</h2>
                <p className="text-sm text-linkup-text-muted">Practical examples with prompts and schemas</p>
              </div>
            </div>

            <div className="space-y-8">
              {/* Use Case 1: Documentation Lookup */}
              <div id="documentation-lookup" className="card p-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="w-10 h-10 bg-linkup-green text-white rounded-full flex items-center justify-center text-lg font-bold">1</span>
                  <div>
                    <h3 className="text-xl font-semibold text-linkup-text">Documentation Lookup</h3>
                    <p className="text-sm text-linkup-text-muted">Find and extract official documentation for APIs, libraries, and frameworks</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <PromptBlock
                    title="documentation-lookup"
                    code={`You are a documentation research assistant helping a coding agent.

Query: {agent_query}
Technology: {technology}
Version (if known): {version}

Execute the following steps:

1. Search for the official documentation page for {technology} related to: {agent_query}

2. Once found, scrape the documentation page to extract:
   - The relevant section of documentation
   - Code examples provided
   - Function/method signatures
   - Parameter descriptions
   - Return value documentation
   - Any warnings or important notes

3. If the documentation references related pages (e.g., "see also" links), note them for potential follow-up.

Return documentation content structured for an AI coding agent to consume.
Prioritize official documentation over third-party tutorials.`}
                  />

                  <SchemaBlock
                    title="documentation-lookup-schema.json"
                    code={`{
  "type": "object",
  "properties": {
    "query": { "type": "string" },
    "technology": { "type": "string" },
    "version": { "type": "string" },
    "documentation": {
      "type": "object",
      "properties": {
        "source_url": { "type": "string" },
        "page_title": { "type": "string" },
        "relevant_section": { "type": "string" },
        "description": { "type": "string" },
        "code_examples": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "language": { "type": "string" },
              "code": { "type": "string" },
              "description": { "type": "string" }
            }
          }
        },
        "api_signatures": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "name": { "type": "string" },
              "signature": { "type": "string" },
              "parameters": {
                "type": "array",
                "items": {
                  "type": "object",
                  "properties": {
                    "name": { "type": "string" },
                    "type": { "type": "string" },
                    "description": { "type": "string" },
                    "required": { "type": "boolean" }
                  }
                }
              },
              "return_type": { "type": "string" },
              "return_description": { "type": "string" }
            }
          }
        },
        "warnings": {
          "type": "array",
          "items": { "type": "string" }
        },
        "related_pages": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "title": { "type": "string" },
              "url": { "type": "string" }
            }
          }
        }
      }
    }
  }
}`}
                  />

                  <CodeBlock
                    title="documentation-source-preference.txt (Example)"
                    language="text"
                    code={`Prefer official documentation: docs.python.org, developer.mozilla.org,
docs.microsoft.com, cloud.google.com, docs.aws.amazon.com, reactjs.org,
vuejs.org, docs.djangoproject.com, fastapi.tiangolo.com, nextjs.org,
kubernetes.io, and docs.docker.com.
Return the source URL for every snippet or API detail.`}
                  />
                </div>
              </div>

              {/* Use Case 2: Error Troubleshooting */}
              <div id="error-troubleshooting" className="card p-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="w-10 h-10 bg-linkup-green text-white rounded-full flex items-center justify-center text-lg font-bold">2</span>
                  <div>
                    <h3 className="text-xl font-semibold text-linkup-text">Error Troubleshooting</h3>
                    <p className="text-sm text-linkup-text-muted">Search for solutions to error messages, exceptions, and bugs</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <PromptBlock
                    title="error-troubleshooting"
                    code={`You are a debugging assistant helping a coding agent resolve an error.

Error message: {error_message}
Technology/framework: {technology}
Context: {context_description}
Stack trace (if available): {stack_trace}

Execute the following steps:

1. Search for this exact error message to find known solutions.

2. Search Stack Overflow for questions matching this error and {technology}.

3. Search GitHub Issues in relevant repositories for this error.

4. For promising solutions found, extract:
   - The root cause explanation
   - The recommended fix
   - Any code changes required
   - Conditions where this solution applies

5. If multiple solutions exist, rank by:
   - Recency (prefer solutions from the last 2 years)
   - Vote count or acceptance status
   - Relevance to the specific context

Return the most likely solutions with implementation details.`}
                  />

                  <SchemaBlock
                    title="error-troubleshooting-schema.json"
                    code={`{
  "type": "object",
  "properties": {
    "error_message": { "type": "string" },
    "technology": { "type": "string" },
    "solutions": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "source": { "type": "string" },
          "source_url": { "type": "string" },
          "source_type": {
            "type": "string",
            "enum": ["stack_overflow", "github_issue", "documentation", "blog", "forum"]
          },
          "root_cause": { "type": "string" },
          "solution_summary": { "type": "string" },
          "code_fix": {
            "type": "object",
            "properties": {
              "before": { "type": "string" },
              "after": { "type": "string" },
              "explanation": { "type": "string" }
            }
          },
          "applicability": { "type": "string" },
          "confidence": {
            "type": "string",
            "enum": ["high", "medium", "low"]
          },
          "recency": { "type": "string" },
          "community_validation": {
            "type": "object",
            "properties": {
              "upvotes": { "type": "integer" },
              "accepted_answer": { "type": "boolean" }
            }
          }
        }
      }
    },
    "recommended_solution": { "type": "integer" },
    "recommendation_reasoning": { "type": "string" }
  }
}`}
                  />

                  <CodeBlock
                    title="troubleshooting-source-preference.txt (Example)"
                    language="text"
                    code={`Prefer Stack Overflow, GitHub issues and discussions, dev.to, Hashnode,
and the programming, webdev, node, and python subreddits.
Return the source URL for every proposed fix.`}
                  />
                </div>
              </div>

              {/* Use Case 3: Code Example Search */}
              <div id="code-example-search" className="card p-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="w-10 h-10 bg-linkup-green text-white rounded-full flex items-center justify-center text-lg font-bold">3</span>
                  <div>
                    <h3 className="text-xl font-semibold text-linkup-text">Code Example Search</h3>
                    <p className="text-sm text-linkup-text-muted">Find implementation examples for specific patterns, integrations, or features</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <PromptBlock
                    title="code-example-search"
                    code={`You are a code research assistant finding implementation examples.

What to implement: {implementation_goal}
Language: {language}
Framework (if applicable): {framework}
Constraints: {constraints}

Execute the following steps:

1. Search for code examples and tutorials showing how to {implementation_goal} in {language}.

2. Search GitHub for repositories with example implementations. Look for:
   - Official examples from framework maintainers
   - Well-starred repositories with similar implementations
   - Recent implementations (prefer last 2 years)

3. For each relevant example found, extract:
   - The complete code snippet
   - Required imports/dependencies
   - Setup or configuration needed
   - Any gotchas or edge cases mentioned

4. If the implementation requires multiple files or steps, capture the full sequence.

Prioritize:
1. Official documentation examples
2. Well-maintained open source projects
3. Highly-voted Stack Overflow answers
4. Recent blog posts from reputable sources`}
                  />

                  <SchemaBlock
                    title="code-example-schema.json"
                    code={`{
  "type": "object",
  "properties": {
    "implementation_goal": { "type": "string" },
    "language": { "type": "string" },
    "framework": { "type": "string" },
    "examples": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "source": { "type": "string" },
          "source_url": { "type": "string" },
          "source_quality": {
            "type": "string",
            "enum": ["official", "well_maintained_oss", "community", "blog"]
          },
          "description": { "type": "string" },
          "dependencies": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "name": { "type": "string" },
                "version": { "type": "string" }
              }
            }
          },
          "code_snippets": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "filename": { "type": "string" },
                "language": { "type": "string" },
                "code": { "type": "string" },
                "explanation": { "type": "string" }
              }
            }
          },
          "setup_steps": {
            "type": "array",
            "items": { "type": "string" }
          },
          "gotchas": {
            "type": "array",
            "items": { "type": "string" }
          },
          "last_updated": { "type": "string" }
        }
      }
    },
    "recommended_approach": { "type": "string" }
  }
}`}
                  />
                </div>
              </div>

              {/* Use Case 4: Library & Package Research */}
              <div id="library-research" className="card p-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="w-10 h-10 bg-linkup-green text-white rounded-full flex items-center justify-center text-lg font-bold">4</span>
                  <div>
                    <h3 className="text-xl font-semibold text-linkup-text">Library & Package Research</h3>
                    <p className="text-sm text-linkup-text-muted">Help agents choose the right library or understand package capabilities</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <PromptBlock
                    title="library-research"
                    code={`You are a package research assistant helping evaluate libraries.

Need: {what_agent_needs}
Language/ecosystem: {language}
Current stack: {current_stack}
Requirements: {requirements}

Execute the following steps:

1. Search for libraries/packages that provide {what_agent_needs} in {language}.

2. For each candidate library, search for and extract:
   - Package name and installation command
   - GitHub stars and recent activity
   - Latest version and release date
   - Key features relevant to {requirements}
   - Known limitations or issues
   - Compatibility with {current_stack}

3. Search for comparison articles: "{library_a} vs {library_b}" for top candidates.

4. Search for recent discussions about each library (Reddit, Hacker News, dev forums) to gauge community sentiment.

Return a comparison with recommendation.`}
                  />

                  <SchemaBlock
                    title="library-research-schema.json"
                    code={`{
  "type": "object",
  "properties": {
    "need": { "type": "string" },
    "language": { "type": "string" },
    "candidates": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "name": { "type": "string" },
          "package_manager": { "type": "string" },
          "install_command": { "type": "string" },
          "repository_url": { "type": "string" },
          "documentation_url": { "type": "string" },
          "github_stars": { "type": "integer" },
          "latest_version": { "type": "string" },
          "last_release_date": { "type": "string" },
          "maintenance_status": {
            "type": "string",
            "enum": ["actively_maintained", "stable", "minimal_maintenance", "abandoned"]
          },
          "features": {
            "type": "array",
            "items": { "type": "string" }
          },
          "limitations": {
            "type": "array",
            "items": { "type": "string" }
          },
          "compatibility_notes": { "type": "string" },
          "community_sentiment": {
            "type": "string",
            "enum": ["positive", "mixed", "negative"]
          },
          "common_use_cases": {
            "type": "array",
            "items": { "type": "string" }
          }
        }
      }
    },
    "comparison_summary": { "type": "string" },
    "recommendation": {
      "type": "object",
      "properties": {
        "recommended_package": { "type": "string" },
        "reasoning": { "type": "string" },
        "alternatives_when": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "package": { "type": "string" },
              "use_when": { "type": "string" }
            }
          }
        }
      }
    }
  }
}`}
                  />
                </div>
              </div>

              {/* Use Case 5: API Integration Research */}
              <div id="api-integration" className="card p-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="w-10 h-10 bg-linkup-green text-white rounded-full flex items-center justify-center text-lg font-bold">5</span>
                  <div>
                    <h3 className="text-xl font-semibold text-linkup-text">API Integration Research</h3>
                    <p className="text-sm text-linkup-text-muted">Research how to integrate with external APIs the agent hasn&apos;t seen before. <code className="bg-amber-100 px-2 py-0.5 rounded text-amber-700 text-xs font-medium">deep</code> recommended</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <PromptBlock
                    title="api-integration"
                    code={`You are an API integration research assistant.

API to integrate: {api_name}
Integration goal: {what_to_accomplish}
Language: {language}

Execute the following steps:

1. Find the official API documentation for {api_name}.

2. Scrape the documentation to extract:
   - Authentication method (API key, OAuth, etc.)
   - Base URL and endpoints relevant to {what_to_accomplish}
   - Request/response formats
   - Rate limits and quotas
   - Required headers

3. Search for {language} SDK or client library for {api_name}. If one exists:
   - Find installation instructions
   - Find code examples for {what_to_accomplish}

4. Search for tutorials or blog posts showing {api_name} integration in {language}.

5. Search for common issues or gotchas when integrating with {api_name}.

Return complete integration guide with scraped examples.`}
                  />

                  <SchemaBlock
                    title="api-integration-schema.json"
                    code={`{
  "type": "object",
  "properties": {
    "api_name": { "type": "string" },
    "documentation_url": { "type": "string" },
    "authentication": {
      "type": "object",
      "properties": {
        "method": {
          "type": "string",
          "enum": ["api_key", "oauth2", "basic_auth", "bearer_token", "custom"]
        },
        "setup_instructions": { "type": "string" },
        "header_format": { "type": "string" },
        "token_endpoint": { "type": "string" }
      }
    },
    "base_url": { "type": "string" },
    "relevant_endpoints": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "method": { "type": "string" },
          "path": { "type": "string" },
          "description": { "type": "string" },
          "request_body": { "type": "object" },
          "response_format": { "type": "object" },
          "required_headers": {
            "type": "array",
            "items": { "type": "string" }
          }
        }
      }
    },
    "rate_limits": {
      "type": "object",
      "properties": {
        "requests_per_minute": { "type": "integer" },
        "requests_per_day": { "type": "integer" },
        "notes": { "type": "string" }
      }
    },
    "sdk": {
      "type": "object",
      "properties": {
        "available": { "type": "boolean" },
        "package_name": { "type": "string" },
        "install_command": { "type": "string" },
        "documentation_url": { "type": "string" }
      }
    },
    "integration_example": {
      "type": "object",
      "properties": {
        "language": { "type": "string" },
        "code": { "type": "string" },
        "explanation": { "type": "string" }
      }
    },
    "common_issues": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "issue": { "type": "string" },
          "solution": { "type": "string" }
        }
      }
    }
  }
}`}
                  />
                </div>
              </div>

              {/* Use Case 6: Security & Vulnerability Lookup */}
              <div id="security-lookup" className="card p-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="w-10 h-10 bg-linkup-green text-white rounded-full flex items-center justify-center text-lg font-bold">6</span>
                  <div>
                    <h3 className="text-xl font-semibold text-linkup-text">Security & Vulnerability Lookup</h3>
                    <p className="text-sm text-linkup-text-muted">Check for known vulnerabilities and security advisories</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <PromptBlock
                    title="security-lookup"
                    code={`You are a security research assistant checking for vulnerabilities.

Package: {package_name}
Version: {version}
Ecosystem: {ecosystem}

Execute the following steps:

1. Search for known CVEs affecting {package_name} version {version}.

2. Search the GitHub Advisory Database for {package_name}.

3. Search for security-related issues in the {package_name} repository.

4. Check if there are any security advisories from the package maintainers.

5. For any vulnerabilities found, extract:
   - CVE ID and severity score
   - Affected version range
   - Fixed version (if available)
   - Exploit description
   - Recommended mitigation

Return all known security issues with remediation guidance.`}
                  />

                  <SchemaBlock
                    title="security-lookup-schema.json"
                    code={`{
  "type": "object",
  "properties": {
    "package": { "type": "string" },
    "version_checked": { "type": "string" },
    "ecosystem": { "type": "string" },
    "vulnerabilities": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "cve_id": { "type": "string" },
          "title": { "type": "string" },
          "severity": {
            "type": "string",
            "enum": ["critical", "high", "medium", "low"]
          },
          "cvss_score": { "type": "number" },
          "affected_versions": { "type": "string" },
          "fixed_version": { "type": "string" },
          "description": { "type": "string" },
          "exploit_available": { "type": "boolean" },
          "mitigation": { "type": "string" },
          "references": {
            "type": "array",
            "items": { "type": "string" }
          }
        }
      }
    },
    "security_status": {
      "type": "string",
      "enum": ["secure", "vulnerabilities_found", "update_recommended", "critical_update_required"]
    },
    "recommended_action": { "type": "string" }
  }
}`}
                  />

                  <CodeBlock
                    title="security-source-preference.txt (Example)"
                    language="text"
                    code={`Prefer the National Vulnerability Database, GitHub Security Advisories,
CVE/MITRE, Snyk, and huntr.dev.
Return the advisory URL and CVE identifier for every finding.`}
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Best Practices */}
          <section id="best-practices" className="card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-linkup-green/10 rounded-xl flex items-center justify-center">
                <ShieldCheckIcon className="w-5 h-5 text-linkup-green" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-linkup-text">Best Practices</h2>
                <p className="text-sm text-linkup-text-muted">Tips for getting the best results</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-linkup-green/5 border border-linkup-green/20 rounded-xl">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 bg-linkup-green/20 rounded-lg flex items-center justify-center">
                    <CheckIcon className="w-4 h-4 text-linkup-green" />
                  </div>
                  <h3 className="text-lg font-semibold text-linkup-green">Do&apos;s</h3>
                </div>
                <ul className="space-y-3 text-sm text-linkup-text-muted">
                  <li className="flex items-start gap-3">
                    <span className="text-linkup-green mt-0.5 font-bold">1</span>
                    <span><strong>Always include version information</strong> — solutions vary dramatically between versions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-linkup-green mt-0.5 font-bold">2</span>
                    <span><strong>Name trusted sources in the query</strong> — steers away from low-quality code without hiding the rest of the web</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-linkup-green mt-0.5 font-bold">3</span>
                    <span><strong>State the version or timeframe in the query</strong> — React, Next.js, and Python packages change rapidly</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-linkup-green mt-0.5 font-bold">4</span>
                    <span><strong>Request structured code output</strong> — agents need parseable code, not prose descriptions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-linkup-green mt-0.5 font-bold">5</span>
                    <span><strong>Include context in error searches</strong> — &quot;Error X in Django&quot; yields better results than just &quot;Error X&quot;</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-linkup-green mt-0.5 font-bold">6</span>
                    <span><strong>Use deep for integration research</strong> — finding docs, scraping them, then finding examples requires multiple steps</span>
                  </li>
                </ul>
              </div>

              <div className="p-6 bg-red-50 border border-red-100 rounded-xl">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                    <span className="text-red-500 font-bold">x</span>
                  </div>
                  <h3 className="text-lg font-semibold text-red-600">Don&apos;ts</h3>
                </div>
                <ul className="space-y-3 text-sm text-linkup-text-muted">
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 mt-0.5 font-bold">1</span>
                    <span><strong>Don&apos;t trust arbitrary code sources</strong> — restrict to official docs, well-maintained repos, and vetted communities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 mt-0.5 font-bold">2</span>
                    <span><strong>Don&apos;t skip version checks</strong> — code from 2019 may not work with 2024 frameworks</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 mt-0.5 font-bold">3</span>
                    <span><strong>Don&apos;t search for full error stack traces</strong> — extract the key error message; stack traces are too specific</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 mt-0.5 font-bold">4</span>
                    <span><strong>Don&apos;t ignore security signals</strong> — when researching packages, always check for known vulnerabilities</span>
                  </li>
                </ul>
              </div>
            </div>

            <Callout type="tip">
              When feeding Linkup results to an agent: extract only relevant code snippets (not full pages), include source URLs for attribution, prioritize code over descriptions, truncate long examples to key patterns, and include version info to avoid hallucination.
            </Callout>
          </section>

          {/* Source Preferences */}
          <section id="domains" className="card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-linkup-green/10 rounded-xl flex items-center justify-center">
                <GlobeIcon className="w-5 h-5 text-linkup-green" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-linkup-text">Source Preferences (Example)</h2>
                <p className="text-sm text-linkup-text-muted">Trusted sources by category, phrased for the query</p>
              </div>
            </div>

            <div className="space-y-6">
              <CodeBlock
                title="Official Documentation"
                language="text"
                code={`Prefer official documentation: docs.python.org, developer.mozilla.org,
docs.microsoft.com, Google Cloud docs, AWS docs, Kubernetes docs,
docs.docker.com, reactjs.org, vuejs.org, angular.io, nextjs.org,
nodejs.org, docs.npmjs.com, pypi.org, pkg.go.dev, docs.rs,
and rubydoc.info.`}
              />

              <CodeBlock
                title="Community Q&A"
                language="text"
                code={`Prefer Stack Overflow and Stack Exchange, the programming, webdev, node,
python, rust, and golang subreddits, dev.to, and Hashnode.`}
              />

              <CodeBlock
                title="GitHub Resources"
                language="text"
                code={`Prefer GitHub repositories, issues, discussions, raw file contents,
and gists.`}
              />

              <CodeBlock
                title="Security Research"
                language="text"
                code={`Prefer the National Vulnerability Database, CVE/MITRE,
GitHub Security Advisories, and Snyk.`}
              />
            </div>
          </section>

          {/* Integration Patterns */}
          <section id="integration" className="card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-linkup-green/10 rounded-xl flex items-center justify-center">
                <LinkIcon className="w-5 h-5 text-linkup-green" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-linkup-text">Integration Patterns</h2>
                <p className="text-sm text-linkup-text-muted">How to integrate Linkup into your coding agent</p>
              </div>
            </div>

            <div className="space-y-4">
              {[
                {
                  title: "Agent Tool Integration",
                  desc: "Define Linkup as tools the agent can call",
                  steps: [
                    "search_documentation — Input: query, technology, version. Use when: agent needs to look up unfamiliar APIs",
                    "troubleshoot_error — Input: error_message, technology, context. Use when: agent encounters an error it can't resolve",
                    "find_code_example — Input: implementation_goal, language, framework. Use when: agent needs to implement something new",
                    "research_package — Input: need, language, requirements. Use when: agent needs to choose a library",
                    "check_security — Input: package, version, ecosystem. Use when: agent adds a new dependency"
                  ]
                },
                {
                  title: "Caching Strategy",
                  desc: "Optimize performance for high-frequency lookups",
                  steps: [
                    "Cache documentation lookups by (technology, version, query_hash) — TTL: 7 days for stable APIs, 1 day for fast-moving frameworks",
                    "Cache package metadata by (package, ecosystem) — TTL: 1 day (versions change frequently)",
                    "Don't cache error troubleshooting — solutions evolve; always search fresh",
                    "Cache security lookups by (package, version) — TTL: 1 hour (new CVEs can be critical)"
                  ]
                },
                {
                  title: "Context Window Management",
                  desc: "When feeding Linkup results to an agent",
                  steps: [
                    "Extract only relevant code snippets (not full pages)",
                    "Include source URLs for attribution",
                    "Prioritize: code > signatures > descriptions",
                    "Truncate long examples to key patterns",
                    "Include version info to avoid hallucination"
                  ]
                }
              ].map((pattern, idx) => (
                <div key={idx} className="p-5 bg-linkup-cream/50 border border-linkup-border-light rounded-xl">
                  <h3 className="text-lg font-semibold text-linkup-text">{pattern.title}</h3>
                  <p className="text-sm text-linkup-text-muted mb-3">{pattern.desc}</p>
                  <ol className="list-none space-y-1.5 text-sm text-linkup-text-muted">
                    {pattern.steps.map((step, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-linkup-green">•</span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              ))}
            </div>
          </section>

          {/* Sample Code */}
          <section className="card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-linkup-green/10 rounded-xl flex items-center justify-center">
                <CodeBracketIcon className="w-5 h-5 text-linkup-green" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-linkup-text">Sample Code</h2>
                <p className="text-sm text-linkup-text-muted">Python integration example</p>
              </div>
            </div>
            <CodeBlock
              title="linkup_coding_assistant.py"
              language="python"
              dark
              code={`import requests
import json
from typing import Optional

class LinkupCodingAssistant:
    """Linkup integration for coding agents"""

    def __init__(self, api_key: str):
        self.api_key = api_key
        self.base_url = "https://api.linkup.so/v1/search"

    def _call_linkup(
        self,
        prompt: str,
        schema: dict,
        depth: str = "standard"
    ) -> dict:
        params = {
            "q": prompt,
            "depth": depth,
            "outputType": "structured",
            "structuredSchema": json.dumps(schema)
        }

        response = requests.post(
            self.base_url,
            headers={"Authorization": f"Bearer {self.api_key}"},
            json=params
        )
        return response.json()

    def search_documentation(
        self,
        query: str,
        technology: str,
        version: Optional[str] = None
    ) -> dict:
        """Look up official documentation"""

        version_str = f"version {version}" if version else ""

        prompt = f"""
        Find official documentation for {technology} {version_str} related to: {query}

        Scrape the documentation page to extract:
        - Relevant section content
        - Code examples
        - Function signatures with parameters
        - Return types
        - Warnings or important notes

        Prioritize official documentation over tutorials.
        """

        schema = {
            "type": "object",
            "properties": {
                "source_url": {"type": "string"},
                "description": {"type": "string"},
                "code_examples": {
                    "type": "array",
                    "items": {
                        "type": "object",
                        "properties": {
                            "language": {"type": "string"},
                            "code": {"type": "string"}
                        }
                    }
                },
                "api_signatures": {
                    "type": "array",
                    "items": {
                        "type": "object",
                        "properties": {
                            "name": {"type": "string"},
                            "signature": {"type": "string"},
                            "parameters": {"type": "array"},
                            "return_type": {"type": "string"}
                        }
                    }
                },
                "warnings": {"type": "array", "items": {"type": "string"}}
            }
        }

        return self._call_linkup(
            prompt,
            schema,
            depth="deep"
        )

    def troubleshoot_error(
        self,
        error_message: str,
        technology: str,
        context: Optional[str] = None
    ) -> dict:
        """Find solutions for an error"""

        context_str = f"Context: {context}" if context else ""

        prompt = f"""
        Find solutions for this error in {technology}:

        Error: {error_message}
        {context_str}

        Search Stack Overflow and GitHub Issues.

        For each solution, extract:
        - Root cause
        - Fix with code changes
        - When this solution applies

        Rank by recency and community validation.
        """

        schema = {
            "type": "object",
            "properties": {
                "solutions": {
                    "type": "array",
                    "items": {
                        "type": "object",
                        "properties": {
                            "source_url": {"type": "string"},
                            "root_cause": {"type": "string"},
                            "solution": {"type": "string"},
                            "code_fix": {"type": "string"},
                            "confidence": {"type": "string"},
                            "upvotes": {"type": "integer"}
                        }
                    }
                },
                "recommended_solution": {"type": "integer"}
            }
        }

        return self._call_linkup(
            prompt,
            schema,
            depth="standard"
        )

    def find_code_example(
        self,
        goal: str,
        language: str,
        framework: Optional[str] = None
    ) -> dict:
        """Find implementation examples"""

        framework_str = f"using {framework}" if framework else ""

        prompt = f"""
        Find code examples for: {goal}
        Language: {language} {framework_str}

        Search for:
        1. Official documentation examples
        2. Well-maintained GitHub repositories
        3. Highly-voted Stack Overflow answers

        Extract complete code with dependencies and setup steps.
        """

        schema = {
            "type": "object",
            "properties": {
                "examples": {
                    "type": "array",
                    "items": {
                        "type": "object",
                        "properties": {
                            "source_url": {"type": "string"},
                            "source_quality": {"type": "string"},
                            "dependencies": {"type": "array"},
                            "code": {"type": "string"},
                            "explanation": {"type": "string"}
                        }
                    }
                },
                "recommended_approach": {"type": "string"}
            }
        }

        return self._call_linkup(prompt, schema, depth="deep")

    def check_security(
        self,
        package: str,
        version: str,
        ecosystem: str
    ) -> dict:
        """Check for known vulnerabilities"""

        prompt = f"""
        Search for security vulnerabilities in {package} version {version} ({ecosystem}).

        Check:
        - CVE databases
        - GitHub Advisory Database
        - Package security advisories

        For each vulnerability, extract CVE ID, severity, affected versions, and fix.
        """

        schema = {
            "type": "object",
            "properties": {
                "vulnerabilities": {
                    "type": "array",
                    "items": {
                        "type": "object",
                        "properties": {
                            "cve_id": {"type": "string"},
                            "severity": {"type": "string"},
                            "cvss_score": {"type": "number"},
                            "affected_versions": {"type": "string"},
                            "fixed_version": {"type": "string"},
                            "description": {"type": "string"},
                            "mitigation": {"type": "string"}
                        }
                    }
                },
                "security_status": {"type": "string"},
                "recommended_action": {"type": "string"}
            }
        }

        return self._call_linkup(
            prompt,
            schema,
            depth="standard"
        )

# Example usage
if __name__ == "__main__":
    assistant = LinkupCodingAssistant(api_key="your-api-key")

    # Documentation lookup
    docs = assistant.search_documentation(
        query="async context managers",
        technology="Python",
        version="3.11"
    )

    # Error troubleshooting
    fix = assistant.troubleshoot_error(
        error_message="TypeError: Cannot read property 'map' of undefined",
        technology="React",
        context="Fetching data in useEffect"
    )

    # Security check
    security = assistant.check_security(
        package="lodash",
        version="4.17.15",
        ecosystem="npm"
    )`}
            />
          </section>
        </div>
      </main>
    </div>
  );
}
