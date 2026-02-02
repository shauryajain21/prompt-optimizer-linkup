/**
 * USE CASES - Categorized with Keywords
 *
 * Each use case has:
 * - id: unique identifier
 * - keywords: array of keywords/phrases that trigger this use case
 * - content: the detailed prompt content for this use case
 *
 * The keyword matcher will score queries against these keywords
 * and include the most relevant use cases in the system prompt.
 */

export interface UseCase {
  id: string;
  keywords: string[];
  content: string;
}

export const USE_CASES: UseCase[] = [
  {
    id: "coding",
    keywords: [
      "code",
      "coding",
      "programming",
      "developer",
      "api",
      "sdk",
      "documentation",
      "docs",
      "error",
      "bug",
      "debug",
      "library",
      "package",
      "npm",
      "pip",
      "github",
      "stackoverflow",
      "function",
      "method",
      "class",
      "framework",
      "react",
      "python",
      "javascript",
      "typescript",
      "node",
      "security",
      "vulnerability",
      "cve",
    ],
    content: `## Coding Agent Use Cases

Coding agents and AI assistants need real-time access to documentation, examples, and solutions. Linkup provides that bridge—giving coding agents the ability to search docs, find code examples, troubleshoot errors, and research libraries on demand.

**Why Linkup for coding agents:**
- Deep search can find documentation, then scrape full pages for complete context
- \`structured\` returns code examples and API specs in formats agents can consume
- Agentic retrieval navigates official docs, GitHub, Stack Overflow, and forums automatically
- Date filtering surfaces recent solutions and avoids deprecated approaches

**Recommended Configuration for Coding Agents:**
- depth: \`standard\` for quick lookups, \`deep\` for research
- outputType: \`structured\` (agents need parseable data)
- includeDomains: Restrict to trusted sources
- fromDate: Set for recent solutions (important for fast-moving frameworks)

### Documentation Lookup
- **Depth**: standard for simple lookups, deep for comprehensive extraction
- **Output**: structured
- **Parameters**: includeDomains: Official documentation sites
- **Pattern**: Search for official docs, then scrape to extract code examples, function signatures, parameter descriptions
- **Example**: "You are a documentation research assistant. Query: {query}, Technology: {technology}. Search for official documentation, scrape the page to extract: relevant section, code examples, function signatures, parameter descriptions. Prioritize official docs over tutorials."

### Error Troubleshooting
- **Depth**: standard (multiple sources searched in parallel)
- **Output**: structured
- **Parameters**: includeDomains: stackoverflow.com, github.com; fromDate: last 2 years
- **Pattern**: Search for exact error message, cross-reference Stack Overflow and GitHub Issues
- **Example**: "You are a debugging assistant. Error: {error_message}. Search for this exact error message, search Stack Overflow and GitHub Issues. For each solution, extract: root cause, recommended fix, code changes. Rank by recency and community validation."

### Library & Package Research
- **Depth**: deep (compare multiple packages)
- **Output**: structured
- **Parameters**: includeDomains: github.com, npmjs.com, pypi.org
- **Pattern**: Search for packages, compare features, check community sentiment
- **Example**: "You are a package research assistant. Need: {what_needed}, Language: {language}. Search for libraries, extract: package name, GitHub stars, latest version, key features, limitations. Search for comparison articles and community sentiment."

### Domain Allowlists for Coding
**Official Documentation**: docs.python.org, developer.mozilla.org, docs.microsoft.com, reactjs.org, nextjs.org, nodejs.org
**Community Q&A**: stackoverflow.com, github.com, dev.to
**Security Research**: nvd.nist.gov, cve.mitre.org, snyk.io`,
  },
  {
    id: "legal",
    keywords: [
      "legal",
      "law",
      "regulation",
      "regulatory",
      "compliance",
      "contract",
      "clause",
      "court",
      "litigation",
      "sec",
      "filing",
      "ftc",
      "gdpr",
      "hipaa",
      "attorney",
      "lawyer",
      "jurisdiction",
      "statute",
      "legislation",
      "enforcement",
      "sanctions",
    ],
    content: `## Legal Agent Use Cases

Legal AI agents need access to constantly evolving information—new regulations, recent case law, company filings, and authoritative legal sources. Linkup enables agents to search across the open web for regulatory updates, public filings, legal news, and authoritative sources in real-time.

**Why Linkup for legal agents:**
- Deep search can find regulatory sources, then scrape full text for complete context
- \`structured\` returns legal information in formats agents can parse and cite
- Date filtering (\`fromDate\`) surfaces recent regulatory changes and case developments
- Domain restrictions ensure agents only cite authoritative sources

**Recommended Configuration for Legal Agents:**
- depth: \`deep\` (legal research requires finding sources, then extracting detailed content)
- outputType: \`structured\` (legal agents need structured, citable information)
- includeDomains: Restrict to authoritative sources (critical for legal accuracy)
- fromDate: Set based on research needs (essential for tracking regulatory changes)

### Regulatory Monitoring
- **Depth**: deep
- **Output**: structured
- **Parameters**: includeDomains: federalregister.gov, regulations.gov, sec.gov, ftc.gov
- **Pattern**: Search for regulatory updates, extract citations and compliance deadlines
- **Example**: "You are a regulatory research assistant. Search for new rules, proposed rules, guidance documents, enforcement actions. Extract: title, citation, agency, effective date, compliance deadlines. Prioritize official .gov domains."

### Company & Entity Research (Legal)
- **Depth**: deep
- **Output**: structured
- **Parameters**: includeDomains: sec.gov, court databases
- **Pattern**: Sequential - find registration info → SEC filings → regulatory history → litigation
- **Example**: "You are a legal research assistant. Entity: {entity_name}. Search for registration info, SEC EDGAR filings, regulatory actions, litigation history. Return only verified information."

### Domain Allowlists for Legal Research
**US Federal Government**: federalregister.gov, regulations.gov, congress.gov, sec.gov, justice.gov, ftc.gov, uscourts.gov
**Legal News** (use selectively): law360.com, reuters.com/legal`,
  },
  {
    id: "people",
    keywords: [
      "person",
      "people",
      "contact",
      "linkedin",
      "profile",
      "executive",
      "ceo",
      "founder",
      "employee",
      "candidate",
      "recruiting",
      "hire",
      "sales prospect",
      "investor",
      "board",
      "speaker",
      "expert",
      "attendee",
    ],
    content: `## People Enrichment Use Cases

People enrichment powers everything from sales prospecting to recruiting pipelines to investor research. Linkup can systematically gather professional backgrounds, current roles, social presence, and public activity for each person.

**Why Linkup for people enrichment:**
- Deep search can find LinkedIn profiles, then extract structured professional data
- \`structured\` returns consistent data across hundreds or thousands of records
- Agentic retrieval cross-references multiple sources (LinkedIn, company sites, news, publications)
- Handles variations in names and disambiguates common names using company context

**Recommended Configuration for People Enrichment:**
- depth: \`standard\` for getting profiles, \`deep\` for extracting further context
- outputType: \`structured\` (consistent format for CRM/ATS import)

### Professional Profile Enrichment
- **Depth**: deep
- **Output**: structured
- **Pattern**: Find LinkedIn profile → extract career data → cross-reference company site → find public activity
- **Example**: "You are a professional research assistant. Person: {name}, Company: {company}. Search for LinkedIn profile, use company to disambiguate. Extract: current title, headline, time in role, previous positions, education, skills. Search company website for official bio."

### Sales Prospecting Enrichment
- **Depth**: deep
- **Output**: structured
- **Pattern**: Find LinkedIn → extract role details → search for buying signals → find authored content
- **Example**: "You are a sales intelligence researcher. Prospect: {name}, Company: {company}. Find LinkedIn profile, extract title and career trajectory. Search for public statements about challenges, content they've authored. Return insights for personalized outreach."

### Name Disambiguation Strategies
**Strong disambiguation**: Full name + current company + title
**Moderate disambiguation**: Full name + company name only
**Weak disambiguation**: Full name only (likely multiple matches)`,
  },
  {
    id: "company",
    keywords: [
      "company",
      "business",
      "startup",
      "enterprise",
      "competitor",
      "competitive intelligence",
      "market research",
      "industry",
      "funding",
      "valuation",
      "investment",
      "due diligence",
      "sales account",
      "target account",
    ],
    content: `## Company Research Use Cases

Company research is foundational to nearly every business workflow—sales prospecting, investment analysis, competitive intelligence, partnership evaluation, vendor assessment, and more.

**Why Linkup for company research:**
- Deep search executes multi-step research: find website → scrape → find LinkedIn → find news → synthesize
- \`structured\` returns consistent company profiles ready for databases and workflows
- Agentic retrieval navigates across company websites, LinkedIn, news sources, and regulatory filings
- Date filtering surfaces recent developments and filters out stale information

**Recommended Configuration for Company Research:**
- depth: \`deep\` (company research requires gathering from multiple sources)
- outputType: \`structured\` (consistent format for CRM, databases, automation)
- fromDate: Set for news/funding (90 days typical)

### Comprehensive Company Profile
- **Depth**: deep
- **Output**: structured
- **Pattern**: Scrape website → find LinkedIn → search funding → find leadership → search news → identify competitors
- **Example**: "You are a business research analyst. Company: {company_name}, Domain: {domain}. Scrape website for description, products, customers. Search LinkedIn for employee count, HQ. Search for funding history, leadership team. Search news from past 90 days."

### Competitive Intelligence
- **Depth**: deep
- **Output**: structured
- **Pattern**: Analyze product → research GTM → evaluate strengths/weaknesses → assess business health
- **Example**: "You are a competitive intelligence analyst. Competitor: {competitor_name}. Scrape website for product features, pricing. Search for product reviews, user complaints. Find recent funding, hiring patterns. Return battlecard points."

### Sales Account Research
- **Depth**: deep
- **Output**: structured
- **Parameters**: fromDate: Last 90 days for buying signals
- **Pattern**: Understand company → discover pain points → identify tech stack → find buying signals
- **Example**: "You are a sales research assistant. Target: {company_name}. Scrape website for business overview. Search for challenges, job postings signaling initiatives. Find buying signals: recent funding, executive changes."`,
  },
  {
    id: "crm",
    keywords: [
      "crm",
      "enrichment",
      "enrich",
      "salesforce",
      "hubspot",
      "lead",
      "account",
      "firmographic",
      "data quality",
      "data hygiene",
      "lead scoring",
    ],
    content: `## CRM Enrichment Use Cases

CRM enrichment is one of the most impactful applications of Linkup's agentic search. Instead of manually researching companies and contacts, you can automate the process of gathering firmographic data, funding history, key personnel, and more.

**Why Linkup for CRM enrichment:**
- \`structured\` returns data in JSON schemas that map directly to your CRM fields
- Deep search can gather comprehensive company profiles in a single API call
- Agentic retrieval finds data across multiple sources (websites, LinkedIn, news, databases)

**Recommended Configuration for CRM Enrichment:**
- depth: \`deep\` (company research typically requires multiple retrieval steps)
- outputType: \`structured\` (returns data in your exact CRM schema)

### Company Record Enrichment
- **Depth**: deep
- **Output**: structured
- **Pattern**: Scrape website → find LinkedIn → search funding → find leadership → identify clients
- **Example**: "You are an expert B2B data researcher. Target company: {company_name}, Domain: {domain}. Scrape website for description, products, clients. Search LinkedIn for employee count, HQ, industry. Search for funding announcements, leadership team. Return only factual data found."

### Contact Record Enrichment
- **Depth**: deep
- **Output**: structured
- **Pattern**: Find LinkedIn profile → extract professional background → search for public activity
- **Example**: "You are an expert professional researcher. Contact: {contact_name}, Company: {company_name}. Search LinkedIn for current title, time in role. Search for speaking engagements, articles authored. Return only verified information."

### Lead Scoring Data Collection
- **Depth**: deep
- **Output**: structured
- **Pattern**: Search hiring activity → find funding/growth signals → identify technology stack → find trigger events
- **Example**: "You are a B2B sales intelligence analyst. Company: {company_name}. Search for job postings, funding rounds, technology signals. Focus on factual signals only—return raw data points."`,
  },
  {
    id: "news",
    keywords: [
      "news",
      "article",
      "press",
      "media",
      "monitoring",
      "coverage",
      "announcement",
      "headline",
      "sentiment",
      "breaking",
      "recent",
      "update",
      "alert",
    ],
    content: `## News Search Use Cases

News search is one of Linkup's most versatile capabilities. Whether you're tracking competitors, researching markets, or staying informed on regulatory changes, Linkup can find, filter, and structure news content from across the web.

**Why Linkup for news search:**
- Date filtering (\`fromDate\`, \`toDate\`) lets you target specific time windows
- \`structured\` returns news in consistent formats for dashboards and alerts
- Agentic search can synthesize across multiple sources and find patterns
- Deep search can follow up on stories by scraping full articles for details

**Recommended Configuration for News Search:**
- depth: \`standard\` for monitoring, \`deep\` for research
- outputType: \`structured\` (consistent format for automation and dashboards)
- fromDate/toDate: Set based on recency needs (essential for filtering)
- includeDomains: (optional) Restrict to trusted news sources
- excludeDomains: (optional) Filter out low-quality or irrelevant sources

### Industry & Market News
- **Depth**: standard for monitoring, deep for comprehensive research
- **Output**: structured
- **Parameters**: fromDate: Based on monitoring frequency; includeDomains: reuters.com, bloomberg.com, wsj.com, ft.com
- **Pattern**: Search by industry/keywords → categorize by topic → extract key takeaways
- **Example**: "You are a market intelligence analyst. Industry: {industry}. Search for recent news covering market trends, regulatory changes, M&A, product announcements. For each article: headline, source, date, key takeaway."

### Company-Specific Monitoring
- **Depth**: standard
- **Output**: structured
- **Parameters**: fromDate: Based on monitoring frequency; excludeDomains: job boards
- **Pattern**: Search for company mentions → classify mention type → assess sentiment
- **Example**: "You are a media monitoring analyst. Company: {company_name}. Search for news mentioning the company: announcements, product launches, funding, executive changes. For each: headline, date, mention type, sentiment."

### Source Quality Tiers for News
**Tier 1**: reuters.com, bloomberg.com, wsj.com, ft.com, nytimes.com
**Tier 2 (Tech)**: techcrunch.com, theverge.com, wired.com
**Exclude**: pinterest.com, facebook.com`,
  },
  {
    id: "procurement",
    keywords: [
      "procurement",
      "supplier",
      "vendor",
      "price",
      "pricing",
      "quote",
      "rfq",
      "sourcing",
      "supply chain",
      "manufacturer",
      "distributor",
      "part number",
      "moq",
      "lead time",
      "product catalog",
    ],
    content: `## Procurement & Supplier Research Use Cases

Procurement teams spend significant time researching suppliers, comparing quotes, validating vendors, and monitoring supply chain risks. Linkup's agentic search can automate much of this work.

**Why Linkup for procurement:**
- Deep search executes "find → scrape → extract" pattern essential for getting actual prices and specs
- \`structured\` returns supplier data in formats ready for comparison spreadsheets or procurement systems
- Agentic retrieval navigates supplier websites, marketplaces, and databases automatically

**Recommended Configuration for Procurement:**
- depth: \`deep\` (procurement requires finding listings, then scraping pages for prices and specs)
- outputType: \`structured\` (returns data ready for comparison and system import)
- includeDomains: (optional) Restrict to approved supplier directories or marketplaces

### Supplier Discovery
- **Depth**: deep
- **Output**: structured
- **Pattern**: Search manufacturers/distributors → search industrial marketplaces → extract supplier details
- **Example**: "You are a procurement specialist. Item: {item_description}, Region: {region}. Search for manufacturers and distributors, search industrial marketplaces (ThomasNet, Alibaba). Return qualified supplier list."

### Price Extraction & Comparison
- **Depth**: deep (must scrape listing pages for actual prices)
- **Output**: structured
- **Pattern**: Find listings → scrape each page → extract pricing details
- **Example**: "You are a procurement specialist. Item: {item_description}, Part number: {part_number}. Search suppliers and marketplaces. For each listing, SCRAPE the page to extract: product name, price, MOQ, lead time. Always scrape—do not infer prices from snippets."

### Domain Allowlists for Procurement
**Industrial Marketplaces**: thomasnet.com, alibaba.com, globalspec.com
**Electronics**: digikey.com, mouser.com, arrow.com
**MRO/Industrial**: grainger.com, mcmaster.com`,
  },
  {
    id: "onboarding",
    keywords: [
      "onboarding",
      "onboard",
      "new customer",
      "new employee",
      "new hire",
      "partner",
      "vendor onboarding",
      "personalization",
      "welcome",
      "getting started",
    ],
    content: `## Onboarding Personalization Use Cases

Generic onboarding creates friction. Whether you're onboarding new customers, employees, partners, or vendors, the experience improves dramatically when it's tailored to who they are, what they need, and where they're coming from.

**Why Linkup for onboarding personalization:**
- Trigger research automatically when a new entity enters your system
- \`structured\` returns data in formats that feed directly into onboarding logic
- Deep search gathers comprehensive context from multiple sources
- Real-time enrichment means personalization from day one

**Recommended Configuration for Onboarding:**
- depth: \`deep\` for comprehensive research, \`standard\` for quick context
- outputType: \`structured\` (feed directly into onboarding automation)
- fromDate: Recent (30-90 days) to surface current context

### Customer Onboarding Personalization
- **Depth**: deep
- **Output**: structured
- **Pattern**: Scrape company website → identify tech stack → infer use cases → find migration context
- **Example**: "You are an onboarding research assistant. Customer: {company_name}, Domain: {domain}, Product: {product}. Scrape website for description, industry. Identify tech stack. Infer likely use cases. Return recommended onboarding track, priority features."

### Employee Onboarding Context
- **Depth**: deep
- **Output**: structured
- **Pattern**: Find LinkedIn → extract career history → research previous company → identify work style signals
- **Example**: "You are an HR research assistant. New hire: {name}, Previous company: {previous_company}. Find LinkedIn for career history. Note previous company's culture and size. Return insights for team preparation."

### Onboarding Segmentation Logic
- IF employee_count > 1000 → Enterprise onboarding (white-glove)
- IF tech_stack includes [integrations] → Integration-focused onboarding
- IF competitor_products_used → Migration onboarding
- IF contact_title contains "Developer" → Technical onboarding`,
  },
];

