"use client";
import { useState, useCallback } from "react";
import { US_STATES } from "@/data/companies";

const DEBT_TYPES = [
  { id: "credit-cards", label: "Credit Card Debt", icon: "💳" },
  { id: "medical", label: "Medical Bills", icon: "🏥" },
  { id: "personal-loans", label: "Personal Loans", icon: "📋" },
  { id: "student-loans", label: "Student Loans", icon: "🎓" },
  { id: "other", label: "Other Debt", icon: "📄" },
];

const BEHIND_OPTIONS = [
  { value: "yes", label: "Yes, I'm behind", desc: "I've missed payments" },
  { value: "no", label: "No, I'm current", desc: "All payments are on time" },
  { value: "sometimes", label: "Sometimes", desc: "I've missed a few" },
];

function formatMoney(amount) {
  if (amount >= 100000) return "$100,000+";
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(amount);
}

function StepIndicator({ current, total }) {
  return (
    <div className="flex items-center justify-center gap-2 mb-8">
      {Array.from({ length: total }, (_, i) => (
        <div key={i} className="flex items-center">
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300 ${
              i + 1 === current
                ? "bg-green-accent text-white scale-110"
                : i + 1 < current
                ? "bg-green-accent/20 text-green-accent"
                : "bg-gray-100 text-text-light"
            }`}
          >
            {i + 1 < current ? (
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            ) : (
              i + 1
            )}
          </div>
          {i < total - 1 && (
            <div className={`w-8 sm:w-12 h-0.5 mx-1 transition-colors duration-300 ${
              i + 1 < current ? "bg-green-accent/30" : "bg-gray-200"
            }`} />
          )}
        </div>
      ))}
    </div>
  );
}

export default function DebtCalculator({ standalone = false }) {
  const [step, setStep] = useState(1);
  const [debtAmount, setDebtAmount] = useState(25000);
  const [debtTypes, setDebtTypes] = useState([]);
  const [behindOnPayments, setBehindOnPayments] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    state: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState(null);
  const [errors, setErrors] = useState({});

  const toggleDebtType = useCallback((id) => {
    setDebtTypes((prev) =>
      prev.includes(id) ? prev.filter((t) => t !== id) : [...prev, id]
    );
  }, []);

  const validateStep4 = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Valid email is required";
    if (!formData.phone.trim() || formData.phone.replace(/\D/g, "").length < 10) newErrors.phone = "Valid phone number is required";
    if (!formData.state) newErrors.state = "Please select your state";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateStep4()) return;
    setSubmitting(true);

    try {
      const payload = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        state: formData.state,
        debtAmount,
        debtTypes,
        behindOnPayments,
      };

      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (data.success) {
        setResult(data);
        setStep(5);
      }
    } catch (err) {
      console.error("Submit error:", err);
    } finally {
      setSubmitting(false);
    }
  };

  const canProceed = () => {
    switch (step) {
      case 1: return debtAmount >= 5000;
      case 2: return debtTypes.length > 0;
      case 3: return behindOnPayments !== "";
      default: return true;
    }
  };

  return (
    <div className={`${standalone ? "" : ""}`}>
      <div className="bg-white rounded-2xl shadow-lg border border-gray-border overflow-hidden">
        {/* Header */}
        <div className="bg-navy px-6 py-5 sm:px-8">
          <h2 className="text-white text-xl sm:text-2xl font-bold text-center" style={{ fontFamily: "var(--font-serif)" }}>
            {step < 5 ? "Free Debt Savings Calculator" : "Your Estimated Savings"}
          </h2>
          <p className="text-gray-400 text-sm text-center mt-1">
            {step < 5 ? "See how much you could save in just 60 seconds" : "Based on your financial profile"}
          </p>
        </div>

        <div className="px-6 py-8 sm:px-8">
          {step < 5 && <StepIndicator current={step} total={4} />}

          {/* Step 1: Debt Amount */}
          {step === 1 && (
            <div className="animate-fade-in-up">
              <h3 className="text-lg font-semibold text-center mb-2">How much total debt do you have?</h3>
              <p className="text-text-secondary text-sm text-center mb-8">Include credit cards, medical bills, and personal loans</p>

              <div className="text-center mb-8">
                <span className="text-4xl sm:text-5xl font-bold text-green-accent">{formatMoney(debtAmount)}</span>
              </div>

              <div className="px-2 mb-8">
                <input
                  type="range"
                  min={5000}
                  max={100000}
                  step={1000}
                  value={debtAmount}
                  onChange={(e) => setDebtAmount(Number(e.target.value))}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-text-light mt-2">
                  <span>$5,000</span>
                  <span>$100,000+</span>
                </div>
              </div>

              <div className="bg-green-light/50 rounded-xl p-4 flex items-start gap-3">
                <svg className="w-5 h-5 text-green-accent flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-sm text-text-secondary">
                  Most debt relief programs work best for debts of <strong>$10,000 or more</strong>. Even if you&apos;re not sure of the exact amount, an estimate works fine.
                </p>
              </div>
            </div>
          )}

          {/* Step 2: Debt Types */}
          {step === 2 && (
            <div className="animate-fade-in-up">
              <h3 className="text-lg font-semibold text-center mb-2">What type of debt do you have?</h3>
              <p className="text-text-secondary text-sm text-center mb-8">Select all that apply</p>

              <div className="space-y-3 max-w-md mx-auto">
                {DEBT_TYPES.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => toggleDebtType(type.id)}
                    className={`custom-checkbox w-full text-left ${debtTypes.includes(type.id) ? "selected" : ""}`}
                  >
                    <span className="text-xl">{type.icon}</span>
                    <span className="font-medium">{type.label}</span>
                    {debtTypes.includes(type.id) && (
                      <svg className="w-5 h-5 text-green-accent ml-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 3: Behind on Payments */}
          {step === 3 && (
            <div className="animate-fade-in-up">
              <h3 className="text-lg font-semibold text-center mb-2">Are you behind on payments?</h3>
              <p className="text-text-secondary text-sm text-center mb-8">This helps us find the right solution for you</p>

              <div className="space-y-3 max-w-md mx-auto">
                {BEHIND_OPTIONS.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => setBehindOnPayments(opt.value)}
                    className={`custom-checkbox w-full text-left ${behindOnPayments === opt.value ? "selected" : ""}`}
                  >
                    <div>
                      <div className="font-medium">{opt.label}</div>
                      <div className="text-sm text-text-secondary">{opt.desc}</div>
                    </div>
                    {behindOnPayments === opt.value && (
                      <svg className="w-5 h-5 text-green-accent ml-auto flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 4: Contact Info */}
          {step === 4 && (
            <div className="animate-fade-in-up">
              <h3 className="text-lg font-semibold text-center mb-2">Almost done! Where should we send your results?</h3>
              <p className="text-text-secondary text-sm text-center mb-8">Your information is secure and never shared without consent</p>

              <div className="max-w-md mx-auto space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1.5">First Name</label>
                    <input
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className={`w-full px-4 py-3 border-2 rounded-xl text-sm focus:outline-none focus:border-green-accent transition-colors ${errors.firstName ? "border-red-400" : "border-gray-border"}`}
                      placeholder="John"
                    />
                    {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Last Name</label>
                    <input
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className={`w-full px-4 py-3 border-2 rounded-xl text-sm focus:outline-none focus:border-green-accent transition-colors ${errors.lastName ? "border-red-400" : "border-gray-border"}`}
                      placeholder="Smith"
                    />
                    {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1.5">Email Address</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full px-4 py-3 border-2 rounded-xl text-sm focus:outline-none focus:border-green-accent transition-colors ${errors.email ? "border-red-400" : "border-gray-border"}`}
                    placeholder="john@example.com"
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1.5">Phone Number</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className={`w-full px-4 py-3 border-2 rounded-xl text-sm focus:outline-none focus:border-green-accent transition-colors ${errors.phone ? "border-red-400" : "border-gray-border"}`}
                    placeholder="(555) 123-4567"
                  />
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1.5">State</label>
                  <select
                    value={formData.state}
                    onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                    className={`w-full px-4 py-3 border-2 rounded-xl text-sm focus:outline-none focus:border-green-accent transition-colors bg-white ${errors.state ? "border-red-400" : "border-gray-border"}`}
                  >
                    <option value="">Select your state</option>
                    {US_STATES.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                  {errors.state && <p className="text-red-500 text-xs mt-1">{errors.state}</p>}
                </div>

                <div className="flex items-start gap-2 text-xs text-text-light pt-2">
                  <svg className="w-4 h-4 text-green-accent flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  <span>Your data is encrypted and protected. We will never sell your information to third parties.</span>
                </div>
              </div>
            </div>
          )}

          {/* Step 5: Results */}
          {step === 5 && result && (
            <div className="animate-fade-in-up text-center">
              <div className="w-16 h-16 bg-green-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-green-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>

              <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: "var(--font-serif)" }}>Great News, {formData.firstName}!</h3>
              <p className="text-text-secondary mb-8">Based on your debt profile, here&apos;s what you could save:</p>

              <div className="bg-green-light/50 rounded-2xl p-8 mb-8">
                <p className="text-sm text-text-secondary mb-2">Your Estimated Savings</p>
                <p className="text-5xl sm:text-6xl font-bold text-green-accent mb-2">
                  {formatMoney(result.estimatedSavings)}
                </p>
                <p className="text-sm text-text-secondary">
                  on your {formatMoney(debtAmount)} in debt
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8 max-w-sm mx-auto">
                <div className="bg-gray-50 rounded-xl p-4">
                  <p className="text-xs text-text-secondary mb-1">Current Debt</p>
                  <p className="text-lg font-bold text-navy">{formatMoney(debtAmount)}</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-4">
                  <p className="text-xs text-text-secondary mb-1">Could Pay</p>
                  <p className="text-lg font-bold text-green-accent">{formatMoney(debtAmount - result.estimatedSavings)}</p>
                </div>
              </div>

              <div className="bg-navy/5 rounded-xl p-5 mb-6 text-left">
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                  What Happens Next
                </h4>
                <ol className="space-y-2 text-sm text-text-secondary">
                  <li className="flex gap-2"><span className="font-bold text-navy">1.</span> A certified debt specialist will contact you within 24 hours</li>
                  <li className="flex gap-2"><span className="font-bold text-navy">2.</span> They&apos;ll review your complete financial situation for free</li>
                  <li className="flex gap-2"><span className="font-bold text-navy">3.</span> You&apos;ll receive a personalized debt relief plan with no obligation</li>
                </ol>
              </div>

              <a
                href="/best-debt-relief-companies"
                className="inline-flex items-center gap-2 text-green-accent hover:text-green-accent-hover font-medium text-sm transition-colors"
              >
                Compare Top Debt Relief Companies
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          )}

          {/* Navigation Buttons */}
          {step < 5 && (
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-100">
              {step > 1 ? (
                <button
                  onClick={() => setStep(step - 1)}
                  className="flex items-center gap-1 text-sm text-text-secondary hover:text-navy transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                  Back
                </button>
              ) : (
                <div />
              )}

              {step < 4 ? (
                <button
                  onClick={() => canProceed() && setStep(step + 1)}
                  disabled={!canProceed()}
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all ${
                    canProceed()
                      ? "bg-green-accent hover:bg-green-accent-hover text-white"
                      : "bg-gray-100 text-text-light cursor-not-allowed"
                  }`}
                >
                  Continue
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  disabled={submitting}
                  className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold bg-green-accent hover:bg-green-accent-hover text-white transition-all animate-pulse-green disabled:opacity-50"
                >
                  {submitting ? (
                    <>
                      <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Calculating...
                    </>
                  ) : (
                    <>
                      See My Savings
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </>
                  )}
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
