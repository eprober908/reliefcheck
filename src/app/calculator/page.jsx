import DebtCalculator from "@/components/DebtCalculator";
import TrustBadges from "@/components/TrustBadges";

export const metadata = {
  title: "Free Debt Relief Calculator — See Your Estimated Savings",
  description:
    "Calculate how much you could save on your debt in 60 seconds. Free, no-obligation debt relief calculator with instant results. No credit check required.",
  openGraph: {
    title: "Free Debt Relief Calculator — See Your Estimated Savings",
    description: "Calculate how much you could save on your debt in 60 seconds.",
  },
};

export default function CalculatorPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-navy to-navy-light py-12 sm:py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8">
            <h1
              className="text-3xl sm:text-4xl font-bold text-white mb-3"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Free Debt Savings Calculator
            </h1>
            <p className="text-gray-400">
              See how much you could save — it only takes 60 seconds
            </p>
          </div>
          <DebtCalculator standalone />
          <div className="mt-6">
            <TrustBadges />
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-6" style={{ fontFamily: "var(--font-serif)" }}>
            Understanding Your Debt Relief Options
          </h2>

          <div className="prose prose-sm max-w-none text-text-secondary leading-relaxed space-y-6">
            <p>
              If you&apos;re struggling with debt, you&apos;re not alone. Millions of Americans carry significant
              unsecured debt, and finding the right solution can feel overwhelming. Our calculator provides a
              starting point to understand your potential savings through debt settlement.
            </p>

            <h3 className="text-lg font-bold text-navy !mt-8">How Is the Estimate Calculated?</h3>
            <p>
              Our calculator estimates your potential savings based on industry averages for debt settlement
              programs. Most reputable debt settlement companies achieve settlements of 40-60% of the original
              debt balance. Your actual results may vary based on your specific creditors, account status, and
              the debt relief company you work with.
            </p>

            <h3 className="text-lg font-bold text-navy !mt-8">Important Considerations</h3>
            <ul className="space-y-2">
              <li>Debt settlement may temporarily impact your credit score</li>
              <li>Forgiven debt may be considered taxable income by the IRS</li>
              <li>Not all creditors will agree to negotiate</li>
              <li>The process typically takes 24-48 months</li>
              <li>You should always compare multiple options before deciding</li>
            </ul>

            <h3 className="text-lg font-bold text-navy !mt-8">Alternatives to Consider</h3>
            <p>
              Debt settlement is just one option. Depending on your situation, you might also consider debt
              consolidation loans, balance transfer credit cards, credit counseling, debt management plans, or
              in some cases, bankruptcy protection. A qualified financial professional can help you evaluate all
              your options.
            </p>
          </div>

          <div className="mt-10 bg-navy/5 rounded-xl p-6 border border-gray-border">
            <p className="text-xs text-text-light leading-relaxed">
              <strong className="text-text-secondary">Disclaimer:</strong> The savings estimate provided by this
              calculator is for informational purposes only and does not constitute financial advice. Actual savings
              may vary significantly based on individual circumstances. ReliefCheck is not a debt relief provider.
              We recommend consulting with a qualified financial advisor before making any financial decisions.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
