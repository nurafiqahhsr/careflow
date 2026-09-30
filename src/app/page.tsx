const services = [
  {
    title: "General Care",
    description: "Book consultations for common health concerns and everyday care.",
    icon: "＋",
  },
  {
    title: "Women's Health",
    description: "Access dedicated care options designed around women's health needs.",
    icon: "♡",
  },
  {
    title: "Skin & Dermatology",
    description: "Explore convenient options for common skin concerns.",
    icon: "✦",
  },
];

const steps = [
  {
    number: "01",
    title: "Choose your care",
    description: "Browse available services and find the type of care you need.",
  },
  {
    number: "02",
    title: "Book a consultation",
    description: "Select a suitable date and time from available appointment slots.",
  },
  {
    number: "03",
    title: "Manage your care",
    description: "Keep track of appointments and your healthcare journey in one place.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Navigation */}
      <nav className="border-b border-slate-100">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-900 text-lg font-bold text-white">
              C
            </div>
            <span className="text-xl font-semibold tracking-tight">
              CareFlow
            </span>
          </div>

          <div className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
            <a href="#services" className="transition hover:text-slate-900">
              Services
            </a>
            <a href="#how-it-works" className="transition hover:text-slate-900">
              How it works
            </a>
            <a href="#about" className="transition hover:text-slate-900">
              About
            </a>
          </div>

          <button className="rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-700">
            Get started
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-28">
          <div>
            <div className="mb-6 inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-600">
              Healthcare, made simpler.
            </div>

            <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
              Better access to care,
              <span className="block text-slate-500">on your terms.</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              CareFlow brings healthcare discovery, appointment booking, and
              care management into one simple digital experience.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button className="rounded-full bg-slate-900 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-slate-700">
                Explore care options
              </button>

              <button className="rounded-full border border-slate-200 px-7 py-3.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50">
                How it works
              </button>
            </div>

            <div className="mt-10 flex items-center gap-8 text-sm text-slate-500">
              <div>
                <strong className="block text-lg text-slate-900">24/7</strong>
                Digital access
              </div>
              <div className="h-8 w-px bg-slate-200" />
              <div>
                <strong className="block text-lg text-slate-900">Simple</strong>
                Booking experience
              </div>
              <div className="h-8 w-px bg-slate-200" />
              <div>
                <strong className="block text-lg text-slate-900">Secure</strong>
                Patient-first design
              </div>
            </div>
          </div>

          {/* Hero card */}
          <div className="relative">
            <div className="rounded-[2rem] bg-slate-100 p-4 shadow-sm">
              <div className="rounded-[1.5rem] bg-white p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-500">Upcoming appointment</p>
                    <h2 className="mt-1 text-xl font-semibold">
                      General consultation
                    </h2>
                  </div>

                  <div className="rounded-xl bg-slate-100 px-3 py-2 text-center">
                    <span className="block text-xs font-medium text-slate-500">
                      OCT
                    </span>
                    <span className="text-lg font-bold">08</span>
                  </div>
                </div>

                <div className="mt-8 rounded-2xl bg-slate-50 p-5">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-200 text-lg font-semibold">
                      DR
                    </div>

                    <div>
                      <p className="font-semibold text-slate-900">
                        Dr. Sarah Lim
                      </p>
                      <p className="text-sm text-slate-500">
                        General Practitioner
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 flex items-center justify-between border-t border-slate-200 pt-4 text-sm">
                    <span className="text-slate-500">Thursday · 10:30 AM</span>
                    <span className="font-semibold text-slate-900">
                      Online
                    </span>
                  </div>
                </div>

                <button className="mt-5 w-full rounded-xl bg-slate-900 py-3 text-sm font-semibold text-white">
                  View appointment
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="border-t border-slate-100 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-slate-500">
              Care options
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Find the care you need.
            </h2>

            <p className="mt-4 text-slate-600">
              Explore different healthcare services through a single,
              straightforward experience.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-3xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 text-xl text-white">
                  {service.icon}
                </div>

                <h3 className="mt-6 text-xl font-semibold">
                  {service.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {service.description}
                </p>

                <button className="mt-6 text-sm font-semibold text-slate-900">
                  Explore service →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-slate-500">
              How it works
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              From discovery to care in three steps.
            </h2>
          </div>

          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {steps.map((step) => (
              <div key={step.number}>
                <span className="text-sm font-bold text-slate-400">
                  {step.number}
                </span>

                <h3 className="mt-4 text-xl font-semibold">{step.title}</h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="about" className="bg-slate-900">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
            <div>
              <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Healthcare should feel easier.
              </h2>

              <p className="mt-4 max-w-xl leading-7 text-slate-300">
                CareFlow is designed around a simple idea: make the digital
                healthcare journey easier to understand and easier to manage.
              </p>
            </div>

            <button className="shrink-0 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-slate-900 transition hover:bg-slate-200">
              Get started
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>© 2026 CareFlow. Portfolio project.</p>
          <p>Built with Next.js, React & TypeScript.</p>
        </div>
      </footer>
    </main>
  );
}