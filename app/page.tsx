import Image from "next/image";

export default function Home() {
  return (
    <main className="text-slate-900">
      {/* NAV */}
      <nav
        className="sticky top-0 z-50 border-b border-slate-200/90 backdrop-blur-md shadow-[0_1px_0_0_rgba(255,255,255,0.8)_inset]"
        style={{
          background: "linear-gradient(180deg, rgba(255,255,255,0.97) 0%, rgba(248,250,252,0.95) 50%, rgba(241,245,249,0.92) 100%)",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a
            href="https://www.linkedin.com/in/casey-turczynski/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-base font-semibold text-slate-900 hover:text-slate-600 transition-colors tracking-tight"
          >
            <Image
              src="/casey-profile.png"
              alt="Casey Turczynski"
              width={36}
              height={36}
              className="rounded-full object-cover shrink-0"
            />
            Casey Turczynski
          </a>
          <div className="flex items-center gap-6 sm:gap-8 flex-wrap justify-end">
            <a href="#services" className="text-base text-slate-600 hover:text-slate-900 transition-colors">
              Services
            </a>
            <a href="#case" className="text-base text-slate-600 hover:text-slate-900 transition-colors">
              Currently on the App Store
            </a>
            <a href="#contact" className="text-base text-slate-600 hover:text-slate-900 transition-colors">
              Contact
            </a>
            <a
              href="https://calendly.com/cturczynski97/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base font-medium bg-slate-900 text-white px-5 py-2.5 rounded-lg hover:bg-slate-800 transition-colors"
            >
              Book Call
            </a>
          </div>
        </div>
      </nav>

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

        <div className="max-w-6xl mx-auto px-6 w-full flex flex-col items-center">
          <div className="w-full max-w-5xl mx-auto text-center">
            <div className="inline-block px-4 py-2 text-sm font-medium bg-white/80 backdrop-blur-sm border border-slate-200/80 rounded-full shadow-sm text-slate-600">
              Senior iOS Consultant • Startup MVPs • SwiftUI Modernization
            </div>

            <h1 className="mt-8 text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.15] tracking-tight text-slate-900">
              I help startups build iOS MVPs and help teams modernize legacy apps with SwiftUI.
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-slate-600 leading-relaxed mx-auto max-w-3xl">
              Senior iOS consultant with 12+ years of Swift experience. I work with founders and product teams on startup MVP development, Obj-C/UIKit to SwiftUI migrations, and mobile architecture.
            </p>

            <div className="flex flex-wrap gap-4 mt-10 justify-center">
              <a
                href="mailto:cturczynski97@gmail.com"
                className="bg-slate-900 text-white px-6 py-3.5 rounded-xl font-medium hover:bg-slate-800 transition-colors"
              >
                Contact Me
              </a>
              <a
                href="#case"
                className="border border-slate-200 bg-white/80 backdrop-blur-sm px-6 py-3.5 rounded-xl font-medium text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-colors"
              >
                View Work
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CREDIBILITY STRIP */}
      <section className="border-t border-slate-200/60 bg-white">
        <div className="max-w-6xl mx-auto px-6 py-10">
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
        <div className="max-w-6xl mx-auto px-6 py-28">
        <h2 className="text-3xl font-semibold mb-12">
          Services
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Startup MVP Development */}
          <div className="group p-8 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg hover:border-slate-300 transition-all duration-200">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-slate-600 group-hover:bg-slate-900 group-hover:text-white transition-colors duration-200">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
            </div>
            <h3 className="mt-6 font-semibold text-xl text-slate-900">
              Startup MVP Development
            </h3>
            <p className="mt-1 text-slate-600">
              From idea to App Store launch.
            </p>
          </div>

          {/* SwiftUI Migration */}
          <div className="group p-8 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg hover:border-slate-300 transition-all duration-200">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-slate-600 group-hover:bg-slate-900 group-hover:text-white transition-colors duration-200">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
              </svg>
            </div>
            <h3 className="mt-6 font-semibold text-xl text-slate-900">
              SwiftUI Migration
            </h3>
            <p className="mt-1 text-slate-600">
              Modernize legacy UIKit and Objective-C apps.
            </p>
          </div>

          {/* iOS Architecture Consulting */}
          <div className="group p-8 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg hover:border-slate-300 transition-all duration-200">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-slate-600 group-hover:bg-slate-900 group-hover:text-white transition-colors duration-200">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
              </svg>
            </div>
            <h3 className="mt-6 font-semibold text-xl text-slate-900">
              iOS Architecture Consulting
            </h3>
            <p className="mt-1 text-slate-600">
              Improve maintainability and developer velocity.
            </p>
          </div>

          {/* Fractional iOS Leadership */}
          <div className="group p-8 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg hover:border-slate-300 transition-all duration-200">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-slate-600 group-hover:bg-slate-900 group-hover:text-white transition-colors duration-200">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
              </svg>
            </div>
            <h3 className="mt-6 font-semibold text-xl text-slate-900">
              Fractional iOS Leadership
            </h3>
            <p className="mt-1 text-slate-600">
              Senior mobile expertise without a full-time hire.
            </p>
          </div>
        </div>
        </div>
      </section>

      {/* HOW I WORK */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-28">
        <h2 className="text-3xl font-semibold mb-12">
          How I Work With Teams
        </h2>

        <div className="grid md:grid-cols-3 gap-10 md:gap-8">
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

      {/* CASE STUDIES */}
      <section id="case" className="bg-slate-50/80">
        <div className="max-w-6xl mx-auto px-6 py-28">
        <h2 className="text-3xl font-semibold mb-12">
          Currently on the App Store
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Krsor */}
          <article className="p-8 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col">
            <span className="text-xs font-medium uppercase tracking-wider text-slate-400">
              Released January 2024
            </span>
            <h3 className="mt-2 font-semibold text-2xl text-slate-900">
              Krsor
            </h3>
            <p className="mt-4 text-slate-600 leading-relaxed">
              A peer-to-peer shipping platform that connects travelers with people who need items transported, allowing users to monetize unused cargo space while offering cheaper shipping alternatives.
            </p>
            <div className="mt-6">
              <p className="text-sm font-semibold text-slate-900">My Role</p>
              <ul className="mt-2 space-y-1.5 text-sm text-slate-600 list-disc list-inside">
                <li>Sole iOS developer</li>
                <li>Frontend and Backend architecture</li>
                <li>Founder collaboration</li>
                <li>From scratch to App Store launch</li>
              </ul>
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

          {/* outSMARTPD */}
          <article className="p-8 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col">
            <span className="text-xs font-medium uppercase tracking-wider text-slate-400">
              Released May 2024
            </span>
            <h3 className="mt-2 font-semibold text-2xl text-slate-900">
              outSMARTPD
            </h3>
            <p className="mt-4 text-slate-600 leading-relaxed">
              A medical mobile application that provides an at-home assessment of Parkinsonian symptoms using behavioral surveys and sensor-based motor testing.
            </p>
            <div className="mt-6">
              <p className="text-sm font-semibold text-slate-900">Role</p>
              <ul className="mt-2 space-y-1.5 text-sm text-slate-600 list-disc list-inside">
                <li>Sole iOS engineer</li>
                <li>Built the app from the ground up, to successful App Store launch</li>
                <li>Implemented complex sensor-driven symptom analysis</li>
                <li>Collaborated with the founding team on product direction</li>
              </ul>
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
        </div>
        </div>
      </section>

      {/* IDEAL CLIENT */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-28">
          <h2 className="text-3xl font-semibold mb-12">
            Ideal Clients
          </h2>

          <div className="grid md:grid-cols-2 gap-5">
            <div className="group flex items-start gap-4 p-5 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-slate-50 hover:border-slate-300 hover:shadow-md transition-all duration-200">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-200/80 text-slate-600 group-hover:bg-slate-900 group-hover:text-white transition-colors duration-200">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
              </div>
              <p className="text-slate-700 font-medium leading-snug pt-0.5">Startup founders building their first iOS MVP</p>
            </div>

            <div className="group flex items-start gap-4 p-5 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-slate-50 hover:border-slate-300 hover:shadow-md transition-all duration-200">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-200/80 text-slate-600 group-hover:bg-slate-900 group-hover:text-white transition-colors duration-200">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                </svg>
              </div>
              <p className="text-slate-700 font-medium leading-snug pt-0.5">Teams modernizing legacy UIKit or Objective-C apps</p>
            </div>

            <div className="group flex items-start gap-4 p-5 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-slate-50 hover:border-slate-300 hover:shadow-md transition-all duration-200">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-200/80 text-slate-600 group-hover:bg-slate-900 group-hover:text-white transition-colors duration-200">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-slate-700 font-medium leading-snug pt-0.5">Companies needing senior iOS help 5–20 hrs/week</p>
            </div>

            <div className="group flex items-start gap-4 p-5 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-slate-50 hover:border-slate-300 hover:shadow-md transition-all duration-200">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-200/80 text-slate-600 group-hover:bg-slate-900 group-hover:text-white transition-colors duration-200">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 0113.5 18v-2.25z" />
                </svg>
              </div>
              <p className="text-slate-700 font-medium leading-snug pt-0.5">Product teams making architecture trade-offs</p>
            </div>
          </div>
        </div>
      </section>

      {/* FREE ARCHITECTURE REVIEW */}
      <section className="bg-slate-50/80">
        <div className="max-w-6xl mx-auto px-6 py-28">
        <div className="bg-slate-900 text-white p-8 sm:p-10 rounded-2xl shadow-lg">
          <h2 className="text-2xl sm:text-3xl font-semibold">
            Free iOS Architecture Review
          </h2>
          <p className="mt-4 text-slate-300 leading-relaxed max-w-2xl">
            If you're building an iOS product or modernizing an existing app, I offer a 30-minute consultation where we can discuss:
          </p>
          <ul className="mt-5 space-y-2 text-slate-300">
            <li className="flex items-center gap-2">
              <span className="text-slate-500">•</span>
              SwiftUI migration strategy
            </li>
            <li className="flex items-center gap-2">
              <span className="text-slate-500">•</span>
              architecture improvements
            </li>
            <li className="flex items-center gap-2">
              <span className="text-slate-500">•</span>
              MVP development approach
            </li>
            <li className="flex items-center gap-2">
              <span className="text-slate-500">•</span>
              performance issues
            </li>
          </ul>
          <a
            href="https://calendly.com/cturczynski97/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex mt-8 bg-white text-slate-900 px-6 py-3.5 rounded-xl font-medium hover:bg-slate-100 transition-colors"
          >
            Book a Call
          </a>
        </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-28 pb-32">
        <div className="bg-slate-900 text-white p-10 rounded-3xl">
          <h2 className="text-3xl font-semibold">
            Need senior iOS help?
          </h2>

          <p className="mt-4 text-slate-300">
            Reach out if you need startup consulting, SwiftUI migrations,
            architecture guidance, or part-time iOS development.
          </p>

          <a
            href="mailto:cturczynski97@gmail.com"
            className="inline-block mt-6 bg-white text-black px-6 py-3 rounded-xl"
          >
            cturczynski97@gmail.com
          </a>
        </div>
        </div>
      </section>

    </main>
  )
}
