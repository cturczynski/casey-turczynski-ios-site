import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">

      {/* HERO */}

      <section className="max-w-6xl mx-auto px-6 pt-24 pb-16">

        <div className="inline-block px-4 py-2 text-sm bg-white border rounded-full shadow-sm">
          Senior iOS Consultant • Startup MVPs • SwiftUI Modernization
        </div>

        <h1 className="text-5xl md:text-6xl font-semibold mt-6 leading-tight">
          I help startups build iOS MVPs & help teams modernize legacy apps with pragmatic SwiftUI strategy.
        </h1>

        <p className="text-lg text-slate-600 mt-6 max-w-2xl">
          I'm Casey Turczynski, a senior iOS developer with 12 years of Swift experience.
          I work with founders and product teams on startup consulting, MVP development,
          Obj-C / UIKit to SwiftUI migrations, and mobile architecture.
        </p>

        <div className="flex gap-4 mt-8">
          <a
            href="mailto:cturczynski97@gmail.com"
            className="bg-slate-900 text-white px-6 py-3 rounded-xl"
          >
            Contact Me
          </a>

          <a
            href="#case"
            className="border px-6 py-3 rounded-xl bg-white"
          >
            View Work
          </a>
        </div>

      </section>

      {/* SERVICES */}

      <section className="max-w-6xl mx-auto px-6 py-16">

        <h2 className="text-3xl font-semibold mb-8">
          Services
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          <div className="p-6 bg-white rounded-2xl border">
            <h3 className="font-semibold text-xl">
              Startup MVP Development
            </h3>
            <p className="text-slate-600 mt-2">
              Partnering with founders to design and build production-ready iOS apps
              from idea to App Store launch.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl border">
            <h3 className="font-semibold text-xl">
              SwiftUI Migration
            </h3>
            <p className="text-slate-600 mt-2">
              Incremental modernization of Obj-C / UIKit apps toward SwiftUI
              without risky rewrites.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl border">
            <h3 className="font-semibold text-xl">
              iOS Architecture Consulting
            </h3>
            <p className="text-slate-600 mt-2">
              Improve codebase structure, modularity, and developer velocity.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl border">
            <h3 className="font-semibold text-xl">
              Fractional iOS Leadership
            </h3>
            <p className="text-slate-600 mt-2">
              Senior mobile engineering leadership for teams needing part-time support.
            </p>
          </div>

        </div>

      </section>

      {/* CASE STUDIES */}

      <section id="case" className="max-w-6xl mx-auto px-6 py-16">

        <h2 className="text-3xl font-semibold mb-8">
          Case Studies
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          <div className="p-6 bg-white rounded-2xl border">
            <h3 className="font-semibold text-xl">Krsor</h3>
            <p className="text-slate-600 mt-2">
              Transportation marketplace allowing travelers to monetize extra vehicle
              space while shipping users move items cheaper than traditional carriers.
            </p>
            <p className="text-sm text-slate-500 mt-4">
              Sole iOS developer • Product architecture • Founder collaboration • App Store launch
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl border">
            <h3 className="font-semibold text-xl">outSMARTPD</h3>
            <p className="text-slate-600 mt-2">
              Medical mobile app that assesses Parkinsonian symptoms through text and
              motion input tests completed at home.
            </p>
            <p className="text-sm text-slate-500 mt-4">
              Lead iOS engineer • Sensor workflows • Product collaboration • App launch
            </p>
          </div>

        </div>

      </section>

      {/* IDEAL CLIENT */}

      <section className="max-w-6xl mx-auto px-6 py-16">

        <h2 className="text-3xl font-semibold mb-8">
          Ideal Clients
        </h2>

        <ul className="grid md:grid-cols-2 gap-4 text-slate-600">

          <li>Startup founders building their first iOS MVP</li>
          <li>Teams modernizing legacy UIKit or Objective-C apps</li>
          <li>Companies needing senior iOS help 5-20 hrs/week</li>
          <li>Product teams making architecture trade-offs</li>

        </ul>

      </section>

      {/* CONTACT */}

      <section className="max-w-6xl mx-auto px-6 pb-24">

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

      </section>

    </main>
  )
}
