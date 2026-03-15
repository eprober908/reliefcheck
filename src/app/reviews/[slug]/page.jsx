import { companies } from "@/data/companies";
import { notFound } from "next/navigation";
import StarRating from "@/components/StarRating";
import Link from "next/link";

export function generateStaticParams() {
  return companies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const company = companies.find((c) => c.slug === slug);
  if (!company) return {};

  return {
    title: `${company.name} Review 2026 — Is It Legit? Fees, Ratings & More`,
    description: `Honest ${company.name} review for 2026. BBB rating: ${company.bbbRating}. Fees: ${company.fees}. Read our in-depth analysis of pros, cons, CFPB complaints, and whether it's right for you.`,
    openGraph: {
      title: `${company.name} Review 2026`,
      description: `In-depth review of ${company.name}. BBB: ${company.bbbRating}, Fees: ${company.fees}.`,
    },
  };
}

export default async function ReviewPage({ params }) {
  const { slug } = await params;
  const company = companies.find((c) => c.slug === slug);
  if (!company) notFound();

  const otherCompanies = companies.filter((c) => c.slug !== slug).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-10 sm:py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
            <Link href="/best-debt-relief-companies" className="hover:text-white transition-colors">
              Best Companies
            </Link>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-gray-300">{company.name}</span>
          </div>

          <h1
            className="text-3xl sm:text-4xl font-bold text-white mb-3"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            {company.name} Review 2026
          </h1>
          <p className="text-gray-400 mb-6">{company.bestFor}</p>

          <div className="flex flex-wrap items-center gap-4">
            <div className="bg-white/10 rounded-xl px-4 py-2.5 flex items-center gap-2">
              <StarRating rating={company.rating} />
            </div>
            <div className="bg-white/10 rounded-xl px-4 py-2.5 flex items-center gap-2 text-sm text-white">
              <svg className="w-4 h-4 text-green-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              BBB {company.bbbRating}
            </div>
            <div className="bg-white/10 rounded-xl px-4 py-2.5 text-sm text-white">
              Founded {company.founded}
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Overview */}
              <div>
                <h2 className="text-2xl font-bold text-navy mb-4" style={{ fontFamily: "var(--font-serif)" }}>
                  Overview
                </h2>
                <p className="text-text-secondary leading-relaxed">{company.longDescription}</p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="bg-gray-warm rounded-xl p-4 text-center">
                  <p className="text-xs text-text-light mb-1">Min. Debt</p>
                  <p className="font-bold text-navy">${(company.minDebt / 1000).toFixed(0)}K+</p>
                </div>
                <div className="bg-gray-warm rounded-xl p-4 text-center">
                  <p className="text-xs text-text-light mb-1">Fees</p>
                  <p className="font-bold text-navy">{company.fees.split(" ")[0]}</p>
                </div>
                <div className="bg-gray-warm rounded-xl p-4 text-center">
                  <p className="text-xs text-text-light mb-1">BBB Rating</p>
                  <p className="font-bold text-green-accent">{company.bbbRating}</p>
                </div>
                <div className="bg-gray-warm rounded-xl p-4 text-center">
                  <p className="text-xs text-text-light mb-1">HQ</p>
                  <p className="font-bold text-navy text-sm">{company.headquarters}</p>
                </div>
              </div>

              {/* Pros & Cons */}
              <div>
                <h2 className="text-2xl font-bold text-navy mb-4" style={{ fontFamily: "var(--font-serif)" }}>
                  Pros & Cons
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="bg-green-light/30 rounded-xl p-5 border border-green-accent/20">
                    <h3 className="font-bold text-green-accent mb-3 flex items-center gap-2">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                      </svg>
                      What We Like
                    </h3>
                    <ul className="space-y-2.5">
                      {company.pros.map((pro, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                          <svg className="w-4 h-4 text-green-accent flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-red-50 rounded-xl p-5 border border-red-200/50">
                    <h3 className="font-bold text-red-500 mb-3 flex items-center gap-2">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5" />
                      </svg>
                      What Could Be Better
                    </h3>
                    <ul className="space-y-2.5">
                      {company.cons.map((con, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                          <svg className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Features */}
              <div>
                <h2 className="text-2xl font-bold text-navy mb-4" style={{ fontFamily: "var(--font-serif)" }}>
                  Key Features
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {company.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3 bg-gray-warm rounded-xl p-4">
                      <svg className="w-5 h-5 text-green-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-sm font-medium text-navy">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CFPB Data */}
              <div>
                <h2 className="text-2xl font-bold text-navy mb-4" style={{ fontFamily: "var(--font-serif)" }}>
                  CFPB Complaint Data
                </h2>
                <div className="bg-gray-warm rounded-xl p-6 border border-gray-border">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="text-sm text-text-light">Total CFPB Complaints</p>
                      <p className="text-3xl font-bold text-navy">{company.cfpbComplaints}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-text-light">Accredited</p>
                      <p className="text-lg font-bold text-green-accent">{company.accredited ? "Yes (AADR)" : "No"}</p>
                    </div>
                  </div>
                  <p className="text-xs text-text-light leading-relaxed">
                    CFPB complaint data is sourced from the Consumer Financial Protection Bureau&apos;s public database.
                    A higher number of complaints doesn&apos;t necessarily indicate worse service — it often correlates with
                    company size and volume of clients served. We analyze complaint resolution rates and patterns as
                    part of our review methodology.
                  </p>
                </div>
              </div>

              {/* Bottom Line */}
              <div className="bg-navy rounded-xl p-6 sm:p-8">
                <h2 className="text-xl font-bold text-white mb-3" style={{ fontFamily: "var(--font-serif)" }}>
                  The Bottom Line
                </h2>
                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  {company.name} is a {company.rating >= 4.7 ? "top-tier" : "reputable"} debt relief company with
                  {company.bbbRating === "A+" ? " an excellent" : " a strong"} BBB rating and{" "}
                  {new Date().getFullYear() - company.founded}+ years in the industry. They&apos;re{" "}
                  {company.bestFor.toLowerCase().replace("best for ", "particularly well-suited for ")}.
                  As with any debt relief decision, we recommend getting a free consultation and comparing
                  multiple options before committing.
                </p>
                <Link
                  href="/calculator"
                  className="inline-flex items-center gap-2 bg-green-accent hover:bg-green-accent-hover text-white font-semibold px-6 py-3 rounded-xl transition-colors"
                >
                  Check Your Savings
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* CTA Card */}
              <div className="bg-green-light/30 rounded-2xl p-6 border border-green-accent/20 sticky top-24">
                <h3 className="font-bold text-navy mb-2 text-center">See If You Qualify</h3>
                <p className="text-sm text-text-secondary text-center mb-4">
                  Free savings estimate with no obligation
                </p>
                <Link
                  href="/calculator"
                  className="flex items-center justify-center gap-2 bg-green-accent hover:bg-green-accent-hover text-white font-semibold py-3 px-6 rounded-xl transition-colors w-full mb-4"
                >
                  Check My Options
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <div className="space-y-2 text-xs text-text-light">
                  <div className="flex items-center gap-2">
                    <svg className="w-3.5 h-3.5 text-green-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    No credit check required
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-3.5 h-3.5 text-green-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    Results in 60 seconds
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-3.5 h-3.5 text-green-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    100% free service
                  </div>
                </div>
              </div>

              {/* Other companies */}
              <div className="bg-white rounded-2xl border border-gray-border p-6">
                <h3 className="font-bold text-navy mb-4 text-sm">Compare Alternatives</h3>
                <div className="space-y-4">
                  {otherCompanies.map((c) => (
                    <Link
                      key={c.slug}
                      href={`/reviews/${c.slug}`}
                      className="flex items-center justify-between group"
                    >
                      <div>
                        <p className="text-sm font-medium text-navy group-hover:text-green-accent transition-colors">
                          {c.name}
                        </p>
                        <p className="text-xs text-text-light">
                          {c.rating}/5 • BBB {c.bbbRating}
                        </p>
                      </div>
                      <svg className="w-4 h-4 text-text-light group-hover:text-green-accent transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  ))}
                </div>
                <Link
                  href="/best-debt-relief-companies"
                  className="inline-flex items-center gap-1 text-sm font-medium text-green-accent hover:text-green-accent-hover mt-4 transition-colors"
                >
                  View All Companies
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Review Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Review",
            itemReviewed: {
              "@type": "Organization",
              name: company.name,
              url: `https://reliefcheck.com/reviews/${company.slug}`,
            },
            reviewRating: {
              "@type": "Rating",
              ratingValue: company.rating,
              bestRating: 5,
            },
            author: {
              "@type": "Organization",
              name: "ReliefCheck",
            },
            datePublished: "2026-01-15",
            reviewBody: company.longDescription,
          }),
        }}
      />
    </>
  );
}
