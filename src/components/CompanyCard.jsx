import Link from "next/link";
import StarRating from "./StarRating";

export default function CompanyCard({ company, rank }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-border hover:border-green-accent/30 hover:shadow-lg transition-all duration-300 overflow-hidden">
      <div className="p-6 sm:p-8">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-navy rounded-xl flex items-center justify-center text-white font-bold text-sm">
              #{rank}
            </div>
            <div>
              <h3 className="text-lg font-bold text-navy">{company.name}</h3>
              <div className="flex items-center gap-2 mt-0.5">
                <StarRating rating={company.rating} size="sm" />
              </div>
            </div>
          </div>
          <div className="flex items-center gap-1 bg-green-light text-green-accent text-xs font-semibold px-3 py-1.5 rounded-full">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            BBB {company.bbbRating}
          </div>
        </div>

        <p className="text-sm text-text-secondary mb-5 leading-relaxed">{company.description}</p>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-3 mb-5">
          <div className="bg-gray-warm rounded-xl p-3 text-center">
            <p className="text-xs text-text-light mb-1">Min. Debt</p>
            <p className="font-bold text-sm text-navy">${(company.minDebt / 1000).toFixed(0)}K</p>
          </div>
          <div className="bg-gray-warm rounded-xl p-3 text-center">
            <p className="text-xs text-text-light mb-1">Fees</p>
            <p className="font-bold text-sm text-navy">{company.fees.split(" ")[0]}</p>
          </div>
          <div className="bg-gray-warm rounded-xl p-3 text-center">
            <p className="text-xs text-text-light mb-1">Founded</p>
            <p className="font-bold text-sm text-navy">{company.founded}</p>
          </div>
        </div>

        {/* Pros & Cons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-green-accent mb-2">Pros</h4>
            <ul className="space-y-1.5">
              {company.pros.slice(0, 3).map((pro, i) => (
                <li key={i} className="flex items-start gap-2 text-xs text-text-secondary">
                  <svg className="w-3.5 h-3.5 text-green-accent flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {pro}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-red-400 mb-2">Cons</h4>
            <ul className="space-y-1.5">
              {company.cons.slice(0, 2).map((con, i) => (
                <li key={i} className="flex items-start gap-2 text-xs text-text-secondary">
                  <svg className="w-3.5 h-3.5 text-red-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  {con}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <Link
            href="/calculator"
            className="flex-1 inline-flex items-center justify-center gap-2 bg-green-accent hover:bg-green-accent-hover text-white text-sm font-semibold py-3 rounded-xl transition-colors"
          >
            Check Eligibility
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
          <Link
            href={`/reviews/${company.slug}`}
            className="inline-flex items-center justify-center text-sm font-medium text-navy hover:text-green-accent py-3 px-4 rounded-xl border border-gray-border hover:border-green-accent/30 transition-all"
          >
            Full Review
          </Link>
        </div>
      </div>
    </div>
  );
}
