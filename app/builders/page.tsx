import Image from "next/image";
import { ScrollReveal } from "@/components/scroll-reveal";
import { builders } from "@/lib/mock-data";

export default function BuildersPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <ScrollReveal>
        <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Builders</p>
        <h1 className="mt-3 font-heading text-5xl text-slate-900">Featured developers</h1>
      </ScrollReveal>
      <section className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {builders.map((builder) => (
          <ScrollReveal key={builder.slug}>
            <article className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
              <Image src={builder.image} alt={builder.name} width={400} height={240} className="h-44 w-full rounded-2xl object-cover" />
              <h2 className="mt-4 text-xl font-semibold text-slate-900">{builder.name}</h2>
              <p className="mt-2 text-sm text-slate-500">{builder.tagline}</p>
            </article>
          </ScrollReveal>
        ))}
      </section>
    </main>
  );
}
