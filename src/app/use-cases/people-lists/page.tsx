"use client";

import Link from "next/link";

function ArrowLeftIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="19" y1="12" x2="5" y2="12"/>
      <polyline points="12,19 5,12 12,5"/>
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
              <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-linkup-green/10 text-linkup-green mb-3 inline-block">
                Linkup
              </span>
              <h1 className="text-3xl font-bold text-linkup-text mb-4">
                How to enrich people lists with Linkup
              </h1>
              <p className="text-lg text-linkup-text-muted leading-relaxed">
                Enrich contact lists with professional profiles, social data, and verified contact information.
              </p>
            </div>
          </div>
        </div>

        {/* Coming Soon Content */}
        <div className="card p-12 text-center">
          <div className="w-20 h-20 bg-linkup-cream rounded-full flex items-center justify-center mx-auto mb-6">
            <UsersIcon className="w-10 h-10 text-linkup-text-light" />
          </div>
          <h2 className="text-2xl font-semibold text-linkup-text mb-3">Guide Coming Soon</h2>
          <p className="text-linkup-text-muted max-w-md mx-auto mb-8">
            We&apos;re working on a comprehensive guide for enriching people lists with Linkup. Check back soon for detailed examples, prompts, and schemas.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link
              href="/use-cases"
              className="px-6 py-3 bg-linkup-green text-white rounded-xl font-medium hover:bg-linkup-green-hover transition-colors"
            >
              Browse Other Guides
            </Link>
            <Link
              href="/"
              className="px-6 py-3 bg-linkup-cream text-linkup-text rounded-xl font-medium hover:bg-linkup-cream/80 transition-colors"
            >
              Try the Optimizer
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
