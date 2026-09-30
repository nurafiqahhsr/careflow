import Link from "next/link";

const services = [
  {
    slug: "general-care",
    name: "General Care",
    category: "Primary Care",
    description:
      "Convenient access to consultations for common health concerns and everyday healthcare needs.",
  },
  {
    slug: "womens-health",
    name: "Women's Health",
    category: "Specialised Care",
    description:
      "Healthcare services designed around women's health and individual care needs.",
  },
  {
    slug: "skin-dermatology",
    name: "Skin & Dermatology",
    category: "Dermatology",
    description:
      "Explore digital care options for common skin and dermatological concerns.",
  },
  {
    slug: "mens-health",
    name: "Men's Health",
    category: "Specialised Care",
    description:
      "Private and convenient healthcare options focused on men's health.",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* Header */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-slate-500">
            Care options
          </p>

          <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
            Healthcare that fits your needs.
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            Explore CareFlow's healthcare services and find the type of care
            that is right for you.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.slug}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                {service.category}
              </span>

              <h2 className="mt-5 text-2xl font-semibold">
                {service.name}
              </h2>

              <p className="mt-3 max-w-lg leading-7 text-slate-600">
                {service.description}
              </p>

              <Link
                href={`/services/${service.slug}`}
                className="mt-7 inline-flex rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
              >
                View service
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}