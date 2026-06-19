import Image from "next/image";
import { ScrollReveal } from "@/components/scroll-reveal";
import { locations } from "@/lib/mock-data";

export default function LocationsPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <ScrollReveal>
        <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Locations</p>
        <h1 className="mt-3 font-heading text-5xl text-slate-900">Popular destinations</h1>
      </ScrollReveal>
      <section className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {locations.map((location) => (
          <ScrollReveal key={location.slug}>
            <article className="overflow-hidden rounded-[28px] bg-white shadow-sm">
              <Image src={location.image} alt={location.name} width={600} height={450} className="h-64 w-full object-cover" />
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-slate-900">{location.name}</h2>
                <p className="mt-2 text-sm text-slate-500">{location.properties} curated listings</p>
              </div>
            </article>
          </ScrollReveal>
        ))}
      </section>
    </main>
  );
}
