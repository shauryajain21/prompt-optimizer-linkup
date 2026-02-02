"use client";

import Link from "next/link";
import Image from "next/image";

type IconComponent = ({ className }: { className?: string }) => React.ReactNode;

interface UseCase {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  tag: "Linkup" | "Community";
  href: string;
  enabled: boolean;
  Icon: IconComponent;
  featured?: boolean;
}

// Toggle icons
function SmallSparklesIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3l1.912 5.813a2 2 0 0 0 1.275 1.275L21 12l-5.813 1.912a2 2 0 0 0-1.275 1.275L12 21l-1.912-5.813a2 2 0 0 0-1.275-1.275L3 12l5.813-1.912a2 2 0 0 0 1.275-1.275L12 3z"/>
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

// Icons for each use case
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

function ChartIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 3v18h18"/>
      <path d="M18 17V9"/>
      <path d="M13 17V5"/>
      <path d="M8 17v-3"/>
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

function WorkflowIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="6" height="6" rx="1"/>
      <rect x="15" y="3" width="6" height="6" rx="1"/>
      <rect x="9" y="15" width="6" height="6" rx="1"/>
      <path d="M6 9v3a1 1 0 0 0 1 1h4"/>
      <path d="M18 9v3a1 1 0 0 1-1 1h-4"/>
    </svg>
  );
}

function TargetIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <circle cx="12" cy="12" r="6"/>
      <circle cx="12" cy="12" r="2"/>
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

function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12"/>
      <polyline points="12,5 19,12 12,19"/>
    </svg>
  );
}

function SparklesIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3l1.912 5.813a2 2 0 0 0 1.275 1.275L21 12l-5.813 1.912a2 2 0 0 0-1.275 1.275L12 21l-1.912-5.813a2 2 0 0 0-1.275-1.275L3 12l5.813-1.912a2 2 0 0 0 1.275-1.275L12 3z"/>
    </svg>
  );
}

const useCases: UseCase[] = [
  {
    id: "crm-enrichment",
    title: "How to enrich your CRM with Linkup",
    shortTitle: "CRM Enrichment",
    description: "Automate company and contact research to populate your CRM with firmographic data, funding history, and more.",
    tag: "Linkup",
    href: "/use-cases/crm-enrichment",
    enabled: true,
    Icon: BuildingIcon,
    featured: true,
  },
  {
    id: "news-search",
    title: "How to search for news with Linkup",
    shortTitle: "News Search",
    description: "Track competitors, research markets, monitor regulatory changes, and stay informed with powerful news search.",
    tag: "Linkup",
    href: "/use-cases/news-search",
    enabled: true,
    Icon: NewspaperIcon,
  },
  {
    id: "supplier-research",
    title: "How to research suppliers with Linkup",
    shortTitle: "Supplier Research",
    description: "Automate supplier discovery, price comparisons, due diligence checks, and procurement research at scale.",
    tag: "Linkup",
    href: "/use-cases/supplier-research",
    enabled: true,
    Icon: TruckIcon,
  },
  {
    id: "legal-agents",
    title: "How to power legal agents with Linkup",
    shortTitle: "Legal Agents",
    description: "Enable legal AI agents to search regulatory updates, public filings, legal news, and authoritative sources in real-time.",
    tag: "Linkup",
    href: "/use-cases/legal-agents",
    enabled: true,
    Icon: ScaleIcon,
  },
  {
    id: "product-listings",
    title: "How to enrich product listings with Linkup",
    shortTitle: "Product Listings",
    description: "Automatically enrich product catalogs with pricing, specs, and availability data from across the web.",
    tag: "Linkup",
    href: "/use-cases/product-listings",
    enabled: true,
    Icon: ChartIcon,
  },
  {
    id: "coding-agents",
    title: "How to power coding agents with Linkup",
    shortTitle: "Coding Agents",
    description: "Enable AI coding assistants to search documentation, APIs, and code examples in real-time.",
    tag: "Linkup",
    href: "/use-cases/coding-agents",
    enabled: true,
    Icon: WorkflowIcon,
  },
  {
    id: "people-lists",
    title: "How to enrich people lists with Linkup",
    shortTitle: "People Lists",
    description: "Enrich contact lists with professional profiles, social data, and verified contact information.",
    tag: "Linkup",
    href: "/use-cases/people-lists",
    enabled: true,
    Icon: UsersIcon,
  },
  {
    id: "onboarding-workflows",
    title: "How to build personalized onboarding workflows with Linkup",
    shortTitle: "Onboarding Workflows",
    description: "Create personalized onboarding experiences by researching new users, customers, or employees.",
    tag: "Linkup",
    href: "/use-cases/onboarding-workflows",
    enabled: true,
    Icon: TargetIcon,
  },
  {
    id: "company-research",
    title: "How to research companies with Linkup",
    shortTitle: "Company Research",
    description: "Deep-dive into any company with comprehensive research on financials, news, leadership, and more.",
    tag: "Linkup",
    href: "/use-cases/company-research",
    enabled: true,
    Icon: BuildingIcon,
  },
];

