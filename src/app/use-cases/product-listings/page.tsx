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

function ShoppingCartIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="21" r="1"/>
      <circle cx="20" cy="21" r="1"/>
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
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
  { id: "catalog-enrichment", title: "Catalog Enrichment", description: "Pull specs, images, and descriptions from manufacturer sources" },
  { id: "competitive-pricing", title: "Competitive Pricing", description: "Track competitor pricing across marketplaces" },
  { id: "attribute-extraction", title: "Attribute Extraction", description: "Extract structured attributes for faceted search" },
  { id: "review-aggregation", title: "Review Aggregation", description: "Gather ratings and reviews from across the web" },
  { id: "product-matching", title: "Product Matching", description: "Identify same products across different sources" },
  { id: "gap-fill", title: "Missing Data Gap-Fill", description: "Fill gaps in existing listings" },
];

export default function ProductListingsPage() {
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
              <ShoppingCartIcon className="w-8 h-8" />
            </div>
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-linkup-text mb-4">
                How to enrich product listings with Linkup
              </h1>
              <p className="text-lg text-linkup-text-muted leading-relaxed">
                Automate catalog enrichment by pulling specifications from manufacturer sites, gathering competitive pricing, extracting images, and compiling product data from authoritative sources.
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
              Product listing quality directly impacts conversion rates, search rankings, and customer trust. Yet maintaining rich, accurate listings across thousands of SKUs is a massive operational challenge. Linkup&apos;s agentic search can automate the enrichment process—pulling specifications from manufacturer sites, gathering competitive pricing, extracting images, and compiling product data from authoritative sources.
            </p>

            <div className="flex items-center gap-2 mb-4">
              <div className="w-1 h-4 bg-linkup-green rounded-full"></div>
              <h3 className="text-lg font-semibold text-linkup-text">Why Linkup for product enrichment?</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { code: "deep search", desc: "Executes \"find manufacturer page → scrape specs\" workflows automatically" },
                { code: "structuredOutput", desc: "Returns data mapped directly to your catalog schema" },
                { code: "agentic retrieval", desc: "Navigates product pages, datasheets, and PDFs to extract structured attributes" },
                { code: "scale with consistency", desc: "Enrich at scale with consistent, structured outputs" }
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
                <p className="text-sm text-linkup-text-muted">Recommended settings for product enrichment</p>
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
                    <td className="py-4 px-4">Enrichment requires finding source pages, then scraping detailed specs</td>
                  </tr>
                  <tr className="hover:bg-linkup-cream/30 transition-colors">
                    <td className="py-4 px-4"><code className="bg-linkup-beige px-2 py-1 rounded text-linkup-green-dark font-medium">outputType</code></td>
                    <td className="py-4 px-4"><code className="bg-linkup-green/10 px-2 py-1 rounded text-linkup-green font-medium">structuredOutput</code></td>
                    <td className="py-4 px-4">Returns attributes in your exact catalog schema</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-6">
              <Callout type="tip">
                Ask for manufacturer and trusted sources in the query rather than restricting to them.
                Reach for <code className="text-linkup-green-dark">includeDomains</code> only when you have an
                exact list of sites to check — competitor price monitoring, where you already know the
                retailers, is the clear case for it.
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
              {/* Use Case 1: Catalog Enrichment */}
              <div id="catalog-enrichment" className="card p-8 scroll-mt-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-8 bg-linkup-green text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
                  <h3 className="text-xl font-semibold text-linkup-text">Catalog Enrichment from Manufacturer Sources</h3>
                </div>
                <p className="text-linkup-text-muted mb-6">
                  Pull official specifications, descriptions, and images from manufacturer websites.
                </p>

                <div className="space-y-4">
                  <PromptBlock
                    title="Manufacturer Enrichment"
                    code={`You are a product data specialist enriching an e-commerce catalog.

Product: {product_name}
Brand: {brand}
Model/SKU: {model_number}
Current listing URL (ours): {our_listing_url}

Execute the following steps:

1. Search for the official {brand} product page for model {model_number}.

2. Once found, scrape the manufacturer's product page to extract:
   - Official product name
   - Marketing description
   - Complete technical specifications
   - All product image URLs
   - Product dimensions and weight
   - Key features list
   - Warranty information

3. Search for the product datasheet or spec sheet PDF for {model_number}. If found, extract any additional specifications not on the main product page.

4. Search for {brand} {model_number} on the brand's support/documentation page to find:
   - User manual PDF link
   - Installation guide link
   - Compatibility information

Return only official manufacturer data. Do not include third-party descriptions or reviews.`}
                  />

                  <SchemaBlock
                    title="Catalog Enrichment Schema"
                    code={`{
  "type": "object",
  "properties": {
    "brand": { "type": "string" },
    "model_number": { "type": "string" },
    "official_product_name": { "type": "string" },
    "manufacturer_url": { "type": "string" },
    "marketing_description": { "type": "string" },
    "key_features": {
      "type": "array",
      "items": { "type": "string" }
    },
    "specifications": {
      "type": "object",
      "properties": {
        "dimensions": { "type": "string" },
        "weight": { "type": "string" },
        "color": { "type": "string" },
        "material": { "type": "string" },
        "power_requirements": { "type": "string" },
        "additional_specs": {
          "type": "object",
          "additionalProperties": { "type": "string" }
        }
      }
    },
    "images": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "url": { "type": "string" },
          "type": {
            "type": "string",
            "enum": ["main", "alternate", "lifestyle", "dimension_diagram"]
          }
        }
      }
    },
    "warranty": { "type": "string" },
    "documents": {
      "type": "object",
      "properties": {
        "datasheet_url": { "type": "string" },
        "manual_url": { "type": "string" },
        "installation_guide_url": { "type": "string" }
      }
    }
  }
}`}
                  />
                </div>
              </div>

              {/* Use Case 2: Competitive Price Monitoring */}
              <div id="competitive-pricing" className="card p-8 scroll-mt-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-8 bg-linkup-green text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
                  <h3 className="text-xl font-semibold text-linkup-text">Competitive Price Monitoring</h3>
                </div>
                <p className="text-linkup-text-muted mb-6">
                  Track competitor pricing across marketplaces to inform your pricing strategy.
                </p>

                <div className="space-y-4">
                  <PromptBlock
                    title="Price Monitoring"
                    code={`You are a pricing analyst monitoring competitor listings for a specific product.

Product: {product_name}
Brand: {brand}
Model/SKU: {model_number}
UPC/EAN (if known): {upc}
Our current price: {our_price}

Execute the following steps:

1. Search for this exact product on major retail and marketplace sites:
   - Amazon
   - Walmart
   - Target
   - Best Buy
   - Home Depot (if applicable)
   - Category-specific marketplaces

2. For each listing found, scrape the product page to extract:
   - Seller/retailer name
   - Current price
   - Original price (if on sale)
   - Shipping cost or free shipping threshold
   - Stock availability
   - Listing URL
   - Any active promotions or coupons mentioned

3. Verify each listing matches our product by confirming model number or UPC.

Only include listings for the exact product—not similar or compatible items.`}
                  />

                  <SchemaBlock
                    title="Price Monitoring Schema"
                    code={`{
  "type": "object",
  "properties": {
    "product": { "type": "string" },
    "model_number": { "type": "string" },
    "upc": { "type": "string" },
    "our_price": { "type": "string" },
    "competitor_listings": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "retailer": { "type": "string" },
          "listing_url": { "type": "string" },
          "current_price": { "type": "number" },
          "currency": { "type": "string" },
          "original_price": { "type": "number" },
          "discount_percentage": { "type": "number" },
          "shipping_cost": { "type": "string" },
          "free_shipping_threshold": { "type": "number" },
          "in_stock": { "type": "boolean" },
          "stock_level": { "type": "string" },
          "active_promotions": {
            "type": "array",
            "items": { "type": "string" }
          },
          "last_checked": { "type": "string" }
        }
      }
    },
    "price_range": {
      "type": "object",
      "properties": {
        "min": { "type": "number" },
        "max": { "type": "number" },
        "average": { "type": "number" }
      }
    },
    "our_position": {
      "type": "string",
      "enum": ["lowest", "competitive", "above_average", "highest"]
    }
  }
}`}
                  />
                </div>
              </div>

              {/* Use Case 3: Attribute Extraction */}
              <div id="attribute-extraction" className="card p-8 scroll-mt-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-8 bg-linkup-green text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
                  <h3 className="text-xl font-semibold text-linkup-text">Product Attribute Extraction for Faceted Search</h3>
                </div>
                <p className="text-linkup-text-muted mb-6">
                  Extract structured attributes to power filters and faceted navigation.
                </p>

                <div className="space-y-4">
                  <PromptBlock
                    title="Attribute Extraction"
                    code={`You are a catalog data specialist extracting product attributes for search and filtering.

Product category: {category}
Product: {product_name}
Brand: {brand}
Model: {model_number}

Your goal is to extract all filterable attributes for this {category} product.

1. Find and scrape the manufacturer's product page for {brand} {model_number}.

2. Extract these category-specific attributes:
{attribute_list_for_category}

3. Search for the product datasheet to find any technical specifications not listed on the main page.

4. Normalize all values to standard units and formats:
   - Dimensions in inches (convert from cm if needed)
   - Weight in pounds
   - Colors as standard color names
   - Capacities in standard units

Return structured attributes ready for faceted search implementation.`}
                  />

                  <SchemaBlock
                    title="Electronics Attributes Schema (Example)"
                    code={`{
  "type": "object",
  "properties": {
    "product_name": { "type": "string" },
    "brand": { "type": "string" },
    "model": { "type": "string" },
    "filterable_attributes": {
      "type": "object",
      "properties": {
        "screen_size": { "type": "number" },
        "screen_size_unit": { "type": "string" },
        "resolution": { "type": "string" },
        "display_type": {
          "type": "string",
          "enum": ["LCD", "LED", "OLED", "QLED", "Mini-LED", "Other"]
        },
        "refresh_rate": { "type": "integer" },
        "smart_platform": { "type": "string" },
        "hdmi_ports": { "type": "integer" },
        "usb_ports": { "type": "integer" },
        "wifi_enabled": { "type": "boolean" },
        "bluetooth_enabled": { "type": "boolean" },
        "voice_assistant": {
          "type": "array",
          "items": { "type": "string" }
        },
        "energy_star_certified": { "type": "boolean" },
        "wall_mountable": { "type": "boolean" },
        "color": { "type": "string" },
        "weight_lbs": { "type": "number" },
        "dimensions_inches": {
          "type": "object",
          "properties": {
            "width": { "type": "number" },
            "height": { "type": "number" },
            "depth": { "type": "number" }
          }
        }
      }
    }
  }
}`}
                  />
                </div>
              </div>

              {/* Use Case 4: Review Aggregation */}
              <div id="review-aggregation" className="card p-8 scroll-mt-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-8 bg-linkup-green text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
                  <h3 className="text-xl font-semibold text-linkup-text">Review & Rating Aggregation</h3>
                </div>
                <p className="text-linkup-text-muted mb-6">
                  Gather social proof from across the web for new or thin listings.
                </p>

                <div className="space-y-4">
                  <PromptBlock
                    title="Review Aggregation"
                    code={`You are a product research analyst gathering review data from across the web.

Product: {product_name}
Brand: {brand}
Model: {model_number}

Execute the following steps:

1. Search for {brand} {model_number} reviews on major retail sites and find the aggregate rating and review count from each source.

2. Search for {brand} {model_number} reviews on specialty review sites relevant to this product category (e.g., RTINGS, Wirecutter, CNET, Tom's Guide, etc.).

3. Search for {brand} {model_number} on YouTube to find video reviews. Extract:
   - Channel name
   - Video title
   - View count
   - Overall sentiment (positive/negative/mixed)

4. Search for Reddit discussions about {brand} {model_number} to understand real user sentiment.

Compile an overall sentiment summary based on patterns across sources. Note any consistent praise or complaints.`}
                  />

                  <SchemaBlock
                    title="Review Aggregation Schema"
                    code={`{
  "type": "object",
  "properties": {
    "product": { "type": "string" },
    "model": { "type": "string" },
    "retail_ratings": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "source": { "type": "string" },
          "rating": { "type": "number" },
          "max_rating": { "type": "number" },
          "review_count": { "type": "integer" },
          "url": { "type": "string" }
        }
      }
    },
    "expert_reviews": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "source": { "type": "string" },
          "rating": { "type": "string" },
          "verdict": { "type": "string" },
          "pros": { "type": "array", "items": { "type": "string" } },
          "cons": { "type": "array", "items": { "type": "string" } },
          "url": { "type": "string" }
        }
      }
    },
    "video_reviews": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "channel": { "type": "string" },
          "title": { "type": "string" },
          "views": { "type": "integer" },
          "sentiment": { "type": "string" },
          "url": { "type": "string" }
        }
      }
    },
    "common_praise": {
      "type": "array",
      "items": { "type": "string" }
    },
    "common_complaints": {
      "type": "array",
      "items": { "type": "string" }
    },
    "overall_sentiment": {
      "type": "string",
      "enum": ["very_positive", "positive", "mixed", "negative", "very_negative"]
    },
    "aggregate_score": { "type": "number" }
  }
}`}
                  />
                </div>
              </div>

              {/* Use Case 5: Product Matching */}
              <div id="product-matching" className="card p-8 scroll-mt-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-8 bg-linkup-green text-white rounded-full flex items-center justify-center text-sm font-bold">5</span>
                  <h3 className="text-xl font-semibold text-linkup-text">Product Matching & Deduplication</h3>
                </div>
                <p className="text-linkup-text-muted mb-6">
                  Identify the same product across different sources with varying names/identifiers.
                </p>

                <div className="space-y-4">
                  <PromptBlock
                    title="Product Matching"
                    code={`You are a product data specialist identifying duplicate and matching products.

Source product:
- Name: {source_product_name}
- Brand: {brand}
- Identifiers available: {identifiers} (e.g., UPC, MPN, ASIN, etc.)
- Key specs: {key_specs}

Execute the following steps:

1. Search for this product using each available identifier to find listings on other platforms.

2. For ambiguous matches (same brand, similar name, but different identifiers), scrape both product pages and compare:
   - Exact dimensions
   - Weight
   - Key distinguishing specifications
   - Package contents

3. Search for "{brand} {product_name} vs" to find comparison articles that might clarify model differences.

4. Determine match confidence:
   - EXACT: Same UPC/EAN or identical specs
   - LIKELY: Same brand + model with minor naming variations
   - POSSIBLE: Similar product, needs manual review
   - DIFFERENT: Confirmed different product

Return match candidates with confidence levels.`}
                  />

                  <SchemaBlock
                    title="Product Matching Schema"
                    code={`{
  "type": "object",
  "properties": {
    "source_product": {
      "type": "object",
      "properties": {
        "name": { "type": "string" },
        "brand": { "type": "string" },
        "identifiers": { "type": "object" }
      }
    },
    "match_candidates": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "platform": { "type": "string" },
          "listing_name": { "type": "string" },
          "listing_url": { "type": "string" },
          "identifiers_found": { "type": "object" },
          "match_confidence": {
            "type": "string",
            "enum": ["exact", "likely", "possible", "different"]
          },
          "matching_evidence": {
            "type": "array",
            "items": { "type": "string" }
          },
          "differences_found": {
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

              {/* Use Case 6: Gap Fill */}
              <div id="gap-fill" className="card p-8 scroll-mt-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-8 bg-linkup-green text-white rounded-full flex items-center justify-center text-sm font-bold">6</span>
                  <h3 className="text-xl font-semibold text-linkup-text">Missing Data Gap-Fill</h3>
                </div>
                <p className="text-linkup-text-muted mb-6">
                  Identify and fill gaps in existing listings that hurt search visibility or conversion.
                </p>

                <div className="space-y-4">
                  <PromptBlock
                    title="Gap Fill"
                    code={`You are a catalog quality analyst identifying and filling data gaps.

Product: {product_name}
Brand: {brand}
Model: {model_number}

Current listing data:
{current_listing_json}

Missing or empty fields that need enrichment:
{missing_fields_list}

Execute the following steps:

1. Find and scrape the official {brand} product page for {model_number}.

2. For each missing field, extract the value from the manufacturer source:
{for_each_missing_field_instruction}

3. If any fields cannot be found on the main product page, search for the product datasheet or specifications PDF.

4. For fields still missing after steps 1-3, search for this product on major retailers and extract the missing data from the most authoritative listing.

Return only the fields that were missing, with their values and source URLs.`}
                  />

                  <SchemaBlock
                    title="Gap Fill Schema"
                    code={`{
  "type": "object",
  "properties": {
    "product": { "type": "string" },
    "model": { "type": "string" },
    "enriched_fields": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "field_name": { "type": "string" },
          "value": { "type": "string" },
          "source_url": { "type": "string" },
          "source_type": {
            "type": "string",
            "enum": ["manufacturer", "datasheet", "retailer"]
          },
          "confidence": {
            "type": "string",
            "enum": ["high", "medium", "low"]
          }
        }
      }
    },
    "still_missing": {
      "type": "array",
      "items": { "type": "string" }
    },
    "enrichment_summary": {
      "type": "object",
      "properties": {
        "fields_requested": { "type": "integer" },
        "fields_filled": { "type": "integer" },
        "fill_rate": { "type": "number" }
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
              <h2 className="text-2xl font-semibold text-linkup-text">Best Practices</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-linkup-green mb-4 flex items-center gap-2">
                  <span className="text-green-500">&#10003;</span> Do&apos;s
                </h3>
                <ul className="space-y-3">
                  {[
                    { title: "Always include model numbers and UPCs", desc: "These are the most reliable identifiers for finding exact matches" },
                    { title: "Prioritize manufacturer sources", desc: "Official product pages are the authoritative source for specs and descriptions" },
                    { title: "Use deep with explicit scrape instructions", desc: "Product specs live on detail pages, not search snippets" },
                    { title: "Request image URLs in your schema", desc: "Product imagery is often the most valuable enrichment" },
                    { title: "Normalize units in your prompt", desc: "Tell Linkup to convert to your standard units (inches, pounds, etc.)" },
                    { title: "Use includeDomains only for a known site list", desc: "Valid when you supply the exact competitor domains, as in price monitoring" },
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
                    { title: "Don't rely on product names alone", desc: "Names vary wildly across retailers; always use model numbers" },
                    { title: "Don't skip verification", desc: "Cross-reference identifiers to avoid enriching with wrong product data" },
                    { title: "Don't use standard depth for spec extraction", desc: "You need the find-then-scrape pattern" },
                    { title: "Don't mix official specs with user-generated content", desc: "Keep manufacturer data separate from reviews" },
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
                <h4 className="font-semibold text-linkup-text mb-2">Batch Catalog Enrichment</h4>
                <p className="text-sm text-linkup-text-muted mb-3">For initial catalog build or bulk updates:</p>
                <ol className="text-sm text-linkup-text-muted space-y-1 list-decimal list-inside">
                  <li>Export SKUs needing enrichment (missing specs, no images, thin descriptions)</li>
                  <li>Queue enrichment jobs with brand + model number</li>
                  <li>Call Linkup API for each SKU with category-specific schema</li>
                  <li>Validate returned data against category rules</li>
                  <li>Import enriched data to PIM/catalog system</li>
                  <li>Flag low-confidence enrichments for manual review</li>
                </ol>
              </div>

              <div className="p-4 bg-linkup-cream/50 rounded-xl">
                <h4 className="font-semibold text-linkup-text mb-2">New Product Onboarding</h4>
                <p className="text-sm text-linkup-text-muted mb-3">For products added to catalog:</p>
                <ol className="text-sm text-linkup-text-muted space-y-1 list-decimal list-inside">
                  <li>Trigger on new SKU creation</li>
                  <li>Call Linkup with manufacturer + model</li>
                  <li>Auto-populate catalog fields from structuredOutput</li>
                  <li>Fetch and store product images</li>
                  <li>Queue for QA review before publishing</li>
                </ol>
              </div>

              <div className="p-4 bg-linkup-cream/50 rounded-xl">
                <h4 className="font-semibold text-linkup-text mb-2">Competitive Price Monitoring</h4>
                <p className="text-sm text-linkup-text-muted mb-3">For ongoing price intelligence:</p>
                <ol className="text-sm text-linkup-text-muted space-y-1 list-decimal list-inside">
                  <li>Schedule daily/weekly price checks for priority SKUs</li>
                  <li>Call Linkup with competitor site restrictions</li>
                  <li>Compare returned prices against current pricing</li>
                  <li>Alert on significant competitor price changes</li>
                  <li>Feed data into pricing optimization system</li>
                </ol>
              </div>

              <div className="p-4 bg-linkup-cream/50 rounded-xl">
                <h4 className="font-semibold text-linkup-text mb-2">Catalog Quality Scoring</h4>
                <p className="text-sm text-linkup-text-muted mb-3">For maintaining catalog health:</p>
                <ol className="text-sm text-linkup-text-muted space-y-1 list-decimal list-inside">
                  <li>Score existing listings on completeness</li>
                  <li>Identify SKUs below quality threshold</li>
                  <li>Batch enrich missing fields via Linkup</li>
                  <li>Re-score and track improvement</li>
                  <li>Report on catalog quality trends</li>
                </ol>
              </div>
            </div>

            <Callout type="tip">
              For high-volume enrichment, consider implementing a queue system with rate limiting to stay within API limits while maximizing throughput.
            </Callout>

            <div className="mt-8">
              <h3 className="text-lg font-semibold text-linkup-text mb-4">Sample Integration Code</h3>
              <CodeBlock
                title="product_enrichment.py"
                language="python"
                dark
                code={`import requests
import json

def enrich_product_listing(
    brand: str,
    model_number: str,
    category: str,
    category_attributes: list,
    api_key: str
) -> dict:
    """
    Enrich a product listing from manufacturer sources
    """

    attributes_str = "\\n".join([f"   - {attr}" for attr in category_attributes])

    prompt = f"""
    You are a product data specialist enriching an e-commerce catalog.

    Brand: {brand}
    Model: {model_number}
    Category: {category}

    1. Find and scrape the official {brand} product page for model {model_number}.

    2. Extract:
       - Official product name
       - Marketing description
       - All product image URLs
       - Complete specifications including:
{attributes_str}

    3. Search for the product datasheet PDF and extract any additional specs.

    Return only official manufacturer data.
    """

    schema = {
        "type": "object",
        "properties": {
            "brand": {"type": "string"},
            "model": {"type": "string"},
            "official_name": {"type": "string"},
            "description": {"type": "string"},
            "manufacturer_url": {"type": "string"},
            "images": {
                "type": "array",
                "items": {"type": "string"}
            },
            "specifications": {
                "type": "object",
                "additionalProperties": {"type": "string"}
            },
            "datasheet_url": {"type": "string"}
        }
    }

    response = requests.post(
        "https://api.linkup.so/v1/search",
        headers={"Authorization": f"Bearer {api_key}"},
        json={
            "q": prompt,
            "depth": "deep",
            "outputType": "structuredOutput",
            "structuredOutputSchema": json.dumps(schema)
        }
    )

    return response.json()


def monitor_competitor_prices(
    product_name: str,
    model_number: str,
    upc: str,
    competitor_domains: list,
    api_key: str
) -> dict:
    """
    Monitor competitor pricing for a specific product
    """

    prompt = f"""
    You are a pricing analyst monitoring competitor listings.

    Product: {product_name}
    Model: {model_number}
    UPC: {upc}

    Search for this exact product on competitor sites and scrape each listing for:
    - Current price
    - Original price (if on sale)
    - Stock availability
    - Active promotions

    Only include listings matching the model number or UPC.
    """

    schema = {
        "type": "object",
        "properties": {
            "product": {"type": "string"},
            "model": {"type": "string"},
            "listings": {
                "type": "array",
                "items": {
                    "type": "object",
                    "properties": {
                        "retailer": {"type": "string"},
                        "url": {"type": "string"},
                        "price": {"type": "number"},
                        "original_price": {"type": "number"},
                        "in_stock": {"type": "boolean"},
                        "promotions": {"type": "array", "items": {"type": "string"}}
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
            # Valid here: the caller supplies the exact retailers to check.
            # Do not infer a domain list from a preference for "trusted" sources.
            "includeDomains": competitor_domains
        }
    )

    return response.json()


def fill_catalog_gaps(
    brand: str,
    model_number: str,
    current_data: dict,
    missing_fields: list,
    api_key: str
) -> dict:
    """
    Fill missing fields in an existing listing
    """

    fields_str = ", ".join(missing_fields)

    prompt = f"""
    You are a catalog quality analyst filling data gaps.

    Brand: {brand}
    Model: {model_number}

    Fields missing from our listing: {fields_str}

    1. Scrape the official {brand} product page for {model_number}.
    2. Extract values for these specific missing fields: {fields_str}
    3. If not found on main page, search for the product datasheet.

    Return only the missing fields with their values and source URLs.
    """

    schema = {
        "type": "object",
        "properties": {
            "enriched_fields": {
                "type": "array",
                "items": {
                    "type": "object",
                    "properties": {
                        "field": {"type": "string"},
                        "value": {"type": "string"},
                        "source_url": {"type": "string"}
                    }
                }
            },
            "still_missing": {
                "type": "array",
                "items": {"type": "string"}
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
            "structuredOutputSchema": json.dumps(schema)
        }
    )

    return response.json()`}
              />
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}
