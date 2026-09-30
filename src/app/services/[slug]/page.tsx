type Service = {
  name: string;
  category: string;
  description: string;
  details: string;
};

const services: Record<string, Service> = {
  "general-care": {
    name: "General Care",
    category: "Primary Care",
    description:
      "Convenient access to consultations for common health concerns and everyday healthcare needs.",
    details:
      "General Care provides a simple way for patients to explore everyday healthcare options and understand the type of care available to them.",
  },

  "womens-health": {
    name: "Women's Health",
    category: "Specialised Care",
    description:
      "Healthcare services designed around women's health and individual care needs.",
    details:
      "Explore healthcare options focused on women's health through a convenient digital experience.",
  },

  "skin-dermatology": {
    name: "Skin & Dermatology",
    category: "Dermatology",
    description:
      "Explore digital care options for common skin and dermatological concerns.",
    details:
      "Discover digital healthcare options for common skin concerns and dermatological needs.",
  },

  "mens-health": {
    name: "Men's Health",
    category: "Specialised Care",
    description:
      "Private and convenient healthcare options focused on men's health.",
    details:
      "Explore healthcare options designed around men's health in a convenient digital environment.",
  },
};

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services[slug];

  if (!service) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-50 px-6">
        <div className="text-center">
          <h1 className="text-3xl font-semibold text-slate-900">
            Service not found
          </h1>

          <p className="mt-3 text-slate-600">
            We couldn't find the healthcare service you're looking for.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="mx-auto max-w-4xl px-6 py-20 lg:px-8">
        <span className="inline-flex rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-600 shadow-sm">
          {service.category}
        </span>

        <h1 className="mt-6 text-5xl font-semibold tracking-tight">
          {service.name}
        </h1>

        <p className="mt-6 text-xl leading-8 text-slate-600">
          {service.description}
        </p>

        <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold">
            About this service
          </h2>

          <p className="mt-4 leading-8 text-slate-600">
            {service.details}
          </p>

          <button className="mt-8 rounded-full bg-slate-900 px-6 py-3 font-semibold text-white transition hover:bg-slate-700">
            Get started
          </button>
        </div>
      </section>
    </main>
  );
}