export default function UseCasesPage() {
  const featuredCase = useCases.find(uc => uc.featured);
  const enabledCases = useCases.filter(uc => uc.enabled && !uc.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f5f0e6] via-[#ebe6dc] to-[#e0dbd1] relative">
      {/* Dotted pattern overlay */}
      <div className="absolute inset-0 dotted-bg opacity-30 pointer-events-none" />

      {/* Content wrapper */}
      <div className="relative z-10">
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
              <Link
                href="/"
                className="flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium transition-all text-linkup-text-muted hover:text-linkup-text hover:bg-linkup-cream/50"
              >
                <SmallSparklesIcon className="w-4 h-4" />
                <span>Optimizer</span>
              </Link>
              <button
                className="flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium transition-all bg-linkup-green text-white shadow-sm"
              >
                <BookOpenIcon className="w-4 h-4" />
                <span>Use Cases</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <main className="max-w-6xl mx-auto px-6 pb-20">
        {/* Title Section */}
        <div className="text-center mb-10">
          <h1 className="text-2xl font-semibold text-linkup-text mb-2">
            Use Cases
          </h1>
          <p className="text-linkup-text-muted">
            Discover how to get the most out of Linkup&apos;s agentic search for your workflows
          </p>
        </div>

        {/* Featured Use Case */}
        {featuredCase && (
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-1.5 h-1.5 bg-linkup-green rounded-full"></div>
              <span className="text-xs font-semibold text-linkup-text-muted uppercase tracking-wider">Featured</span>
            </div>
            <Link
              href={featuredCase.href}
              className="block card p-8 group transition-all duration-300 hover:shadow-lg hover:border-linkup-green/40 hover:scale-[1.01] bg-gradient-to-br from-white to-linkup-cream/50 relative"
            >
              <span className="absolute top-4 right-4 px-2.5 py-1 text-xs font-medium rounded-full bg-amber-100 text-amber-700 flex items-center gap-1">
                <SparklesIcon className="w-3 h-3" />
                Popular
              </span>
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-linkup-green/10 rounded-2xl flex items-center justify-center text-linkup-green group-hover:bg-linkup-green group-hover:text-white transition-all duration-300">
                  <featuredCase.Icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h2 className="text-xl font-semibold text-linkup-text group-hover:text-linkup-green transition-colors">
                      {featuredCase.title}
                    </h2>
                    <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-linkup-green/10 text-linkup-green">
                      {featuredCase.tag}
                    </span>
                  </div>
                  <p className="text-linkup-text-muted mb-4 leading-relaxed max-w-2xl">
                    {featuredCase.description}
                  </p>

                  {/* Preview content */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    <span className="px-2.5 py-1 text-xs bg-linkup-cream rounded-lg text-linkup-text-muted">
                      Enrichment patterns
                    </span>
                    <span className="px-2.5 py-1 text-xs bg-linkup-cream rounded-lg text-linkup-text-muted">
                      Copy-paste prompts
                    </span>
                    <span className="px-2.5 py-1 text-xs bg-linkup-cream rounded-lg text-linkup-text-muted">
                      JSON schemas
                    </span>
                    <span className="px-2.5 py-1 text-xs bg-linkup-cream rounded-lg text-linkup-text-muted">
                      Python code
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mb-6">
                    <span className="flex items-center gap-2 text-sm font-semibold text-linkup-green">
                      <span className="w-2 h-2 bg-linkup-green rounded-full"></span>
                      Company profiles
                    </span>
                    <span className="flex items-center gap-2 text-sm font-semibold text-linkup-green">
                      <span className="w-2 h-2 bg-linkup-green rounded-full"></span>
                      Funding history
                    </span>
                    <span className="flex items-center gap-2 text-sm font-semibold text-linkup-green">
                      <span className="w-2 h-2 bg-linkup-green rounded-full"></span>
                      News monitoring
                    </span>
                    <span className="flex items-center gap-2 text-sm font-semibold text-linkup-green">
                      <span className="w-2 h-2 bg-linkup-green rounded-full"></span>
                      Contact enrichment
                    </span>
                  </div>

                  {/* Best for tags */}
                  <div className="flex items-center gap-2 mb-6">
                    <span className="text-xs text-linkup-text-muted">Best for:</span>
                    <span className="text-xs font-medium text-linkup-text">Sales teams</span>
                    <span className="text-xs text-linkup-text-light">•</span>
                    <span className="text-xs font-medium text-linkup-text">RevOps</span>
                    <span className="text-xs text-linkup-text-light">•</span>
                    <span className="text-xs font-medium text-linkup-text">Growth</span>
                  </div>

                  <div className="flex items-center gap-2 text-linkup-green font-medium">
                    <span>Read the full guide</span>
                    <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        )}

        {/* Other Use Cases */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-1.5 h-1.5 bg-linkup-text-light rounded-full"></div>
            <span className="text-xs font-semibold text-linkup-text-muted uppercase tracking-wider">All Use Cases</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {enabledCases.map((useCase) => (
              <Link
                key={useCase.id}
                href={useCase.href}
                className="card p-5 group transition-all duration-300 hover:shadow-md hover:border-linkup-green/30 hover:scale-[1.02] cursor-pointer"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 bg-linkup-green/10 text-linkup-green group-hover:bg-linkup-green group-hover:text-white flex-shrink-0">
                    <useCase.Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-semibold transition-colors text-linkup-text group-hover:text-linkup-green">
                    {useCase.shortTitle}
                  </h3>
                </div>

                <p className="text-sm text-linkup-text-light mb-2">
                  {useCase.title}
                </p>

                <p className="text-sm text-linkup-text-muted leading-relaxed line-clamp-2">
                  {useCase.description}
                </p>

                <div className="mt-4 flex items-center gap-1.5 text-sm text-linkup-green font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Learn more</span>
                  <ArrowRightIcon className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>

      </main>
      </div>
    </div>
  );
}
