import DebtCalculator from "@/components/DebtCalculator";
import TrustBadges from "@/components/TrustBadges";
import Link from "next/link";

const FAQS = [
  {
    q: "How does debt settlement work?",
    a: "Debt settlement involves negotiating with your creditors to accept a reduced amount as payment in full. A professional debt relief company will negotiate on your behalf, often reducing your total debt by 40-60%. You make monthly deposits into a dedicated savings account, and the company uses those funds to settle your debts one by one.",
  },
  {
    q: "Will debt relief hurt my credit score?",
    a: "Debt settlement can temporarily lower your credit score, typically by 50-100 points during the program. However, many clients see their scores recover and even improve after completing the program, as their debt-to-income ratio improves significantly. If you're already behind on payments, the impact may be minimal.",
  },
  {
    q: "How much does debt relief cost?",
    a: "Most reputable debt relief companies charge 15-25% of the enrolled debt amount, but only after successfully settling a debt. By law, they cannot charge upfront fees before settling at least one debt. The savings from reduced debt balances typically far exceed the fees charged.",
  },
  {
    q: "How long does the debt relief process take?",
    a: "Most debt settlement programs take 24-48 months to complete, depending on the amount of debt enrolled and your ability to make monthly deposits. Some debts may be settled within the first few months, while others may take longer to negotiate.",
  },
  {
    q: "What types of debt qualify for debt relief?",
    a: "Unsecured debts typically qualify, including credit card debt, medical bills, personal loans, private student loans, and some business debts. Secured debts (mortgages, auto loans) and federal student loans generally do not qualify for debt settlement programs.",
  },
  {
    q: "Is ReliefCheck a debt relief company?",
    a: "No, ReliefCheck is not a lender or debt relief provider. We are an independent comparison platform that provides free educational resources and tools to help consumers make informed decisions about debt relief. We may connect you with qualified debt relief companies that can help with your specific situation.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-navy to-navy-light text-white py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 text-green-accent text-sm font-medium px-4 py-2 rounded-full mb-6">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Free • No obligation • Takes 60 seconds
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6" style={{ fontFamily: "var(--font-serif)" }}>
                See How Much You Could{" "}
                <span className="text-green-accent">Save</span> on Your Debt
              </h1>
              <p className="text-lg text-gray-300 leading-relaxed mb-8 max-w-lg">
                Americans owe over $1 trillion in credit card debt. Our free calculator shows your estimated savings in seconds — no commitment required.
              </p>
              <div className="flex flex-wrap items-center gap-4 mb-8">
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <svg className="w-4 h-4 text-green-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  No credit check
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <svg className="w-4 h-4 text-green-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  100% free
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <svg className="w-4 h-4 text-green-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Trusted by 100K+
                </div>
              </div>
            </div>
            <div>
              <DebtCalculator />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="border-b border-gray-border py-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <TrustBadges />
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4" style={{ fontFamily: "var(--font-serif)" }}>
              How Debt Relief Works
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              A simple, proven process that has helped hundreds of thousands of Americans reduce their debt
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Check Your Savings",
                desc: "Use our free calculator to see your estimated savings based on your debt amount and type. Takes less than 60 seconds.",
                icon: (
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V13.5zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V18zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V13.5zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V18zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V18zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z" />
                  </svg>
                ),
              },
              {
                step: "2",
                title: "Get Matched",
                desc: "We connect you with a certified debt specialist who reviews your full financial picture and creates a personalized plan.",
                icon: (
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                  </svg>
                ),
              },
              {
                step: "3",
                title: "Resolve Your Debt",
                desc: "Your debt specialist negotiates with creditors to reduce what you owe. Most clients save 40-60% on their enrolled debt.",
                icon: (
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                  </svg>
                ),
              },
            ].map((item) => (
              <div key={item.step} className="text-center group">
                <div className="w-16 h-16 bg-green-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-5 text-green-accent group-hover:bg-green-accent group-hover:text-white transition-all duration-300">
                  {item.icon}
                </div>
                <div className="text-xs font-bold text-green-accent uppercase tracking-wider mb-2">
                  Step {item.step}
                </div>
                <h3 className="text-xl font-bold text-navy mb-3">{item.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-navy py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "$4.7B+", label: "Debt Resolved" },
              { value: "100K+", label: "Clients Helped" },
              { value: "40-60%", label: "Average Savings" },
              { value: "4.8/5", label: "Client Rating" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl sm:text-4xl font-bold text-green-accent mb-1">{stat.value}</p>
                <p className="text-sm text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 sm:py-24 bg-gray-warm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4" style={{ fontFamily: "var(--font-serif)" }}>
              Real People, Real Results
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Thousands of Americans have used our tools to find the right debt relief solution
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Sarah M.",
                location: "Tampa, FL",
                quote: "I was drowning in $42,000 of credit card debt. The calculator showed me I could save over $20,000. Within 18 months, I was debt-free. This tool changed my life.",
                saved: "$21,400",
                debt: "$42,000",
              },
              {
                name: "Marcus J.",
                location: "Atlanta, GA",
                quote: "I was skeptical at first, but the process was straightforward. The debt specialist I was connected with was patient and professional. I settled $28K in debt for less than half.",
                saved: "$15,200",
                debt: "$28,000",
              },
              {
                name: "Linda K.",
                location: "Phoenix, AZ",
                quote: "After my husband's medical bills piled up, I didn't know where to turn. ReliefCheck connected me with a company that negotiated my $35K debt down significantly.",
                saved: "$18,900",
                debt: "$35,000",
              },
            ].map((t) => (
              <div key={t.name} className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-border">
                <div className="flex items-center gap-0.5 mb-4">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <svg key={s} className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-text-secondary leading-relaxed mb-6 italic">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                  <div>
                    <p className="font-semibold text-sm text-navy">{t.name}</p>
                    <p className="text-xs text-text-light">{t.location}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-text-light">Saved</p>
                    <p className="font-bold text-green-accent">{t.saved}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4" style={{ fontFamily: "var(--font-serif)" }}>
              Frequently Asked Questions
            </h2>
            <p className="text-text-secondary">
              Everything you need to know about debt relief
            </p>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, i) => (
              <details key={i} className="group bg-white border border-gray-border rounded-xl overflow-hidden">
                <summary className="flex items-center justify-between cursor-pointer p-5 sm:p-6 text-left">
                  <h3 className="font-semibold text-navy pr-4">{faq.q}</h3>
                  <svg className="w-5 h-5 text-text-light flex-shrink-0 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-5 sm:px-6 pb-5 sm:pb-6">
                  <p className="text-sm text-text-secondary leading-relaxed">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>

          {/* FAQ Schema */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: FAQS.map((faq) => ({
                  "@type": "Question",
                  name: faq.q,
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: faq.a,
                  },
                })),
              }),
            }}
          />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-serif)" }}>
            Ready to Take Control of Your Debt?
          </h2>
          <p className="text-gray-400 mb-8 max-w-lg mx-auto">
            Join over 100,000 Americans who have used our free tools to find the right debt relief solution.
          </p>
          <Link
            href="/calculator"
            className="inline-flex items-center gap-2 bg-green-accent hover:bg-green-accent-hover text-white font-semibold px-8 py-4 rounded-xl text-lg transition-colors"
          >
            Check Your Savings Now
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
          <p className="text-xs text-gray-500 mt-4">Free • No credit check • Takes 60 seconds</p>
        </div>
      </section>
    </>
  );
}
