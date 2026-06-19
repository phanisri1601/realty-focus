import Image from "next/image";
import { ScrollReveal } from "@/components/scroll-reveal";
import { blogs } from "@/lib/mock-data";

export default function BlogPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <ScrollReveal>
        <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Blog</p>
        <h1 className="mt-3 font-heading text-5xl text-slate-900">Insights for modern property decisions</h1>
      </ScrollReveal>

      <section className="mt-10 grid gap-6 md:grid-cols-2">
        {blogs.map((blog) => (
          <ScrollReveal key={blog.slug}>
            <article className="overflow-hidden rounded-[28px] border border-slate-200 bg-white">
              <Image src={blog.image} alt={blog.title} width={800} height={500} className="h-64 w-full object-cover" />
              <div className="p-6">
                <p className="text-sm text-slate-500">{blog.category} · {blog.date}</p>
                <h2 className="mt-2 text-2xl font-semibold text-slate-900">{blog.title}</h2>
                <p className="mt-3 text-slate-600">{blog.excerpt}</p>
              </div>
            </article>
          </ScrollReveal>
        ))}
      </section>
    </main>
  );
}
