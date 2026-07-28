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

function ScaleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3v18"/>
      <path d="M1 9l5.5 6 5.5-6"/>
      <path d="M11.5 9l5.5 6 5.5-6"/>
      <path d="M1 9h11"/>
      <path d="M12 9h11"/>
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
  { id: "regulatory-monitoring", title: "Regulatory Monitoring", description: "Track new regulations, proposed rules, and guidance" },
  { id: "company-entity-research", title: "Company & Entity Research", description: "Verify entities and find public filings" },
  { id: "contract-clause-research", title: "Contract Clause Research", description: "Research standard language and market terms" },
  { id: "compliance-requirements", title: "Compliance Requirements", description: "Research obligations for activities and industries" },
  { id: "legal-news-tracking", title: "Legal News & Development Tracking", description: "Monitor court decisions and legislative changes" },
  { id: "due-diligence", title: "Due Diligence Research", description: "Support M&A with public information research" },
];

export default function LegalAgentsPage() {
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
              <ScaleIcon className="w-8 h-8" />
            </div>
            <div className="flex-1">
              <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-linkup-green/10 text-linkup-green mb-3 inline-block">
                Linkup
              </span>
              <h1 className="text-3xl font-bold text-linkup-text mb-4">
                How to power legal agents with Linkup
              </h1>
              <p className="text-lg text-linkup-text-muted leading-relaxed">
                Enable legal AI agents to search regulatory updates, public filings, legal news, and authoritative sources in real-time, complementing traditional legal research tools.
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
              Legal AI agents need access to constantly evolving information—new regulations, recent case law, company filings, and authoritative legal sources. Unlike static legal databases, Linkup enables agents to search across the open web for regulatory updates, public filings, legal news, and authoritative sources in real-time, complementing traditional legal research tools.
            </p>

            <div className="flex items-center gap-2 mb-4">
              <div className="w-1 h-4 bg-linkup-green rounded-full"></div>
              <h3 className="text-lg font-semibold text-linkup-text">Why Linkup for legal agents?</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { code: "deep search", desc: "Find regulatory sources, then scrape full text for complete context" },
                { code: "structured output", desc: "Returns legal information in formats agents can parse and cite" },
                { code: "time scoping", desc: "State the period in the query to surface recent regulatory changes" },
                { code: "source preference", desc: "Name the authoritative bodies you want cited in the query" }
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
                <p className="text-sm text-linkup-text-muted">Recommended settings for legal research</p>
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
                    <td className="py-4 px-4"><code className="bg-linkup-green/10 px-2 py-1 rounded text-linkup-green font-medium">deep</code></td>
                    <td className="py-4 px-4">Legal research requires finding sources, then extracting detailed content</td>
                  </tr>
                  <tr className="hover:bg-linkup-cream/30 transition-colors">
                    <td className="py-4 px-4"><code className="bg-linkup-beige px-2 py-1 rounded text-linkup-green-dark font-medium">outputType</code></td>
                    <td className="py-4 px-4"><code className="bg-linkup-green/10 px-2 py-1 rounded text-linkup-green font-medium">structured</code></td>
                    <td className="py-4 px-4">Legal agents need structured, citable information</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-6">
              <Callout type="tip">
                Name the issuing bodies and the time period in the query rather than pinning them as domain
                and date filters. Citation integrity comes from requiring a source URL for every claim, not
                from restricting the index. A hard allowlist of .gov domains will miss the state regulator,
                court opinion, or law-firm analysis that actually answers the question.
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
              {/* Use Case 1: Regulatory Monitoring */}
              <div id="regulatory-monitoring" className="card p-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="w-10 h-10 bg-linkup-green text-white rounded-full flex items-center justify-center text-lg font-bold">1</span>
                  <h3 className="text-xl font-semibold text-linkup-text">Regulatory Monitoring</h3>
                </div>
                <p className="text-linkup-text-muted mb-6 leading-relaxed">
                  Track new regulations, proposed rules, and regulatory guidance across jurisdictions.
                </p>

                <div className="space-y-6">
                  <PromptBlock
                    title="regulatory-monitoring"
                    code={`You are a regulatory research assistant monitoring for legal updates.

Regulatory area: {regulatory_area}
Jurisdictions: {jurisdictions}
Agencies to monitor: {agencies}

Search for recent regulatory developments including:

1. New final rules and regulations published
2. Proposed rules open for comment
3. Regulatory guidance documents and interpretations
4. Enforcement actions and policy statements
5. Agency announcements and press releases

For each item found, extract:
- Title and citation (if available)
- Issuing agency
- Publication/effective date
- Summary of key provisions
- Compliance deadlines (if any)
- Link to official source

Prioritize official government sources (.gov domains).
Exclude news commentary—return only primary regulatory sources.`}
                  />

                  <SchemaBlock
                    title="regulatory-monitoring-schema.json"
                    code={`{
  "type": "object",
  "properties": {
    "regulatory_area": { "type": "string" },
    "monitoring_period": {
      "type": "object",
      "properties": {
        "from": { "type": "string" },
        "to": { "type": "string" }
      }
    },
    "regulatory_updates": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "title": { "type": "string" },
          "citation": { "type": "string" },
          "type": {
            "type": "string",
            "enum": ["final_rule", "proposed_rule", "guidance", "enforcement", "notice", "other"]
          },
          "agency": { "type": "string" },
          "jurisdiction": { "type": "string" },
          "publication_date": { "type": "string" },
          "effective_date": { "type": "string" },
          "comment_deadline": { "type": "string" },
          "summary": { "type": "string" },
          "key_provisions": {
            "type": "array",
            "items": { "type": "string" }
          },
          "compliance_deadlines": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "requirement": { "type": "string" },
                "deadline": { "type": "string" }
              }
            }
          },
          "source_url": { "type": "string" },
          "federal_register_citation": { "type": "string" }
        }
      }
    },
    "summary": {
      "type": "object",
      "properties": {
        "total_updates": { "type": "integer" },
        "by_type": { "type": "object" },
        "urgent_items": {
          "type": "array",
          "items": { "type": "string" }
        }
      }
    }
  }
}`}
                  />

                  <CodeBlock
                    title="regulatory-source-preference.txt (example)"
                    language="text"
                    code={`Prefer primary regulatory sources: the Federal Register, Regulations.gov,
the SEC, FTC, FDA, EPA, Department of Labor, Treasury, Department of Justice,
HHS, CFPB, OCC, FDIC, and the Federal Reserve.
Cite the official document URL for every requirement or deadline.`}
                  />
                </div>
              </div>

              {/* Use Case 2: Company & Entity Research */}
              <div id="company-entity-research" className="card p-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="w-10 h-10 bg-linkup-green text-white rounded-full flex items-center justify-center text-lg font-bold">2</span>
                  <h3 className="text-xl font-semibold text-linkup-text">Company & Entity Research</h3>
                </div>
                <p className="text-linkup-text-muted mb-6 leading-relaxed">
                  Research companies, verify entity information, and find public filings.
                </p>

                <div className="space-y-6">
                  <PromptBlock
                    title="entity-research"
                    code={`You are a legal research assistant gathering entity information.

Entity name: {entity_name}
Entity type: {entity_type}
Jurisdiction of incorporation: {jurisdiction}

Execute the following research steps:

1. Search for the company's official registration information:
   - State/country of incorporation
   - Registration/file number
   - Date of incorporation
   - Registered agent
   - Business address

2. Search SEC EDGAR (if US public company) for:
   - Recent filings (10-K, 10-Q, 8-K)
   - Beneficial ownership filings
   - Insider trading reports

3. Search for any regulatory actions, enforcement orders, or sanctions against {entity_name}.

4. Search for litigation involving {entity_name}:
   - Recent court filings
   - Significant settlements
   - Ongoing material litigation

5. Search for {entity_name} leadership and board composition from official sources.

Return only verified information from authoritative sources.
Note any discrepancies found across sources.`}
                  />

                  <SchemaBlock
                    title="entity-research-schema.json"
                    code={`{
  "type": "object",
  "properties": {
    "entity_name": { "type": "string" },
    "registration_info": {
      "type": "object",
      "properties": {
        "legal_name": { "type": "string" },
        "entity_type": { "type": "string" },
        "jurisdiction": { "type": "string" },
        "registration_number": { "type": "string" },
        "date_of_incorporation": { "type": "string" },
        "status": { "type": "string" },
        "registered_agent": {
          "type": "object",
          "properties": {
            "name": { "type": "string" },
            "address": { "type": "string" }
          }
        },
        "principal_address": { "type": "string" },
        "source_url": { "type": "string" }
      }
    },
    "sec_filings": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "form_type": { "type": "string" },
          "filing_date": { "type": "string" },
          "description": { "type": "string" },
          "url": { "type": "string" }
        }
      }
    },
    "regulatory_history": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "agency": { "type": "string" },
          "action_type": { "type": "string" },
          "date": { "type": "string" },
          "description": { "type": "string" },
          "outcome": { "type": "string" },
          "source_url": { "type": "string" }
        }
      }
    },
    "litigation": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "case_name": { "type": "string" },
          "court": { "type": "string" },
          "case_number": { "type": "string" },
          "status": { "type": "string" },
          "summary": { "type": "string" },
          "source_url": { "type": "string" }
        }
      }
    },
    "leadership": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "name": { "type": "string" },
          "title": { "type": "string" },
          "since": { "type": "string" }
        }
      }
    },
    "discrepancies_noted": {
      "type": "array",
      "items": { "type": "string" }
    }
  }
}`}
                  />
                </div>
              </div>

              {/* Use Case 3: Contract Clause Research */}
              <div id="contract-clause-research" className="card p-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="w-10 h-10 bg-linkup-green text-white rounded-full flex items-center justify-center text-lg font-bold">3</span>
                  <h3 className="text-xl font-semibold text-linkup-text">Contract Clause Research</h3>
                </div>
                <p className="text-linkup-text-muted mb-6 leading-relaxed">
                  Research standard contract language, market terms, and clause precedents.
                </p>

                <div className="space-y-6">
                  <PromptBlock
                    title="contract-clause-research"
                    code={`You are a contract research assistant helping draft or review agreements.

Clause type: {clause_type}
Agreement type: {agreement_type}
Industry: {industry}
Jurisdiction: {jurisdiction}

Execute the following research:

1. Search for standard {clause_type} language in {agreement_type} agreements.

2. Search for SEC filings containing {agreement_type} agreements to find:
   - Market-standard clause formulations
   - Variations in approach
   - Negotiated terms from public deals

3. Search for law firm client alerts and articles discussing:
   - Best practices for {clause_type} provisions
   - Recent trends in {clause_type} negotiation
   - Pitfalls to avoid

4. Search for any recent case law interpreting {clause_type} provisions in {jurisdiction}.

Return a summary of market approaches with example language (paraphrased, not copied).
Note any jurisdiction-specific considerations.`}
                  />

                  <SchemaBlock
                    title="contract-clause-schema.json"
                    code={`{
  "type": "object",
  "properties": {
    "clause_type": { "type": "string" },
    "agreement_type": { "type": "string" },
    "market_approaches": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "approach_name": { "type": "string" },
          "description": { "type": "string" },
          "typical_use_case": { "type": "string" },
          "pros": {
            "type": "array",
            "items": { "type": "string" }
          },
          "cons": {
            "type": "array",
            "items": { "type": "string" }
          },
          "example_source": { "type": "string" }
        }
      }
    },
    "key_terms_to_negotiate": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "term": { "type": "string" },
          "seller_friendly": { "type": "string" },
          "buyer_friendly": { "type": "string" },
          "market_standard": { "type": "string" }
        }
      }
    },
    "recent_trends": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "trend": { "type": "string" },
          "source": { "type": "string" },
          "source_url": { "type": "string" }
        }
      }
    },
    "relevant_case_law": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "case_name": { "type": "string" },
          "citation": { "type": "string" },
          "holding_summary": { "type": "string" },
          "relevance": { "type": "string" }
        }
      }
    },
    "jurisdiction_notes": {
      "type": "array",
      "items": { "type": "string" }
    },
    "drafting_recommendations": { "type": "string" }
  }
}`}
                  />
                </div>
              </div>

              {/* Use Case 4: Compliance Requirements Research */}
              <div id="compliance-requirements" className="card p-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="w-10 h-10 bg-linkup-green text-white rounded-full flex items-center justify-center text-lg font-bold">4</span>
                  <h3 className="text-xl font-semibold text-linkup-text">Compliance Requirements Research</h3>
                </div>
                <p className="text-linkup-text-muted mb-6 leading-relaxed">
                  Research compliance obligations for specific activities, industries, or jurisdictions.
                </p>

                <div className="space-y-6">
                  <PromptBlock
                    title="compliance-research"
                    code={`You are a compliance research assistant.

Business activity: {business_activity}
Industry: {industry}
Jurisdictions: {jurisdictions}
Company type: {company_type}

Research the regulatory compliance requirements for {business_activity}:

1. Search for primary regulatory requirements from relevant agencies:
   - Licensing or registration requirements
   - Ongoing compliance obligations
   - Reporting requirements
   - Record-keeping requirements

2. Search for regulatory guidance explaining how requirements apply to {business_activity}.

3. Search for recent enforcement actions in this area to understand:
   - Common compliance failures
   - Regulatory priorities
   - Penalty ranges

4. Search for industry association guidance or best practices.

5. For each jurisdiction in {jurisdictions}, identify:
   - Which agencies have jurisdiction
   - Key differences in requirements
   - Any pending regulatory changes

Return a compliance checklist organized by requirement type.`}
                  />

                  <SchemaBlock
                    title="compliance-schema.json"
                    code={`{
  "type": "object",
  "properties": {
    "business_activity": { "type": "string" },
    "industry": { "type": "string" },
    "compliance_requirements": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "requirement": { "type": "string" },
          "category": {
            "type": "string",
            "enum": ["licensing", "registration", "reporting", "recordkeeping", "operational", "disclosure"]
          },
          "agency": { "type": "string" },
          "jurisdiction": { "type": "string" },
          "legal_citation": { "type": "string" },
          "description": { "type": "string" },
          "frequency": { "type": "string" },
          "deadline": { "type": "string" },
          "penalties_for_noncompliance": { "type": "string" },
          "source_url": { "type": "string" }
        }
      }
    },
    "enforcement_trends": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "trend": { "type": "string" },
          "recent_example": { "type": "string" },
          "penalty_range": { "type": "string" }
        }
      }
    },
    "jurisdiction_comparison": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "jurisdiction": { "type": "string" },
          "primary_agency": { "type": "string" },
          "key_differences": {
            "type": "array",
            "items": { "type": "string" }
          },
          "pending_changes": {
            "type": "array",
            "items": { "type": "string" }
          }
        }
      }
    },
    "compliance_checklist": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "item": { "type": "string" },
          "priority": { "type": "string" },
          "owner": { "type": "string" },
          "frequency": { "type": "string" }
        }
      }
    }
  }
}`}
                  />
                </div>
              </div>

              {/* Use Case 5: Legal News & Development Tracking */}
              <div id="legal-news-tracking" className="card p-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="w-10 h-10 bg-linkup-green text-white rounded-full flex items-center justify-center text-lg font-bold">5</span>
                  <h3 className="text-xl font-semibold text-linkup-text">Legal News & Development Tracking</h3>
                </div>
                <p className="text-linkup-text-muted mb-6 leading-relaxed">
                  Monitor legal developments, court decisions, and legislative changes.
                </p>

                <div className="space-y-6">
                  <PromptBlock
                    title="legal-news-tracking"
                    code={`You are a legal news analyst tracking developments in a practice area.

Practice area: {practice_area}
Topics to monitor: {topics}
Jurisdictions: {jurisdictions}

Search for recent legal developments including:

1. Significant court decisions:
   - Appellate decisions
   - Notable trial court rulings
   - Regulatory adjudications

2. Legislative developments:
   - New laws enacted
   - Bills advancing through legislature
   - Legislative hearings on relevant topics

3. Regulatory developments:
   - New rules and guidance
   - Enforcement priorities
   - Agency leadership changes

4. Legal industry analysis:
   - Law firm alerts and client advisories
   - Bar association publications
   - Legal scholarship and commentary

For each item, assess the practical impact on clients in {practice_area}.
Prioritize developments with immediate client implications.`}
                  />

                  <SchemaBlock
                    title="legal-news-schema.json"
                    code={`{
  "type": "object",
  "properties": {
    "practice_area": { "type": "string" },
    "monitoring_period": { "type": "string" },
    "court_decisions": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "case_name": { "type": "string" },
          "court": { "type": "string" },
          "date": { "type": "string" },
          "citation": { "type": "string" },
          "holding_summary": { "type": "string" },
          "practical_impact": { "type": "string" },
          "source_url": { "type": "string" }
        }
      }
    },
    "legislative_developments": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "jurisdiction": { "type": "string" },
          "bill_number": { "type": "string" },
          "title": { "type": "string" },
          "status": { "type": "string" },
          "summary": { "type": "string" },
          "effective_date": { "type": "string" },
          "practical_impact": { "type": "string" },
          "source_url": { "type": "string" }
        }
      }
    },
    "regulatory_developments": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "agency": { "type": "string" },
          "type": { "type": "string" },
          "title": { "type": "string" },
          "date": { "type": "string" },
          "summary": { "type": "string" },
          "practical_impact": { "type": "string" },
          "source_url": { "type": "string" }
        }
      }
    },
    "analysis": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "source": { "type": "string" },
          "title": { "type": "string" },
          "date": { "type": "string" },
          "key_takeaways": {
            "type": "array",
            "items": { "type": "string" }
          },
          "source_url": { "type": "string" }
        }
      }
    },
    "action_items": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "action": { "type": "string" },
          "deadline": { "type": "string" },
          "triggered_by": { "type": "string" }
        }
      }
    }
  }
}`}
                  />
                </div>
              </div>

              {/* Use Case 6: Due Diligence Research */}
              <div id="due-diligence" className="card p-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="w-10 h-10 bg-linkup-green text-white rounded-full flex items-center justify-center text-lg font-bold">6</span>
                  <h3 className="text-xl font-semibold text-linkup-text">Due Diligence Research</h3>
                </div>
                <p className="text-linkup-text-muted mb-6 leading-relaxed">
                  Support M&A due diligence with public information research. <code className="bg-linkup-green/10 px-2 py-0.5 rounded text-linkup-green text-xs font-medium">deep</code> recommended for this use case.
                </p>

                <div className="space-y-6">
                  <PromptBlock
                    title="due-diligence"
                    code={`You are a due diligence research assistant supporting a transaction.

Target company: {target_company}
Transaction type: {transaction_type}
Key areas of concern: {focus_areas}

Conduct public information due diligence research:

1. Corporate Information:
   - Search for incorporation documents and entity status
   - Find subsidiary structure from SEC filings or other public sources
   - Identify registered agents and principal offices

2. Regulatory Standing:
   - Search for any regulatory actions, consent orders, or sanctions
   - Find any pending regulatory proceedings
   - Check for required licenses and their status

3. Litigation History:
   - Search for material litigation disclosed in public filings
   - Search court databases for recent cases involving {target_company}
   - Identify any class actions or government investigations

4. Material Contracts (from public filings):
   - Search for material contracts filed as exhibits
   - Identify key customer and supplier relationships disclosed
   - Find any change of control provisions mentioned

5. News and Reputation:
   - Search for negative news coverage
   - Find any whistleblower complaints or employee disputes
   - Identify any environmental or safety incidents

Flag any red flags requiring further investigation.`}
                  />

                  <SchemaBlock
                    title="due-diligence-schema.json"
                    code={`{
  "type": "object",
  "properties": {
    "target_company": { "type": "string" },
    "research_date": { "type": "string" },
    "corporate_information": {
      "type": "object",
      "properties": {
        "legal_name": { "type": "string" },
        "jurisdiction": { "type": "string" },
        "status": { "type": "string" },
        "subsidiaries": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "name": { "type": "string" },
              "jurisdiction": { "type": "string" },
              "ownership": { "type": "string" }
            }
          }
        },
        "source_url": { "type": "string" }
      }
    },
    "regulatory_findings": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "agency": { "type": "string" },
          "matter_type": { "type": "string" },
          "date": { "type": "string" },
          "description": { "type": "string" },
          "status": { "type": "string" },
          "financial_impact": { "type": "string" },
          "source_url": { "type": "string" },
          "risk_level": {
            "type": "string",
            "enum": ["high", "medium", "low"]
          }
        }
      }
    },
    "litigation_findings": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "case_name": { "type": "string" },
          "court": { "type": "string" },
          "case_type": { "type": "string" },
          "status": { "type": "string" },
          "claimed_damages": { "type": "string" },
          "summary": { "type": "string" },
          "source_url": { "type": "string" },
          "risk_level": {
            "type": "string",
            "enum": ["high", "medium", "low"]
          }
        }
      }
    },
    "material_contracts": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "contract_type": { "type": "string" },
          "counterparty": { "type": "string" },
          "key_terms": { "type": "string" },
          "change_of_control_provision": { "type": "boolean" },
          "source_filing": { "type": "string" }
        }
      }
    },
    "news_findings": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "headline": { "type": "string" },
          "date": { "type": "string" },
          "summary": { "type": "string" },
          "sentiment": { "type": "string" },
          "source_url": { "type": "string" }
        }
      }
    },
    "red_flags": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "issue": { "type": "string" },
          "severity": { "type": "string" },
          "recommendation": { "type": "string" },
          "sources": {
            "type": "array",
            "items": { "type": "string" }
          }
        }
      }
    },
    "areas_requiring_further_investigation": {
      "type": "array",
      "items": { "type": "string" }
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
                    <span><strong>Always use authoritative source restrictions</strong> — legal accuracy depends on citing official sources</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-linkup-green mt-0.5 font-bold">2</span>
                    <span><strong>Include citations in structured output</strong> — always capture URLs and official citations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-linkup-green mt-0.5 font-bold">3</span>
                    <span><strong>Use date filtering for regulatory research</strong> — stale results can be dangerous</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-linkup-green mt-0.5 font-bold">4</span>
                    <span><strong>Request jurisdiction-specific results</strong> — laws vary dramatically by jurisdiction</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-linkup-green mt-0.5 font-bold">5</span>
                    <span><strong>Use deep for comprehensive research</strong> — find source, then scrape full content</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-linkup-green mt-0.5 font-bold">6</span>
                    <span><strong>Flag uncertainties explicitly</strong> — structure outputs to capture confidence levels</span>
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
                    <span><strong>Don&apos;t cite unofficial sources</strong> for legal requirements — blogs and news are not authoritative</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 mt-0.5 font-bold">2</span>
                    <span><strong>Don&apos;t skip date verification</strong> — outdated regulations can be worse than no information</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 mt-0.5 font-bold">3</span>
                    <span><strong>Don&apos;t assume cross-jurisdiction applicability</strong> — always verify jurisdictional scope</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 mt-0.5 font-bold">4</span>
                    <span><strong>Don&apos;t conflate commentary with primary sources</strong> — distinguish law firm analysis from legal requirements</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 mt-0.5 font-bold">5</span>
                    <span><strong>Don&apos;t over-rely on search for case law</strong> — Linkup complements but doesn&apos;t replace Westlaw/LexisNexis</span>
                  </li>
                </ul>
              </div>
            </div>

            <Callout type="tip">
              Structure agent outputs with confidence indicators: High (direct primary source citation), Medium (secondary source citing primary), Low (news report without primary source). Flag conflicting sources for attorney review.
            </Callout>
          </section>

          {/* Source Preferences */}
          <section id="domains" className="card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-linkup-green/10 rounded-xl flex items-center justify-center">
                <GlobeIcon className="w-5 h-5 text-linkup-green" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-linkup-text">Source Preferences (Examples)</h2>
                <p className="text-sm text-linkup-text-muted">Authoritative sources by category, phrased for the query</p>
              </div>
            </div>

            <div className="space-y-6">
              <CodeBlock
                title="US Federal Government"
                language="text"
                code={`Prefer US federal primary sources: the Federal Register, Regulations.gov,
Congress.gov, GovInfo, the SEC, Department of Justice, FTC, FDA, EPA,
Department of Labor, Treasury, IRS, CFPB, OCC, FDIC, the Federal Reserve,
and the federal courts.`}
              />

              <CodeBlock
                title="US State Government (Delaware, California, New York)"
                language="text"
                code={`Prefer state primary sources: the Delaware Code and Division of Corporations,
California legislative information and the California Attorney General,
and the New York Department of State and Attorney General.`}
              />

              <CodeBlock
                title="SEC Filings & Corporate Records"
                language="text"
                code={`Prefer SEC primary sources: EDGAR full-text search and the filing documents
themselves on sec.gov. Cite the accession number and filing URL.`}
              />

              <CodeBlock
                title="Legal News & Analysis (Use Selectively)"
                language="text"
                code={`Secondary analysis may be used for context only: Law360, Law.com,
Reuters Legal, Bloomberg Law, Lexology, and JD Supra.
Always anchor the conclusion to a primary source.`}
              />

              <CodeBlock
                title="International Sources"
                language="text"
                code={`Prefer national primary sources: legislation.gov.uk, EUR-Lex,
CanLII, and AustLII.`}
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
                <p className="text-sm text-linkup-text-muted">How to integrate legal research into your workflow</p>
              </div>
            </div>

            <div className="space-y-4">
              {[
                {
                  title: "Agent Tool Integration",
                  desc: "Define Linkup as tools for legal research",
                  steps: [
                    "search_regulations — Input: regulatory_area, jurisdictions, date_range",
                    "research_entity — Input: entity_name, jurisdiction, research_scope",
                    "search_compliance_requirements — Input: activity, industry, jurisdictions",
                    "monitor_legal_developments — Input: practice_area, topics, jurisdictions",
                    "due_diligence_search — Input: target_company, focus_areas"
                  ]
                },
                {
                  title: "Source Hierarchy",
                  desc: "When multiple sources exist, prioritize:",
                  steps: [
                    "1. Primary sources (statutes, regulations, court decisions)",
                    "2. Official agency guidance (regulatory guidance, FAQs)",
                    "3. Secondary authoritative sources (bar association, law firm alerts)",
                    "4. News and commentary (for context only)"
                  ]
                },
                {
                  title: "Confidence Scoring",
                  desc: "Structure agent outputs with confidence indicators",
                  steps: [
                    "High confidence: Direct primary source citation, current, jurisdiction-specific",
                    "Medium confidence: Secondary source citing primary, slightly outdated",
                    "Low confidence: News report without primary source, jurisdictional uncertainty",
                    "Flag for review: Conflicting sources, novel questions, high-stakes implications"
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
                <p className="text-sm text-linkup-text-muted">Python example for legal research</p>
              </div>
            </div>
            <CodeBlock
              title="linkup_legal_assistant.py"
              language="python"
              dark
              code={`import requests
import json
from datetime import datetime, timedelta
from typing import Optional, List

class LinkupLegalAssistant:
    """Linkup integration for legal research agents"""

    def __init__(self, api_key: str):
        self.api_key = api_key
        self.base_url = "https://api.linkup.so/v1/search"

        # Stated as a preference in the query, not pinned as a domain filter,
        # so a state regulator or court opinion can still surface.
        self.preferred_sources = (
            "the Federal Register, Regulations.gov, the SEC, Congress.gov, "
            "GovInfo, and the Department of Justice"
        )

    def _call_linkup(
        self,
        prompt: str,
        schema: dict,
        depth: str = "deep"
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

    def search_regulations(
        self,
        regulatory_area: str,
        agencies: List[str],
        days_back: int = 30
    ) -> dict:
        """Search for recent regulatory updates"""

        since = (datetime.now() - timedelta(days=days_back)).strftime("%d %B %Y")
        agencies_str = ", ".join(agencies)

        prompt = f"""
        Search for regulatory developments in {regulatory_area} published
        since {since}.

        Agencies: {agencies_str}

        Find:
        - New final rules and regulations
        - Proposed rules open for comment
        - Regulatory guidance documents
        - Enforcement actions and policy statements

        For each item, extract title, citation, agency, dates, and summary.
        Prefer {self.preferred_sources}.
        Return the official source URL for every item.
        """

        schema = {
            "type": "object",
            "properties": {
                "regulatory_updates": {
                    "type": "array",
                    "items": {
                        "type": "object",
                        "properties": {
                            "title": {"type": "string"},
                            "citation": {"type": "string"},
                            "type": {"type": "string"},
                            "agency": {"type": "string"},
                            "publication_date": {"type": "string"},
                            "effective_date": {"type": "string"},
                            "summary": {"type": "string"},
                            "source_url": {"type": "string"}
                        }
                    }
                }
            }
        }

        return self._call_linkup(prompt, schema, depth="deep")

    def research_entity(
        self,
        entity_name: str,
        jurisdiction: str,
        include_litigation: bool = True
    ) -> dict:
        """Research a company or entity"""

        litigation_instruction = """
        4. Search for litigation involving the entity:
           - Recent court filings
           - Significant settlements
           - Ongoing material litigation
        """ if include_litigation else ""

        prompt = f"""
        Research the entity: {entity_name}
        Jurisdiction: {jurisdiction}

        1. Search for official registration information:
           - State/country of incorporation
           - Registration number
           - Status
           - Registered agent

        2. Search SEC EDGAR for recent filings (if public company).

        3. Search for regulatory actions or sanctions against this entity.
        {litigation_instruction}

        Prefer {self.preferred_sources}, plus SEC EDGAR for filings.
        Return only verified information and the source URL for every field.
        """

        schema = {
            "type": "object",
            "properties": {
                "entity_name": {"type": "string"},
                "registration_info": {
                    "type": "object",
                    "properties": {
                        "legal_name": {"type": "string"},
                        "jurisdiction": {"type": "string"},
                        "registration_number": {"type": "string"},
                        "status": {"type": "string"},
                        "source_url": {"type": "string"}
                    }
                },
                "sec_filings": {
                    "type": "array",
                    "items": {
                        "type": "object",
                        "properties": {
                            "form_type": {"type": "string"},
                            "date": {"type": "string"},
                            "url": {"type": "string"}
                        }
                    }
                },
                "regulatory_history": {
                    "type": "array",
                    "items": {
                        "type": "object",
                        "properties": {
                            "agency": {"type": "string"},
                            "action": {"type": "string"},
                            "date": {"type": "string"},
                            "source_url": {"type": "string"}
                        }
                    }
                },
                "litigation": {
                    "type": "array",
                    "items": {
                        "type": "object",
                        "properties": {
                            "case_name": {"type": "string"},
                            "court": {"type": "string"},
                            "status": {"type": "string"},
                            "summary": {"type": "string"}
                        }
                    }
                }
            }
        }

        return self._call_linkup(prompt, schema, depth="deep")

    def search_compliance_requirements(
        self,
        business_activity: str,
        industry: str,
        jurisdictions: List[str]
    ) -> dict:
        """Research compliance requirements"""

        jurisdictions_str = ", ".join(jurisdictions)

        prompt = f"""
        Research compliance requirements for: {business_activity}
        Industry: {industry}
        Jurisdictions: {jurisdictions_str}

        Find:
        - Licensing or registration requirements
        - Ongoing compliance obligations
        - Reporting requirements
        - Record-keeping requirements

        For each requirement, identify the agency, legal citation, and deadlines.
        Search for regulatory guidance explaining how requirements apply.
        """

        schema = {
            "type": "object",
            "properties": {
                "compliance_requirements": {
                    "type": "array",
                    "items": {
                        "type": "object",
                        "properties": {
                            "requirement": {"type": "string"},
                            "category": {"type": "string"},
                            "agency": {"type": "string"},
                            "jurisdiction": {"type": "string"},
                            "legal_citation": {"type": "string"},
                            "description": {"type": "string"},
                            "deadline": {"type": "string"},
                            "source_url": {"type": "string"}
                        }
                    }
                },
                "compliance_checklist": {
                    "type": "array",
                    "items": {
                        "type": "object",
                        "properties": {
                            "item": {"type": "string"},
                            "priority": {"type": "string"},
                            "frequency": {"type": "string"}
                        }
                    }
                }
            }
        }

        return self._call_linkup(prompt, schema, depth="deep")

    def due_diligence_search(
        self,
        target_company: str,
        focus_areas: List[str]
    ) -> dict:
        """Conduct public due diligence research"""

        focus_str = ", ".join(focus_areas)

        prompt = f"""
        Conduct public due diligence research on: {target_company}
        Focus areas: {focus_str}

        Research:
        1. Corporate information and entity status
        2. Regulatory standing and any enforcement actions
        3. Litigation history from public sources
        4. Material contracts from public filings
        5. Negative news coverage

        Flag any red flags requiring further investigation.
        """

        schema = {
            "type": "object",
            "properties": {
                "target_company": {"type": "string"},
                "corporate_info": {"type": "object"},
                "regulatory_findings": {
                    "type": "array",
                    "items": {"type": "object"}
                },
                "litigation_findings": {
                    "type": "array",
                    "items": {"type": "object"}
                },
                "news_findings": {
                    "type": "array",
                    "items": {"type": "object"}
                },
                "red_flags": {
                    "type": "array",
                    "items": {
                        "type": "object",
                        "properties": {
                            "issue": {"type": "string"},
                            "severity": {"type": "string"},
                            "recommendation": {"type": "string"}
                        }
                    }
                }
            }
        }

        return self._call_linkup(prompt, schema, depth="deep")


# Example usage
if __name__ == "__main__":
    assistant = LinkupLegalAssistant(api_key="your-api-key")

    # Regulatory monitoring
    regs = assistant.search_regulations(
        regulatory_area="data privacy",
        agencies=["FTC", "state attorneys general"],
        days_back=30
    )

    # Entity research
    entity = assistant.research_entity(
        entity_name="Acme Corp",
        jurisdiction="Delaware",
        include_litigation=True
    )

    # Compliance requirements
    compliance = assistant.search_compliance_requirements(
        business_activity="payment processing",
        industry="fintech",
        jurisdictions=["federal", "California", "New York"]
    )`}
            />
          </section>
        </div>
      </main>
    </div>
  );
}
