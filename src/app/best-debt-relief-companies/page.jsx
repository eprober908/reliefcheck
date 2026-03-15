import { companies } from "@/data/companies";
import CompanyCard from "@/components/CompanyCard";
import Link from "next/link";

export const metadata = {
  title: "7 Best Debt Relief Companies of 2026 — Expert Reviews & Ratings",
  description:
    "Compare the top-rated debt relief companies of 2026. Independent reviews with BBB ratings, fees, pros & cons. Find the best debt settlement company for your needs.",
  openGraph: {
    title: "7 Best Debt Relief Companies of 2026",
    description:
      "Compare top-rated debt relief companies. Independent reviews, BBB ratings, fees, and pros & cons.",
  },
};

export default function BestCompaniesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 text-green-accent text-sm font-medium px-4 py-2 rounded-full mb-6">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Updated March 2026
          </div>
          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Best Debt Relief Companies of 2026
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We independently research, review, and rank the top debt relief companies to help you make an
            informed decision. Our reviews are never influenced by compensation.
          </p>
        </div>
      </section>

      {/* Methodology */}
      <section className="border-b border-gray-border py-6 bg-gray-warm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-text-secondary">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-green-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-medium">Independent Reviews</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-green-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              <span className="font-medium">BBB Verified Ratings</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-green-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
              </svg>
              <span className="font-medium">CFPB Data Analyzed</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-green-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-medium">No Pay-to-Play Rankings</span>
            </div>
          </div>
        </div>
      </section>

      {/* Company Cards */}
      <section className="py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="space-y-6">
            {companies.map((company, i) => (
              <CompanyCard key={company.slug} company={company} rank={i + 1} />
            ))}
          </div>

          {/* Beyond Finance (not a full review) */}
          <div className="mt-6 bg-white rounded-2xl border border-gray-border p-6 sm:p-8">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-navy rounded-xl flex items-center justify-center text-white font-bold text-sm">
                  #7
                </div>
                <div>
                  <h3 className="text-lg font-bold text-navy">Beyond Finance</h3>
                  <p className="text-sm text-text-secondary">Rating: 4.3/5 • BBB: A</p>
                </div>
              </div>
            </div>
            <p className="text-sm text-text-secondary mb-4">
              Beyond Finance offers technology-driven debt resolution with a focus on customer experience.
              They provide personalized debt relief programs with transparent tracking and competitive fees.
            </p>
            <div className="grid grid-cols-3 gap-3 mb-4">
              <div className="bg-gray-warm rounded-xl p-3 text-center">
                <p className="text-xs text-text-light mb-1">Min. Debt</p>
                <p className="font-bold text-sm text-navy">$10K</p>
              </div>
              <div className="bg-gray-warm rounded-xl p-3 text-center">
                <p className="text-xs text-text-light mb-1">Fees</p>
                <p className="font-bold text-sm text-navy">15-25%</p>
              </div>
              <div className="bg-gray-warm rounded-xl p-3 text-center">
                <p className="text-xs text-text-light mb-1">Founded</p>
                <p className="font-bold text-sm text-navy">2005</p>
              </div>
            </div>
            <Link
              href="/calculator"
              className="inline-flex items-center gap-2 bg-green-accent hover:bg-green-accent-hover text-white text-sm font-semibold py-3 px-6 rounded-xl transition-colors"
            >
              Check Eligibility
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-12 sm:py-16 bg-gray-warm border-t border-gray-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-6" style={{ fontFamily: "var(--font-serif)" }}>
            How We Rank Debt Relief Companies
          </h2>

          <div className="space-y-6 text-sm text-text-secondary leading-relaxed">
            <p>
              Our editorial team independently researches and evaluates each debt relief company using a
              comprehensive methodology. We do not accept payment for rankings, and our reviews are never
              influenced by advertiser relationships.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: "Reputation (25%)", desc: "BBB rating, online reviews, industry accreditations, and years in business." },
                { title: "Fees & Transparency (25%)", desc: "Fee structure, clarity of terms, no hidden costs, and compliance with FTC regulations." },
                { title: "Customer Experience (25%)", desc: "Client reviews, CFPB complaint data, responsiveness, and support quality." },
                { title: "Results & Value (25%)", desc: "Reported settlement rates, program completion rates, and overall client outcomes." },
              ].map((item) => (
                <div key={item.title} className="bg-white rounded-xl p-5 border border-gray-border">
                  <h4 className="font-bold text-navy mb-2">{item.title}</h4>
                  <p className="text-xs text-text-secondary">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 bg-white rounded-xl p-6 border border-gray-border">
            <p className="text-xs text-text-light leading-relaxed">
              <strong className="text-text-secondary">Disclosure:</strong> ReliefCheck may receive compensation
              when you click on links to debt relief companies on our site. This does not influence our rankings
              or reviews. Our editorial content is based on independent research. Please read our full editorial
              policy for more information.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-12 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-serif)" }}>
            Not Sure Which Company Is Right for You?
          </h2>
          <p className="text-gray-400 mb-6">
            Use our free calculator to see your estimated savings and get matched with the best option for your situation.
          </p>
          <Link
            href="/calculator"
            className="inline-flex items-center gap-2 bg-green-accent hover:bg-green-accent-hover text-white font-semibold px-8 py-4 rounded-xl transition-colors"
          >
            Calculate Your Savings
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
