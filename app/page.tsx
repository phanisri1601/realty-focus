import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight, MapPin, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/scroll-reveal";
import { PropertyCard } from "@/components/property-card";
import {
  blogs,
  builders,
  featuredProperties,
  locations,
  propertyCategories,
  stats,
  testimonials,
} from "@/lib/mock-data";

export default function HomePage() {
  return (
    <main>
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(215,200,162,0.2),transparent_18%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(15,23,42,0.18),rgba(15,23,42,0.02))]" />
        <div className="mx-auto grid min-h-[860px] max-w-7xl gap-12 px-4 pb-20 pt-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:pt-24">
          <div className="flex flex-col justify-center">
            <ScrollReveal>
              <span className="w-fit rounded-full border border-slate-300 bg-white/70 px-4 py-2 text-sm text-slate-600 backdrop-blur">
                Luxury Real Estate Portfolio
              </span>
            </ScrollReveal>
            <ScrollReveal className="mt-6">
              <h1 className="max-w-2xl font-heading text-5xl leading-none tracking-tight text-slate-900 sm:text-6xl lg:text-7xl">
                Discover the <span className="text-amber-700">perfect</span> place to call home.
              </h1>
            </ScrollReveal>
            <ScrollReveal className="mt-6 max-w-2xl">
              <p className="text-lg leading-8 text-slate-600">
                Explore premium apartments, villas, and investment-ready homes curated for modern living.
              </p>
            </ScrollReveal>
            <ScrollReveal className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button className="h-14 rounded-full bg-slate-900 px-8 text-base hover:bg-slate-800">
                Explore Properties <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="h-14 rounded-full px-8 text-base">
                Schedule a Consultation
              </Button>
            </ScrollReveal>
            <ScrollReveal className="mt-10 grid max-w-2xl gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-slate-200 bg-white/70 p-5 backdrop-blur">
                <p className="text-3xl font-semibold text-slate-900">180+</p>
                <p className="mt-1 text-sm text-slate-500">Award-winning projects</p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-white/70 p-5 backdrop-blur">
                <p className="text-3xl font-semibold text-slate-900">98%</p>
                <p className="mt-1 text-sm text-slate-500">Client satisfaction</p>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal className="relative">
            <div className="relative mx-auto max-w-2xl">
              <div className="absolute -left-4 top-10 h-24 w-24 rounded-full bg-amber-100 blur-2xl" />
              <div className="absolute -right-4 bottom-10 h-32 w-32 rounded-full bg-slate-200 blur-2xl" />
              <div className="relative overflow-hidden rounded-[40px] border border-white/40 bg-[#f3ecdb] p-3 shadow-2xl shadow-slate-900/10">
                <Image
                  src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1400&q=80"
                  alt="Luxury property"
                  width={1200}
                  height={900}
                  className="h-[640px] w-full rounded-[32px] object-cover"
                />
                <div className="absolute bottom-8 left-8 right-8 rounded-[28px] border border-white/20 bg-white/10 p-5 backdrop-blur-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-[0.3em] text-white/70">Featured Listing</p>
                      <h2 className="mt-2 text-2xl font-semibold text-white">Skyline Horizon</h2>
                    </div>
                    <Button className="bg-white text-slate-900 hover:bg-slate-100">Book Visit</Button>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm">
            <div className="grid gap-3 md:grid-cols-5">
              <div className="md:col-span-2">
                <label className="mb-2 block text-xs uppercase tracking-[0.3em] text-slate-400">Location</label>
                <div className="flex items-center gap-2 rounded-2xl bg-slate-50 px-4 py-3">
                  <MapPin className="h-4 w-4 text-slate-400" />
                  <input className="w-full bg-transparent outline-none" placeholder="Search by city or area" />
                </div>
              </div>
              <div>
                <label className="mb-2 block text-xs uppercase tracking-[0.3em] text-slate-400">Property Type</label>
                <div className="rounded-2xl bg-slate-50 px-4 py-3">Apartment</div>
              </div>
              <div>
                <label className="mb-2 block text-xs uppercase tracking-[0.3em] text-slate-400">Budget</label>
                <div className="rounded-2xl bg-slate-50 px-4 py-3">$300k - $700k</div>
              </div>
              <div>
                <Button className="h-[52px] w-full rounded-2xl bg-slate-900">
                  <Search className="mr-2 h-4 w-4" /> Search
                </Button>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <ScrollReveal className="flex items-end justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Featured Projects</p>
            <h2 className="mt-3 font-heading text-4xl text-slate-900">Curated homes for modern life</h2>
          </div>
          <Link href="/properties" className="hidden items-center gap-1 text-sm font-semibold text-slate-700 md:flex">
            View all <ChevronRight className="h-4 w-4" />
          </Link>
        </ScrollReveal>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {featuredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex items-end justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Browse by Location</p>
                <h2 className="mt-3 font-heading text-4xl text-slate-900">Popular neighborhoods</h2>
              </div>
            </div>
          </ScrollReveal>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {locations.map((location) => (
              <ScrollReveal key={location.slug}>
                <Link href={`/locations/${location.slug}`} className="group relative block overflow-hidden rounded-[28px]">
                  <Image src={location.image} alt={location.name} width={600} height={700} className="h-[420px] w-full object-cover transition duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/15 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <p className="text-xs uppercase tracking-[0.3em] text-white/70">{location.properties} homes</p>
                    <h3 className="mt-2 text-2xl font-semibold">{location.name}</h3>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex items-end justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Top Builders</p>
                <h2 className="mt-3 font-heading text-4xl text-slate-900">Trusted by discerning buyers</h2>
              </div>
            </div>
          </ScrollReveal>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {builders.map((builder) => (
              <ScrollReveal key={builder.slug}>
                <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
                  <Image src={builder.image} alt={builder.name} width={300} height={180} className="h-40 w-full rounded-2xl object-cover" />
                  <h3 className="mt-4 text-xl font-semibold">{builder.name}</h3>
                  <p className="mt-2 text-sm text-slate-500">{builder.tagline}</p>
                  <div className="mt-4 flex items-center justify-between text-sm text-slate-500">
                    <span>{builder.projects} projects</span>
                    <span>{builder.rating} ★</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0f172a] py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-white/50">Property Categories</p>
                <h2 className="mt-3 font-heading text-4xl">Choose your lifestyle</h2>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {propertyCategories.map((category) => (
                  <div key={category.name} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                    <p className="text-3xl">{category.icon}</p>
                    <h3 className="mt-4 text-xl font-semibold">{category.name}</h3>
                    <p className="mt-1 text-sm text-white/60">{category.count} available</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="grid gap-4 md:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm">
                  <p className="text-4xl font-semibold text-slate-900">{stat.value}</p>
                  <p className="mt-2 text-sm text-slate-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Testimonials</p>
              <h2 className="mt-3 font-heading text-4xl text-slate-900">What our clients say</h2>
            </div>
          </ScrollReveal>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <ScrollReveal key={index}>
                <div className="rounded-[28px] border border-slate-200 bg-[#f9f6ee] p-8">
                  <p className="text-lg leading-7 text-slate-700">“{testimonial.quote}”</p>
                  <div className="mt-6">
                    <p className="font-semibold text-slate-900">{testimonial.name}</p>
                    <p className="text-sm text-slate-500">{testimonial.role}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="rounded-[32px] bg-[#f3ecdb] p-10 text-slate-900">
              <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Latest Blogs</p>
                  <h2 className="mt-3 font-heading text-4xl">Insights to guide your next move</h2>
                </div>
                <Button variant="outline" className="rounded-full">Explore Blog</Button>
              </div>
              <div className="mt-8 grid gap-6 md:grid-cols-2">
                {blogs.map((blog) => (
                  <div key={blog.slug} className="overflow-hidden rounded-[28px] border border-slate-200 bg-white">
                    <Image src={blog.image} alt={blog.title} width={700} height={420} className="h-56 w-full object-cover" />
                    <div className="p-6">
                      <p className="text-sm text-slate-500">{blog.category} · {blog.date}</p>
                      <h3 className="mt-2 text-2xl font-semibold">{blog.title}</h3>
                      <p className="mt-3 text-sm leading-6 text-slate-600">{blog.excerpt}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="rounded-[36px] bg-slate-900 px-8 py-16 text-center text-white">
              <h2 className="font-heading text-4xl">Ready to find your next address?</h2>
              <p className="mt-3 text-slate-300">Speak with our expert advisors and start your premium property journey.</p>
              <div className="mt-8 flex justify-center gap-3">
                <Button className="bg-white text-slate-900 hover:bg-slate-100">Contact Us</Button>
                <Button variant="outline" className="border-white/20 text-white">Download Brochure</Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
