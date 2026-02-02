"use client";

import Link from "next/link";

type IconComponent = ({ className }: { className?: string }) => React.ReactNode;

interface UseCase {
  id: string;
  title: string;
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
    description: "Automate company and contact research to populate your CRM with firmographic data, funding history, and more.",
    tag: "Linkup",
    href: "/use-cases/crm-enrichment",
    enabled: true,
    Icon: BuildingIcon,
    featured: true,
  },
  {
    id: "legal-agents",
    title: "How to power legal agents with Linkup",
    description: "Enable legal AI agents to search regulatory updates, public filings, legal news, and authoritative sources in real-time.",
    tag: "Linkup",
    href: "/use-cases/legal-agents",
    enabled: true,
    Icon: ScaleIcon,
  },
  {
    id: "news-search",
    title: "How to search for news with Linkup",
    description: "Track competitors, research markets, monitor regulatory changes, and stay informed with powerful news search.",
    tag: "Linkup",
    href: "/use-cases/news-search",
    enabled: true,
    Icon: NewspaperIcon,
  },
  {
    id: "supplier-research",
    title: "How to research suppliers with Linkup",
    description: "Automate supplier discovery, price comparisons, due diligence checks, and procurement research at scale.",
    tag: "Linkup",
    href: "/use-cases/supplier-research",
    enabled: true,
    Icon: TruckIcon,
  },
  {
    id: "company-profiler",
    title: "Company Profiler",
    description: "Feed your AI grounding data it can trust to make critical business decisions.",
    tag: "Linkup",
    href: "#",
    enabled: false,
    Icon: ChartIcon,
  },
  {
    id: "sales-research",
    title: "Sales Prospect Research & Outreach Preparation",
    description: "Transform your sales and outreach process by automating deep, personalized research on prospects.",
    tag: "Community",
    href: "#",
    enabled: false,
    Icon: UsersIcon,
  },
  {
    id: "news-monitoring",
    title: "AI News Monitoring with Linkup",
    description: "A fully automated system for monitoring news on any topic you choose.",
    tag: "Community",
    href: "#",
    enabled: false,
    Icon: NewspaperIcon,
  },
  {
    id: "agent-workflows",
    title: "Build / Deploy Agent Workflows",
    description: "Launch agentic workflows with an open source, user-friendly environment for devs and agents.",
    tag: "Community",
    href: "#",
    enabled: false,
    Icon: WorkflowIcon,
  },
  {
    id: "market-research",
    title: "Competitive Market Research",
    description: "Gather comprehensive intelligence on competitors, market trends, and industry dynamics.",
    tag: "Linkup",
    href: "#",
    enabled: false,
    Icon: TargetIcon,
  },
];

export default function UseCasesPage() {
  const featuredCase = useCases.find(uc => uc.featured);
  const otherCases = useCases.filter(uc => !uc.featured);

  return (
    <div className="min-h-screen bg-gradient-to-b from-linkup-cream/30 to-linkup-bg">
      {/* Minimal Header */}
      <header className="pt-6 pb-4">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 bg-linkup-green rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">L</span>
              </div>
              <span className="font-semibold text-linkup-text">linkup</span>
            </div>
            <nav className="flex items-center gap-5">
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
                className="text-sm font-medium text-linkup-green hover:text-linkup-green-hover transition-colors"
              >
                Get API Key
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

      <main className="max-w-4xl mx-auto px-6 pb-20">
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
              className="block card p-8 group transition-all duration-300 hover:shadow-lg hover:border-linkup-green/40 hover:scale-[1.01] bg-gradient-to-br from-white to-linkup-cream/50"
            >
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
                  <p className="text-linkup-text-muted mb-6 leading-relaxed max-w-2xl">
                    {featuredCase.description}
                  </p>
                  <div className="flex items-center gap-2 text-linkup-green font-medium">
                    <span>Read the guide</span>
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
            <span className="text-xs font-semibold text-linkup-text-muted uppercase tracking-wider">More Use Cases</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {otherCases.map((useCase) => (
              <Link
                key={useCase.id}
                href={useCase.enabled ? useCase.href : "#"}
                className="card p-5 group transition-all duration-300 hover:shadow-md hover:border-linkup-green/30 hover:scale-[1.02] cursor-pointer"
              >
                <div className="flex items-start gap-4 mb-3">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 bg-linkup-green/10 text-linkup-green group-hover:bg-linkup-green group-hover:text-white">
                    <useCase.Icon className="w-5 h-5" />
                  </div>
                  <span className={`px-2 py-0.5 text-xs font-medium rounded-full ${
                    useCase.tag === "Linkup"
                      ? "bg-linkup-green/10 text-linkup-green"
                      : "bg-gray-100 text-gray-500"
                  }`}>
                    {useCase.tag}
                  </span>
                </div>

                <h3 className="text-base font-medium mb-2 transition-colors text-linkup-text group-hover:text-linkup-green">
                  {useCase.title}
                </h3>

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
  );
}
