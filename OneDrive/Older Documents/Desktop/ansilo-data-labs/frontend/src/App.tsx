import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ShieldCheck, Zap, Globe, Layers,
  Check, ChevronDown, Menu, X, Quote
} from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [sampleEmail, setSampleEmail] = useState('');

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-primary-500 selection:text-white">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 bg-white z-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center gap-2">
              <img src="/logo.png" alt="Ansilo Data Labs Logo" className="h-[240px] w-auto max-w-none object-contain object-left -ml-12 lg:-ml-[95px] mix-blend-multiply" />
            </div>
            <div className="hidden md:flex items-center gap-3">
              <a href="#methodology" className="text-[15px] font-semibold text-slate-700 hover:text-primary-700 hover:bg-primary-50 border border-slate-200 px-5 py-3 rounded-full transition-all duration-300 hover:shadow-sm hover:-translate-y-0.5 active:scale-95">Methodology</a>
              <a href="#featured-report" className="text-[15px] font-semibold text-slate-700 hover:text-primary-700 hover:bg-primary-50 border border-slate-200 px-5 py-3 rounded-full transition-all duration-300 hover:shadow-sm hover:-translate-y-0.5 active:scale-95">Featured Report</a>
              <a href="#pricing" className="text-[15px] font-semibold text-slate-700 hover:text-primary-700 hover:bg-primary-50 border border-slate-200 px-5 py-3 rounded-full transition-all duration-300 hover:shadow-sm hover:-translate-y-0.5 active:scale-95">Pricing</a>
            </div>
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-600">
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed top-[77px] left-0 right-0 bg-white z-50 border-b border-slate-200 md:hidden"
          >
            <div className="px-4 py-6 space-y-4">
              <a href="#methodology" onClick={() => setIsMenuOpen(false)} className="block text-base font-semibold text-slate-700 hover:text-primary-700 py-3 border-b border-slate-100">Methodology</a>
              <a href="#featured-report" onClick={() => setIsMenuOpen(false)} className="block text-base font-semibold text-slate-700 hover:text-primary-700 py-3 border-b border-slate-100">Featured Report</a>
              <a href="#pricing" onClick={() => setIsMenuOpen(false)} className="block text-base font-semibold text-slate-700 hover:text-primary-700 py-3">Pricing</a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="pt-[300px] pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        <motion.div
          className="flex-1 text-center lg:text-left"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-sm font-semibold text-primary-600 tracking-wider uppercase mb-4">Ansilo Data Labs</p>
          <h1 className="text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
            When the clinical narrative outruns the evidence.
          </h1>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0">
            We investigate pharmaceutical cases where the public story becomes smoother, stronger, and more settled than the regulatory record and subsequent data can justify. Each report is source-grounded, balanced, and built for decision makers who need to see past consensus confidence.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <a href="#sample-request" className="bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 px-8 py-3.5 rounded-full text-base font-medium transition-all shadow-sm w-full sm:w-auto hover:-translate-y-0.5 active:scale-[0.98]">
              Request Sample Report
            </a>
          </div>
        </motion.div>
        <motion.div
          className="flex-1 w-full"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative w-full max-w-[500px] lg:max-w-[700px] mx-auto overflow-hidden rounded-2xl">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto object-cover"
              src="/globe-rotation.mp4"
            />
          </div>
        </motion.div>
      </section>



      {/* What We Do — Bento-style feature grid */}
      <section id="methodology" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold text-primary-600 tracking-wider uppercase mb-3">Our Method</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Built for scrutiny, not comfort.</h2>
          <p className="text-lg text-slate-600">
            Every report follows a structured analytical workflow — identifying uneasy approvals, mapping contradictions, preserving both the strongest defense and the strongest critique.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Wide card — Regulatory Discomfort Analysis */}
          <div className="bg-white border border-slate-300 rounded-2xl p-8 hover:shadow-xl hover:shadow-slate-200/50 transition-all hover:-translate-y-1 active:scale-[0.98]">
            <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center mb-6">
              <ShieldCheck className="w-6 h-6 text-primary-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Regulatory Discomfort Analysis</h3>
            <p className="text-slate-600 leading-relaxed">
              We extract vote closeness, advisory committee ambivalence, narrow or conditional approvals for drugs that later became commercially important or narratively dominant.
            </p>
          </div>

          {/* Wide card — FDA / EMA Divergence */}
          <div className="bg-white border border-slate-300 rounded-2xl p-8 hover:shadow-xl hover:shadow-slate-200/50 transition-all hover:-translate-y-1 active:scale-[0.98]">
            <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center mb-6">
              <Globe className="w-6 h-6 text-primary-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">FDA vs EMA Divergence</h3>
            <p className="text-slate-600 leading-relaxed">
              When regulators reach materially different conclusions, that gap is itself evidence. We document the precise reasons and the implications for independent judgment.
            </p>
          </div>

          {/* Row of 2 smaller cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 col-span-2 gap-8">
            {/* Critique & Defense Matrix */}
            <div className="bg-white border border-slate-300 rounded-2xl p-8 hover:shadow-xl hover:shadow-slate-200/50 transition-all hover:-translate-y-1 active:scale-[0.98]">
              <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center mb-6">
                <Layers className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Claim / Defense / Critique Matrix</h3>
              <p className="text-slate-600 leading-relaxed">
                We preserve both the strongest defense and the strongest critique — separating direct facts from synthesis from interpretation.
              </p>
            </div>

            {/* Authorship & Conflict Audit */}
            <div className="bg-white border border-slate-300 rounded-2xl p-8 hover:shadow-xl hover:shadow-slate-200/50 transition-all hover:-translate-y-1 active:scale-[0.98]">
              <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Authorship & Conflict Audit</h3>
              <p className="text-slate-600 leading-relaxed">
                A systematic review of sponsor-linked authors, funding disclosures, and the degree of independence within the publication ecosystem.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Report Spotlight */}
      <section id="featured-report" className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary-500/20 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            {/* Left — text */}
            <div className="lg:col-span-3">
              <a href="#featured-report" className="text-sm font-semibold text-primary-400 tracking-wider uppercase mb-4 block">Featured Report</a>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">The Empagliflozin Report</h2>
              <p className="text-lg text-slate-300 mb-8">
                A 38% reduction in cardiovascular mortality. A standing ovation at a congress in Stockholm. And a 12-11 vote at the FDA advisory committee. The headline looked decisive. The regulatory record told a different story.
              </p>
              <div className="space-y-4 mb-10">
                {[
                  "The survival curves separated within weeks — biologically implausible for atherosclerosis.",
                  "Up to 40% of cardiovascular deaths were non-assessable. Removing them eliminated the statistical signal.",
                  "61% of the trial population in Europe and North America showed no mortality benefit.",
                  "The 10mg and 25mg doses produced near-identical outcome curves — no dose-response.",
                  "Post-trial follow-ups failed to confirm the headline mortality claim.",
                ].map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-xs text-primary-400 font-mono">{String(idx + 1).padStart(2, '0')}</span>
                    </div>
                    <p className="text-slate-400 leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — CTA card */}
            <div className="lg:col-span-2">
              <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
                <p className="text-sm font-mono text-primary-400 mb-2">NARRATIVE FRICTION REPORT</p>
                <h3 className="text-xl font-bold mb-3">Empagliflozin: Cardiovascular Mortality Claim</h3>
                <p className="text-slate-400 text-sm mb-6">
                  Full report including regulatory dossier, follow-up trial analysis, authorship audit, beneficiary scorecard, and podcast outline.
                </p>
                <a href="#sample-request" className="w-full py-3.5 px-4 bg-primary-600 hover:bg-primary-500 text-white font-semibold rounded-xl transition-all shadow-lg shadow-primary-600/30 block text-center hover:-translate-y-0.5 active:scale-[0.98] mb-3">
                  Request Sample
                </a>
                <a href="#pricing" className="w-full py-3 px-4 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-xl transition-all block text-center">
                  Purchase Full Report
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How the Research Process Works */}
      <section id="how-it-works" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold text-primary-600 tracking-wider uppercase mb-3">Research Workflow</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">From candidate case to publication-ready report.</h2>
          <p className="text-lg text-slate-600">
            Every report follows a structured 8-phase process designed for accuracy, balance, and narrative clarity.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              step: "01",
              title: "Candidate Discovery",
              desc: "Harvest candidates from FDA advisory committee records, filtering for close votes, uneasy approvals, or conditional decisions."
            },
            {
              step: "02",
              title: "Commercial Screening",
              desc: "Verify whether each candidate later became commercially significant or narratively dominant in clinical practice."
            },
            {
              step: "03-04",
              title: "Regulatory Deep-Dive",
              desc: "Map FDA ambivalence, compare FDA with EMA / CHMP conclusions, and extract the precise regulatory tensions."
            },
            {
              step: "05-07",
              title: "Narrative Synthesis",
              desc: "Scan critique and defense literature, map conflict-of-interest patterns, and synthesize a balanced final report."
            }
          ].map((item, idx) => (
            <div key={idx} className="relative flex flex-col text-center md:text-left">
              <div className="w-12 h-12 rounded-full bg-slate-100 border-2 border-slate-200 flex items-center justify-center text-primary-600 font-mono font-bold text-sm mb-4 mx-auto md:mx-0">
                {item.step}
              </div>
              <h3 className="text-lg font-bold mb-2">{item.title}</h3>
              <p className="text-slate-500 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Stakeholder Targeting */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-sm font-semibold text-primary-600 tracking-wider uppercase mb-3">Who We Serve</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Built for the people who act on pharmaceutical intelligence.</h2>
            <p className="text-lg text-slate-600">
              Our reports are designed for organizations that need to evaluate the evidentiary quality behind dominant clinical narratives.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Regulatory Affairs", desc: "Monitor approval conditions, conditional decisions, and post-marketing obligations that affect your product or competitor pipeline." },
              { title: "Pharmacovigilance Teams", desc: "Identify subtle safety signals, unresolved anomalies, and post-trial patterns that may not reach standard surveillance channels." },
              { title: "Market Access & Payers", desc: "Evaluate the strength of efficacy claims underpinning guideline positions, reimbursement decisions, and formulary coverage." },
              { title: "Clinical Development Teams", desc: "Understand the long-term cost of leaving mechanistic or evidentiary questions partially unresolved — and plan your confirmatory architecture accordingly." },
              { title: "Health & Technology Assessment Bodies", desc: "Access structured, source-grounded critique and defense for independent evaluation of therapeutic narratives." },
              { title: "Ethics & Compliance", desc: "Examine the institutional conditions that allow provisional claims to harden into standards of care." },
            ].map((item, idx) => (
              <div key={idx} className="bg-white border border-slate-300 rounded-2xl p-8 hover:shadow-xl hover:shadow-slate-200/50 transition-all hover:-translate-y-1 active:scale-[0.98]">
                <h3 className="text-lg font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Report Request Form */}
      <section id="sample-request" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-sm font-semibold text-primary-600 tracking-wider uppercase mb-3">Preview the Work</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Request a sample report.</h2>
          <p className="text-lg text-slate-600 mb-8">
            Review a representative sample of our narrative friction analysis to evaluate our method before purchasing.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto" onSubmit={(e) => { e.preventDefault(); }}>
            <input
              type="email"
              placeholder="Your work email"
              value={sampleEmail}
              onChange={(e) => setSampleEmail(e.target.value)}
              required
              className="flex-1 px-5 py-3.5 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500/40 focus:border-primary-500 text-base placeholder:text-slate-400"
            />
            <button type="submit" className="bg-primary-600 hover:bg-primary-500 text-white font-semibold px-8 py-3.5 rounded-xl transition-all hover:-translate-y-0.5 active:scale-[0.98] whitespace-nowrap">
              Request Sample
            </button>
          </form>
          <p className="text-sm text-slate-500 mt-4">
            No commitment. No spam. Samples are delivered via email within 24 hours.
          </p>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Simple, transparent pricing</h2>
            <p className="text-lg text-slate-600">
              Purchase an individual report or unlock access for your entire division.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Tier 1 */}
            <div className="bg-white rounded-3xl p-8 border border-slate-300 shadow-sm flex flex-col">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Single User Licence</h3>
              <p className="text-slate-500 text-sm mb-6">For targeted, specific market needs.</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-slate-900">$4,699</span>
                <span className="text-slate-500">/report</span>
              </div>
              <button className="w-full py-3 px-4 bg-slate-100 hover:bg-slate-200 text-slate-900 font-semibold rounded-xl transition-colors mb-8">
                Browse Catalog
              </button>
              <div className="space-y-4 flex-1">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary-500 shrink-0" />
                  <span className="text-slate-600">Instant PDF Download</span>
                </div>
              </div>
            </div>

            {/* Tier 2 (Highlighted) */}
            <div className="bg-slate-900 rounded-3xl p-8 border-2 border-primary-500 shadow-2xl flex flex-col relative transform lg:-translate-y-4">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary-500 text-white px-4 py-1 rounded-full text-sm font-bold tracking-wide uppercase">
                Most Popular
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Corporate Departmental Licence</h3>
              <p className="text-slate-400 text-sm mb-6">Comprehensive access for your entire division.</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">$9,699</span>
                <span className="text-slate-400">/licence</span>
              </div>
              <button className="w-full py-3 px-4 bg-primary-600 hover:bg-primary-500 text-white font-semibold rounded-xl transition-colors shadow-lg shadow-primary-600/30 mb-8">
                Contact Sales
              </button>
              <div className="space-y-4 flex-1">
                {[
                  "Ideal for Regulatory, Pharmacovigilance, Market Access & Marketing Teams",
                  "Priority Early Access to New Releases",
                  "Multi-User License (Up to 5 Named Users)",
                  "Custom Report Requests"
                ].map((feat, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary-400 shrink-0" />
                    <span className="text-slate-300">{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
        </div>
        <div className="space-y-4">
          {[
            {
              q: "What exactly is a 'Narrative Friction' report?",
              a: "It is a source-grounded investigation of a pharmaceutical case where the public-facing story around a drug became more confident, coherent, or settled than the underlying regulatory record and subsequent data appeared to justify. Each report examines this gap systematically — using advisory committee records, regulator divergence, critique and defense literature, and conflict-of-interest mapping."
            },
            {
              q: "Are these reports accusatory or investigative?",
              a: "Neither. They are evidence-led analytical reviews. We do not assume bad faith or fraud. We examine where incomplete evidence, institutional incentives, and repeated interpretation may have hardened uncertainty into apparent consensus. Every report presents both the strongest defense and the strongest critique."
            },
            {
              q: "What formats are reports delivered in?",
              a: "Reports are delivered as high-quality PDF documents. Corporate licences also include access to raw data packets and source documents used in compilation."
            },
            {
              q: "Who are these reports useful for?",
              a: "Regulatory affairs teams, pharmacovigilance teams, market access and payer organizations, clinical development teams, health technology assessment bodies, and independent researchers who need to evaluate the evidentiary quality of dominant therapeutic narratives."
            },
            {
              q: "Can I request a sample before purchasing?",
              a: "Yes. Use the form on this page to request a representative sample. Samples are delivered via email within 24 hours and are watermarked for review purposes."
            }
          ].map((faq, i) => (
            <div key={i} className="border border-slate-300 rounded-xl bg-white overflow-hidden">
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
              >
                <span className="font-bold text-slate-900 pr-4">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {openFaq === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="border-t border-slate-100"
                  >
                    <div className="px-6 py-5 text-slate-600">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 bg-primary-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgY3g9IjMiIGN5PSIzIiByPSIzIiBmaWxsPSIjMWYyOTM3IiBmaWxsLW9wYWNpdHk9IjAuMSIvPjwvZz48L3N2Zz4=')] opacity-20"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Ready to look past consensus?
          </h2>
          <p className="text-xl text-primary-100 mb-10">
            Request our sample and evaluate the analysis for yourself.
          </p>
          <a href="#sample-request" className="inline-block bg-white hover:bg-slate-50 text-primary-900 px-10 py-4 rounded-full text-lg font-bold transition-all shadow-xl shadow-black/20 hover:scale-105 active:scale-95">
            Request Sample Report
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 py-16 text-slate-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 rounded-lg bg-primary-600 flex items-center justify-center text-white font-bold">
                  A
                </div>
                <span className="font-bold text-xl tracking-tight text-white">Ansilo Data Labs</span>
              </div>
              <p className="max-w-xs mb-6">
                Evidence-led investigations into narrative friction in pharmaceuticals and healthcare.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Reports</h4>
              <ul className="space-y-3">
                <li><a href="#" className="hover:text-primary-400">Empagliflozin Report</a></li>
                <li><a href="#" className="hover:text-primary-400">Request Sample</a></li>
                <li><a href="#pricing" className="hover:text-primary-400">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Company</h4>
              <ul className="space-y-3">
                <li><a href="#methodology" className="hover:text-primary-400">Methodology</a></li>
                <li><a href="#" className="hover:text-primary-400">About Us</a></li>
                <li><a href="#" className="hover:text-primary-400">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-800 text-sm flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {new Date().getFullYear()} Ansilo Data Labs. A division of Ansilo Global Enterprises. All rights reserved.</p>
            <p className="mt-4 md:mt-0">
              <a href="#" className="hover:text-primary-400">Terms of Service</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
