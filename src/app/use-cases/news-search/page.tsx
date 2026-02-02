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

function NewspaperIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"/>
      <path d="M18 14h-8"/>
      <path d="M15 18h-5"/>
      <path d="M10 6h8v4h-8V6Z"/>
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

function CodeBracketIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16,18 22,12 16,6"/>
      <polyline points="8,6 2,12 8,18"/>
    </svg>
  );
}

function CalendarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
      <line x1="16" y1="2" x2="16" y2="6"/>
      <line x1="8" y1="2" x2="8" y2="6"/>
      <line x1="3" y1="10" x2="21" y2="10"/>
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
  { id: "industry-news", title: "Industry & Market News", description: "Track trends, regulations, and developments" },
  { id: "company-monitoring", title: "Company Specific Monitoring", description: "Track news mentions for companies" },
  { id: "event-triggered", title: "Event-Triggered News Search", description: "Investigate specific events or announcements" },
  { id: "competitive-intel", title: "Competitive Intelligence News", description: "Monitor competitor activities" },
  { id: "executive-news", title: "Executive & People News", description: "Track news about key individuals" },
];

export default function NewsSearchPage() {
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
              <NewspaperIcon className="w-8 h-8" />
            </div>
            <div className="flex-1">
              <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-linkup-green/10 text-linkup-green mb-3 inline-block">
                Linkup
              </span>
              <h1 className="text-3xl font-bold text-linkup-text mb-4">
                How to search for news with Linkup
              </h1>
              <p className="text-lg text-linkup-text-muted leading-relaxed">
                Track competitors, research markets, monitor regulatory changes, and stay informed with Linkup&apos;s powerful news search capabilities.
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
            <a href="#date-filters" className="group flex items-center gap-2 px-4 py-2.5 bg-white border border-linkup-border rounded-xl hover:border-linkup-green/40 hover:bg-linkup-green/5 transition-all duration-200">
              <CalendarIcon className="w-4 h-4 text-linkup-text-muted group-hover:text-linkup-green transition-colors" />
              <span className="text-sm font-medium text-linkup-text group-hover:text-linkup-green transition-colors">Date Filters</span>
            </a>
            <a href="#source-tiers" className="group flex items-center gap-2 px-4 py-2.5 bg-white border border-linkup-border rounded-xl hover:border-linkup-green/40 hover:bg-linkup-green/5 transition-all duration-200">
              <GlobeIcon className="w-4 h-4 text-linkup-text-muted group-hover:text-linkup-green transition-colors" />
              <span className="text-sm font-medium text-linkup-text group-hover:text-linkup-green transition-colors">Source Tiers</span>
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
              News search is one of Linkup&apos;s most versatile capabilities. Whether you&apos;re tracking competitors, researching markets, or staying informed on regulatory changes, Linkup can find, filter, and structure news content from across the web.
            </p>

            <div className="flex items-center gap-2 mb-4">
              <div className="w-1 h-4 bg-linkup-green rounded-full"></div>
              <h3 className="text-lg font-semibold text-linkup-text">Why Linkup for news search?</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { code: "Date filtering", desc: "fromDate and toDate let you target specific time windows" },
                { code: "structuredOutput", desc: "Returns news in consistent formats for dashboards and alerts" },
                { code: "Agentic search", desc: "Synthesize across multiple sources and find patterns" },
                { code: "Deep search", desc: "Follow up on stories by scraping full articles for details" }
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
                <p className="text-sm text-linkup-text-muted">Recommended settings for news search</p>
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
                    <td className="py-4 px-4"><code className="bg-linkup-green/10 px-2 py-1 rounded text-linkup-green font-medium">standard</code> or <code className="bg-linkup-green/10 px-2 py-1 rounded text-linkup-green font-medium">deep</code></td>
                    <td className="py-4 px-4">Standard for monitoring; deep for investigative research</td>
                  </tr>
                  <tr className="border-b border-linkup-border-light hover:bg-linkup-cream/30 transition-colors">
                    <td className="py-4 px-4"><code className="bg-linkup-beige px-2 py-1 rounded text-linkup-green-dark font-medium">outputType</code></td>
                    <td className="py-4 px-4"><code className="bg-linkup-green/10 px-2 py-1 rounded text-linkup-green font-medium">structuredOutput</code></td>
                    <td className="py-4 px-4">Consistent format for automation and dashboards</td>
                  </tr>
                  <tr className="border-b border-linkup-border-light hover:bg-linkup-cream/30 transition-colors">
                    <td className="py-4 px-4"><code className="bg-linkup-beige px-2 py-1 rounded text-linkup-green-dark font-medium">fromDate / toDate</code></td>
                    <td className="py-4 px-4"><code className="bg-gray-100 px-2 py-1 rounded text-gray-600 font-medium">based on needs</code></td>
                    <td className="py-4 px-4">Essential for filtering to relevant time periods</td>
                  </tr>
                  <tr className="border-b border-linkup-border-light hover:bg-linkup-cream/30 transition-colors">
                    <td className="py-4 px-4"><code className="bg-linkup-beige px-2 py-1 rounded text-linkup-green-dark font-medium">includeDomains</code></td>
                    <td className="py-4 px-4"><code className="bg-gray-100 px-2 py-1 rounded text-gray-600 font-medium">optional</code></td>
                    <td className="py-4 px-4">Restrict to trusted news sources</td>
                  </tr>
                  <tr className="hover:bg-linkup-cream/30 transition-colors">
                    <td className="py-4 px-4"><code className="bg-linkup-beige px-2 py-1 rounded text-linkup-green-dark font-medium">excludeDomains</code></td>
                    <td className="py-4 px-4"><code className="bg-gray-100 px-2 py-1 rounded text-gray-600 font-medium">optional</code></td>
                    <td className="py-4 px-4">Filter out low-quality or irrelevant sources</td>
                  </tr>
                </tbody>
              </table>
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
              {/* Use Case 1: Industry & Market News */}
              <div id="industry-news" className="card p-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="w-10 h-10 bg-linkup-green text-white rounded-full flex items-center justify-center text-lg font-bold">1</span>
                  <h3 className="text-xl font-semibold text-linkup-text">Industry & Market News</h3>
                </div>
                <p className="text-linkup-text-muted mb-6 leading-relaxed">
                  Stay informed on trends, regulations, and developments in your industry. You can search for one or multiple topics.
                </p>

                <div className="space-y-6">
                  <PromptBlock
                    title="industry-market-news"
                    code={`You are a market intelligence analyst searching for industry news.

Industry: {industry}
Key Words to monitor: {words}
Geographic focus: {regions}

Search for recent news covering:
- Market trends and forecasts
- Regulatory changes and policy updates
- Major deals (M&A, partnerships, funding rounds)
- New product or technology announcements
- Industry challenges or disruptions
- Expert analysis and commentary

Prioritize:
1. Tier-1 business publications (WSJ, Bloomberg, Reuters, Financial Times)
2. Industry-specific trade publications
3. Regional business journals for {regions}

Exclude opinion pieces without factual news content.`}
                  />

                  <SchemaBlock
                    title="industry-news-schema.json"
                    code={`{
  "type": "object",
  "properties": {
    "industry": { "type": "string" },
    "period": { "type": "string" },
    "news_by_category": {
      "type": "object",
      "properties": {
        "market_trends": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "headline": { "type": "string" },
              "source": { "type": "string" },
              "date": { "type": "string" },
              "url": { "type": "string" },
              "key_takeaway": { "type": "string" }
            }
          }
        },
        "regulatory": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "headline": { "type": "string" },
              "source": { "type": "string" },
              "date": { "type": "string" },
              "url": { "type": "string" },
              "key_takeaway": { "type": "string" }
            }
          }
        },
        "deals_and_funding": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "headline": { "type": "string" },
              "source": { "type": "string" },
              "date": { "type": "string" },
              "url": { "type": "string" },
              "key_takeaway": { "type": "string" }
            }
          }
        },
        "product_launches": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "headline": { "type": "string" },
              "source": { "type": "string" },
              "date": { "type": "string" },
              "url": { "type": "string" },
              "key_takeaway": { "type": "string" }
            }
          }
        }
      }
    },
    "executive_summary": { "type": "string" }
  }
}`}
                  />
                </div>
              </div>

              {/* Use Case 2: Company Specific Monitoring */}
              <div id="company-monitoring" className="card p-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="w-10 h-10 bg-linkup-green text-white rounded-full flex items-center justify-center text-lg font-bold">2</span>
                  <h3 className="text-xl font-semibold text-linkup-text">Company Specific Monitoring</h3>
                </div>
                <p className="text-linkup-text-muted mb-6 leading-relaxed">
                  Track news mentions for your company, competitors, or portfolio companies.
                </p>

                <div className="space-y-6">
                  <PromptBlock
                    title="company-monitoring"
                    code={`You are a media monitoring analyst tracking news about a specific company.

Company: {company_name}
Also known as: {aliases}
Key executives to track: {executive_names}

Search for recent news articles mentioning {company_name} including:
- Company announcements and press releases
- Product launches or updates
- Funding, M&A, or financial news
- Executive changes or quotes
- Industry analysis mentioning the company
- Any controversies or negative coverage

For each article found, extract the headline, publication, date, and a brief summary of why the company was mentioned. Don't use the same article more than once.

Exclude job postings, event listings, and stock ticker mentions without substance.`}
                  />

                  <SchemaBlock
                    title="company-monitoring-schema.json"
                    code={`{
  "type": "object",
  "properties": {
    "company": { "type": "string" },
    "monitoring_period": {
      "type": "object",
      "properties": {
        "from": { "type": "string" },
        "to": { "type": "string" }
      }
    },
    "articles": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "headline": { "type": "string" },
          "publication": { "type": "string" },
          "date": { "type": "string" },
          "url": { "type": "string" },
          "summary": { "type": "string" },
          "mention_type": {
            "type": "string",
            "enum": ["primary_subject", "mentioned", "quoted", "industry_context"]
          },
          "sentiment": {
            "type": "string",
            "enum": ["positive", "neutral", "negative", "mixed"]
          },
          "topics": {
            "type": "array",
            "items": { "type": "string" }
          }
        }
      }
    },
    "summary": {
      "type": "object",
      "properties": {
        "total_mentions": { "type": "integer" },
        "sentiment_breakdown": {
          "type": "object",
          "properties": {
            "positive": { "type": "integer" },
            "neutral": { "type": "integer" },
            "negative": { "type": "integer" }
          }
        },
        "top_topics": {
          "type": "array",
          "items": { "type": "string" }
        }
      }
    }
  }
}`}
                  />
                </div>
              </div>

              {/* Use Case 3: Event-Triggered News Search */}
              <div id="event-triggered" className="card p-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="w-10 h-10 bg-linkup-green text-white rounded-full flex items-center justify-center text-lg font-bold">3</span>
                  <h3 className="text-xl font-semibold text-linkup-text">Event-Triggered News Search</h3>
                </div>
                <p className="text-linkup-text-muted mb-6 leading-relaxed">
                  Search for news about a specific event, announcement, or development.
                </p>

                <div className="space-y-6">
                  <PromptBlock
                    title="event-triggered"
                    code={`You are a research analyst investigating a specific news event.

Event: {event_description}
Date of event: {event_date}
Key entities involved: {entities}

Search for comprehensive coverage of this event:

1. Find the original breaking news or announcement source—identify who reported it first.

2. Search for follow-up coverage and analysis from major publications. For each article:
   - Scrape the full article to understand the angle and new information added
   - Write a one-line brief (under 20 words) summarizing what this article contributes to the story

3. Search for reactions and commentary from:
   - Industry analysts and market commentators
   - Affected parties (companies, individuals, organizations mentioned)
   - Subject matter experts in relevant fields
   - Social media and public figures

4. Search for any contradictory reports, corrections, updates, or retractions.

5. Compile a timeline of how the story developed, noting when new information emerged.

Do not stop until you have found the original source and at least 4 to 8 pieces of follow-up coverage.`}
                  />

                  <SchemaBlock
                    title="event-triggered-schema.json"
                    code={`{
  "type": "object",
  "properties": {
    "event": { "type": "string" },
    "event_date": { "type": "string" },
    "original_source": {
      "type": "object",
      "properties": {
        "headline": { "type": "string" },
        "brief": {
          "type": "string",
          "description": "One-line summary under 20 words of the original breaking news"
        },
        "publication": { "type": "string" },
        "url": { "type": "string" },
        "timestamp": { "type": "string" },
        "how_identified": {
          "type": "string",
          "description": "Why this is believed to be the original source"
        }
      }
    },
    "timeline": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "timestamp": { "type": "string" },
          "development": { "type": "string" },
          "brief": {
            "type": "string",
            "description": "One-line summary under 20 words of this development"
          },
          "source": { "type": "string" },
          "url": { "type": "string" },
          "development_type": {
            "type": "string",
            "enum": ["breaking", "update", "analysis", "reaction", "correction", "follow_up"]
          }
        }
      }
    },
    "coverage": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "publication": { "type": "string" },
          "headline": { "type": "string" },
          "brief": {
            "type": "string",
            "description": "One-line summary under 20 words of what this article adds to the story"
          },
          "url": { "type": "string" },
          "timestamp": { "type": "string" },
          "angle": {
            "type": "string",
            "description": "The publication's framing or unique perspective on the event"
          },
          "new_information": {
            "type": "array",
            "items": { "type": "string" },
            "description": "Facts or details not in previous coverage"
          },
          "sentiment": {
            "type": "string",
            "enum": ["positive", "negative", "neutral", "mixed"]
          }
        }
      }
    },
    "expert_reactions": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "expert_name": { "type": "string" },
          "title": { "type": "string" },
          "affiliation": { "type": "string" },
          "brief": {
            "type": "string",
            "description": "One-line summary under 20 words of their reaction"
          },
          "stance": {
            "type": "string",
            "enum": ["supportive", "critical", "cautious", "neutral", "mixed"]
          },
          "source": { "type": "string" },
          "url": { "type": "string" }
        }
      }
    },
    "conflicting_reports": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "discrepancy": { "type": "string" },
          "source_a": { "type": "string" },
          "source_a_claim": { "type": "string" },
          "source_b": { "type": "string" },
          "source_b_claim": { "type": "string" },
          "resolution": {
            "type": "string",
            "description": "How/if the discrepancy was resolved, or 'unresolved'"
          }
        }
      }
    },
    "summary": {
      "type": "object",
      "properties": {
        "total_sources": { "type": "integer" },
        "story_status": {
          "type": "string",
          "enum": ["developing", "stable", "concluded", "disputed"]
        },
        "key_takeaway": {
          "type": "string",
          "description": "One-line summary of the current state of the story"
        },
        "unanswered_questions": {
          "type": "array",
          "items": { "type": "string" }
        }
      }
    }
  }
}`}
                  />
                </div>
              </div>

              {/* Use Case 4: Competitive Intelligence News */}
              <div id="competitive-intel" className="card p-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="w-10 h-10 bg-linkup-green text-white rounded-full flex items-center justify-center text-lg font-bold">4</span>
                  <h3 className="text-xl font-semibold text-linkup-text">Competitive Intelligence News</h3>
                </div>
                <p className="text-linkup-text-muted mb-6 leading-relaxed">
                  Monitor competitor activities and market positioning.
                </p>

                <div className="space-y-6">
                  <PromptBlock
                    title="competitive-intel"
                    code={`You are a competitive intelligence analyst tracking competitor news.

Competitors to monitor:
{competitor_list}

For each competitor, search for recent news about:
- Product launches or updates
- Pricing changes or promotions
- Strategic partnerships or integrations
- Funding rounds or financial performance
- Leadership changes
- Customer wins or case studies
- Expansion into new markets or segments

Also search for comparative articles that mention multiple competitors or industry rankings.

Organize findings by competitor, then by topic.`}
                  />

                  <SchemaBlock
                    title="competitive-intel-schema.json"
                    code={`{
  "type": "object",
  "properties": {
    "monitoring_period": { "type": "string" },
    "competitors": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "company_name": { "type": "string" },
          "news_items": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "headline": { "type": "string" },
                "source": { "type": "string" },
                "date": { "type": "string" },
                "url": { "type": "string" },
                "category": {
                  "type": "string",
                  "enum": ["product", "pricing", "partnership", "funding", "leadership", "customer_win", "expansion", "other"]
                },
                "summary": { "type": "string" },
                "strategic_implication": { "type": "string" }
              }
            }
          },
          "activity_level": {
            "type": "string",
            "enum": ["high", "moderate", "low", "quiet"]
          }
        }
      }
    },
    "comparative_coverage": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "headline": { "type": "string" },
          "source": { "type": "string" },
          "url": { "type": "string" },
          "companies_mentioned": {
            "type": "array",
            "items": { "type": "string" }
          },
          "key_insight": { "type": "string" }
        }
      }
    },
    "key_takeaways": {
      "type": "array",
      "items": { "type": "string" }
    }
  }
}`}
                  />
                </div>
              </div>

              {/* Use Case 5: Executive & People News */}
              <div id="executive-news" className="card p-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="w-10 h-10 bg-linkup-green text-white rounded-full flex items-center justify-center text-lg font-bold">5</span>
                  <h3 className="text-xl font-semibold text-linkup-text">Executive & People News</h3>
                </div>
                <p className="text-linkup-text-muted mb-6 leading-relaxed">
                  Track news about specific individuals—executives, investors, board members.
                </p>

                <div className="space-y-6">
                  <PromptBlock
                    title="executive-news"
                    code={`You are a research analyst tracking news about key individuals.

Person: {person_name}
Current role: {current_role}
Company: {company}
Previous roles (if relevant): {previous_roles}

Search for recent news mentioning {person_name}:
- Quotes or interviews given
- Speaking engagements or conference appearances
- Board appointments or advisory roles
- Published articles or thought leadership
- Personal news (awards, appointments, departures)
- Mentions in company news

Exclude routine mentions (e.g., standard bylines, boilerplate leadership bios).`}
                  />

                  <SchemaBlock
                    title="executive-news-schema.json"
                    code={`{
  "type": "object",
  "properties": {
    "person": { "type": "string" },
    "current_role": { "type": "string" },
    "company": { "type": "string" },
    "news_items": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "headline": { "type": "string" },
          "source": { "type": "string" },
          "date": { "type": "string" },
          "url": { "type": "string" },
          "mention_type": {
            "type": "string",
            "enum": ["interview", "quote", "speaking", "byline", "appointment", "award", "departure", "general_mention"]
          },
          "summary": { "type": "string" },
          "notable_quotes": {
            "type": "array",
            "items": { "type": "string" }
          }
        }
      }
    },
    "public_positions": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "topic": { "type": "string" },
          "position": { "type": "string" },
          "source": { "type": "string" }
        }
      }
    }
  }
}`}
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
                    <span><strong>Use date filters</strong> — News without time bounds might return outdated content</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-linkup-green mt-0.5 font-bold">2</span>
                    <span><strong>Include company aliases and ticker symbols</strong> — &quot;Meta&quot; vs &quot;Facebook&quot; vs &quot;META&quot; can yield different results</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-linkup-green mt-0.5 font-bold">3</span>
                    <span><strong>Use includeDomains for quality control</strong> — Restrict to trusted publications when accuracy matters</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-linkup-green mt-0.5 font-bold">4</span>
                    <span><strong>Request sentiment classification</strong> — Useful for monitoring and alerting workflows</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-linkup-green mt-0.5 font-bold">5</span>
                    <span><strong>Ask for &quot;key takeaway&quot; summaries</strong> — More useful than full article text for digests</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-linkup-green mt-0.5 font-bold">6</span>
                    <span><strong>Use deep for investigative research</strong> — When you need to follow threads across sources</span>
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
                    <span><strong>Don&apos;t search for overly broad terms</strong> — &quot;Technology news&quot; is too vague; be specific</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 mt-0.5 font-bold">2</span>
                    <span><strong>Don&apos;t forget to exclude noise</strong> — Job postings, event listings, and stock tickers without context</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Date Filters */}
          <section id="date-filters" className="card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-linkup-green/10 rounded-xl flex items-center justify-center">
                <CalendarIcon className="w-5 h-5 text-linkup-green" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-linkup-text">Working with Date Filters</h2>
                <p className="text-sm text-linkup-text-muted">Date filtering is critical for news search</p>
              </div>
            </div>

            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-linkup-border">
                    <th className="text-left py-3 px-4 font-semibold text-linkup-text">Need</th>
                    <th className="text-left py-3 px-4 font-semibold text-linkup-text">Parameters</th>
                  </tr>
                </thead>
                <tbody className="text-linkup-text-muted">
                  <tr className="border-b border-linkup-border-light">
                    <td className="py-3 px-4">Last 24 hours</td>
                    <td className="py-3 px-4"><code className="bg-linkup-beige px-2 py-1 rounded text-linkup-green-dark font-medium">fromDate: &quot;&#123;yesterday&#125;&quot;</code></td>
                  </tr>
                  <tr className="border-b border-linkup-border-light">
                    <td className="py-3 px-4">Last 7 days</td>
                    <td className="py-3 px-4"><code className="bg-linkup-beige px-2 py-1 rounded text-linkup-green-dark font-medium">fromDate: &quot;&#123;7_days_ago&#125;&quot;</code></td>
                  </tr>
                  <tr className="border-b border-linkup-border-light">
                    <td className="py-3 px-4">Last 30 days</td>
                    <td className="py-3 px-4"><code className="bg-linkup-beige px-2 py-1 rounded text-linkup-green-dark font-medium">fromDate: &quot;&#123;30_days_ago&#125;&quot;</code></td>
                  </tr>
                  <tr className="border-b border-linkup-border-light">
                    <td className="py-3 px-4">Specific week</td>
                    <td className="py-3 px-4"><code className="bg-linkup-beige px-2 py-1 rounded text-linkup-green-dark font-medium">fromDate: &quot;&#123;week_start&#125;&quot;, toDate: &quot;&#123;week_end&#125;&quot;</code></td>
                  </tr>
                  <tr className="border-b border-linkup-border-light">
                    <td className="py-3 px-4">Since last check</td>
                    <td className="py-3 px-4"><code className="bg-linkup-beige px-2 py-1 rounded text-linkup-green-dark font-medium">fromDate: &quot;&#123;last_run_timestamp&#125;&quot;</code></td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">Historical research</td>
                    <td className="py-3 px-4"><code className="bg-linkup-beige px-2 py-1 rounded text-linkup-green-dark font-medium">fromDate: &quot;&#123;start&#125;&quot;, toDate: &quot;&#123;end&#125;&quot;</code></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <Callout type="tip">
              Use ISO 8601 format (YYYY-MM-DD) for dates. For monitoring, store your last successful run timestamp and use it as fromDate. For event research, start with a narrow window around the event, then expand if needed.
            </Callout>
          </section>

          {/* Source Quality Tiers */}
          <section id="source-tiers" className="card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-linkup-green/10 rounded-xl flex items-center justify-center">
                <GlobeIcon className="w-5 h-5 text-linkup-green" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-linkup-text">Source Quality Tiers (Examples)</h2>
                <p className="text-sm text-linkup-text-muted">Consider restricting to quality sources for critical use cases</p>
              </div>
            </div>

            <div className="space-y-6">
              <CodeBlock
                title="Tier 1 — Major Business Publications"
                language="json"
                code={`{
  "includeDomains": [
    "reuters.com",
    "bloomberg.com",
    "wsj.com",
    "ft.com",
    "nytimes.com",
    "economist.com"
  ]
}`}
              />

              <CodeBlock
                title="Tier 2 — Tech & Startup Coverage"
                language="json"
                code={`{
  "includeDomains": [
    "techcrunch.com",
    "theverge.com",
    "wired.com",
    "arstechnica.com",
    "venturebeat.com"
  ]
}`}
              />

              <CodeBlock
                title="Tier 3 — Industry Trade Publications (Healthcare Example)"
                language="json"
                code={`{
  "includeDomains": [
    "statnews.com",
    "fiercehealthcare.com",
    "healthcaredive.com",
    "modernhealthcare.com"
  ]
}`}
              />

              <CodeBlock
                title="Sources to Consider Excluding"
                language="json"
                code={`{
  "excludeDomains": [
    "pinterest.com",
    "facebook.com",
    "linkedin.com"
  ]
}`}
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
                <p className="text-sm text-linkup-text-muted">How to integrate news search into your workflow</p>
              </div>
            </div>

            <div className="space-y-4">
              {[
                {
                  title: "Daily News Monitoring",
                  desc: "Automated daily news digests",
                  steps: [
                    "Schedule daily job (e.g., 6 AM)",
                    "Set fromDate = yesterday, toDate = today",
                    "Call Linkup for each monitored entity/topic",
                    "Deduplicate across queries",
                    "Score/rank by relevance and sentiment",
                    "Deliver via email, Slack, or dashboard"
                  ]
                },
                {
                  title: "Real-Time Alerting",
                  desc: "Immediate notifications for important news",
                  steps: [
                    "Run frequent checks (hourly or more)",
                    "Set fromDate = last_check_timestamp",
                    "Filter for high-priority signals (negative sentiment, specific keywords)",
                    "Trigger immediate alerts for matches",
                    "Update last_check_timestamp"
                  ]
                },
                {
                  title: "Weekly Digest Generation",
                  desc: "Comprehensive weekly briefings",
                  steps: [
                    "Schedule weekly job",
                    "Set fromDate = 7 days ago",
                    "Use deep search for comprehensive coverage",
                    "Generate executive briefing format",
                    "Include trend analysis across the week",
                    "Deliver as formatted report"
                  ]
                },
                {
                  title: "Research Projects",
                  desc: "In-depth research and analysis",
                  steps: [
                    "Define research question and entities",
                    "Set appropriate date range",
                    "Use deep search with follow-up instructions",
                    "Aggregate and deduplicate sources",
                    "Extract key facts and quotes",
                    "Compile into research memo"
                  ]
                }
              ].map((pattern, idx) => (
                <div key={idx} className="p-5 bg-linkup-cream/50 border border-linkup-border-light rounded-xl">
                  <h3 className="text-lg font-semibold text-linkup-text">{pattern.title}</h3>
                  <p className="text-sm text-linkup-text-muted mb-3">{pattern.desc}</p>
                  <ol className="list-none space-y-1.5 text-sm text-linkup-text-muted">
                    {pattern.steps.map((step, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-linkup-green">{i + 1}.</span>
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
                <p className="text-sm text-linkup-text-muted">Python example for industry news monitoring</p>
              </div>
            </div>
            <CodeBlock
              title="news_monitor.py"
              language="python"
              dark
              code={`import requests
import json

def monitor_industry_news(industry: str, keywords: list, regions: list, api_key: str) -> dict:
    """
    Monitor industry news using Linkup API
    """
    words = ", ".join(keywords)
    geo = ", ".join(regions)

    prompt = f"""
    You are a market intelligence analyst searching for industry news.

    Industry: {industry}
    Keywords to monitor: {words}
    Geographic focus: {geo}

    Search for recent news covering:
    - Market trends and forecasts
    - Regulatory changes and policy updates
    - Major deals (M&A, partnerships, funding rounds)
    - New product or technology announcements
    - Industry challenges or disruptions
    - Expert analysis and commentary

    Prioritize:
    1. Tier-1 business publications (WSJ, Bloomberg, Reuters, Financial Times)
    2. Industry-specific trade publications
    3. Regional business journals for {geo}

    Exclude opinion pieces without factual news content.
    """

    schema = {
        "type": "object",
        "properties": {
            "industry": {"type": "string"},
            "date_range": {"type": "string"},
            "articles": {
                "type": "array",
                "items": {
                    "type": "object",
                    "properties": {
                        "headline": {"type": "string"},
                        "source": {"type": "string"},
                        "date": {"type": "string"},
                        "category": {"type": "string"},
                        "summary": {"type": "string"},
                        "relevance": {"type": "string"}
                    }
                }
            },
            "key_trends": {"type": "array", "items": {"type": "string"}},
            "notable_companies": {"type": "array", "items": {"type": "string"}}
        }
    }

    response = requests.post(
        "https://api.linkup.so/v1/search",
        headers={"Authorization": f"Bearer {api_key}"},
        json={
            "q": prompt,
            "depth": "deep",
            "outputType": "structured",
            "structuredOutputSchema": json.dumps(schema)
        },
        timeout=60
    )

    return response.json()

if __name__ == "__main__":
    API_KEY = "your-api-key"

    result = monitor_industry_news(
        industry="<your-industry>",
        keywords=["<keyword-1>", "<keyword-2>", "<keyword-3>"],
        regions=["<region-1>", "<region-2>"],
        api_key=API_KEY
    )

    print(json.dumps(result, indent=2))`}
            />
          </section>
        </div>
      </main>
    </div>
  );
}
