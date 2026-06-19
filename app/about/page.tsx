import { ScrollReveal } from "@/components/scroll-reveal";
import { stats } from "@/lib/mock-data";

export default function AboutPage() {
  return (
    <main>
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <ScrollReveal>
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">About RealtyFocus</p>
          <h1 className="mt-3 max-w-3xl font-heading text-5xl text-slate-900">Bringing premium real estate experiences to life.</h1>
        </ScrollReveal>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <ScrollReveal>
            <h2 className="font-heading text-4xl text-slate-900">Our story</h2>
            <p className="mt-4 text-slate-600 leading-7">RealtyFocus is built on a simple belief: buying or investing in property should feel intuitive, transparent, and premium. We combine market insight, design-led recommendations, and a concierge approach to every client journey.</p>
          </ScrollReveal>
          <ScrollReveal>
            <div className="rounded-[32px] bg-[#f7f3ec] p-8 text-slate-900">Mission & Vision statement section</div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-7xl gap-4 px-4 sm:px-6 md:grid-cols-4 lg:px-8">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-3xl border border-slate-200 bg-white p-8 text-center">
              <p className="text-4xl font-semibold text-slate-900">{stat.value}</p>
              <p className="mt-2 text-sm text-slate-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
