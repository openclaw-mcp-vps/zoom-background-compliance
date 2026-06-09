export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          HR &amp; Compliance
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
          Ensure Video Call Backgrounds<br />
          <span className="text-[#58a6ff]">Meet Company Policy</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          AI-powered scanning of Zoom virtual backgrounds in real-time. Automatically detect inappropriate content, flag policy violations, and suggest compliant alternatives — all from one HR dashboard.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start for $8/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">No setup fees. Cancel anytime.</p>

        {/* Feature pills */}
        <div className="flex flex-wrap justify-center gap-3 mt-10">
          {["Real-time AI scanning", "Policy violation alerts", "Compliant background library", "HR dashboard", "Zoom API integration"].map((f) => (
            <span key={f} className="bg-[#161b22] border border-[#30363d] text-[#c9d1d9] text-sm px-4 py-1.5 rounded-full">{f}</span>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-8 text-center shadow-xl">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</p>
          <div className="text-5xl font-extrabold text-white mb-1">$8<span className="text-xl font-normal text-[#8b949e]">/mo</span></div>
          <p className="text-[#6e7681] text-sm mb-6">Per HR workspace</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited background scans",
              "Real-time violation alerts",
              "Custom policy rule builder",
              "Compliant background suggestions",
              "Audit log & compliance reports",
              "Zoom OAuth integration"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-center"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">How does the background scanning work?</h3>
            <p className="text-[#8b949e] text-sm">We connect to your Zoom account via OAuth and use AI image analysis to evaluate virtual backgrounds against your company&apos;s policy rules in real-time during meetings.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">What counts as a policy violation?</h3>
            <p className="text-[#8b949e] text-sm">You define the rules — offensive imagery, competitor branding, non-professional settings, or any custom criteria. The AI flags anything that matches your configured policies.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Is employee privacy protected?</h3>
            <p className="text-[#8b949e] text-sm">Only virtual background images are analyzed — never video feeds or personal data. All scans are logged in your audit trail for compliance transparency.</p>
          </div>
        </div>
      </section>

      <footer className="text-center text-[#6e7681] text-xs pb-8">
        &copy; {new Date().getFullYear()} Zoom Background Compliance. All rights reserved.
      </footer>
    </main>
  );
}
