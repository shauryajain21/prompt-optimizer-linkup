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

function TruckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 3h15v13H1z"/>
      <path d="M16 8h4l3 3v5h-7V8z"/>
      <circle cx="5.5" cy="18.5" r="2.5"/>
      <circle cx="18.5" cy="18.5" r="2.5"/>
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
  { id: "supplier-discovery", title: "Supplier Discovery", description: "Find potential suppliers for materials or services" },
  { id: "price-extraction", title: "Price Extraction & Comparison", description: "Get actual pricing from supplier listings" },
  { id: "supplier-due-diligence", title: "Supplier Due Diligence", description: "Gather risk and compliance data" },
  { id: "alternative-suppliers", title: "Alternative Supplier Search", description: "Find alternatives for supply chain diversification" },
  { id: "price-benchmarking", title: "Market Price Benchmarking", description: "Understand market pricing for negotiations" },
];

export default function SupplierResearchPage() {
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
              <TruckIcon className="w-8 h-8" />
            </div>
            <div className="flex-1">
              <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-linkup-green/10 text-linkup-green mb-3 inline-block">
                Linkup
              </span>
              <h1 className="text-3xl font-bold text-linkup-text mb-4">
                How to research suppliers with Linkup
              </h1>
              <p className="text-lg text-linkup-text-muted leading-relaxed">
                Automate supplier discovery, price extraction, and due diligence research. Find suppliers, scrape product listings for pricing, and gather compliance data across multiple sources.
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
              Procurement teams spend significant time researching suppliers, comparing quotes, validating vendors, and monitoring supply chain risks. Linkup&apos;s agentic search can automate much of this work—finding suppliers, scraping product listings for pricing, and gathering due diligence data across multiple sources.
            </p>

            <div className="flex items-center gap-2 mb-4">
              <div className="w-1 h-4 bg-linkup-green rounded-full"></div>
              <h3 className="text-lg font-semibold text-linkup-text">Why Linkup for procurement?</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { code: "Deep search", desc: "Execute \"find → scrape → extract\" pattern for actual prices and specs" },
                { code: "structuredOutput", desc: "Returns supplier data ready for comparison spreadsheets" },
                { code: "Agentic retrieval", desc: "Navigates supplier websites, marketplaces, and databases automatically" }
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
                <p className="text-sm text-linkup-text-muted">Recommended settings for procurement research</p>
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
                    <td className="py-4 px-4">Finding listings, then scraping pages for prices and specs</td>
                  </tr>
                  <tr className="border-b border-linkup-border-light hover:bg-linkup-cream/30 transition-colors">
                    <td className="py-4 px-4"><code className="bg-linkup-beige px-2 py-1 rounded text-linkup-green-dark font-medium">outputType</code></td>
                    <td className="py-4 px-4"><code className="bg-linkup-green/10 px-2 py-1 rounded text-linkup-green font-medium">structuredOutput</code></td>
                    <td className="py-4 px-4">Returns data ready for comparison and system import</td>
                  </tr>
                  <tr className="border-b border-linkup-border-light hover:bg-linkup-cream/30 transition-colors">
                    <td className="py-4 px-4"><code className="bg-linkup-beige px-2 py-1 rounded text-linkup-green-dark font-medium">includeImages</code></td>
                    <td className="py-4 px-4"><code className="bg-linkup-green/10 px-2 py-1 rounded text-linkup-green font-medium">true</code></td>
                    <td className="py-4 px-4">Useful for product verification and catalogs</td>
                  </tr>
                  <tr className="hover:bg-linkup-cream/30 transition-colors">
                    <td className="py-4 px-4"><code className="bg-linkup-beige px-2 py-1 rounded text-linkup-green-dark font-medium">includeDomains</code></td>
                    <td className="py-4 px-4"><code className="bg-gray-100 px-2 py-1 rounded text-gray-600 font-medium">optional</code></td>
                    <td className="py-4 px-4">Restrict to approved supplier directories or marketplaces</td>
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
              {/* Use Case 1: Supplier Discovery */}
              <div id="supplier-discovery" className="card p-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="w-10 h-10 bg-linkup-green text-white rounded-full flex items-center justify-center text-lg font-bold">1</span>
                  <h3 className="text-xl font-semibold text-linkup-text">Supplier Discovery</h3>
                </div>
                <p className="text-linkup-text-muted mb-6 leading-relaxed">
                  Find potential suppliers for a specific material, component, or service. Check across your list of providers as well.
                </p>

                <div className="space-y-6">
                  <PromptBlock
                    title="supplier-discovery"
                    code={`You are a procurement specialist tasked with identifying suppliers for a specific item.

Item: {item_description}
Specifications: {specifications}
Region preference: {region}

Execute the following steps:

1. Search for manufacturers and distributors that supply {item_description} matching these specifications.

2. For each potential supplier found, search for:
   - Company website
   - Product catalog or listing page for this item
   - Geographic coverage / shipping regions
   - Whether they sell B2B or require minimum order quantities

3. Search industrial marketplaces (ThomasNet, Alibaba, GlobalSpec, DirectIndustry) for additional suppliers of {item_description}.

Return a list of qualified suppliers with their details. Exclude retailers and consumer-focused sellers.`}
                  />

                  <SchemaBlock
                    title="supplier-discovery-schema.json"
                    code={`{
  "type": "object",
  "properties": {
    "item_searched": { "type": "string" },
    "suppliers": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "supplier_name": { "type": "string" },
          "website": { "type": "string" },
          "product_page_url": { "type": "string" },
          "supplier_type": {
            "type": "string",
            "enum": ["manufacturer", "distributor", "marketplace_seller"]
          },
          "headquarters_country": { "type": "string" },
          "ships_to": {
            "type": "array",
            "items": { "type": "string" }
          },
          "minimum_order": { "type": "string" },
          "certifications_mentioned": {
            "type": "array",
            "items": { "type": "string" }
          }
        }
      }
    }
  }
}`}
                  />
                </div>
              </div>

              {/* Use Case 2: Price Extraction & Comparison */}
              <div id="price-extraction" className="card p-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="w-10 h-10 bg-linkup-green text-white rounded-full flex items-center justify-center text-lg font-bold">2</span>
                  <h3 className="text-xl font-semibold text-linkup-text">Price Extraction & Comparison</h3>
                </div>
                <p className="text-linkup-text-muted mb-6 leading-relaxed">
                  Get actual pricing from supplier listings—not just links, but scraped prices from product pages.
                </p>

                <div className="space-y-6">
                  <PromptBlock
                    title="price-extraction"
                    code={`You are a procurement specialist tasked with sourcing a specific item and extracting pricing.

Item: {item_description}
Part number (if known): {part_number}
Required quantity: {quantity}

Execute the following steps:

1. Search reputable online suppliers and industrial marketplaces to find listings for this item: {item_description}

2. For each relevant listing URL found, open and scrape the listing page to extract:
   - Exact product name and part number
   - Listed price (include currency and unit)
   - Minimum order quantity
   - Lead time or availability
   - Product image URL

3. If a supplier shows "request quote" instead of a price, note this but still include the listing.

Instructions:
- Only include listings that match the specified part number or a clearly documented equivalent.
- Always scrape the listing page—do not infer price from search snippets.
- If pricing is tiered, extract the price for {quantity} units.
- If no image is available, return null for image_url.`}
                  />

                  <SchemaBlock
                    title="price-extraction-schema.json"
                    code={`{
  "type": "object",
  "properties": {
    "item_searched": { "type": "string" },
    "part_number": { "type": "string" },
    "quantity_requested": { "type": "integer" },
    "listings": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "supplier_name": { "type": "string" },
          "listing_url": { "type": "string" },
          "product_name": { "type": "string" },
          "matched_part_number": { "type": "string" },
          "unit_price": { "type": "string" },
          "currency": { "type": "string" },
          "price_per_unit": { "type": "string" },
          "minimum_order_qty": { "type": "integer" },
          "lead_time": { "type": "string" },
          "availability": { "type": "string" },
          "image_url": { "type": "string" }
        }
      }
    },
    "request_quote_only": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "supplier_name": { "type": "string" },
          "listing_url": { "type": "string" }
        }
      }
    }
  }
}`}
                  />
                </div>
              </div>

              {/* Use Case 3: Supplier Due Diligence */}
              <div id="supplier-due-diligence" className="card p-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="w-10 h-10 bg-linkup-green text-white rounded-full flex items-center justify-center text-lg font-bold">3</span>
                  <h3 className="text-xl font-semibold text-linkup-text">Supplier Due Diligence</h3>
                </div>
                <p className="text-linkup-text-muted mb-6 leading-relaxed">
                  Gather risk and compliance data before onboarding a new supplier.
                </p>

                <div className="space-y-6">
                  <PromptBlock
                    title="supplier-due-diligence"
                    code={`You are a procurement risk analyst conducting due diligence on a potential supplier.

Supplier: {supplier_name}
Website: {supplier_domain}
Country: {country}

Research steps:

1. Scrape {supplier_domain} for company overview, history, manufacturing locations, quality certifications (ISO, FDA, CE, etc.), and notable clients or case studies.

2. Search for {supplier_name} registration details: legal entity name, registration number, year established, registered address.

3. Search for {supplier_name} news from the past 2 years:
   - Negative: recalls, quality issues, regulatory actions, financial difficulties, layoffs
   - Positive: awards, expansions, major contracts

4. Search for {supplier_name} reviews or complaints on B2B platforms and industry forums.

5. Search for ESG, sustainability, or labor practice concerns related to {supplier_name}.

Compile findings into a risk assessment summary. Flag any red flags found.`}
                  />

                  <SchemaBlock
                    title="supplier-due-diligence-schema.json"
                    code={`{
  "type": "object",
  "properties": {
    "supplier_name": { "type": "string" },
    "legal_entity_name": { "type": "string" },
    "registration_number": { "type": "string" },
    "year_established": { "type": "integer" },
    "headquarters": { "type": "string" },
    "manufacturing_locations": {
      "type": "array",
      "items": { "type": "string" }
    },
    "certifications": {
      "type": "array",
      "items": { "type": "string" }
    },
    "notable_clients": {
      "type": "array",
      "items": { "type": "string" }
    },
    "risk_signals": {
      "type": "object",
      "properties": {
        "recalls_or_quality_issues": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "date": { "type": "string" },
              "description": { "type": "string" },
              "source": { "type": "string" }
            }
          }
        },
        "financial_concerns": {
          "type": "array",
          "items": { "type": "string" }
        },
        "regulatory_actions": {
          "type": "array",
          "items": { "type": "string" }
        },
        "esg_concerns": {
          "type": "array",
          "items": { "type": "string" }
        }
      }
    },
    "positive_signals": {
      "type": "array",
      "items": { "type": "string" }
    },
    "overall_risk_level": {
      "type": "string",
      "enum": ["low", "medium", "high", "insufficient_data"]
    },
    "red_flags_summary": { "type": "string" }
  }
}`}
                  />
                </div>
              </div>

              {/* Use Case 4: Alternative Supplier Search */}
              <div id="alternative-suppliers" className="card p-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="w-10 h-10 bg-linkup-green text-white rounded-full flex items-center justify-center text-lg font-bold">4</span>
                  <h3 className="text-xl font-semibold text-linkup-text">Alternative Supplier Search</h3>
                </div>
                <p className="text-linkup-text-muted mb-6 leading-relaxed">
                  Find alternatives when a current supplier has issues or you need to diversify.
                </p>

                <div className="space-y-6">
                  <PromptBlock
                    title="alternative-suppliers"
                    code={`You are a procurement specialist finding alternative suppliers to reduce supply chain risk.

Current supplier: {current_supplier}
Product/service they provide: {product_description}
Reason for seeking alternatives: {reason}

Execute the following steps:

1. First, scrape {current_supplier_website} to understand exactly what product/specs we're currently sourcing.

2. Search for other suppliers that manufacture or distribute the same or equivalent products. Focus on:
   - Direct competitors to {current_supplier}
   - Suppliers in different geographic regions for supply chain diversification
   - Both manufacturers and authorized distributors

3. For each alternative found, search for:
   - Their product equivalent to what we source from {current_supplier}
   - Company size and stability indicators
   - Geographic location and shipping capabilities
   - Any certifications matching {current_supplier}'s certifications

4. Search for industry reports or buyer guides comparing suppliers in this category.

Return a list of alternatives with rationale for each.`}
                  />
                </div>
              </div>

              {/* Use Case 5: Market Price Benchmarking */}
              <div id="price-benchmarking" className="card p-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="w-10 h-10 bg-linkup-green text-white rounded-full flex items-center justify-center text-lg font-bold">5</span>
                  <h3 className="text-xl font-semibold text-linkup-text">Market Price Benchmarking</h3>
                </div>
                <p className="text-linkup-text-muted mb-6 leading-relaxed">
                  Understand market pricing to negotiate better or validate quotes.
                </p>

                <div className="space-y-6">
                  <PromptBlock
                    title="price-benchmarking"
                    code={`You are a procurement analyst conducting market price research for negotiation preparation.

Item: {item_description}
Current quoted price: {current_price} per {unit}
Supplier quoting: {supplier_name}

Execute the following research:

1. Search for publicly listed prices for {item_description} across multiple suppliers and marketplaces.

2. For each price found, scrape the listing page to extract:
   - Exact product and specifications
   - Price and unit of measure
   - Minimum order quantity
   - Supplier name and location

3. Search for commodity price indices or industry pricing reports related to {item_category}.

4. Search for recent news about pricing trends, supply shortages, or market conditions affecting {item_description}.

Compile findings to establish a market price range. Note whether the current quote of {current_price} is above, below, or within market range.`}
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
                    <span><strong>Always use deep search with explicit scrape instructions</strong> — Prices and specs live on product pages, not in search snippets</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-linkup-green mt-0.5 font-bold">2</span>
                    <span><strong>Include part numbers when available</strong> — Dramatically improves match accuracy</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-linkup-green mt-0.5 font-bold">3</span>
                    <span><strong>Specify &quot;scrape the listing page&quot;</strong> — Tells Linkup to actually open the page</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-linkup-green mt-0.5 font-bold">4</span>
                    <span><strong>Use includeDomains for trusted sources</strong> — Restrict to known marketplaces when quality matters</span>
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
                    <span><strong>Don&apos;t skip specifications</strong> — Vague item descriptions lead to irrelevant results</span>
                  </li>
                </ul>
              </div>
            </div>

            <Callout type="tip">
              For price extraction, always instruct Linkup to scrape the actual listing page rather than inferring prices from search result snippets. This ensures you get accurate, current pricing.
            </Callout>
          </section>

          {/* Integration Patterns */}
          <section id="integration" className="card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-linkup-green/10 rounded-xl flex items-center justify-center">
                <LinkIcon className="w-5 h-5 text-linkup-green" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-linkup-text">Integration Patterns</h2>
                <p className="text-sm text-linkup-text-muted">How to integrate procurement research into your workflow</p>
              </div>
            </div>

            <div className="space-y-4">
              {[
                {
                  title: "RFQ Preparation Workflow",
                  desc: "Automated supplier discovery and price comparison",
                  steps: [
                    "Receive requisition with item specifications",
                    "Call Linkup to discover suppliers and extract pricing",
                    "Generate comparison matrix from structuredOutput",
                    "Identify top candidates for RFQ distribution",
                    "Use benchmark pricing data in negotiations"
                  ]
                },
                {
                  title: "Supplier Onboarding Automation",
                  desc: "Automated due diligence for new suppliers",
                  steps: [
                    "New supplier submitted for approval",
                    "Trigger Linkup due diligence search automatically",
                    "Parse risk signals from structuredOutput",
                    "Route to appropriate approval workflow based on risk level",
                    "Store research in supplier master record"
                  ]
                },
                {
                  title: "Continuous Monitoring",
                  desc: "Ongoing supplier risk monitoring",
                  steps: [
                    "Schedule periodic searches for existing supplier news",
                    "Use fromDate filter to catch only new information",
                    "Alert procurement team to risk signals (recalls, financial issues)",
                    "Trigger re-evaluation workflow when red flags appear"
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
                <p className="text-sm text-linkup-text-muted">Python examples for procurement research</p>
              </div>
            </div>
            <CodeBlock
              title="procurement_research.py"
              language="python"
              dark
              code={`import requests
import json
from datetime import datetime, timedelta

def extract_supplier_pricing(
    item_description: str,
    part_number: str,
    quantity: int,
    api_key: str
) -> dict:
    """
    Find suppliers and extract actual pricing from product pages
    """

    prompt = f"""
    You are a procurement specialist sourcing a specific item.

    Item: {item_description}
    Part number: {part_number}
    Quantity needed: {quantity}

    1. Search reputable suppliers and industrial marketplaces for this item.

    2. For each listing found, open and scrape the page to extract:
       - Product name and part number
       - Price (currency and unit)
       - Minimum order quantity
       - Lead time
       - Product image URL

    Always scrape listing pages—do not infer prices from search snippets.
    Only include listings matching the part number or documented equivalents.
    """

    schema = {
        "type": "object",
        "properties": {
            "item": {"type": "string"},
            "part_number": {"type": "string"},
            "listings": {
                "type": "array",
                "items": {
                    "type": "object",
                    "properties": {
                        "supplier": {"type": "string"},
                        "url": {"type": "string"},
                        "product_name": {"type": "string"},
                        "price": {"type": "string"},
                        "currency": {"type": "string"},
                        "moq": {"type": "integer"},
                        "lead_time": {"type": "string"},
                        "image_url": {"type": "string"}
                    }
                }
            }
        }
    }

    response = requests.post(
        "https://api.linkup.so/v1/search",
        headers={"Authorization": f"Bearer {api_key}"},
        json={
            "q": prompt,
            "depth": "deep",
            "outputType": "structuredOutput",
            "structuredOutputSchema": json.dumps(schema),
            "includeImages": True
        }
    )

    return response.json()

def supplier_due_diligence(
    supplier_name: str,
    supplier_domain: str,
    api_key: str
) -> dict:
    """
    Conduct due diligence research on a supplier
    """

    two_years_ago = (datetime.now() - timedelta(days=730)).strftime("%Y-%m-%d")

    prompt = f"""
    You are a procurement risk analyst conducting supplier due diligence.

    Supplier: {supplier_name}
    Website: {supplier_domain}

    1. Scrape {supplier_domain} for company overview, certifications, and clients.

    2. Search for {supplier_name} company registration and legal entity details.

    3. Search for news about {supplier_name} including:
       - Recalls or quality issues
       - Financial difficulties
       - Regulatory actions
       - ESG concerns

    4. Search for {supplier_name} reviews on B2B platforms.

    Flag any red flags discovered.
    """

    schema = {
        "type": "object",
        "properties": {
            "supplier_name": {"type": "string"},
            "legal_entity": {"type": "string"},
            "year_established": {"type": "integer"},
            "certifications": {"type": "array", "items": {"type": "string"}},
            "risk_signals": {
                "type": "array",
                "items": {
                    "type": "object",
                    "properties": {
                        "type": {"type": "string"},
                        "description": {"type": "string"},
                        "date": {"type": "string"},
                        "source": {"type": "string"}
                    }
                }
            },
            "positive_signals": {"type": "array", "items": {"type": "string"}},
            "risk_level": {"type": "string"},
            "summary": {"type": "string"}
        }
    }

    response = requests.post(
        "https://api.linkup.so/v1/search",
        headers={"Authorization": f"Bearer {api_key}"},
        json={
            "q": prompt,
            "depth": "deep",
            "outputType": "structured",
            "structuredOutputSchema": json.dumps(schema),
            "fromDate": two_years_ago
        }
    )

    return response.json()`}
            />
          </section>
        </div>
      </main>
    </div>
  );
}
