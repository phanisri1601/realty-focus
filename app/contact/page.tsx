import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/scroll-reveal";

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <ScrollReveal>
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Contact</p>
            <h1 className="mt-3 font-heading text-5xl text-slate-900">Let’s talk real estate</h1>
            <p className="mt-4 leading-7 text-slate-600">Share your goals and our advisors will get back to you with tailored guidance.</p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm">
            <form className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <input className="rounded-2xl border border-slate-200 px-4 py-3 outline-none" placeholder="Name" />
                <input className="rounded-2xl border border-slate-200 px-4 py-3 outline-none" placeholder="Email" />
              </div>
              <input className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none" placeholder="Phone" />
              <textarea className="min-h-40 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none" placeholder="Message" />
              <Button className="w-full bg-slate-900">Send Message</Button>
            </form>
          </div>
        </ScrollReveal>
      </div>
    </main>
  );
}
