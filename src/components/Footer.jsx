import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-green-accent rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="text-xl font-bold">
                Relief<span className="text-green-accent">Check</span>
              </span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed">
              Helping Americans find the right debt relief solution since 2024. Free tools, honest reviews.
            </p>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-gray-300">Resources</h4>
            <ul className="space-y-2.5">
              <li><Link href="/calculator" className="text-sm text-gray-400 hover:text-white transition-colors">Debt Calculator</Link></li>
              <li><Link href="/best-debt-relief-companies" className="text-sm text-gray-400 hover:text-white transition-colors">Best Companies</Link></li>
            </ul>
          </div>

          {/* Reviews */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-gray-300">Company Reviews</h4>
            <ul className="space-y-2.5">
              <li><Link href="/reviews/national-debt-relief" className="text-sm text-gray-400 hover:text-white transition-colors">National Debt Relief</Link></li>
              <li><Link href="/reviews/freedom-debt-relief" className="text-sm text-gray-400 hover:text-white transition-colors">Freedom Debt Relief</Link></li>
              <li><Link href="/reviews/accredited-debt-relief" className="text-sm text-gray-400 hover:text-white transition-colors">Accredited Debt Relief</Link></li>
              <li><Link href="/reviews/americor" className="text-sm text-gray-400 hover:text-white transition-colors">Americor</Link></li>
              <li><Link href="/reviews/pacific-debt" className="text-sm text-gray-400 hover:text-white transition-colors">Pacific Debt</Link></li>
              <li><Link href="/reviews/curadebt" className="text-sm text-gray-400 hover:text-white transition-colors">CuraDebt</Link></li>
            </ul>
          </div>

          {/* Trust */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-gray-300">Trust & Safety</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <svg className="w-4 h-4 text-green-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                SSL Encrypted
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <svg className="w-4 h-4 text-green-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Independently Reviewed
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <svg className="w-4 h-4 text-green-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                Data Protected
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-gray-700 mt-10 pt-8">
          <p className="text-xs text-gray-500 leading-relaxed mb-4">
            <strong className="text-gray-400">Important Disclaimer:</strong> ReliefCheck is not a lender, financial advisor, or debt relief provider. We connect consumers with qualified debt relief companies. The information provided on this website is for educational and informational purposes only and should not be construed as financial advice. Individual results may vary. Debt relief programs may affect your credit score and may result in tax consequences. We encourage you to consult with a qualified financial professional before making any financial decisions. By using our service, you acknowledge that you have read and agree to our terms of service.
          </p>
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} ReliefCheck. All rights reserved. | Editorial Policy: Our reviews are independent and not influenced by compensation.
          </p>
        </div>
      </div>
    </footer>
  );
}