/**
 * Get relevant use cases based on query keywords
 *
 * @param query - The user's query
 * @param maxCases - Maximum number of use cases to return (default: 2)
 * @returns Array of use case content strings
 */
export function getRelevantUseCases(query: string, maxCases: number = 2): string[] {
  const queryLower = query.toLowerCase();

  // Score each use case based on keyword matches
  const scored = USE_CASES.map((useCase) => {
    let score = 0;

    for (const keyword of useCase.keywords) {
      if (queryLower.includes(keyword.toLowerCase())) {
        // Exact word match scores higher
        const regex = new RegExp(`\\b${keyword}\\b`, "i");
        if (regex.test(query)) {
          score += 2;
        } else {
          score += 1;
        }
      }
    }

    return { useCase, score };
  });

  // Filter to only those with matches, sort by score, take top N
  return scored
    .filter((s) => s.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, maxCases)
    .map((s) => s.useCase.content);
}

/**
 * Get all use case IDs that match the query
 * Useful for logging/analytics
 */
export function getMatchedUseCaseIds(query: string): string[] {
  const queryLower = query.toLowerCase();

  return USE_CASES.filter((useCase) =>
    useCase.keywords.some((keyword) => queryLower.includes(keyword.toLowerCase()))
  ).map((useCase) => useCase.id);
}
