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

function CodeBlock({ code, title, language }: { code: string; title?: string; language?: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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
  { id: "company-enrichment", title: "Company Enrichment", description: "Firmographic data, funding, and business descriptions" },
  { id: "contact-enrichment", title: "Contact Enrichment", description: "Professional background and role information" },
  { id: "lead-scoring", title: "Lead Scoring Data", description: "Buying intent and company health signals" },
];

export default function CRMEnrichmentPage() {
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
              <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-linkup-green/10 text-linkup-green mb-3 inline-block">
                Linkup
              </span>
              <h1 className="text-3xl font-bold text-linkup-text mb-4">
                How to enrich your CRM with Linkup
              </h1>
              <p className="text-lg text-linkup-text-muted leading-relaxed">
                Automate company and contact research to populate your CRM with firmographic data, funding history, key personnel, and more.
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {useCasesList.map((uc, idx) => (
              <a
                key={uc.id}
                href={`#${uc.id}`}
                className="flex items-start gap-3 p-3 rounded-lg bg-linkup-cream/50 hover:bg-linkup-green/10 transition-colors group"
              >
                <span className="w-6 h-6 bg-linkup-green text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                  {idx + 1}
                </span>
                <div>
                  <p className="text-sm font-medium text-linkup-text group-hover:text-linkup-green transition-colors">{uc.title}</p>
                  <p className="text-xs text-linkup-text-muted">{uc.description}</p>
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
              CRM enrichment is one of the most impactful applications of Linkup&apos;s agentic search. Instead of manually researching companies and contacts, you can automate the process of gathering firmographic data, funding history, key personnel, and more - directly into structured formats ready for your CRM.
            </p>

            <div className="flex items-center gap-2 mb-4">
              <div className="w-1 h-4 bg-linkup-green rounded-full"></div>
              <h3 className="text-lg font-semibold text-linkup-text">Why Linkup for CRM enrichment?</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { code: "structuredOutput", desc: "Returns data in JSON schemas that map directly to your CRM fields" },
                { code: "deep search", desc: "Gathers comprehensive company profiles in a single API call" },
                { code: "agentic retrieval", desc: "Finds data across websites, LinkedIn, news, and databases" }
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
                <p className="text-sm text-linkup-text-muted">Recommended settings for CRM enrichment</p>
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
                    <td className="py-4 px-4">Company research requires multiple retrieval steps</td>
                  </tr>
                  <tr className="border-b border-linkup-border-light hover:bg-linkup-cream/30 transition-colors">
                    <td className="py-4 px-4"><code className="bg-linkup-beige px-2 py-1 rounded text-linkup-green-dark font-medium">outputType</code></td>
                    <td className="py-4 px-4"><code className="bg-linkup-green/10 px-2 py-1 rounded text-linkup-green font-medium">structuredOutput</code></td>
                    <td className="py-4 px-4">Returns data in your exact CRM schema</td>
                  </tr>
                  <tr className="hover:bg-linkup-cream/30 transition-colors">
                    <td className="py-4 px-4"><code className="bg-linkup-beige px-2 py-1 rounded text-linkup-green-dark font-medium">includeImages</code></td>
                    <td className="py-4 px-4"><code className="bg-gray-100 px-2 py-1 rounded text-gray-600 font-medium">true</code></td>
                    <td className="py-4 px-4">Useful for company logos (optional)</td>
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
              {/* Use Case 1 */}
              <div id="company-enrichment" className="card p-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="w-10 h-10 bg-linkup-green text-white rounded-full flex items-center justify-center text-lg font-bold">1</span>
                  <h3 className="text-xl font-semibold text-linkup-text">Company Enrichment</h3>
                </div>
                <p className="text-linkup-text-muted mb-6 leading-relaxed">
                  Enrich company records with firmographic data, funding information, and business descriptions.
                </p>

                <div className="space-y-6">
                  <PromptBlock
                    title="company-enrichment"
                    code={`You are an expert B2B data researcher. Your task is to gather comprehensive company information for CRM enrichment.

Target company: {company_name}
Domain: {company_domain}

Execute the following steps:

1. First, scrape the company's website ({company_domain}) to extract:
   - Company description and value proposition
   - Products/services offered
   - Any visible client logos or case studies

2. Search for the company's LinkedIn profile and extract:
   - Employee count
   - Headquarters location
   - Industry classification
   - Founded year

3. Search for recent funding announcements or press releases about {company_name} to find:
   - Latest funding round and amount
   - Key investors
   - Recent news or milestones

4. Search for the company's leadership team to identify:
   - CEO/Founder name
   - Other C-level executives

Do not stop until you have attempted all four steps. Return only factual data found—do not infer or estimate.`}
                  />

                  <SchemaBlock
                    title="company-schema.json"
                    code={`{
  "type": "object",
  "properties": {
    "company_name": { "type": "string" },
    "domain": { "type": "string" },
    "description": { "type": "string" },
    "industry": { "type": "string" },
    "employee_count": { "type": "string" },
    "headquarters": { "type": "string" },
    "founded_year": { "type": "integer" },
    "products_services": {
      "type": "array",
      "items": { "type": "string" }
    },
    "funding": {
      "type": "object",
      "properties": {
        "latest_round": { "type": "string" },
        "amount": { "type": "string" },
        "investors": { "type": "array", "items": { "type": "string" } }
      }
    },
    "leadership": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "name": { "type": "string" },
          "title": { "type": "string" }
        }
      }
    },
    "known_clients": { "type": "array", "items": { "type": "string" } }
  }
}`}
                  />
                </div>
              </div>

              {/* Use Case 2 */}
              <div id="contact-enrichment" className="card p-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="w-10 h-10 bg-linkup-green text-white rounded-full flex items-center justify-center text-lg font-bold">2</span>
                  <h3 className="text-xl font-semibold text-linkup-text">Contact Enrichment</h3>
                </div>
                <p className="text-linkup-text-muted mb-6 leading-relaxed">
                  Enrich individual contact records with professional background and current role information.
                </p>

                <div className="space-y-6">
                  <PromptBlock
                    title="contact-enrichment"
                    code={`You are an expert professional researcher. Your task is to gather information about a business contact for CRM enrichment.

Contact: {contact_name}
Company: {company_name}

Execute the following steps:

1. Search for {contact_name} working at {company_name} on LinkedIn to find:
   - Current job title
   - Professional summary
   - Time in current role

2. Search for any public speaking engagements, podcast appearances, or articles authored by {contact_name} to understand their areas of expertise.

3. Search for {contact_name} in recent news or press releases related to {company_name}.

Return only verified, publicly available information. Do not fabricate or assume details.`}
                  />

                  <SchemaBlock
                    title="contact-schema.json"
                    code={`{
  "type": "object",
  "properties": {
    "full_name": { "type": "string" },
    "current_title": { "type": "string" },
    "company": { "type": "string" },
    "linkedin_url": { "type": "string" },
    "professional_summary": { "type": "string" },
    "expertise_areas": { "type": "array", "items": { "type": "string" } },
    "recent_activity": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "type": { "type": "string" },
          "title": { "type": "string" },
          "date": { "type": "string" }
        }
      }
    }
  }
}`}
                  />
                </div>
              </div>

              {/* Use Case 3 */}
              <div id="lead-scoring" className="card p-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="w-10 h-10 bg-linkup-green text-white rounded-full flex items-center justify-center text-lg font-bold">3</span>
                  <h3 className="text-xl font-semibold text-linkup-text">Lead Scoring Data</h3>
                </div>
                <p className="text-linkup-text-muted mb-6 leading-relaxed">
                  Gather signals that help prioritize leads based on buying intent, company health, and fit.
                </p>

                <div className="space-y-6">
                  <PromptBlock
                    title="lead-scoring"
                    code={`You are a B2B sales intelligence analyst. Your task is to gather data points that indicate buying readiness and company health for our sales lead scoring team.

Company: {company_name}
Domain: {company_domain}

Search for and compile the following signals:

1. Recent hiring activity: Search for job postings from {company_name} on their careers page, job boards, or LinkedIn. Note roles being hired.

2. Funding and growth signals: Search for recent funding rounds, revenue milestones, or expansion announcements.

3. Technology signals: Scrape {company_domain} to identify technologies in use (look for integrations mentioned, tech stack references, or tools listed).

4. Trigger events: Search for recent news about {company_name} including new product launches, leadership changes, or strategic initiatives.

Focus on factual signals only. Do not generate scores—return the raw data points.`}
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
                    <span><strong>Use deep search</strong> for comprehensive company profiles</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-linkup-green mt-0.5 font-bold">2</span>
                    <span><strong>Be explicit about the sequence</strong> of searches</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-linkup-green mt-0.5 font-bold">3</span>
                    <span><strong>Specify exact fields</strong> you need</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-linkup-green mt-0.5 font-bold">4</span>
                    <span><strong>Include the domain</strong> when available</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-linkup-green mt-0.5 font-bold">5</span>
                    <span><strong>Use structuredOutput</strong> with a matching schema</span>
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
                    <span><strong>Don&apos;t use vague prompts</strong> - be specific</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 mt-0.5 font-bold">2</span>
                    <span><strong>Don&apos;t ask for inferences</strong> - request factual data</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 mt-0.5 font-bold">3</span>
                    <span><strong>Don&apos;t skip the schema</strong> - you&apos;ll get unstructured text</span>
                  </li>
                </ul>
              </div>
            </div>

            <Callout type="tip">
              Always test your enrichment prompts with a few sample companies before running batch operations.
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
                <p className="text-sm text-linkup-text-muted">How to integrate enrichment into your workflow</p>
              </div>
            </div>

            <div className="space-y-4">
              {[
                {
                  title: "Batch Enrichment",
                  desc: "For enriching many records at once",
                  steps: [
                    "Queue company/contact records that need enrichment",
                    "Call Linkup API for each record with structuredOutput",
                    "Map returned JSON directly to CRM fields",
                    "Flag records where key fields returned null"
                  ]
                },
                {
                  title: "Real-Time Enrichment",
                  desc: "For enriching new leads as they arrive",
                  steps: [
                    "Trigger Linkup API call when a new lead is created",
                    "Use standard depth for quick enrichment",
                    "Optionally trigger deep search asynchronously",
                    "Update CRM record as data returns"
                  ]
                },
                {
                  title: "Periodic Refresh",
                  desc: "For keeping existing records current",
                  steps: [
                    "Schedule enrichment runs for stale records",
                    "Use date filters to find only recent changes",
                    "Compare new data and flag changes for review"
                  ]
                }
              ].map((pattern, idx) => (
                <div key={idx} className="p-5 bg-linkup-cream/50 border border-linkup-border-light rounded-xl">
                  <h3 className="text-lg font-semibold text-linkup-text">{pattern.title}</h3>
                  <p className="text-sm text-linkup-text-muted mb-3">{pattern.desc}</p>
                  <ol className="list-decimal list-inside space-y-1.5 text-sm text-linkup-text-muted">
                    {pattern.steps.map((step, i) => (
                      <li key={i}>{step}</li>
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
                <p className="text-sm text-linkup-text-muted">Python example for company enrichment</p>
              </div>
            </div>
            <CodeBlock
              title="enrich_company.py"
              language="python"
              code={`import requests
import json

def enrich_company(company_name: str, domain: str, api_key: str) -> dict:
    prompt = f"""
    You are an expert B2B data researcher. Gather comprehensive company information.

    Target company: {company_name}
    Domain: {domain}

    1. Scrape {domain} for company description, products, and visible clients.
    2. Find LinkedIn profile for employee count, HQ location, industry, founded year.
    3. Search for recent funding announcements about {company_name}.
    4. Find CEO and key leadership names.

    Return only factual data found.
    """

    schema = {
        "type": "object",
        "properties": {
            "company_name": {"type": "string"},
            "description": {"type": "string"},
            "industry": {"type": "string"},
            "employee_count": {"type": "string"},
            "headquarters": {"type": "string"},
            "founded_year": {"type": "integer"},
            "latest_funding": {"type": "string"},
            "ceo_name": {"type": "string"},
            "known_clients": {"type": "array", "items": {"type": "string"}}
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
          </section>
        </div>
      </main>
    </div>
  );
}
