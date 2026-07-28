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

function UserPlusIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
      <circle cx="9" cy="7" r="4"/>
      <line x1="19" y1="8" x2="19" y2="14"/>
      <line x1="22" y1="11" x2="16" y2="11"/>
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
  { id: "customer-onboarding", title: "Customer Onboarding Personalization", description: "Tailor onboarding based on company profile and use case signals" },
  { id: "employee-onboarding", title: "Employee Onboarding Context", description: "Prepare teams with new hire background and work style insights" },
  { id: "partner-onboarding", title: "Partner Onboarding Research", description: "Structure partnership approach based on capabilities and alignment" },
  { id: "vendor-onboarding", title: "Vendor Onboarding Due Diligence", description: "Risk assessment and relationship setup for new vendors" },
  { id: "user-onboarding", title: "User Onboarding (B2C/PLG)", description: "Personalize product-led onboarding based on user context" },
  { id: "account-expansion", title: "Account Expansion Onboarding", description: "Contextual onboarding for existing customers expanding" },
];

export default function PersonalizedOnboardingPage() {
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
              <UserPlusIcon className="w-8 h-8" />
            </div>
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-linkup-text mb-4">
                How to personalize onboarding with Linkup
              </h1>
              <p className="text-lg text-linkup-text-muted leading-relaxed">
                Automate research at the moment of onboarding to power personalized journeys for customers, employees, partners, and vendors—without manual research bottlenecks.
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
              Generic onboarding creates friction. Whether you&apos;re onboarding new customers, employees, partners, or vendors, the experience improves dramatically when it&apos;s tailored to who they are, what they need, and where they&apos;re coming from. Linkup enables automated research at the moment of onboarding—gathering context that powers personalized journeys without manual research bottlenecks.
            </p>

            <div className="flex items-center gap-2 mb-4">
              <div className="w-1 h-4 bg-linkup-green rounded-full"></div>
              <h3 className="text-lg font-semibold text-linkup-text">Why Linkup for onboarding personalization?</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { code: "event-driven", desc: "Trigger research automatically when a new entity enters your system" },
                { code: "structured output", desc: "Returns data in formats that feed directly into onboarding logic" },
                { code: "deep search", desc: "Gathers comprehensive context from multiple sources" },
                { code: "real-time", desc: "Personalization from day one, not after manual research" }
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
                <p className="text-sm text-linkup-text-muted">Recommended settings for onboarding personalization</p>
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
                    <td className="py-4 px-4"><code className="bg-amber-100 px-2 py-1 rounded text-amber-700 font-medium">deep</code> or <code className="bg-blue-50 px-2 py-1 rounded text-blue-600 font-medium">standard</code></td>
                    <td className="py-4 px-4">Match depth to onboarding complexity</td>
                  </tr>
                  <tr className="hover:bg-linkup-cream/30 transition-colors">
                    <td className="py-4 px-4"><code className="bg-linkup-beige px-2 py-1 rounded text-linkup-green-dark font-medium">outputType</code></td>
                    <td className="py-4 px-4"><code className="bg-linkup-green/10 px-2 py-1 rounded text-linkup-green font-medium">structured</code></td>
                    <td className="py-4 px-4">Feed directly into onboarding automation</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-6">
              <Callout type="tip">
                To surface current context rather than historical noise, say so in the query — &quot;in the
                last 30 to 90 days&quot; — instead of setting a date filter. That keeps undated but useful
                pages, like a team or product page, in scope.
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
              {/* Use Case 1: Customer Onboarding Personalization */}
              <div id="customer-onboarding" className="card p-8 scroll-mt-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-8 bg-linkup-green text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
                  <h3 className="text-xl font-semibold text-linkup-text">Customer Onboarding Personalization</h3>
                </div>
                <p className="text-linkup-text-muted mb-6">
                  Tailor the customer onboarding experience based on company profile, industry, and use case signals.
                </p>

                <div className="space-y-4">
                  <PromptBlock
                    title="Customer Onboarding"
                    code={`You are an onboarding research assistant preparing to welcome a new customer.

New customer: {company_name}
Domain: {company_domain}
Plan/product purchased: {product}
Contact name: {contact_name}
Contact title: {contact_title}

Research this customer to personalize their onboarding:

1. Company Profile:
   - Scrape {company_domain} for company description, products/services, and target market
   - Find company size (employees) and industry classification
   - Identify their technology stack if visible (job postings, builtwith, etc.)

2. Use Case Signals:
   - Based on their industry and the contact's role ({contact_title}), infer likely use cases for {product}
   - Search for any public information about challenges in their industry that {product} solves
   - Check if they've mentioned relevant pain points publicly

3. Onboarding Context:
   - Search for any existing content they've created about topics related to {product}
   - Find their competitors (helps contextualize their needs)
   - Identify any integrations they likely use based on their stack

4. Relationship Context:
   - Search for any previous mentions of our company or product
   - Check if they've used competitor products (migration context)
   - Find mutual connections or shared customers

Return data to power personalized onboarding flows.`}
                  />

                  <SchemaBlock
                    title="Customer Onboarding Schema"
                    code={`{
  "type": "object",
  "properties": {
    "customer": { "type": "string" },
    "company_profile": {
      "type": "object",
      "properties": {
        "description": { "type": "string" },
        "industry": { "type": "string" },
        "employee_count": { "type": "string" },
        "target_market": { "type": "string" },
        "products_services": {
          "type": "array",
          "items": { "type": "string" }
        },
        "headquarters": { "type": "string" }
      }
    },
    "tech_stack": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "technology": { "type": "string" },
          "category": { "type": "string" },
          "source": { "type": "string" }
        }
      }
    },
    "use_case_signals": {
      "type": "object",
      "properties": {
        "likely_use_cases": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "use_case": { "type": "string" },
              "confidence": { "type": "string" },
              "reasoning": { "type": "string" }
            }
          }
        },
        "industry_challenges": {
          "type": "array",
          "items": { "type": "string" }
        },
        "pain_points_mentioned": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "pain_point": { "type": "string" },
              "source": { "type": "string" }
            }
          }
        }
      }
    },
    "integration_context": {
      "type": "object",
      "properties": {
        "likely_integrations": {
          "type": "array",
          "items": { "type": "string" }
        },
        "competitor_products_used": {
          "type": "array",
          "items": { "type": "string" }
        },
        "migration_from": { "type": "string" }
      }
    },
    "competitors": {
      "type": "array",
      "items": { "type": "string" }
    },
    "personalization_recommendations": {
      "type": "object",
      "properties": {
        "onboarding_track": { "type": "string" },
        "priority_features_to_highlight": {
          "type": "array",
          "items": { "type": "string" }
        },
        "relevant_case_studies": {
          "type": "array",
          "items": { "type": "string" }
        },
        "talking_points": {
          "type": "array",
          "items": { "type": "string" }
        }
      }
    }
  }
}`}
                  />

                  <div className="mt-6">
                    <h4 className="text-sm font-semibold text-linkup-text mb-3">Onboarding Segmentation Logic (Example)</h4>
                    <CodeBlock
                      code={`Based on research, route to appropriate onboarding track:

IF employee_count > 1000 AND enterprise_plan:
  → Enterprise onboarding (white-glove, dedicated CSM)

IF tech_stack includes [specific integrations]:
  → Integration-focused onboarding (start with connections)

IF competitor_products_used is not empty:
  → Migration onboarding (import wizards, comparison guides)

IF industry in [regulated industries]:
  → Compliance-focused onboarding (security docs, certifications)

IF contact_title contains "Developer" or "Engineer":
  → Technical onboarding (API-first, documentation-heavy)

ELSE:
  → Standard onboarding (product tour, quick wins)`}
                    />
                  </div>
                </div>
              </div>

              {/* Use Case 2: Employee Onboarding Context */}
              <div id="employee-onboarding" className="card p-8 scroll-mt-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-8 bg-linkup-green text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
                  <h3 className="text-xl font-semibold text-linkup-text">Employee Onboarding Context</h3>
                </div>
                <p className="text-linkup-text-muted mb-6">
                  Gather context about new hires to personalize their onboarding experience and prepare their team.
                </p>

                <div className="space-y-4">
                  <PromptBlock
                    title="Employee Onboarding"
                    code={`You are an HR research assistant preparing for a new employee's onboarding.

New hire: {employee_name}
Role: {role}
Department: {department}
Start date: {start_date}
Previous company: {previous_company}

Research this new hire to personalize their onboarding:

1. Professional Background:
   - Find their LinkedIn profile for career history
   - Identify skills and expertise areas
   - Note their previous company's culture and size (adjustment context)

2. Work Style Signals:
   - Search for any content they've published (writing style, interests)
   - Find conference talks or podcasts (communication style)
   - Identify professional communities they're active in

3. Role Preparation:
   - Search for how their previous company ({previous_company}) approaches {department}
   - Identify tools and processes they're likely familiar with
   - Find any public work or projects they've contributed to

Return insights to help the team prepare and personalize onboarding.`}
                  />

                  <SchemaBlock
                    title="Employee Onboarding Schema"
                    code={`{
  "type": "object",
  "properties": {
    "new_hire": { "type": "string" },
    "role": { "type": "string" },
    "linkedin_url": { "type": "string" },
    "professional_background": {
      "type": "object",
      "properties": {
        "years_of_experience": { "type": "number" },
        "previous_roles": {
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
          "items": { "type": "string" }
        },
        "key_skills": {
          "type": "array",
          "items": { "type": "string" }
        }
      }
    },
    "previous_company_context": {
      "type": "object",
      "properties": {
        "company_name": { "type": "string" },
        "company_size": { "type": "string" },
        "industry": { "type": "string" },
        "culture_notes": { "type": "string" },
        "tools_likely_used": {
          "type": "array",
          "items": { "type": "string" }
        }
      }
    },
    "work_style_signals": {
      "type": "object",
      "properties": {
        "communication_style": { "type": "string" },
        "content_published": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "type": { "type": "string" },
              "title": { "type": "string" },
              "url": { "type": "string" }
            }
          }
        },
        "professional_interests": {
          "type": "array",
          "items": { "type": "string" }
        },
        "communities": {
          "type": "array",
          "items": { "type": "string" }
        }
      }
    },
    "onboarding_recommendations": {
      "type": "object",
      "properties": {
        "buddy_match_criteria": {
          "type": "array",
          "items": { "type": "string" }
        },
        "training_priorities": {
          "type": "array",
          "items": { "type": "string" }
        },
        "tools_to_introduce_first": {
          "type": "array",
          "items": { "type": "string" }
        },
        "adjustment_considerations": {
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

              {/* Use Case 3: Partner Onboarding Research */}
              <div id="partner-onboarding" className="card p-8 scroll-mt-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-8 bg-linkup-green text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
                  <h3 className="text-xl font-semibold text-linkup-text">Partner Onboarding Research</h3>
                </div>
                <p className="text-linkup-text-muted mb-6">
                  Research new partners to structure the right onboarding and partnership approach.
                </p>

                <div className="space-y-4">
                  <PromptBlock
                    title="Partner Onboarding"
                    code={`You are a partnerships research assistant preparing for a new partner onboarding.

New partner: {partner_company}
Partner type: {partner_type}
Partnership focus: {partnership_focus}
Partner contact: {contact_name}, {contact_title}

Research this partner to inform onboarding:

1. Partner Company Profile:
   - Scrape their website for business model and offerings
   - Identify their target customer segments
   - Find their geographic coverage and market presence
   - Assess company size and growth stage

2. Partnership Context:
   - Search for their existing partnerships and integrations
   - Identify how they work with companies similar to us
   - Find any case studies or success stories from their partnerships
   - Check for partner program tiers they participate in

3. Technical Readiness:
   - Search for their technical capabilities and team
   - Identify their tech stack and development resources
   - Find any public APIs or integrations they've built
   - Assess their documentation and developer resources

4. Go-to-Market Alignment:
   - Identify overlap in target customers
   - Find their sales motion and channels
   - Search for their marketing approach and content
   - Identify co-marketing opportunities

5. Relationship Intelligence:
   - Search for any previous interactions or mentions
   - Find mutual customers or connections
   - Check for any competitive considerations

Return insights for partnership onboarding planning.`}
                  />

                  <SchemaBlock
                    title="Partner Onboarding Schema"
                    code={`{
  "type": "object",
  "properties": {
    "partner": { "type": "string" },
    "partner_type": { "type": "string" },
    "company_profile": {
      "type": "object",
      "properties": {
        "description": { "type": "string" },
        "business_model": { "type": "string" },
        "products_services": {
          "type": "array",
          "items": { "type": "string" }
        },
        "target_segments": {
          "type": "array",
          "items": { "type": "string" }
        },
        "geographic_coverage": {
          "type": "array",
          "items": { "type": "string" }
        },
        "employee_count": { "type": "string" },
        "funding_stage": { "type": "string" }
      }
    },
    "partnership_context": {
      "type": "object",
      "properties": {
        "existing_partnerships": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "partner": { "type": "string" },
              "type": { "type": "string" },
              "description": { "type": "string" }
            }
          }
        },
        "integration_experience": {
          "type": "array",
          "items": { "type": "string" }
        },
        "partner_programs": {
          "type": "array",
          "items": { "type": "string" }
        }
      }
    },
    "technical_readiness": {
      "type": "object",
      "properties": {
        "tech_stack": {
          "type": "array",
          "items": { "type": "string" }
        },
        "has_developer_team": { "type": "boolean" },
        "existing_integrations_built": {
          "type": "array",
          "items": { "type": "string" }
        },
        "api_documentation_quality": { "type": "string" },
        "technical_readiness_score": {
          "type": "string",
          "enum": ["high", "medium", "low"]
        }
      }
    },
    "gtm_alignment": {
      "type": "object",
      "properties": {
        "customer_overlap": {
          "type": "array",
          "items": { "type": "string" }
        },
        "sales_channels": {
          "type": "array",
          "items": { "type": "string" }
        },
        "marketing_approach": { "type": "string" },
        "co_marketing_opportunities": {
          "type": "array",
          "items": { "type": "string" }
        }
      }
    },
    "onboarding_recommendations": {
      "type": "object",
      "properties": {
        "partnership_tier": { "type": "string" },
        "onboarding_track": { "type": "string" },
        "priority_enablement": {
          "type": "array",
          "items": { "type": "string" }
        },
        "quick_win_opportunities": {
          "type": "array",
          "items": { "type": "string" }
        },
        "potential_challenges": {
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

              {/* Use Case 4: Vendor Onboarding Due Diligence */}
              <div id="vendor-onboarding" className="card p-8 scroll-mt-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-8 bg-linkup-green text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
                  <h3 className="text-xl font-semibold text-linkup-text">Vendor Onboarding Due Diligence</h3>
                </div>
                <p className="text-linkup-text-muted mb-6">
                  Research new vendors during onboarding for risk assessment and relationship setup.
                </p>

                <div className="space-y-4">
                  <PromptBlock
                    title="Vendor Due Diligence"
                    code={`You are a vendor management research assistant conducting onboarding due diligence.

Vendor: {vendor_name}
Vendor domain: {vendor_domain}
Service category: {service_category}
Procurement contact: {contact_name}

Research this vendor for onboarding:

1. Company Verification:
   - Verify company registration and legal entity
   - Find headquarters location and operational locations
   - Identify company age and stability indicators
   - Check for any recent ownership or structural changes

2. Financial Health:
   - Search for any funding announcements or financial news
   - Look for signs of financial distress (layoffs, restructuring)
   - Find customer base indicators (client logos, case studies)
   - Check for recent growth or contraction signals

3. Reputation & Risk:
   - Search for customer reviews and complaints
   - Find any regulatory issues or legal problems
   - Check for data breaches or security incidents
   - Look for news about service outages or quality issues

4. Service Capability:
   - Scrape their website for service descriptions
   - Find certifications and compliance credentials
   - Identify their technology and security practices
   - Look for SLA commitments and support levels

5. Relationship Context:
   - Find their other major clients
   - Search for testimonials and case studies
   - Check for any existing relationships with our industry
   - Identify key contacts beyond procurement

Return risk assessment and onboarding recommendations.`}
                  />

                  <SchemaBlock
                    title="Vendor Due Diligence Schema"
                    code={`{
  "type": "object",
  "properties": {
    "vendor": { "type": "string" },
    "verification": {
      "type": "object",
      "properties": {
        "legal_name": { "type": "string" },
        "jurisdiction": { "type": "string" },
        "year_founded": { "type": "integer" },
        "headquarters": { "type": "string" },
        "operational_locations": {
          "type": "array",
          "items": { "type": "string" }
        },
        "recent_changes": {
          "type": "array",
          "items": { "type": "string" }
        }
      }
    },
    "financial_health": {
      "type": "object",
      "properties": {
        "funding_status": { "type": "string" },
        "recent_funding": { "type": "string" },
        "employee_trend": { "type": "string" },
        "customer_base_indicators": {
          "type": "array",
          "items": { "type": "string" }
        },
        "financial_concerns": {
          "type": "array",
          "items": { "type": "string" }
        }
      }
    },
    "risk_assessment": {
      "type": "object",
      "properties": {
        "overall_risk_level": {
          "type": "string",
          "enum": ["low", "medium", "high"]
        },
        "reputation_signals": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "type": { "type": "string" },
              "description": { "type": "string" },
              "source": { "type": "string" },
              "severity": { "type": "string" }
            }
          }
        },
        "regulatory_issues": {
          "type": "array",
          "items": { "type": "string" }
        },
        "security_incidents": {
          "type": "array",
          "items": { "type": "string" }
        },
        "service_issues": {
          "type": "array",
          "items": { "type": "string" }
        }
      }
    },
    "service_capability": {
      "type": "object",
      "properties": {
        "services_offered": {
          "type": "array",
          "items": { "type": "string" }
        },
        "certifications": {
          "type": "array",
          "items": { "type": "string" }
        },
        "compliance_credentials": {
          "type": "array",
          "items": { "type": "string" }
        },
        "support_levels": { "type": "string" },
        "sla_commitments": { "type": "string" }
      }
    },
    "notable_clients": {
      "type": "array",
      "items": { "type": "string" }
    },
    "onboarding_recommendations": {
      "type": "object",
      "properties": {
        "approval_recommendation": {
          "type": "string",
          "enum": ["approve", "approve_with_conditions", "further_review", "reject"]
        },
        "conditions": {
          "type": "array",
          "items": { "type": "string" }
        },
        "monitoring_requirements": {
          "type": "array",
          "items": { "type": "string" }
        },
        "contract_considerations": {
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

              {/* Use Case 5: User Onboarding (B2C/PLG) */}
              <div id="user-onboarding" className="card p-8 scroll-mt-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-8 bg-linkup-green text-white rounded-full flex items-center justify-center text-sm font-bold">5</span>
                  <h3 className="text-xl font-semibold text-linkup-text">User Onboarding Personalization (B2C/PLG)</h3>
                </div>
                <p className="text-linkup-text-muted mb-6">
                  Personalize product-led onboarding based on user context.
                </p>

                <div className="space-y-4">
                  <PromptBlock
                    title="PLG User Onboarding"
                    code={`You are a product personalization assistant preparing user onboarding.

User email: {user_email}
User name: {user_name}
Signup source: {signup_source}
Product: {product}

Research this user to personalize their onboarding:

1. Professional Context (from email domain):
   - If business email, research the company
   - Identify company size, industry, and likely use case
   - Find the user's likely role based on available signals

2. User Background (if findable):
   - Search for their LinkedIn profile
   - Identify their role and seniority
   - Note relevant skills or interests

3. Use Case Inference:
   - Based on company + role, infer likely use case for {product}
   - Identify which features would be most relevant
   - Note any specific pain points their role typically has

4. Personalization Signals:
   - Determine appropriate onboarding complexity (technical vs. simple)
   - Identify relevant templates or examples to show
   - Suggest personalized quick wins

Return onboarding personalization parameters.
Note: If personal email or limited information, return safe defaults.`}
                  />

                  <SchemaBlock
                    title="PLG User Onboarding Schema"
                    code={`{
  "type": "object",
  "properties": {
    "user_email": { "type": "string" },
    "email_type": {
      "type": "string",
      "enum": ["business", "personal", "edu"]
    },
    "company_context": {
      "type": "object",
      "properties": {
        "company_name": { "type": "string" },
        "industry": { "type": "string" },
        "company_size": { "type": "string" },
        "company_type": { "type": "string" }
      }
    },
    "user_context": {
      "type": "object",
      "properties": {
        "likely_role": { "type": "string" },
        "seniority": { "type": "string" },
        "technical_level": {
          "type": "string",
          "enum": ["technical", "semi-technical", "non-technical", "unknown"]
        }
      }
    },
    "personalization": {
      "type": "object",
      "properties": {
        "onboarding_track": { "type": "string" },
        "likely_use_case": { "type": "string" },
        "priority_features": {
          "type": "array",
          "items": { "type": "string" }
        },
        "relevant_templates": {
          "type": "array",
          "items": { "type": "string" }
        },
        "suggested_first_action": { "type": "string" },
        "complexity_level": {
          "type": "string",
          "enum": ["simple", "standard", "advanced"]
        }
      }
    },
    "confidence": {
      "type": "string",
      "enum": ["high", "medium", "low"]
    }
  }
}`}
                  />
                </div>
              </div>

              {/* Use Case 6: Account Expansion Onboarding */}
              <div id="account-expansion" className="card p-8 scroll-mt-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-8 bg-linkup-green text-white rounded-full flex items-center justify-center text-sm font-bold">6</span>
                  <h3 className="text-xl font-semibold text-linkup-text">Account Expansion Onboarding</h3>
                </div>
                <p className="text-linkup-text-muted mb-6">
                  Research existing customers expanding to new products or teams for contextual onboarding.
                </p>

                <div className="space-y-4">
                  <PromptBlock
                    title="Account Expansion"
                    code={`You are a customer success research assistant supporting account expansion.

Customer: {customer_name}
Existing products: {current_products}
New product/expansion: {new_product}
New stakeholder: {stakeholder_name}, {stakeholder_title}
Expansion context: {expansion_context}

Research to personalize expansion onboarding:

1. Existing Relationship Context:
   - Review what we know about their current usage and success
   - Identify integration points between {current_products} and {new_product}
   - Note any previous expansion discussions or interests

2. New Stakeholder Research:
   - Find {stakeholder_name}'s LinkedIn profile
   - Understand their role and how they relate to existing users
   - Identify their likely priorities and success metrics

3. Expansion Use Case:
   - Search for how companies like {customer_name} use {new_product}
   - Identify specific use cases relevant to {stakeholder_title}
   - Find success stories from similar expansions

4. Organizational Context:
   - Search for any organizational changes at {customer_name}
   - Identify other teams or stakeholders who might benefit
   - Find any public initiatives that align with {new_product}

Return insights to make expansion onboarding seamless and connected to existing value.`}
                  />

                  <SchemaBlock
                    title="Account Expansion Schema"
                    code={`{
  "type": "object",
  "properties": {
    "customer": { "type": "string" },
    "existing_relationship": {
      "type": "object",
      "properties": {
        "current_products": {
          "type": "array",
          "items": { "type": "string" }
        },
        "integration_opportunities": {
          "type": "array",
          "items": { "type": "string" }
        },
        "known_success_metrics": {
          "type": "array",
          "items": { "type": "string" }
        }
      }
    },
    "new_stakeholder": {
      "type": "object",
      "properties": {
        "name": { "type": "string" },
        "title": { "type": "string" },
        "linkedin_url": { "type": "string" },
        "relationship_to_existing_users": { "type": "string" },
        "likely_priorities": {
          "type": "array",
          "items": { "type": "string" }
        },
        "success_metrics": {
          "type": "array",
          "items": { "type": "string" }
        }
      }
    },
    "expansion_context": {
      "type": "object",
      "properties": {
        "relevant_use_cases": {
          "type": "array",
          "items": { "type": "string" }
        },
        "similar_customer_examples": {
          "type": "array",
          "items": { "type": "string" }
        },
        "organizational_initiatives": {
          "type": "array",
          "items": { "type": "string" }
        }
      }
    },
    "expansion_opportunities": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "team_or_stakeholder": { "type": "string" },
          "potential_use_case": { "type": "string" },
          "connection_point": { "type": "string" }
        }
      }
    },
    "onboarding_recommendations": {
      "type": "object",
      "properties": {
        "positioning": { "type": "string" },
        "connect_to_existing_value": {
          "type": "array",
          "items": { "type": "string" }
        },
        "quick_wins": {
          "type": "array",
          "items": { "type": "string" }
        },
        "stakeholders_to_involve": {
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
                    { title: "Trigger research automatically", desc: "Run Linkup when a new entity enters your system; don't wait for manual requests" },
                    { title: "Match research depth to onboarding value", desc: "Enterprise customers warrant deep research; self-serve users need lightweight context" },
                    { title: "Build decision trees from structured output", desc: "Use Linkup's structured data to route to the right onboarding track automatically" },
                    { title: "Cache and reuse intelligently", desc: "Company data changes slowly; cache it. Role data changes faster; refresh more often" },
                    { title: "Fail gracefully", desc: "Not everyone has a rich online presence. Design onboarding that works with or without enrichment" },
                    { title: "Use signals, not assumptions", desc: "Present what you found as helpful context, not creepy surveillance" },
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
                    { title: "Don't skip privacy norms", desc: "Stick to professional, publicly available information" },
                    { title: "Don't research once and forget", desc: "Refresh context at key moments (renewal, expansion, escalation)" },
                    { title: "Don't over-personalize creepily", desc: "There's a line between helpful and invasive; stay on the right side" },
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
                <h4 className="font-semibold text-linkup-text mb-2">Event-Driven Onboarding Enrichment</h4>
                <ol className="text-sm text-linkup-text-muted space-y-1 list-decimal list-inside">
                  <li>Trigger: New signup / contract signed / employee start date set</li>
                  <li>Receive event (webhook, queue message)</li>
                  <li>Extract identifiers (email, company, name)</li>
                  <li>Call Linkup with appropriate prompt for onboarding type</li>
                  <li>Store enrichment data in customer/employee record</li>
                  <li>Feed into onboarding automation (select track, personalize messaging, prioritize features)</li>
                </ol>
              </div>

              <div className="p-4 bg-linkup-cream/50 rounded-xl">
                <h4 className="font-semibold text-linkup-text mb-3">Onboarding Segmentation Flow</h4>
                <CodeBlock
                  code={`┌─────────────────────────────────────────────────────────────────┐
│                    New Entity Created                           │
└─────────────────────┬───────────────────────────────────────────┘
                      │
                      ▼
┌─────────────────────────────────────────────────────────────────┐
│               Linkup Enrichment                                 │
│  - Company profile                                              │
│  - Stakeholder context                                          │
│  - Use case signals                                             │
└─────────────────────┬───────────────────────────────────────────┘
                      │
                      ▼
┌─────────────────────────────────────────────────────────────────┐
│             Segmentation Logic                                  │
│                                                                 │
│  IF enterprise + regulated industry → Compliance Track          │
│  IF technical role → Developer Track                            │
│  IF migration from competitor → Migration Track                 │
│  IF SMB + simple use case → Self-Serve Track                    │
│  ELSE → Standard Track                                          │
└─────────────────────┬───────────────────────────────────────────┘
                      │
                      ▼
┌─────────────────────────────────────────────────────────────────┐
│           Personalized Onboarding                               │
│  - Track-specific email sequences                               │
│  - Relevant feature highlights                                  │
│  - Matched case studies / templates                             │
│  - Appropriate resource assignment                              │
└─────────────────────────────────────────────────────────────────┘`}
                />
              </div>
            </div>

            <Callout type="tip">
              For high-volume onboarding, implement a queue system with rate limiting to stay within API limits while ensuring every new entity gets personalized context.
            </Callout>

            <div className="mt-8">
              <h3 className="text-lg font-semibold text-linkup-text mb-4">Sample Integration Code</h3>
              <CodeBlock
                title="onboarding_enrichment.py"
                language="python"
                dark
                code={`import requests
import json
from typing import Optional
from enum import Enum

class OnboardingTrack(Enum):
    ENTERPRISE = "enterprise"
    DEVELOPER = "developer"
    MIGRATION = "migration"
    SELF_SERVE = "self_serve"
    STANDARD = "standard"

class LinkupOnboardingEnrichment:
    """Linkup integration for onboarding personalization"""

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

    def enrich_new_customer(
        self,
        company_name: str,
        company_domain: str,
        contact_name: str,
        contact_title: str,
        product: str
    ) -> dict:
        """Enrich a new customer for onboarding personalization"""

        prompt = f"""
        Research new customer for onboarding personalization:

        Company: {company_name}
        Domain: {company_domain}
        Contact: {contact_name}, {contact_title}
        Product purchased: {product}

        1. Scrape {company_domain} for company description, industry, and size.
        2. Identify their tech stack and likely integrations.
        3. Infer likely use cases based on industry and contact role.
        4. Search for competitor products they may be migrating from.
        5. Find relevant talking points and case study matches.

        Return structured onboarding personalization data.
        """

        schema = {
            "type": "object",
            "properties": {
                "company_profile": {
                    "type": "object",
                    "properties": {
                        "description": {"type": "string"},
                        "industry": {"type": "string"},
                        "employee_count": {"type": "string"},
                        "company_type": {"type": "string"}
                    }
                },
                "tech_stack": {"type": "array", "items": {"type": "string"}},
                "likely_use_cases": {
                    "type": "array",
                    "items": {
                        "type": "object",
                        "properties": {
                            "use_case": {"type": "string"},
                            "confidence": {"type": "string"}
                        }
                    }
                },
                "migration_context": {
                    "type": "object",
                    "properties": {
                        "migrating_from": {"type": "string"},
                        "migration_signals": {"type": "array", "items": {"type": "string"}}
                    }
                },
                "personalization": {
                    "type": "object",
                    "properties": {
                        "recommended_track": {"type": "string"},
                        "priority_features": {"type": "array", "items": {"type": "string"}},
                        "relevant_case_studies": {"type": "array", "items": {"type": "string"}},
                        "talking_points": {"type": "array", "items": {"type": "string"}}
                    }
                }
            }
        }

        return self._call_linkup(prompt, schema)

    def enrich_new_employee(
        self,
        employee_name: str,
        role: str,
        department: str,
        previous_company: Optional[str] = None
    ) -> dict:
        """Enrich a new employee for onboarding preparation"""

        previous_context = f"Previous company: {previous_company}" if previous_company else ""

        prompt = f"""
        Research new employee for onboarding:

        Name: {employee_name}
        Role: {role}
        Department: {department}
        {previous_context}

        1. Find their LinkedIn profile for career history.
        2. Identify skills and expertise areas.
        3. Research their previous company's culture and tools.
        4. Find any content they've published.
        5. Identify connection opportunities with the team.

        Return onboarding preparation insights.
        """

        schema = {
            "type": "object",
            "properties": {
                "linkedin_url": {"type": "string"},
                "professional_background": {
                    "type": "object",
                    "properties": {
                        "years_experience": {"type": "number"},
                        "key_skills": {"type": "array", "items": {"type": "string"}},
                        "previous_companies": {"type": "array", "items": {"type": "string"}}
                    }
                },
                "previous_company_context": {
                    "type": "object",
                    "properties": {
                        "size": {"type": "string"},
                        "culture_notes": {"type": "string"},
                        "tools_used": {"type": "array", "items": {"type": "string"}}
                    }
                },
                "onboarding_recommendations": {
                    "type": "object",
                    "properties": {
                        "buddy_match_criteria": {"type": "array", "items": {"type": "string"}},
                        "training_priorities": {"type": "array", "items": {"type": "string"}},
                        "adjustment_notes": {"type": "array", "items": {"type": "string"}}
                    }
                }
            }
        }

        return self._call_linkup(prompt, schema)

    def determine_onboarding_track(self, enrichment_data: dict) -> OnboardingTrack:
        """Determine onboarding track based on enrichment data"""

        company = enrichment_data.get("company_profile", {})
        migration = enrichment_data.get("migration_context", {})
        personalization = enrichment_data.get("personalization", {})

        # Enterprise check
        employee_count = company.get("employee_count", "")
        if any(x in employee_count.lower() for x in ["1000", "enterprise", "10,000"]):
            return OnboardingTrack.ENTERPRISE

        # Migration check
        if migration.get("migrating_from"):
            return OnboardingTrack.MIGRATION

        # Developer check (from recommended track)
        if personalization.get("recommended_track") == "technical":
            return OnboardingTrack.DEVELOPER

        # SMB self-serve check
        if any(x in employee_count.lower() for x in ["1-10", "11-50", "small"]):
            return OnboardingTrack.SELF_SERVE

        return OnboardingTrack.STANDARD

    def enrich_plg_user(
        self,
        user_email: str,
        user_name: str,
        product: str
    ) -> dict:
        """Lightweight enrichment for PLG user onboarding"""

        # Extract domain from email
        domain = user_email.split("@")[1] if "@" in user_email else None
        is_business_email = domain and domain not in [
            "gmail.com", "yahoo.com", "hotmail.com", "outlook.com", "icloud.com"
        ]

        if not is_business_email:
            return {
                "email_type": "personal",
                "personalization": {
                    "onboarding_track": "standard",
                    "complexity_level": "simple"
                },
                "confidence": "low"
            }

        prompt = f"""
        Quick research for PLG user onboarding:

        User: {user_name}
        Email domain: {domain}
        Product: {product}

        1. Research the company at {domain} - size, industry.
        2. Infer likely role based on available signals.
        3. Suggest appropriate onboarding complexity.

        Keep research lightweight for fast response.
        """

        schema = {
            "type": "object",
            "properties": {
                "email_type": {"type": "string"},
                "company_context": {
                    "type": "object",
                    "properties": {
                        "company_name": {"type": "string"},
                        "industry": {"type": "string"},
                        "size": {"type": "string"}
                    }
                },
                "user_context": {
                    "type": "object",
                    "properties": {
                        "likely_role": {"type": "string"},
                        "technical_level": {"type": "string"}
                    }
                },
                "personalization": {
                    "type": "object",
                    "properties": {
                        "onboarding_track": {"type": "string"},
                        "complexity_level": {"type": "string"},
                        "suggested_first_action": {"type": "string"}
                    }
                },
                "confidence": {"type": "string"}
            }
        }

        return self._call_linkup(prompt, schema, depth="standard")

# Example usage
if __name__ == "__main__":
    enricher = LinkupOnboardingEnrichment(api_key="your-api-key")

    # Customer onboarding
    customer_data = enricher.enrich_new_customer(
        company_name="Acme Corp",
        company_domain="acme.com",
        contact_name="Jane Smith",
        contact_title="VP Engineering",
        product="Enterprise Plan"
    )

    track = enricher.determine_onboarding_track(customer_data)
    print(f"Onboarding track: {track.value}")

    # Employee onboarding
    employee_data = enricher.enrich_new_employee(
        employee_name="John Doe",
        role="Senior Engineer",
        department="Platform",
        previous_company="Google"
    )

    # PLG user onboarding
    user_data = enricher.enrich_plg_user(
        user_email="jane@techstartup.io",
        user_name="Jane",
        product="Linkup API"
    )`}
              />
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}
