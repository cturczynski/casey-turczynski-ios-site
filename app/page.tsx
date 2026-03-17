import Image from "next/image";
import Navbar from "./Navbar";

export default function Home() {
  return (
    <main className="text-slate-900">
      <Navbar />

      {/* HERO */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
        {/* Light gradient behind hero */}
        <div
          className="absolute inset-0 -z-10"
          aria-hidden
          style={{
            background:
              "radial-gradient(ellipse 90% 70% at 50% 0%, rgba(148, 163, 184, 0.08), transparent 55%), linear-gradient(180deg, #fafbfc 0%, #f4f6f8 40%, #eef1f5 100%)",
          }}
        />
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[720px] h-[480px] -z-10 opacity-30"
          aria-hidden
          style={{
            background: "radial-gradient(circle, rgba(100, 116, 139, 0.08) 0%, transparent 65%)",
          }}
        />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full flex flex-col items-center">
          <div className="w-full max-w-5xl mx-auto text-center">
            <div className="inline-block px-4 py-2 text-sm font-medium bg-white/80 backdrop-blur-sm border border-slate-200/80 rounded-full shadow-sm text-slate-600">
              Senior iOS Consultant • Startup MVPs • SwiftUI Modernization
            </div>

            <h1 className="mt-6 sm:mt-8 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[3.25rem] font-semibold leading-[1.2] sm:leading-[1.1] tracking-tight text-slate-900 mx-auto max-w-xl sm:max-w-2xl md:max-w-3xl px-1">
              I help startups build iOS MVPs and help teams modernize legacy apps with SwiftUI.
            </h1>

            <p className="mt-8 sm:mt-10 text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed mx-auto max-w-xl sm:max-w-2xl px-1">
              Senior iOS consultant with 12+ years of Swift experience. I work with founders and product teams on MVP development, Obj-C/UIKit to SwiftUI migrations, and mobile architecture.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-10 sm:mt-12 justify-center items-stretch sm:items-center max-w-sm sm:max-w-none mx-auto">
              <a
                href="https://calendly.com/cturczynski97/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-slate-900 text-white px-7 py-4 rounded-xl font-semibold shadow-md hover:bg-slate-800 hover:shadow-lg active:scale-[0.98] transition-all duration-200 text-center"
              >
                Book a Call
              </a>
              <a
                href="#case"
                className="w-full sm:w-auto border border-slate-200 bg-white/80 backdrop-blur-sm px-6 py-3.5 rounded-xl font-medium text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-colors text-center"
              >
                View Work
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CREDIBILITY STRIP */}
      <section className="border-t border-slate-200/60 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-10">
          <div className="flex flex-wrap justify-center gap-3">
            <div className="px-6 py-2.5 bg-white backdrop-blur-sm border border-slate-200/80 rounded-full shadow-sm hover:shadow-md hover:border-slate-300 hover:bg-slate-50/50 transition-all duration-200 text-center">
              <p className="text-sm font-medium text-slate-900">12+ Years iOS Development</p>
            </div>
            <div className="px-6 py-2.5 bg-white backdrop-blur-sm border border-slate-200/80 rounded-full shadow-sm hover:shadow-md hover:border-slate-300 hover:bg-slate-50/50 transition-all duration-200 text-center">
              <p className="text-sm font-medium text-slate-900">Multiple Apps Launched on App Store</p>
            </div>
            <div className="px-6 py-2.5 bg-white backdrop-blur-sm border border-slate-200/80 rounded-full shadow-sm hover:shadow-md hover:border-slate-300 hover:bg-slate-50/50 transition-all duration-200 text-center">
              <p className="text-sm font-medium text-slate-900">Startup Product Consulting</p>
            </div>
            <div className="px-6 py-2.5 bg-white backdrop-blur-sm border border-slate-200/80 rounded-full shadow-sm hover:shadow-md hover:border-slate-300 hover:bg-slate-50/50 transition-all duration-200 text-center">
              <p className="text-sm font-medium text-slate-900">SwiftUI Modernization Specialist</p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-slate-50/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-24">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-8 sm:mb-12">
          Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Startup MVP Development */}
          <div className="group p-6 sm:p-8 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg hover:border-slate-300 transition-all duration-200">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-slate-600 group-hover:bg-slate-900 group-hover:text-white transition-colors duration-200">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
            </div>
            <h3 className="mt-6 font-semibold text-xl text-slate-900">
              Startup MVP Development
            </h3>
            <p className="mt-1 text-base text-slate-600 leading-relaxed">
              From idea to App Store launch.
            </p>
          </div>

          {/* SwiftUI Migration */}
          <div className="group p-6 sm:p-8 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg hover:border-slate-300 transition-all duration-200">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-slate-600 group-hover:bg-slate-900 group-hover:text-white transition-colors duration-200">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
              </svg>
            </div>
            <h3 className="mt-6 font-semibold text-xl text-slate-900">
              SwiftUI Migration
            </h3>
            <p className="mt-1 text-base text-slate-600 leading-relaxed">
              Modernize legacy UIKit and Objective-C apps.
            </p>
          </div>

          {/* iOS Architecture Consulting */}
          <div className="group p-6 sm:p-8 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg hover:border-slate-300 transition-all duration-200">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-slate-600 group-hover:bg-slate-900 group-hover:text-white transition-colors duration-200">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
              </svg>
            </div>
            <h3 className="mt-6 font-semibold text-xl text-slate-900">
              iOS Architecture Consulting
            </h3>
            <p className="mt-1 text-base text-slate-600 leading-relaxed">
              Improve maintainability and developer velocity.
            </p>
          </div>

          {/* Fractional iOS Leadership */}
          <div className="group p-6 sm:p-8 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg hover:border-slate-300 transition-all duration-200">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-slate-600 group-hover:bg-slate-900 group-hover:text-white transition-colors duration-200">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
              </svg>
            </div>
            <h3 className="mt-6 font-semibold text-xl text-slate-900">
              Fractional iOS Leadership
            </h3>
            <p className="mt-1 text-base text-slate-600 leading-relaxed">
              Senior mobile expertise without a full-time hire.
            </p>
          </div>
        </div>
        </div>
      </section>

      {/* HOW I WORK */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-24">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-8 sm:mb-12">
          How I Work With Teams
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-8">
          <div className="relative flex flex-col">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900 text-white text-lg font-semibold">
              1
            </span>
            <h3 className="mt-5 font-semibold text-xl text-slate-900">
              Product & Architecture Review
            </h3>
            <p className="mt-3 text-slate-600 leading-relaxed">
              I review your product goals, current codebase, and technical challenges.
            </p>
          </div>

          <div className="relative flex flex-col">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900 text-white text-lg font-semibold">
              2
            </span>
            <h3 className="mt-5 font-semibold text-xl text-slate-900">
              Technical Strategy
            </h3>
            <p className="mt-3 text-slate-600 leading-relaxed">
              We define the right architecture, migration strategy, or MVP roadmap.
            </p>
          </div>

          <div className="relative flex flex-col">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900 text-white text-lg font-semibold">
              3
            </span>
            <h3 className="mt-5 font-semibold text-xl text-slate-900">
              Execution
            </h3>
            <p className="mt-3 text-slate-600 leading-relaxed">
              I work directly with your team to ship production-ready code.
            </p>
          </div>
        </div>
        </div>
      </section>

      {/* PRODUCTS & EXPERIENCE */}
      <section id="case" className="bg-slate-50/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-24">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-12 md:mb-20">
            Products & Experience
          </h2>

          {/* Founder-Led Products */}
          <div className="mb-16 md:mb-24">
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-2">Portfolio</p>
            <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-6 sm:mb-8">
              Founder-Led Products
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Krsor - featured */}
            <article className="relative p-6 sm:p-9 bg-white rounded-2xl border-2 border-slate-300 shadow-lg hover:shadow-xl transition-all duration-200 flex flex-col ring-1 ring-slate-900/5">
              <div className="flex flex-row items-center justify-between gap-3 flex-wrap md:block">
                <h4 className="font-semibold text-xl sm:text-2xl md:text-3xl text-slate-900 md:pr-24">Krsor</h4>
                <span className="px-2.5 py-1 text-xs font-semibold uppercase tracking-wider rounded-full bg-slate-900 text-white shrink-0 md:absolute md:top-5 md:right-5">On the App Store</span>
              </div>
              <p className="mt-3 text-slate-600 leading-relaxed">
                A transportation marketplace that allows travelers to monetize unused vehicle space while enabling users to ship items more affordably than traditional carriers.
              </p>
              <div className="mt-5">
                <p className="text-sm font-semibold text-slate-900">My Role</p>
                <ul className="mt-2 space-y-1.5 text-sm text-slate-600 list-disc list-inside">
                  <li>Sole iOS developer and technical lead</li>
                  <li>Designed and implemented core mobile architecture</li>
                  <li>Collaborated directly with founder on product direction</li>
                  <li>Built and launched the app to the App Store</li>
                </ul>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-slate-100 text-slate-600">iOS Architecture</span>
                <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-slate-100 text-slate-600">Startup MVP</span>
                <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-slate-100 text-slate-600">Marketplace</span>
                <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-slate-100 text-slate-600">App Store Launch</span>
              </div>
              <a
                href="https://apps.apple.com/us/app/krsor/id6445802920"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-slate-900 hover:text-slate-600 transition-colors"
              >
                View on App Store
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </article>

            {/* outSMARTPD - featured */}
            <article className="relative p-6 sm:p-9 bg-white rounded-2xl border-2 border-slate-300 shadow-lg hover:shadow-xl transition-all duration-200 flex flex-col ring-1 ring-slate-900/5">
              <div className="flex flex-row items-center justify-between gap-3 flex-wrap md:block">
                <h4 className="font-semibold text-xl sm:text-2xl md:text-3xl text-slate-900 md:pr-24">outSMARTPD</h4>
                <span className="px-2.5 py-1 text-xs font-semibold uppercase tracking-wider rounded-full bg-slate-900 text-white shrink-0 md:absolute md:top-5 md:right-5">On the App Store</span>
              </div>
              <p className="mt-3 text-slate-600 leading-relaxed">
                A medical iOS application that enables at-home assessment of Parkinsonian behavioral and motor symptoms using guided text and motion-based workflows.
              </p>
              <div className="mt-5">
                <p className="text-sm font-semibold text-slate-900">My Role</p>
                <ul className="mt-2 space-y-1.5 text-sm text-slate-600 list-disc list-inside">
                  <li>Lead iOS engineer</li>
                  <li>Built the app from the ground up</li>
                  <li>Implemented sensor-driven motion analysis workflows</li>
                  <li>Partnered with founder on product and UX decisions</li>
                </ul>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-slate-100 text-slate-600">HealthTech</span>
                <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-slate-100 text-slate-600">Sensor Data</span>
                <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-slate-100 text-slate-600">Swift</span>
                <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-slate-100 text-slate-600">App Store Launch</span>
              </div>
              <a
                href="https://apps.apple.com/us/app/outsmartpd/id6462346736"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-slate-900 hover:text-slate-600 transition-colors"
              >
                View on App Store
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </article>

            {/* Stock Champ */}
            <article className="p-6 sm:p-8 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col">
              <h4 className="font-semibold text-2xl text-slate-900">Stock Champ</h4>
              <p className="mt-3 text-slate-600 leading-relaxed">
                A fintech platform where users compete in stock-picking tournaments, building portfolios to win a share of the prize pool.
              </p>
              <div className="mt-5">
                <p className="text-sm font-semibold text-slate-900">My Role</p>
                <ul className="mt-2 space-y-1.5 text-sm text-slate-600 list-disc list-inside">
                  <li>Founder and product creator</li>
                  <li>Sole iOS developer</li>
                  <li>Designed full application architecture and system flows</li>
                  <li>Led a team of 4 including backend and finance contributors</li>
                  <li>Coordinated beta testing with 50+ users via TestFlight</li>
                  <li>Managed branding, marketing direction, and product positioning</li>
                </ul>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-slate-100 text-slate-600">Founder</span>
                <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-slate-100 text-slate-600">FinTech</span>
                <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-slate-100 text-slate-600">MVP Development</span>
                <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-slate-100 text-slate-600">Team Leadership</span>
                <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-slate-100 text-slate-600">Beta Testing</span>
              </div>
            </article>

            {/* GoLoCo */}
            <article className="p-6 sm:p-8 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col">
              <h4 className="font-semibold text-2xl text-slate-900">GoLoCo</h4>
              <p className="mt-3 text-slate-600 leading-relaxed">
                A music discovery app that uses Spotify playlists to recommend live shows near users based on their listening habits.
              </p>
              <div className="mt-5">
                <p className="text-sm font-semibold text-slate-900">My Role</p>
                <ul className="mt-2 space-y-1.5 text-sm text-slate-600 list-disc list-inside">
                  <li>Sole iOS developer and lead engineer</li>
                  <li>Took over from an offshore prototype and rebuilt the app</li>
                  <li>Overhauled architecture and core product functionality</li>
                  <li>Worked directly with the founder from rebuild through App Store launch</li>
                  <li>Contributed to backend user data systems</li>
                </ul>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-slate-100 text-slate-600">Music Tech</span>
                <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-slate-100 text-slate-600">Spotify API</span>
                <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-slate-100 text-slate-600">Product Rebuild</span>
                <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-slate-100 text-slate-600">App Store Launch</span>
              </div>
            </article>
          </div>
          </div>

          {/* Enterprise Leadership - featured */}
          <div className="pt-4 border-t border-slate-200/80">
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-2">Experience</p>
            <h3 className="text-2xl font-semibold text-slate-900 mb-8">
              Enterprise Leadership
            </h3>
            <article className="relative overflow-hidden rounded-2xl bg-slate-900 text-white shadow-xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-slate-700/30 to-transparent rounded-full -translate-y-1/2 translate-x-1/2" aria-hidden />
              <div className="relative p-6 sm:p-8 md:p-12">
                <h4 className="font-semibold text-2xl sm:text-3xl text-white">Senior iOS Developer & Team Lead</h4>
                <p className="mt-4 text-slate-300 leading-relaxed max-w-3xl text-lg">
                  Senior engineer and team lead on a large-scale safety iOS application used by construction companies.
                </p>
                <div className="mt-8">
                  <p className="text-sm font-semibold text-white">Responsibilities</p>
                  <ul className="mt-3 space-y-2 text-sm text-slate-300 list-disc list-inside leading-relaxed">
                    <li>Contribute to a production iOS app for over 3 years</li>
                    <li>Lead a mobile development team for the past 2 years</li>
                    <li>Drive architecture decisions for new product initiatives</li>
                    <li>Plan and execute major app revamps and improvements</li>
                    <li>Partner with product managers on roadmap decisions and trade-offs</li>
                    <li>Serve as a primary contributor for high-priority bug fixes and client escalations</li>
                    <li>Collaborate across mobile and web teams on shared features</li>
                  </ul>
                </div>
                <div className="mt-8 flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 text-xs font-medium rounded-full bg-white/10 text-slate-200">Team Leadership</span>
                  <span className="px-3 py-1.5 text-xs font-medium rounded-full bg-white/10 text-slate-200">iOS Architecture</span>
                  <span className="px-3 py-1.5 text-xs font-medium rounded-full bg-white/10 text-slate-200">Enterprise App</span>
                  <span className="px-3 py-1.5 text-xs font-medium rounded-full bg-white/10 text-slate-200">Product Strategy</span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* IDEAL CLIENT */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-24">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-8 sm:mb-12">
            Ideal Clients
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
            <div className="group flex items-start gap-4 p-4 sm:p-5 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-slate-50 hover:border-slate-300 hover:shadow-md transition-all duration-200">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-200/80 text-slate-600 group-hover:bg-slate-900 group-hover:text-white transition-colors duration-200">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
              </div>
              <p className="text-base text-slate-700 font-medium leading-relaxed pt-0.5">Startup founders building their first iOS MVP</p>
            </div>

            <div className="group flex items-start gap-4 p-4 sm:p-5 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-slate-50 hover:border-slate-300 hover:shadow-md transition-all duration-200">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-200/80 text-slate-600 group-hover:bg-slate-900 group-hover:text-white transition-colors duration-200">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                </svg>
              </div>
              <p className="text-base text-slate-700 font-medium leading-relaxed pt-0.5">Teams modernizing legacy UIKit or Objective-C apps</p>
            </div>

            <div className="group flex items-start gap-4 p-4 sm:p-5 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-slate-50 hover:border-slate-300 hover:shadow-md transition-all duration-200">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-200/80 text-slate-600 group-hover:bg-slate-900 group-hover:text-white transition-colors duration-200">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-base text-slate-700 font-medium leading-relaxed pt-0.5">Companies needing senior iOS help 5–20 hrs/week</p>
            </div>

            <div className="group flex items-start gap-4 p-4 sm:p-5 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-slate-50 hover:border-slate-300 hover:shadow-md transition-all duration-200">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-200/80 text-slate-600 group-hover:bg-slate-900 group-hover:text-white transition-colors duration-200">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 0113.5 18v-2.25z" />
                </svg>
              </div>
              <p className="text-base text-slate-700 font-medium leading-relaxed pt-0.5">Product teams making architecture trade-offs</p>
            </div>
          </div>
        </div>
      </section>

      {/* FREE ARCHITECTURE REVIEW */}
      <section className="bg-slate-50/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-24">
        <div className="bg-slate-900 text-white p-6 sm:p-8 md:p-10 rounded-2xl shadow-lg">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold">
            Free iOS Architecture Review
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
            Not sure how to approach your iOS build or migration?
            I offer a free 30-minute call to review your app, architecture, or MVP plan.
          </p>
          <ul className="mt-5 space-y-2 text-base text-slate-300">
            <li className="flex items-center gap-2">
              <span className="text-slate-500">•</span>
              SwiftUI migration strategy
            </li>
            <li className="flex items-center gap-2">
              <span className="text-slate-500">•</span>
              Architecture improvements
            </li>
            <li className="flex items-center gap-2">
              <span className="text-slate-500">•</span>
              MVP development approach
            </li>
            <li className="flex items-center gap-2">
              <span className="text-slate-500">•</span>
              Performance issues
            </li>
          </ul>
          <a
            href="https://calendly.com/cturczynski97/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full sm:w-auto justify-center mt-8 bg-white text-slate-900 px-6 py-3.5 rounded-xl font-medium hover:bg-slate-100 transition-colors"
          >
            Book a Call
          </a>
        </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-24 pb-20 md:pb-32">
        <div className="bg-slate-900 text-white p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl">
          <h2 className="text-2xl sm:text-3xl font-semibold">
            Need help with your iOS app?
          </h2>

          <p className="mt-4 text-base text-slate-300 leading-relaxed">
            Reach out if you need startup consulting, SwiftUI migrations,
            architecture guidance, or part-time iOS development.
          </p>

          <a
            href="mailto:cturczynski97@gmail.com"
            className="inline-block w-full sm:w-auto text-center mt-6 bg-white text-black px-6 py-3 rounded-xl"
          >
            cturczynski97@gmail.com
          </a>
        </div>
        </div>
      </section>

    </main>
  )
}
