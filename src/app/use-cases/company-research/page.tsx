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

function BuildingIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 21h18"/>
      <path d="M5 21V7l8-4v18"/>
      <path d="M19 21V11l-6-4"/>
      <path d="M9 9v.01"/>
      <path d="M9 12v.01"/>
      <path d="M9 15v.01"/>
      <path d="M9 18v.01"/>
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

function LayersIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12,2 2,7 12,12 22,7 12,2"/>
      <polyline points="2,17 12,22 22,17"/>
      <polyline points="2,12 12,17 22,12"/>
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
  { id: "comprehensive-profile", title: "Comprehensive Company Profile", description: "Build complete profiles from multiple sources" },
  { id: "investment-research", title: "Investment & Due Diligence", description: "Deep research for investment decisions or M&A" },
  { id: "competitive-intelligence", title: "Competitive Intelligence", description: "Research competitors to inform strategy" },
  { id: "sales-account", title: "Sales Account Research", description: "Prepare for outreach or meetings" },
  { id: "market-research", title: "Market & Industry Research", description: "Map market segments and landscapes" },
  { id: "quick-lookup", title: "Quick Company Lookup", description: "Fast context when you need it quickly" },
];

export default function CompanyResearchPage() {
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
              <BuildingIcon className="w-8 h-8" />
            </div>
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-linkup-text mb-4">
                How to research companies with Linkup
              </h1>
              <p className="text-lg text-linkup-text-muted leading-relaxed">
                Systematic, structured company research for sales prospecting, investment analysis, competitive intelligence, partnership evaluation, vendor assessment, and more.
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
            <a href="#data-sources" className="group flex items-center gap-2 px-4 py-2.5 bg-white border border-linkup-border rounded-xl hover:border-linkup-green/40 hover:bg-linkup-green/5 transition-all duration-200">
              <LayersIcon className="w-4 h-4 text-linkup-text-muted group-hover:text-linkup-green transition-colors" />
              <span className="text-sm font-medium text-linkup-text group-hover:text-linkup-green transition-colors">Data Sources</span>
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
              Company research is foundational to nearly every business workflow—sales prospecting, investment analysis, competitive intelligence, partnership evaluation, vendor assessment, and more. Linkup enables systematic, structured company research that goes far beyond basic firmographics, pulling together information from websites, news, filings, social presence, and more into actionable intelligence.
            </p>

            <div className="flex items-center gap-2 mb-4">
              <div className="w-1 h-4 bg-linkup-green rounded-full"></div>
              <h3 className="text-lg font-semibold text-linkup-text">Why Linkup for company research?</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { code: "multi-step research", desc: "Deep search executes: find website → scrape → find LinkedIn → find news → synthesize" },
                { code: "structured output", desc: "Returns consistent company profiles ready for databases and workflows" },
                { code: "agentic retrieval", desc: "Navigates across company websites, LinkedIn, news sources, and regulatory filings" },
                { code: "date filtering", desc: "Surface recent developments and filter out stale information" }
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
                <p className="text-sm text-linkup-text-muted">Recommended settings for company research</p>
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
                    <td className="py-4 px-4"><code className="bg-amber-100 px-2 py-1 rounded text-amber-700 font-medium">deep</code></td>
                    <td className="py-4 px-4">Company research requires gathering from multiple sources</td>
                  </tr>
                  <tr className="hover:bg-linkup-cream/30 transition-colors">
                    <td className="py-4 px-4"><code className="bg-linkup-beige px-2 py-1 rounded text-linkup-green-dark font-medium">outputType</code></td>
                    <td className="py-4 px-4"><code className="bg-linkup-green/10 px-2 py-1 rounded text-linkup-green font-medium">structured</code></td>
                    <td className="py-4 px-4">Consistent format for CRM, databases, and automation</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-6">
              <Callout type="tip">
                For recent developments, say so in the query — &quot;news from the past 90 days&quot; — rather
                than reaching for a date filter. The retrieval step acts on that instruction, and you keep
                undated pages like an About or team page that a date filter would drop.
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
              {/* Use Case 1: Comprehensive Company Profile */}
              <div id="comprehensive-profile" className="card p-8 scroll-mt-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-8 bg-linkup-green text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
                  <h3 className="text-xl font-semibold text-linkup-text">Comprehensive Company Profile</h3>
                </div>
                <p className="text-linkup-text-muted mb-6">
                  Build a complete company profile from multiple sources.
                </p>

                <div className="space-y-4">
                  <PromptBlock
                    title="Company Profile"
                    code={`You are a business research analyst building a comprehensive company profile.

Company: {company_name}
Domain: {company_domain}

Execute thorough company research:

1. Website Analysis:
   - Scrape {company_domain} for company description, value proposition, and positioning
   - Identify products/services offered
   - Find target customers and use cases
   - Extract any visible customer logos or case studies
   - Note pricing model if visible (freemium, subscription, enterprise, etc.)

2. Company Fundamentals:
   - Search for LinkedIn company page to find:
     - Employee count and growth
     - Headquarters location
     - Founded year
     - Industry classification
   - Search for company registration details if available

3. Funding & Financials:
   - Search for funding history (rounds, amounts, investors)
   - Find any revenue or valuation information if public
   - Identify financial health signals

4. Leadership & Team:
   - Find CEO/founder names and backgrounds
   - Identify key executives
   - Note any recent leadership changes

5. Recent Developments:
   - Search for news from the past 90 days
   - Find product launches or major announcements
   - Identify any strategic moves (partnerships, acquisitions, expansions)

6. Market Position:
   - Identify main competitors
   - Find any analyst coverage or market positioning
   - Note awards, recognition, or rankings

Return a comprehensive company profile with all findings.`}
                  />

                  <SchemaBlock
                    title="Company Profile Schema"
                    code={`{
  "type": "object",
  "properties": {
    "company_name": { "type": "string" },
    "domain": { "type": "string" },
    "overview": {
      "type": "object",
      "properties": {
        "description": { "type": "string" },
        "value_proposition": { "type": "string" },
        "industry": { "type": "string" },
        "sub_industry": { "type": "string" },
        "business_model": { "type": "string" },
        "founded_year": { "type": "integer" },
        "headquarters": { "type": "string" },
        "employee_count": { "type": "string" },
        "employee_growth": { "type": "string" }
      }
    },
    "products_services": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "name": { "type": "string" },
          "description": { "type": "string" },
          "target_customer": { "type": "string" }
        }
      }
    },
    "target_market": {
      "type": "object",
      "properties": {
        "customer_segments": { "type": "array", "items": { "type": "string" } },
        "use_cases": { "type": "array", "items": { "type": "string" } },
        "geographic_focus": { "type": "array", "items": { "type": "string" } }
      }
    },
    "financials": {
      "type": "object",
      "properties": {
        "funding_stage": { "type": "string" },
        "total_funding": { "type": "string" },
        "latest_round": {
          "type": "object",
          "properties": {
            "type": { "type": "string" },
            "amount": { "type": "string" },
            "date": { "type": "string" },
            "investors": { "type": "array", "items": { "type": "string" } }
          }
        },
        "valuation": { "type": "string" }
      }
    },
    "leadership": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "name": { "type": "string" },
          "title": { "type": "string" },
          "linkedin_url": { "type": "string" },
          "background": { "type": "string" }
        }
      }
    },
    "customers": {
      "type": "object",
      "properties": {
        "notable_customers": { "type": "array", "items": { "type": "string" } },
        "case_studies": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "customer": { "type": "string" },
              "summary": { "type": "string" }
            }
          }
        }
      }
    },
    "competitors": { "type": "array", "items": { "type": "string" } },
    "recent_news": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "headline": { "type": "string" },
          "date": { "type": "string" },
          "summary": { "type": "string" },
          "source": { "type": "string" }
        }
      }
    },
    "social_presence": {
      "type": "object",
      "properties": {
        "linkedin_url": { "type": "string" },
        "twitter_handle": { "type": "string" },
        "blog_url": { "type": "string" }
      }
    }
  }
}`}
                  />
                </div>
              </div>

              {/* Use Case 2: Investment & Due Diligence */}
              <div id="investment-research" className="card p-8 scroll-mt-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-8 bg-linkup-green text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
                  <h3 className="text-xl font-semibold text-linkup-text">Investment & Due Diligence Research</h3>
                </div>
                <p className="text-linkup-text-muted mb-6">
                  Deep research for investment decisions or M&A due diligence.
                </p>

                <div className="space-y-4">
                  <PromptBlock
                    title="Investment Research"
                    code={`You are an investment research analyst conducting due diligence.

Company: {company_name}
Domain: {company_domain}
Investment context: {context}

Conduct thorough investment research:

1. Business Model Analysis:
   - Scrape website for detailed understanding of products/services
   - Identify revenue streams and pricing model
   - Assess scalability of the business model
   - Find unit economics indicators if available

2. Market Opportunity:
   - Search for TAM/SAM/SOM estimates for their market
   - Find industry growth projections
   - Identify market trends favoring or threatening the company
   - Search for analyst reports on the sector

3. Competitive Landscape:
   - Identify direct and indirect competitors
   - Search for competitive comparisons and positioning
   - Find any market share data
   - Assess competitive moats and differentiation

4. Funding & Cap Table:
   - Find complete funding history with all rounds
   - Identify all known investors
   - Search for any secondary transactions or valuation benchmarks
   - Find any debt or non-equity financing

5. Traction & Metrics:
   - Search for any public metrics (users, revenue, growth rates)
   - Find customer testimonials and case studies
   - Identify key partnerships and integrations
   - Look for awards, rankings, or third-party validation

6. Risk Factors:
   - Search for any negative news or controversies
   - Identify regulatory risks in their space
   - Look for customer complaints or churn signals
   - Find any litigation or legal issues
   - Assess key person risk and team stability

7. Recent Developments:
   - Search news from past 6 months
   - Find any strategic announcements
   - Identify trajectory signals (growth vs. contraction)

Return detailed investment research with risk assessment.`}
                  />

                  <SchemaBlock
                    title="Investment Research Schema"
                    code={`{
  "type": "object",
  "properties": {
    "company": { "type": "string" },
    "research_date": { "type": "string" },
    "business_model": {
      "type": "object",
      "properties": {
        "description": { "type": "string" },
        "revenue_streams": { "type": "array", "items": { "type": "string" } },
        "pricing_model": { "type": "string" },
        "scalability_assessment": { "type": "string" }
      }
    },
    "market_opportunity": {
      "type": "object",
      "properties": {
        "tam_estimate": { "type": "string" },
        "market_growth_rate": { "type": "string" },
        "favorable_trends": { "type": "array", "items": { "type": "string" } },
        "headwinds": { "type": "array", "items": { "type": "string" } }
      }
    },
    "competitive_landscape": {
      "type": "object",
      "properties": {
        "direct_competitors": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "name": { "type": "string" },
              "funding": { "type": "string" },
              "differentiation": { "type": "string" }
            }
          }
        },
        "competitive_positioning": { "type": "string" },
        "moats": { "type": "array", "items": { "type": "string" } }
      }
    },
    "funding_history": {
      "type": "object",
      "properties": {
        "total_raised": { "type": "string" },
        "rounds": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "round": { "type": "string" },
              "amount": { "type": "string" },
              "date": { "type": "string" },
              "lead_investor": { "type": "string" }
            }
          }
        },
        "last_valuation": { "type": "string" }
      }
    },
    "traction": {
      "type": "object",
      "properties": {
        "public_metrics": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "metric": { "type": "string" },
              "value": { "type": "string" },
              "source": { "type": "string" }
            }
          }
        },
        "notable_customers": { "type": "array", "items": { "type": "string" } },
        "partnerships": { "type": "array", "items": { "type": "string" } }
      }
    },
    "risk_factors": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "risk": { "type": "string" },
          "severity": { "type": "string", "enum": ["high", "medium", "low"] },
          "description": { "type": "string" }
        }
      }
    },
    "investment_summary": {
      "type": "object",
      "properties": {
        "strengths": { "type": "array", "items": { "type": "string" } },
        "concerns": { "type": "array", "items": { "type": "string" } },
        "key_questions": { "type": "array", "items": { "type": "string" } }
      }
    }
  }
}`}
                  />
                </div>
              </div>

              {/* Use Case 3: Competitive Intelligence */}
              <div id="competitive-intelligence" className="card p-8 scroll-mt-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-8 bg-linkup-green text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
                  <h3 className="text-xl font-semibold text-linkup-text">Competitive Intelligence</h3>
                </div>
                <p className="text-linkup-text-muted mb-6">
                  Research competitors to inform strategy and positioning.
                </p>

                <div className="space-y-4">
                  <PromptBlock
                    title="Competitive Intelligence"
                    code={`You are a competitive intelligence analyst researching a competitor.

Competitor: {competitor_name}
Domain: {competitor_domain}
Our company: {our_company}
Our product category: {product_category}

Conduct competitive research:

1. Product Analysis:
   - Scrape their website thoroughly for product features
   - Identify their core value proposition vs. ours
   - Find their pricing structure and packaging
   - Note any recent product launches or updates
   - Identify integrations and partnerships

2. Go-to-Market Strategy:
   - Identify their target customer segments
   - Find their positioning and messaging
   - Search for their marketing channels and content strategy
   - Look for case studies and customer testimonials
   - Identify their sales motion (PLG, sales-led, hybrid)

3. Strengths & Weaknesses:
   - Search for product reviews and comparisons
   - Find G2, Capterra, or other review site ratings
   - Look for user complaints and feature gaps
   - Identify what customers praise

4. Business Health:
   - Find recent funding or financial news
   - Look for hiring patterns (growth vs. contraction)
   - Search for any layoffs or restructuring
   - Identify leadership changes

5. Strategic Moves:
   - Search news for partnerships, acquisitions, or expansions
   - Find any public statements about strategy or roadmap
   - Identify new market entries or pivots

6. Customer Intelligence:
   - Find their notable customers
   - Search for customer churn stories or wins against them
   - Identify customer segments they're strong/weak in

Return competitive intelligence with actionable insights.`}
                  />

                  <SchemaBlock
                    title="Competitive Intelligence Schema"
                    code={`{
  "type": "object",
  "properties": {
    "competitor": { "type": "string" },
    "product_analysis": {
      "type": "object",
      "properties": {
        "core_product": { "type": "string" },
        "value_proposition": { "type": "string" },
        "key_features": { "type": "array", "items": { "type": "string" } },
        "pricing": {
          "type": "object",
          "properties": {
            "model": { "type": "string" },
            "tiers": {
              "type": "array",
              "items": {
                "type": "object",
                "properties": {
                  "name": { "type": "string" },
                  "price": { "type": "string" }
                }
              }
            }
          }
        },
        "integrations": { "type": "array", "items": { "type": "string" } }
      }
    },
    "go_to_market": {
      "type": "object",
      "properties": {
        "target_segments": { "type": "array", "items": { "type": "string" } },
        "positioning": { "type": "string" },
        "sales_motion": { "type": "string" },
        "marketing_channels": { "type": "array", "items": { "type": "string" } }
      }
    },
    "strengths_weaknesses": {
      "type": "object",
      "properties": {
        "strengths": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "strength": { "type": "string" },
              "evidence": { "type": "string" }
            }
          }
        },
        "weaknesses": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "weakness": { "type": "string" },
              "evidence": { "type": "string" }
            }
          }
        },
        "review_scores": {
          "type": "object",
          "properties": {
            "g2_rating": { "type": "string" },
            "common_praise": { "type": "array", "items": { "type": "string" } },
            "common_complaints": { "type": "array", "items": { "type": "string" } }
          }
        }
      }
    },
    "business_health": {
      "type": "object",
      "properties": {
        "funding_status": { "type": "string" },
        "employee_count": { "type": "string" },
        "hiring_trend": { "type": "string", "enum": ["aggressive_growth", "steady", "slowing", "contracting"] },
        "recent_layoffs": { "type": "boolean" }
      }
    },
    "competitive_insights": {
      "type": "object",
      "properties": {
        "where_they_win": { "type": "array", "items": { "type": "string" } },
        "where_we_win": { "type": "array", "items": { "type": "string" } },
        "battlecard_points": { "type": "array", "items": { "type": "string" } }
      }
    }
  }
}`}
                  />
                </div>
              </div>

              {/* Use Case 4: Sales Account Research */}
              <div id="sales-account" className="card p-8 scroll-mt-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-8 bg-linkup-green text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
                  <h3 className="text-xl font-semibold text-linkup-text">Sales Account Research</h3>
                </div>
                <p className="text-linkup-text-muted mb-6">
                  Research target accounts to prepare for outreach or meetings.
                </p>

                <div className="space-y-4">
                  <PromptBlock
                    title="Sales Account Research"
                    code={`You are a sales research assistant preparing account intelligence.

Target account: {company_name}
Domain: {company_domain}
Our product: {our_product}
Upcoming: {meeting_or_outreach}

Research this account for sales preparation:

1. Company Context:
   - Scrape website for business overview and priorities
   - Identify their products/services and target market
   - Find company size, growth stage, and recent news
   - Understand their business model

2. Pain Point Discovery:
   - Search for challenges they've mentioned publicly
   - Find blog posts or content indicating priorities
   - Look for job postings signaling initiatives
   - Identify industry challenges that affect them

3. Technology & Stack:
   - Search for technologies they use (job postings, builtwith, integrations)
   - Identify current solutions in our category (competitor usage)
   - Find integration requirements or preferences

4. Buying Signals:
   - Search for recent funding (budget availability)
   - Find executive changes (new leadership = new initiatives)
   - Look for expansion news (growing companies buy more)
   - Identify relevant job postings (building teams in our area)

5. Relationship Intel:
   - Find mutual connections or customers
   - Search for any past interactions with our company
   - Identify warm introduction paths

6. Personalization Hooks:
   - Find recent news to reference
   - Identify executive interests or speaking topics
   - Find company initiatives relevant to our product

Return account brief optimized for {meeting_or_outreach}.`}
                  />

                  <SchemaBlock
                    title="Sales Account Schema"
                    code={`{
  "type": "object",
  "properties": {
    "account": { "type": "string" },
    "company_snapshot": {
      "type": "object",
      "properties": {
        "description": { "type": "string" },
        "industry": { "type": "string" },
        "employee_count": { "type": "string" },
        "headquarters": { "type": "string" },
        "growth_stage": { "type": "string" }
      }
    },
    "pain_points": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "pain_point": { "type": "string" },
          "evidence": { "type": "string" },
          "source": { "type": "string" },
          "relevance_to_our_product": { "type": "string" }
        }
      }
    },
    "technology_context": {
      "type": "object",
      "properties": {
        "known_stack": { "type": "array", "items": { "type": "string" } },
        "competitor_products_used": { "type": "array", "items": { "type": "string" } }
      }
    },
    "buying_signals": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "signal": { "type": "string" },
          "type": { "type": "string", "enum": ["funding", "hiring", "expansion", "leadership_change", "initiative"] },
          "date": { "type": "string" }
        }
      }
    },
    "key_people": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "name": { "type": "string" },
          "title": { "type": "string" },
          "linkedin_url": { "type": "string" },
          "talking_points": { "type": "array", "items": { "type": "string" } }
        }
      }
    },
    "personalization_hooks": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "hook": { "type": "string" },
          "context": { "type": "string" }
        }
      }
    },
    "meeting_prep": {
      "type": "object",
      "properties": {
        "opening_reference": { "type": "string" },
        "key_questions_to_ask": { "type": "array", "items": { "type": "string" } },
        "value_props_to_emphasize": { "type": "array", "items": { "type": "string" } }
      }
    }
  }
}`}
                  />
                </div>
              </div>

              {/* Use Case 5: Market Research */}
              <div id="market-research" className="card p-8 scroll-mt-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-8 bg-linkup-green text-white rounded-full flex items-center justify-center text-sm font-bold">5</span>
                  <h3 className="text-xl font-semibold text-linkup-text">Market & Industry Research</h3>
                </div>
                <p className="text-linkup-text-muted mb-6">
                  Research companies across a market segment or industry.
                </p>

                <div className="space-y-4">
                  <PromptBlock
                    title="Market Research"
                    code={`You are a market research analyst mapping a market segment.

Market/Industry: {market_segment}
Geographic focus: {geography}
Research purpose: {purpose}

Conduct market research:

1. Market Overview:
   - Search for market size estimates and growth projections
   - Find key trends shaping the industry
   - Identify major market drivers and headwinds
   - Search for analyst reports and market studies

2. Competitive Landscape:
   - Identify major players in {market_segment}
   - For each major player, find:
     - Company overview and positioning
     - Estimated market share or relative size
     - Recent funding or financial position
     - Key differentiators
   - Map the market by segment or tier

3. Emerging Players:
   - Search for recently funded startups in {market_segment}
   - Identify companies gaining traction or buzz
   - Find emerging technologies or approaches

4. Market Dynamics:
   - Search for recent M&A activity
   - Identify partnership trends
   - Find regulatory changes affecting the market
   - Note any disruption signals

5. Customer Trends:
   - Search for buyer behavior trends
   - Find adoption patterns and barriers
   - Identify evolving customer requirements

Return market intelligence report with competitive map.`}
                  />

                  <SchemaBlock
                    title="Market Research Schema"
                    code={`{
  "type": "object",
  "properties": {
    "market_segment": { "type": "string" },
    "market_overview": {
      "type": "object",
      "properties": {
        "market_size": { "type": "string" },
        "growth_rate": { "type": "string" },
        "key_trends": { "type": "array", "items": { "type": "string" } },
        "drivers": { "type": "array", "items": { "type": "string" } },
        "headwinds": { "type": "array", "items": { "type": "string" } }
      }
    },
    "major_players": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "company": { "type": "string" },
          "domain": { "type": "string" },
          "description": { "type": "string" },
          "positioning": { "type": "string" },
          "estimated_size": { "type": "string" },
          "funding_status": { "type": "string" },
          "differentiators": { "type": "array", "items": { "type": "string" } }
        }
      }
    },
    "emerging_players": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "company": { "type": "string" },
          "description": { "type": "string" },
          "recent_funding": { "type": "string" },
          "why_notable": { "type": "string" }
        }
      }
    },
    "market_dynamics": {
      "type": "object",
      "properties": {
        "recent_ma": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "acquirer": { "type": "string" },
              "target": { "type": "string" },
              "date": { "type": "string" }
            }
          }
        },
        "partnership_trends": { "type": "array", "items": { "type": "string" } },
        "disruption_signals": { "type": "array", "items": { "type": "string" } }
      }
    },
    "market_map": {
      "type": "object",
      "properties": {
        "segments": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "segment_name": { "type": "string" },
              "description": { "type": "string" },
              "companies": { "type": "array", "items": { "type": "string" } }
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

              {/* Use Case 6: Quick Company Lookup */}
              <div id="quick-lookup" className="card p-8 scroll-mt-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-8 bg-linkup-green text-white rounded-full flex items-center justify-center text-sm font-bold">6</span>
                  <h3 className="text-xl font-semibold text-linkup-text">Quick Company Lookup</h3>
                </div>
                <p className="text-linkup-text-muted mb-6">
                  Fast, lightweight research when you need basic context quickly.
                </p>

                <div className="space-y-4">
                  <PromptBlock
                    title="Quick Lookup"
                    code={`You are a research assistant providing quick company context.

Company: {company_name}
Domain: {company_domain}

Provide a quick company snapshot:

1. Scrape their website for:
   - One-line description
   - What they do (products/services)
   - Who they serve

2. Find basic facts:
   - Industry
   - Approximate size (employees)
   - Location
   - Founded year

3. Recent context:
   - Any notable recent news (last 30 days)
   - Funding status

Keep research fast—essential context only.`}
                  />

                  <SchemaBlock
                    title="Quick Lookup Schema"
                    code={`{
  "type": "object",
  "properties": {
    "company": { "type": "string" },
    "domain": { "type": "string" },
    "one_liner": { "type": "string" },
    "what_they_do": { "type": "string" },
    "who_they_serve": { "type": "string" },
    "industry": { "type": "string" },
    "employee_count": { "type": "string" },
    "headquarters": { "type": "string" },
    "founded": { "type": "integer" },
    "funding_status": { "type": "string" },
    "recent_news": {
      "type": "array",
      "maxItems": 3,
      "items": {
        "type": "object",
        "properties": {
          "headline": { "type": "string" },
          "date": { "type": "string" }
        }
      }
    },
    "linkedin_url": { "type": "string" }
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
              <h2 className="text-2xl font-semibold text-linkup-text">Best Practices</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="text-lg font-semibold text-linkup-green mb-4 flex items-center gap-2">
                  <span className="text-green-500">&#10003;</span> Do&apos;s
                </h3>
                <ul className="space-y-3">
                  {[
                    { title: "Always try to include the domain", desc: "Company names are ambiguous; domains are unique identifiers" },
                    { title: "Use deep search for comprehensive profiles", desc: "Company research requires multiple sources (website, LinkedIn, news, filings)" },
                    { title: "Set date filters for news", desc: "Recent news is usually more relevant; filter to avoid stale results" },
                    { title: "Cross-reference multiple sources", desc: "Website + LinkedIn + news gives a more complete and verified picture" },
                    { title: "Scrape the website first", desc: "The company's own site is the most authoritative source for product and positioning info" },
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <span className="text-green-500 mt-0.5">&#10003;</span>
                      <div>
                        <span className="font-medium text-linkup-text">{item.title}</span>
                        <span className="text-linkup-text-muted"> — {item.desc}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-red-600 mb-4 flex items-center gap-2">
                  <span className="text-red-500">&#10007;</span> Don&apos;ts
                </h3>
                <ul className="space-y-3">
                  {[
                    { title: "Don't rely on company names alone", desc: "\"Apollo\" could be dozens of companies; always use domain" },
                    { title: "Don't trust all news equally", desc: "Press releases are promotional; news coverage is more objective" },
                    { title: "Don't over-research for the use case", desc: "Quick lookups need different depth than investment diligence" },
                    { title: "Don't assume funding data is complete", desc: "Not all funding is announced publicly" },
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <span className="text-red-500 mt-0.5">&#10007;</span>
                      <div>
                        <span className="font-medium text-linkup-text">{item.title}</span>
                        <span className="text-linkup-text-muted"> — {item.desc}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Data Source Hierarchy */}
          <section id="data-sources" className="card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-linkup-green/10 rounded-xl flex items-center justify-center">
                <LayersIcon className="w-5 h-5 text-linkup-green" />
              </div>
              <h2 className="text-2xl font-semibold text-linkup-text">Data Source Hierarchy</h2>
            </div>
            <p className="text-linkup-text-muted mb-6">
              When researching companies, prioritize sources in this order:
            </p>

            <div className="space-y-4">
              <div className="p-4 bg-linkup-green/5 rounded-xl border border-linkup-green/20">
                <h4 className="font-semibold text-linkup-green mb-2">Tier 1 — Primary Sources (Most Authoritative)</h4>
                <ul className="text-sm text-linkup-text-muted space-y-1">
                  <li>• Company website (products, positioning, customers)</li>
                  <li>• SEC filings (financials, risks, contracts) — for public companies</li>
                  <li>• Official press releases</li>
                  <li>• Company blog and documentation</li>
                </ul>
              </div>

              <div className="p-4 bg-linkup-cream/50 rounded-xl">
                <h4 className="font-semibold text-linkup-text mb-2">Tier 2 — Professional Networks</h4>
                <ul className="text-sm text-linkup-text-muted space-y-1">
                  <li>• LinkedIn company page (employees, growth, HQ)</li>
                  <li>• LinkedIn job postings (hiring signals, tech stack)</li>
                  <li>• Glassdoor/Indeed (employee sentiment, culture)</li>
                </ul>
              </div>

              <div className="p-4 bg-linkup-cream/50 rounded-xl">
                <h4 className="font-semibold text-linkup-text mb-2">Tier 3 — News & Coverage</h4>
                <ul className="text-sm text-linkup-text-muted space-y-1">
                  <li>• Major business publications (WSJ, Bloomberg, Reuters)</li>
                  <li>• Tech publications (TechCrunch, The Information)</li>
                  <li>• Industry trade press</li>
                </ul>
              </div>

              <div className="p-4 bg-linkup-cream/50 rounded-xl">
                <h4 className="font-semibold text-linkup-text mb-2">Tier 4 — Third-Party Data</h4>
                <ul className="text-sm text-linkup-text-muted space-y-1">
                  <li>• Crunchbase, PitchBook (funding data)</li>
                  <li>• G2, Capterra (product reviews)</li>
                  <li>• BuiltWith, Wappalyzer (tech stack)</li>
                </ul>
              </div>

              <div className="p-4 bg-linkup-cream/50 rounded-xl">
                <h4 className="font-semibold text-linkup-text mb-2">Tier 5 — Community & Social</h4>
                <ul className="text-sm text-linkup-text-muted space-y-1">
                  <li>• Twitter/X</li>
                  <li>• Reddit, Hacker News</li>
                  <li>• Industry forums</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Integration Patterns */}
          <section id="integration" className="card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-linkup-green/10 rounded-xl flex items-center justify-center">
                <LinkIcon className="w-5 h-5 text-linkup-green" />
              </div>
              <h2 className="text-2xl font-semibold text-linkup-text">Integration Patterns</h2>
            </div>

            <div className="space-y-6 mb-8">
              <div className="p-4 bg-linkup-cream/50 rounded-xl">
                <h4 className="font-semibold text-linkup-text mb-2">CRM Enrichment Pipeline</h4>
                <ol className="text-sm text-linkup-text-muted space-y-1 list-decimal list-inside">
                  <li>New company added to CRM (manual or inbound)</li>
                  <li>Trigger Linkup research with company name + domain</li>
                  <li>Map structured output to CRM fields</li>
                  <li>Set data quality score</li>
                  <li>Flag incomplete records for manual research</li>
                </ol>
              </div>

              <div className="p-4 bg-linkup-cream/50 rounded-xl">
                <h4 className="font-semibold text-linkup-text mb-2">Investment Research Workflow</h4>
                <ol className="text-sm text-linkup-text-muted space-y-1 list-decimal list-inside">
                  <li>Deal sourced (inbound or outbound)</li>
                  <li>Quick lookup for initial qualification</li>
                  <li>If qualified → trigger comprehensive research</li>
                  <li>Output to investment memo template</li>
                  <li>Flag key questions for founder calls</li>
                  <li>Refresh research before IC meeting</li>
                </ol>
              </div>

              <div className="p-4 bg-linkup-cream/50 rounded-xl">
                <h4 className="font-semibold text-linkup-text mb-2">Competitive Intelligence System</h4>
                <ol className="text-sm text-linkup-text-muted space-y-1 list-decimal list-inside">
                  <li>Define competitor list</li>
                  <li>Schedule regular Linkup research (weekly/monthly)</li>
                  <li>Compare against previous research</li>
                  <li>Alert on significant changes (funding, product launches, leadership)</li>
                  <li>Feed into competitive battlecards</li>
                </ol>
              </div>

              <div className="p-4 bg-linkup-cream/50 rounded-xl">
                <h4 className="font-semibold text-linkup-text mb-2">Sales Account Prioritization</h4>
                <ol className="text-sm text-linkup-text-muted space-y-1 list-decimal list-inside">
                  <li>Inbound leads enter system</li>
                  <li>Trigger quick company research</li>
                  <li>Score based on size, growth signals, industry fit, buying signals</li>
                  <li>Route to appropriate sales queue</li>
                  <li>Enrich further before outreach</li>
                </ol>
              </div>
            </div>

            <Callout type="tip">
              For high-volume research, implement a queue system with rate limiting to stay within API limits while maximizing throughput.
            </Callout>

            <div className="mt-8">
              <h3 className="text-lg font-semibold text-linkup-text mb-4">Sample Integration Code</h3>
              <CodeBlock
                title="company_research.py"
                language="python"
                dark
                code={`import requests
import json
from typing import Optional

class LinkupCompanyResearch:
    """Linkup integration for company research"""

    def __init__(self, api_key: str):
        self.api_key = api_key
        self.base_url = "https://api.linkup.so/v1/search"

    def _call_linkup(
        self,
        prompt: str,
        schema: dict,
        depth: str = "deep"
    ) -> dict:
        params = {
            "q": prompt,
            "depth": depth,
            "outputType": "Structured",
            "StructuredSchema": json.dumps(schema)
        }

        response = requests.post(
            self.base_url,
            headers={"Authorization": f"Bearer {self.api_key}"},
            json=params
        )
        return response.json()

    def quick_lookup(
        self,
        company_name: str,
        company_domain: str
    ) -> dict:
        """Fast, lightweight company research"""

        prompt = f"""
        Quick company research:

        Company: {company_name}
        Domain: {company_domain}

        1. Scrape website for one-line description and what they do.
        2. Find: industry, size, location, founded year.
        3. Any notable recent news (last 30 days).

        Essential context only—keep it fast.
        """

        schema = {
            "type": "object",
            "properties": {
                "company": {"type": "string"},
                "domain": {"type": "string"},
                "one_liner": {"type": "string"},
                "what_they_do": {"type": "string"},
                "industry": {"type": "string"},
                "employee_count": {"type": "string"},
                "headquarters": {"type": "string"},
                "founded": {"type": "integer"},
                "funding_status": {"type": "string"},
                "recent_news": {
                    "type": "array",
                    "items": {
                        "type": "object",
                        "properties": {
                            "headline": {"type": "string"},
                            "date": {"type": "string"}
                        }
                    }
                }
            }
        }

        return self._call_linkup(prompt, schema, depth="standard")

    def comprehensive_profile(
        self,
        company_name: str,
        company_domain: str
    ) -> dict:
        """Full company profile research"""

        prompt = f"""
        Comprehensive company research:

        Company: {company_name}
        Domain: {company_domain}

        1. Scrape {company_domain} for description, products, target market, customer logos.
        2. Find LinkedIn page for employee count, HQ, founded year.
        3. Search for funding history and investors.
        4. Find CEO and key executives.
        5. Search for news from past 90 days.
        6. Identify competitors.

        Return complete company profile.
        """

        schema = {
            "type": "object",
            "properties": {
                "company_name": {"type": "string"},
                "domain": {"type": "string"},
                "overview": {
                    "type": "object",
                    "properties": {
                        "description": {"type": "string"},
                        "industry": {"type": "string"},
                        "employee_count": {"type": "string"},
                        "founded_year": {"type": "integer"},
                        "headquarters": {"type": "string"}
                    }
                },
                "products_services": {"type": "array", "items": {"type": "string"}},
                "target_market": {"type": "array", "items": {"type": "string"}},
                "funding": {
                    "type": "object",
                    "properties": {
                        "total_raised": {"type": "string"},
                        "latest_round": {"type": "string"},
                        "key_investors": {"type": "array", "items": {"type": "string"}}
                    }
                },
                "leadership": {
                    "type": "array",
                    "items": {
                        "type": "object",
                        "properties": {
                            "name": {"type": "string"},
                            "title": {"type": "string"}
                        }
                    }
                },
                "notable_customers": {"type": "array", "items": {"type": "string"}},
                "competitors": {"type": "array", "items": {"type": "string"}},
                "recent_news": {
                    "type": "array",
                    "items": {
                        "type": "object",
                        "properties": {
                            "headline": {"type": "string"},
                            "date": {"type": "string"},
                            "summary": {"type": "string"}
                        }
                    }
                }
            }
        }

        return self._call_linkup(prompt, schema, depth="deep")

    def competitive_research(
        self,
        competitor_name: str,
        competitor_domain: str,
        our_product: str
    ) -> dict:
        """Research a competitor"""

        prompt = f"""
        Competitive intelligence research:

        Competitor: {competitor_name}
        Domain: {competitor_domain}
        Our product: {our_product}

        1. Scrape website for products, features, pricing.
        2. Identify their positioning and target segments.
        3. Find product reviews and ratings (G2, Capterra).
        4. Search for recent funding, hiring trends, news.
        5. Identify strengths and weaknesses.
        6. Find their notable customers.

        Return competitive intelligence.
        """

        schema = {
            "type": "object",
            "properties": {
                "competitor": {"type": "string"},
                "product_overview": {"type": "string"},
                "key_features": {"type": "array", "items": {"type": "string"}},
                "pricing": {
                    "type": "object",
                    "properties": {
                        "model": {"type": "string"},
                        "tiers": {"type": "array", "items": {"type": "string"}}
                    }
                },
                "target_segments": {"type": "array", "items": {"type": "string"}},
                "strengths": {"type": "array", "items": {"type": "string"}},
                "weaknesses": {"type": "array", "items": {"type": "string"}},
                "review_scores": {
                    "type": "object",
                    "properties": {
                        "g2": {"type": "string"},
                        "common_praise": {"type": "array", "items": {"type": "string"}},
                        "common_complaints": {"type": "array", "items": {"type": "string"}}
                    }
                },
                "business_health": {
                    "type": "object",
                    "properties": {
                        "funding": {"type": "string"},
                        "hiring_trend": {"type": "string"},
                        "recent_news": {"type": "array", "items": {"type": "string"}}
                    }
                },
                "notable_customers": {"type": "array", "items": {"type": "string"}}
            }
        }

        return self._call_linkup(prompt, schema, depth="deep")

    def sales_account_research(
        self,
        company_name: str,
        company_domain: str,
        our_product: str
    ) -> dict:
        """Research account for sales preparation"""

        prompt = f"""
        Sales account research:

        Target: {company_name}
        Domain: {company_domain}
        Our product: {our_product}

        1. Scrape website for business overview and priorities.
        2. Find pain points relevant to {our_product}.
        3. Identify tech stack and current solutions.
        4. Find buying signals (funding, hiring, expansion).
        5. Identify key stakeholders.
        6. Find personalization hooks (recent news, initiatives).

        Return sales-ready account brief.
        """

        schema = {
            "type": "object",
            "properties": {
                "company_snapshot": {
                    "type": "object",
                    "properties": {
                        "description": {"type": "string"},
                        "industry": {"type": "string"},
                        "size": {"type": "string"},
                        "growth_stage": {"type": "string"}
                    }
                },
                "pain_points": {
                    "type": "array",
                    "items": {
                        "type": "object",
                        "properties": {
                            "pain_point": {"type": "string"},
                            "evidence": {"type": "string"}
                        }
                    }
                },
                "tech_stack": {"type": "array", "items": {"type": "string"}},
                "buying_signals": {
                    "type": "array",
                    "items": {
                        "type": "object",
                        "properties": {
                            "signal": {"type": "string"},
                            "date": {"type": "string"}
                        }
                    }
                },
                "key_people": {
                    "type": "array",
                    "items": {
                        "type": "object",
                        "properties": {
                            "name": {"type": "string"},
                            "title": {"type": "string"},
                            "talking_points": {"type": "array", "items": {"type": "string"}}
                        }
                    }
                },
                "personalization_hooks": {"type": "array", "items": {"type": "string"}}
            }
        }

        return self._call_linkup(prompt, schema, depth="deep")

# Example usage
if __name__ == "__main__":
    researcher = LinkupCompanyResearch(api_key="your-api-key")

    # Quick lookup
    quick = researcher.quick_lookup(
        company_name="Stripe",
        company_domain="stripe.com"
    )

    # Full profile
    profile = researcher.comprehensive_profile(
        company_name="Notion",
        company_domain="notion.so"
    )

    # Competitive research
    competitor = researcher.competitive_research(
        competitor_name="Airtable",
        competitor_domain="airtable.com",
        our_product="database software"
    )

    # Sales prep
    account = researcher.sales_account_research(
        company_name="Figma",
        company_domain="figma.com",
        our_product="design collaboration"
    )`}
              />
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}
