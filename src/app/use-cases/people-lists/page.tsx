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

function UsersIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
      <circle cx="9" cy="7" r="4"/>
      <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
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
  { id: "professional-profile", title: "Professional Profile Enrichment", description: "Full LinkedIn profile extraction and career history" },
  { id: "sales-prospecting", title: "Sales Prospecting Enrichment", description: "Role details, responsibilities, and buying signals" },
  { id: "recruiting", title: "Recruiting Candidate Enrichment", description: "Skills, experience depth, and career trajectory" },
  { id: "investor-research", title: "Investor & Board Research", description: "Investment focus, portfolio, and thesis" },
  { id: "event-attendee", title: "Event Attendee Enrichment", description: "Quick verification and context for follow-up" },
  { id: "expert-identification", title: "Expert & Speaker Identification", description: "Find subject matter experts on specific topics" },
];

export default function PeopleListsPage() {
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
              <UsersIcon className="w-8 h-8" />
            </div>
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-linkup-text mb-4">
                How to enrich people lists with Linkup
              </h1>
              <p className="text-lg text-linkup-text-muted leading-relaxed">
                Enrich contact lists with professional profiles, career history, social presence, and verified data for sales, recruiting, and research workflows.
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
              People enrichment powers everything from sales prospecting to recruiting pipelines to investor research. Whether you have a list of names from an event, a CRM export, or a target account list, Linkup can systematically gather professional backgrounds, current roles, social presence, and public activity for each person.
            </p>

            <div className="flex items-center gap-2 mb-4">
              <div className="w-1 h-4 bg-linkup-green rounded-full"></div>
              <h3 className="text-lg font-semibold text-linkup-text">Why Linkup for people enrichment?</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { code: "deep search", desc: "Can find LinkedIn profiles, then extract structured professional data" },
                { code: "structured output", desc: "Returns consistent data across hundreds or thousands of records" },
                { code: "agentic retrieval", desc: "Cross-references multiple sources (LinkedIn, company sites, news, publications)" },
                { code: "disambiguation", desc: "Handles variations in names and disambiguates common names using company context" }
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
                <p className="text-sm text-linkup-text-muted">Recommended settings for people enrichment</p>
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
                    <td className="py-4 px-4">People research requires finding profiles, then scraping details</td>
                  </tr>
                  <tr className="hover:bg-linkup-cream/30 transition-colors">
                    <td className="py-4 px-4"><code className="bg-linkup-beige px-2 py-1 rounded text-linkup-green-dark font-medium">outputType</code></td>
                    <td className="py-4 px-4"><code className="bg-linkup-green/10 px-2 py-1 rounded text-linkup-green font-medium">structured</code></td>
                    <td className="py-4 px-4">Consistent format for CRM/ATS import</td>
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
              {/* Use Case 1: Professional Profile Enrichment */}
              <div id="professional-profile" className="card p-8 scroll-mt-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-8 bg-linkup-green text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
                  <h3 className="text-xl font-semibold text-linkup-text">Professional Profile Enrichment</h3>
                </div>
                <p className="text-linkup-text-muted mb-6">
                  Enrich a list of names with professional background, current role, and career history.
                </p>

                <div className="space-y-4">
                  <PromptBlock
                    title="Professional Profile"
                    code={`You are a professional research assistant enriching a contact database.

Person: {person_name}
Company (if known): {company}
Title (if known): {title}
Location (if known): {location}

Execute the following research:

1. Search for {person_name}'s LinkedIn profile. Use the company and title to disambiguate if multiple results.

2. From the LinkedIn profile, extract:
   - Current job title and company
   - Professional headline
   - Location
   - Time in current role
   - Previous positions (last 3)
   - Education
   - Skills and endorsements (top 5)

3. Search for {person_name} on the company website ({company_domain}) to find:
   - Official bio
   - Team page listing
   - Any publications or thought leadership

4. Search for any public speaking engagements, podcast appearances, or conference talks by {person_name}.

Return structured professional data. Flag if confidence is low due to name ambiguity.`}
                  />

                  <SchemaBlock
                    title="Professional Profile Schema"
                    code={`{
  "type": "object",
  "properties": {
    "input": {
      "type": "object",
      "properties": {
        "name": { "type": "string" },
        "company_hint": { "type": "string" },
        "title_hint": { "type": "string" }
      }
    },
    "match_confidence": {
      "type": "string",
      "enum": ["high", "medium", "low", "not_found"]
    },
    "linkedin": {
      "type": "object",
      "properties": {
        "profile_url": { "type": "string" },
        "full_name": { "type": "string" },
        "headline": { "type": "string" },
        "current_position": {
          "type": "object",
          "properties": {
            "title": { "type": "string" },
            "company": { "type": "string" },
            "duration": { "type": "string" },
            "start_date": { "type": "string" }
          }
        },
        "location": { "type": "string" },
        "previous_positions": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "title": { "type": "string" },
              "company": { "type": "string" },
              "duration": { "type": "string" }
            }
          }
        },
        "education": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "school": { "type": "string" },
              "degree": { "type": "string" },
              "field": { "type": "string" },
              "years": { "type": "string" }
            }
          }
        },
        "top_skills": {
          "type": "array",
          "items": { "type": "string" }
        }
      }
    },
    "company_bio": {
      "type": "object",
      "properties": {
        "bio_text": { "type": "string" },
        "source_url": { "type": "string" }
      }
    },
    "public_activity": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "type": { "type": "string" },
          "title": { "type": "string" },
          "date": { "type": "string" },
          "url": { "type": "string" }
        }
      }
    }
  }
}`}
                  />
                </div>
              </div>

              {/* Use Case 2: Sales Prospecting Enrichment */}
              <div id="sales-prospecting" className="card p-8 scroll-mt-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-8 bg-linkup-green text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
                  <h3 className="text-xl font-semibold text-linkup-text">Sales Prospecting Enrichment</h3>
                </div>
                <p className="text-linkup-text-muted mb-6">
                  Enrich leads with data relevant to sales outreach—role details, responsibilities, and buying signals.
                </p>

                <div className="space-y-4">
                  <PromptBlock
                    title="Sales Prospecting"
                    code={`You are a sales intelligence researcher preparing prospect profiles.

Prospect: {person_name}
Company: {company}
Our product category: {product_category}

Research this prospect for sales outreach:

1. Find their LinkedIn profile and extract:
   - Exact current title and reporting structure (if visible)
   - Time in role (new roles = potential buying window)
   - Career trajectory (promoted internally vs. external hire)
   - Relevant skills and areas of responsibility

2. Search for {person_name} at {company} to understand:
   - Their team or department
   - Any public statements about challenges or initiatives in {product_category}
   - Recent projects or announcements they're associated with

3. Search for {person_name} in recent news, podcasts, or conference talks to find:
   - Topics they care about
   - Pain points they've mentioned
   - Initiatives they're driving
Skip if you don't find any

4. Search for any content they've authored (blog posts, LinkedIn articles, publications). Skip if you don't find any.

Return insights useful for personalized outreach.`}
                  />

                  <SchemaBlock
                    title="Sales Prospecting Schema"
                    code={`{
  "type": "object",
  "properties": {
    "prospect_name": { "type": "string" },
    "company": { "type": "string" },
    "linkedin_url": { "type": "string" },
    "role_details": {
      "type": "object",
      "properties": {
        "title": { "type": "string" },
        "department": { "type": "string" },
        "seniority_level": {
          "type": "string",
          "enum": ["C-level", "VP", "Director", "Manager", "IC", "Unknown"]
        },
        "time_in_role": { "type": "string" },
        "new_to_role": { "type": "boolean" },
        "reports_to": { "type": "string" },
        "team_size": { "type": "string" }
      }
    },
    "responsibilities": {
      "type": "array",
      "items": { "type": "string" }
    },
    "buying_signals": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "signal": { "type": "string" },
          "source": { "type": "string" },
          "date": { "type": "string" }
        }
      }
    },
    "topics_of_interest": {
      "type": "array",
      "items": { "type": "string" }
    },
    "pain_points_mentioned": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "pain_point": { "type": "string" },
          "context": { "type": "string" },
          "source": { "type": "string" }
        }
      }
    },
    "authored_content": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "title": { "type": "string" },
          "type": { "type": "string" },
          "url": { "type": "string" },
          "date": { "type": "string" }
        }
      }
    },
    "outreach_hooks": {
      "type": "array",
      "items": { "type": "string" }
    }
  }
}`}
                  />
                </div>
              </div>

              {/* Use Case 3: Recruiting Candidate Enrichment */}
              <div id="recruiting" className="card p-8 scroll-mt-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-8 bg-linkup-green text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
                  <h3 className="text-xl font-semibold text-linkup-text">Recruiting Candidate Enrichment</h3>
                </div>
                <p className="text-linkup-text-muted mb-6">
                  Enrich candidate profiles with skills, experience depth, and career trajectory.
                </p>

                <div className="space-y-4">
                  <PromptBlock
                    title="Candidate Enrichment"
                    code={`You are a recruiting research assistant evaluating candidates.

Candidate: {candidate_name}
Target role: {target_role}
Required skills: {required_skills}
Company they're at: {current_company}

Research this candidate:

1. Find their LinkedIn profile and extract:
   - Complete work history with durations
   - Education and certifications
   - Skills (especially matching {required_skills})
   - Recommendations or endorsements

2. Search for their contributions in the professional community:
   - GitHub profile and repositories (if technical role)
   - Published articles or blog posts
   - Conference talks or presentations
   - Open source contributions

3. Search for any news mentions or awards.

4. Assess career trajectory:
   - Company tier (startups vs. enterprises)

Return a candidate profile with fit assessment for {target_role}.`}
                  />

                  <SchemaBlock
                    title="Candidate Enrichment Schema"
                    code={`{
  "type": "object",
  "properties": {
    "candidate_name": { "type": "string" },
    "target_role": { "type": "string" },
    "linkedin_url": { "type": "string" },
    "current_position": {
      "type": "object",
      "properties": {
        "title": { "type": "string" },
        "company": { "type": "string" },
        "duration": { "type": "string" }
      }
    },
    "work_history": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "title": { "type": "string" },
          "company": { "type": "string" },
          "company_type": { "type": "string" },
          "duration": { "type": "string" },
          "description": { "type": "string" }
        }
      }
    },
    "education": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "institution": { "type": "string" },
          "degree": { "type": "string" },
          "field": { "type": "string" },
          "year": { "type": "string" }
        }
      }
    },
    "skills_match": {
      "type": "object",
      "properties": {
        "matched_skills": {
          "type": "array",
          "items": { "type": "string" }
        },
        "missing_skills": {
          "type": "array",
          "items": { "type": "string" }
        },
        "additional_skills": {
          "type": "array",
          "items": { "type": "string" }
        }
      }
    },
    "community_presence": {
      "type": "object",
      "properties": {
        "github": {
          "type": "object",
          "properties": {
            "url": { "type": "string" },
            "public_repos": { "type": "integer" },
            "notable_projects": {
              "type": "array",
              "items": { "type": "string" }
            }
          }
        },
        "publications": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "title": { "type": "string" },
              "type": { "type": "string" },
              "url": { "type": "string" }
            }
          }
        },
        "speaking": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "event": { "type": "string" },
              "topic": { "type": "string" },
              "date": { "type": "string" }
            }
          }
        }
      }
    },
    "career_trajectory": {
      "type": "object",
      "properties": {
        "years_of_experience": { "type": "number" },
        "progression_speed": {
          "type": "string",
          "enum": ["fast", "average", "slow"]
        },
        "company_tier_trend": { "type": "string" },
        "role_consistency": { "type": "string" }
      }
    },
    "fit_assessment": {
      "type": "object",
      "properties": {
        "overall_fit": {
          "type": "string",
          "enum": ["strong", "moderate", "weak"]
        },
        "strengths": {
          "type": "array",
          "items": { "type": "string" }
        },
        "concerns": {
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

              {/* Use Case 4: Investor & Board Research */}
              <div id="investor-research" className="card p-8 scroll-mt-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-8 bg-linkup-green text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
                  <h3 className="text-xl font-semibold text-linkup-text">Investor & Board Research</h3>
                </div>
                <p className="text-linkup-text-muted mb-6">
                  Research investors, board members, or advisors for due diligence or outreach.
                </p>

                <div className="space-y-4">
                  <PromptBlock
                    title="Investor Research"
                    code={`You are an investor research assistant.

Person: {person_name}
Known affiliation: {affiliation}
Context: {research_context}

Research this investor/board member:

1. Find their LinkedIn profile for:
   - Current and past board positions
   - Investment firm affiliations
   - Operational roles (if any)
   - Education and background

2. Search for their investment portfolio:
   - Companies they've invested in or serve on boards
   - Sectors they focus on
   - Stage preferences (seed, Series A, growth, etc.)

3. Search for interviews, podcasts, or articles where they discuss:
   - Investment thesis
   - What they look for in companies
   - Sectors they're excited about

4. Search for news about their recent activities:
   - Recent investments announced
   - Board appointments
   - Fund announcements

5. Search for any public contact information or preferred outreach channels.

Return a comprehensive investor profile.`}
                  />

                  <SchemaBlock
                    title="Investor Research Schema"
                    code={`{
  "type": "object",
  "properties": {
    "person_name": { "type": "string" },
    "linkedin_url": { "type": "string" },
    "current_roles": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "role": { "type": "string" },
          "organization": { "type": "string" },
          "type": {
            "type": "string",
            "enum": ["investor", "board_member", "advisor", "operator"]
          }
        }
      }
    },
    "firm_affiliations": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "firm": { "type": "string" },
          "role": { "type": "string" },
          "current": { "type": "boolean" }
        }
      }
    },
    "investment_focus": {
      "type": "object",
      "properties": {
        "sectors": {
          "type": "array",
          "items": { "type": "string" }
        },
        "stages": {
          "type": "array",
          "items": { "type": "string" }
        },
        "check_size": { "type": "string" },
        "geographic_focus": {
          "type": "array",
          "items": { "type": "string" }
        }
      }
    },
    "portfolio_companies": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "company": { "type": "string" },
          "role": { "type": "string" },
          "sector": { "type": "string" },
          "status": { "type": "string" }
        }
      }
    },
    "investment_thesis": {
      "type": "object",
      "properties": {
        "summary": { "type": "string" },
        "key_themes": {
          "type": "array",
          "items": { "type": "string" }
        },
        "what_they_look_for": {
          "type": "array",
          "items": { "type": "string" }
        },
        "sources": {
          "type": "array",
          "items": { "type": "string" }
        }
      }
    },
    "recent_activity": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "activity": { "type": "string" },
          "date": { "type": "string" },
          "source": { "type": "string" }
        }
      }
    },
    "background": {
      "type": "object",
      "properties": {
        "education": {
          "type": "array",
          "items": { "type": "string" }
        },
        "previous_operating_roles": {
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

              {/* Use Case 5: Event Attendee Enrichment */}
              <div id="event-attendee" className="card p-8 scroll-mt-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-8 bg-linkup-green text-white rounded-full flex items-center justify-center text-sm font-bold">5</span>
                  <h3 className="text-xl font-semibold text-linkup-text">Event Attendee Enrichment</h3>
                </div>
                <p className="text-linkup-text-muted mb-6">
                  Quickly enrich a list of people from an event, webinar, or conference.
                </p>

                <div className="space-y-4">
                  <PromptBlock
                    title="Event Attendee"
                    code={`You are a research assistant enriching event attendee data.

Attendee: {attendee_name}
Company (from registration): {company}
Title (from registration): {title}
Event: {event_name}

Quickly enrich this attendee record:

1. Verify and expand the registration data:
   - Confirm current company and title via LinkedIn
   - Get full company name (registration often has abbreviations)
   - Get their LinkedIn URL

2. Add context useful for follow-up:
   - Seniority level
   - Department/function
   - Company size and industry
   - Location

3. If available, find:
   - Professional photo URL
   - Brief professional summary

Keep research focused—prioritize speed for batch processing.
Return essential fields only.`}
                  />

                  <SchemaBlock
                    title="Event Attendee Schema"
                    code={`{
  "type": "object",
  "properties": {
    "input": {
      "type": "object",
      "properties": {
        "name": { "type": "string" },
        "company_provided": { "type": "string" },
        "title_provided": { "type": "string" }
      }
    },
    "verified": {
      "type": "object",
      "properties": {
        "full_name": { "type": "string" },
        "linkedin_url": { "type": "string" },
        "current_title": { "type": "string" },
        "current_company": { "type": "string" },
        "company_full_name": { "type": "string" },
        "data_matches_registration": { "type": "boolean" }
      }
    },
    "enriched": {
      "type": "object",
      "properties": {
        "seniority_level": {
          "type": "string",
          "enum": ["C-level", "VP", "Director", "Manager", "IC", "Unknown"]
        },
        "department": { "type": "string" },
        "location": { "type": "string" },
        "company_size": { "type": "string" },
        "company_industry": { "type": "string" },
        "professional_summary": { "type": "string" },
        "photo_url": { "type": "string" }
      }
    },
    "match_confidence": {
      "type": "string",
      "enum": ["high", "medium", "low", "not_found"]
    }
  }
}`}
                  />
                </div>
              </div>

              {/* Use Case 6: Expert & Speaker Identification */}
              <div id="expert-identification" className="card p-8 scroll-mt-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-8 bg-linkup-green text-white rounded-full flex items-center justify-center text-sm font-bold">6</span>
                  <h3 className="text-xl font-semibold text-linkup-text">Expert & Speaker Identification</h3>
                </div>
                <p className="text-linkup-text-muted mb-6">
                  Find and research experts or potential speakers on specific topics.
                </p>

                <div className="space-y-4">
                  <PromptBlock
                    title="Expert Identification"
                    code={`You are a research assistant identifying subject matter experts.

Topic: {topic}
Industry context: {industry}
Geographic preference: {geography}
Purpose: {purpose}

Find experts on {topic}:

1. Search for people who have:
   - Published articles or research on {topic}
   - Given conference talks on {topic}
   - Been quoted in media about {topic}
   - Written books on {topic}
   - Active thought leadership (LinkedIn posts, blogs)

2. For each expert found, research:
   - Current role and organization
   - Credentials and background relevant to {topic}
   - Examples of their work/content on this topic
   - Speaking history (conferences, podcasts)
   - Contact availability (speaker bureau, direct, etc.)

3. Assess their fit:
   - Depth of expertise
   - Public speaking experience
   - Availability indicators
   - Audience relevance

Return a ranked list of potential experts with rationale.`}
                  />

                  <SchemaBlock
                    title="Expert Identification Schema"
                    code={`{
  "type": "object",
  "properties": {
    "topic": { "type": "string" },
    "experts": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "name": { "type": "string" },
          "linkedin_url": { "type": "string" },
          "current_role": { "type": "string" },
          "organization": { "type": "string" },
          "location": { "type": "string" },
          "credentials": {
            "type": "array",
            "items": { "type": "string" }
          },
          "expertise_evidence": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "type": {
                  "type": "string",
                  "enum": ["publication", "talk", "media_quote", "book", "research", "blog"]
                },
                "title": { "type": "string" },
                "date": { "type": "string" },
                "url": { "type": "string" }
              }
            }
          },
          "speaking_history": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "event": { "type": "string" },
                "topic": { "type": "string" },
                "date": { "type": "string" }
              }
            }
          },
          "contact_method": { "type": "string" },
          "fit_score": {
            "type": "string",
            "enum": ["excellent", "good", "moderate"]
          },
          "fit_rationale": { "type": "string" }
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
              <h2 className="text-2xl font-semibold text-linkup-text">Best Practices</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="text-lg font-semibold text-linkup-green mb-4 flex items-center gap-2">
                  <span className="text-green-500">&#10003;</span> Do&apos;s
                </h3>
                <ul className="space-y-3">
                  {[
                    { title: "Always provide disambiguation context", desc: "Include company name, title, or location to find the right person" },
                    { title: "Use Standard for getting profile, Deep for context", desc: "Extracting further context requires multiple steps" },
                    { title: "Include confidence scoring", desc: "Not all matches are certain; surface this to downstream systems" },
                    { title: "Handle \"not found\" gracefully", desc: "Some people have minimal online presence; don't fail the whole batch" },
                    { title: "Cross-reference multiple sources", desc: "LinkedIn + company website + news gives a more complete picture" },
                    { title: "Request structured output", desc: "People enrichment at scale needs consistent schemas for import" },
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
                    { title: "Don't search for common names without context", desc: "\"John Smith\" alone is useless; always include company or other identifiers" },
                    { title: "Don't assume LinkedIn has everything", desc: "Senior executives often have sparse LinkedIn profiles; check company sites" },
                    { title: "Don't over-enrich for the use case", desc: "Event follow-up needs less data than sales prospecting; match depth to purpose" },
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

            {/* Name Disambiguation Section */}
            <div className="border-t border-linkup-border pt-6">
              <h3 className="text-lg font-semibold text-linkup-text mb-4">Handling Name Disambiguation</h3>
              <p className="text-sm text-linkup-text-muted mb-4">
                Name ambiguity is the biggest challenge in people enrichment. Here&apos;s how to handle it:
              </p>

              <CodeBlock
                title="Disambiguation Strategies"
                code={`Strong disambiguation (high confidence):
- Full name + current company + title
- Full name + company name + company domain
- Full name + LinkedIn URL (For Maximum Confidence)

Moderate disambiguation (verify results):
- Full name + company name only
- Full name + location + industry

Weak disambiguation (likely multiple matches):
- Full name only
- Common name + large company`}
              />

              <div className="mt-4">
                <PromptBlock
                  title="Disambiguation Pattern"
                  code={`When searching for {person_name} at {company}:

1. Search for "{person_name}" AND "{company}" on LinkedIn
2. Verify the profile matches:
   - Company name matches (accounting for subsidiaries)
   - Title is plausible for the context
   - Location is consistent (if known)
3. If multiple matches, return all with confidence scores
4. If no confident match, flag for manual review

Do not guess—return "not_found" if uncertain.`}
                />
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
                <h4 className="font-semibold text-linkup-text mb-2">Batch Enrichment Pipeline</h4>
                <ol className="text-sm text-linkup-text-muted space-y-1 list-decimal list-inside">
                  <li>Input: CSV/list of people with available context</li>
                  <li>Pre-process: Normalize names, extract company domains, flag minimal context records</li>
                  <li>Enrich: Call Linkup for each person with consistent schema</li>
                  <li>Post-process: Score match confidence, deduplicate, flag low-confidence matches</li>
                  <li>Output: Enriched records ready for CRM/ATS import</li>
                </ol>
              </div>

              <div className="p-4 bg-linkup-cream/50 rounded-xl">
                <h4 className="font-semibold text-linkup-text mb-2">Real-Time Enrichment</h4>
                <ol className="text-sm text-linkup-text-muted space-y-1 list-decimal list-inside">
                  <li>Trigger: New lead, candidate, or contact created</li>
                  <li>Enrich: Call Linkup with available context</li>
                  <li>Hydrate: Populate record with returned data</li>
                  <li>Score: Set confidence level on record</li>
                  <li>Route: High confidence → auto-update; Low confidence → review queue</li>
                </ol>
              </div>

              <div className="p-4 bg-linkup-cream/50 rounded-xl">
                <h4 className="font-semibold text-linkup-text mb-2">Progressive Enrichment</h4>
                <div className="text-sm text-linkup-text-muted space-y-2">
                  <p><strong>Start lightweight:</strong> LinkedIn URL, verified title and company, location</p>
                  <p><strong>Next step:</strong> Full professional history, content and interests, buying signals</p>
                  <p><strong>Additional:</strong> Recent news and activity, shared connections, personalization hooks</p>
                </div>
              </div>
            </div>

            <Callout type="tip">
              For high-volume enrichment, implement a queue system with rate limiting to stay within API limits while maximizing throughput.
            </Callout>

            <div className="mt-8">
              <h3 className="text-lg font-semibold text-linkup-text mb-4">Sample Integration Code</h3>
              <CodeBlock
                title="people_enrichment.py"
                language="python"
                dark
                code={`import requests
import json
from typing import Optional, List
from dataclasses import dataclass
from enum import Enum

class MatchConfidence(Enum):
    HIGH = "high"
    MEDIUM = "medium"
    LOW = "low"
    NOT_FOUND = "not_found"

@dataclass
class PersonInput:
    name: str
    company: Optional[str] = None
    title: Optional[str] = None
    location: Optional[str] = None
    linkedin_url: Optional[str] = None

class LinkupPeopleEnrichment:
    """Linkup integration for people list enrichment"""

    def __init__(self, api_key: str):
        self.api_key = api_key
        self.base_url = "https://api.linkup.so/v1/search"

    def _call_linkup(
        self,
        prompt: str,
        schema: dict,
        depth: str = "deep"
    ) -> dict:
        response = requests.post(
            self.base_url,
            headers={"Authorization": f"Bearer {self.api_key}"},
            json={
                "q": prompt,
                "depth": depth,
                "outputType": "Structured",
                "StructuredSchema": json.dumps(schema)
            }
        )
        return response.json()

    def enrich_professional_profile(self, person: PersonInput) -> dict:
        """Full professional enrichment"""

        context_parts = []
        if person.company:
            context_parts.append(f"Company: {person.company}")
        if person.title:
            context_parts.append(f"Title: {person.title}")
        if person.location:
            context_parts.append(f"Location: {person.location}")
        context_str = "\\n".join(context_parts) if context_parts else "No additional context"

        prompt = f"""
        Research this person for professional profile enrichment:

        Name: {person.name}
        {context_str}

        1. Find their LinkedIn profile (use company/title to disambiguate).
        2. Extract: current position, previous roles (last 3), education, skills.
        3. Search for their bio on their company website.
        4. Find any public speaking, articles, or thought leadership.

        Return structured profile. Flag confidence level based on name match certainty.
        """

        schema = {
            "type": "object",
            "properties": {
                "match_confidence": {"type": "string"},
                "linkedin_url": {"type": "string"},
                "full_name": {"type": "string"},
                "headline": {"type": "string"},
                "current_position": {
                    "type": "object",
                    "properties": {
                        "title": {"type": "string"},
                        "company": {"type": "string"},
                        "duration": {"type": "string"}
                    }
                },
                "location": {"type": "string"},
                "previous_positions": {
                    "type": "array",
                    "items": {
                        "type": "object",
                        "properties": {
                            "title": {"type": "string"},
                            "company": {"type": "string"},
                            "duration": {"type": "string"}
                        }
                    }
                },
                "education": {
                    "type": "array",
                    "items": {
                        "type": "object",
                        "properties": {
                            "school": {"type": "string"},
                            "degree": {"type": "string"}
                        }
                    }
                },
                "skills": {"type": "array", "items": {"type": "string"}},
                "public_activity": {
                    "type": "array",
                    "items": {
                        "type": "object",
                        "properties": {
                            "type": {"type": "string"},
                            "title": {"type": "string"},
                            "url": {"type": "string"}
                        }
                    }
                }
            }
        }

        return self._call_linkup(prompt, schema)

    def enrich_for_sales(
        self,
        person: PersonInput,
        product_category: str
    ) -> dict:
        """Sales-focused enrichment with buying signals"""

        prompt = f"""
        Research this prospect for sales outreach:

        Name: {person.name}
        Company: {person.company}
        Title: {person.title}
        Our product category: {product_category}

        1. Find LinkedIn profile - extract title, seniority, time in role.
        2. Search for them at {person.company} for team/department context.
        3. Find any public statements about challenges in {product_category}.
        4. Find content they've authored.

        Return insights for personalized outreach.
        """

        schema = {
            "type": "object",
            "properties": {
                "linkedin_url": {"type": "string"},
                "title": {"type": "string"},
                "seniority": {"type": "string"},
                "department": {"type": "string"},
                "time_in_role": {"type": "string"},
                "new_to_role": {"type": "boolean"},
                "buying_signals": {
                    "type": "array",
                    "items": {
                        "type": "object",
                        "properties": {
                            "signal": {"type": "string"},
                            "source": {"type": "string"}
                        }
                    }
                },
                "topics_of_interest": {"type": "array", "items": {"type": "string"}},
                "outreach_hooks": {"type": "array", "items": {"type": "string"}}
            }
        }

        return self._call_linkup(prompt, schema)

    def enrich_event_attendee(self, person: PersonInput) -> dict:
        """Lightweight enrichment for event follow-up"""

        prompt = f"""
        Quickly verify and enrich this event attendee:

        Name: {person.name}
        Company (from registration): {person.company}
        Title (from registration): {person.title}

        1. Confirm current company and title via LinkedIn.
        2. Get LinkedIn URL.
        3. Add: seniority level, department, company industry.

        Keep focused—essential fields only.
        """

        schema = {
            "type": "object",
            "properties": {
                "match_confidence": {"type": "string"},
                "linkedin_url": {"type": "string"},
                "verified_name": {"type": "string"},
                "verified_title": {"type": "string"},
                "verified_company": {"type": "string"},
                "seniority": {"type": "string"},
                "department": {"type": "string"},
                "location": {"type": "string"},
                "company_industry": {"type": "string"}
            }
        }

        return self._call_linkup(prompt, schema, depth="standard")

    def batch_enrich(
        self,
        people: List[PersonInput],
        enrichment_type: str = "professional"
    ) -> List[dict]:
        """Batch enrich a list of people"""

        results = []
        for person in people:
            try:
                if enrichment_type == "professional":
                    result = self.enrich_professional_profile(person)
                elif enrichment_type == "event":
                    result = self.enrich_event_attendee(person)
                else:
                    result = self.enrich_professional_profile(person)

                results.append({
                    "input": person.__dict__,
                    "result": result,
                    "status": "success"
                })
            except Exception as e:
                results.append({
                    "input": person.__dict__,
                    "error": str(e),
                    "status": "error"
                })

        return results

# Example usage
if __name__ == "__main__":
    enricher = LinkupPeopleEnrichment(api_key="your-api-key")

    # Single enrichment
    person = PersonInput(
        name="Jane Smith",
        company="Acme Corp",
        title="VP Engineering"
    )
    profile = enricher.enrich_professional_profile(person)

    # Sales enrichment
    sales_profile = enricher.enrich_for_sales(
        person=person,
        product_category="developer tools"
    )

    # Batch enrichment
    attendees = [
        PersonInput(name="John Doe", company="TechCo", title="CTO"),
        PersonInput(name="Jane Smith", company="StartupX", title="CEO"),
    ]
    batch_results = enricher.batch_enrich(attendees, enrichment_type="event")`}
              />
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}
