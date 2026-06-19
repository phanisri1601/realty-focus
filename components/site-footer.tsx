import Link from "next/link";
import { ArrowRight, Building2, Globe, MapPin, Send } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white/80">
      <div className="mx-auto max-w-7xl px-4 pb-10 pt-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 border-b border-slate-200 pb-10 md:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr]">
          <div>
            <p className="font-heading text-2xl font-semibold text-slate-900">RealtyFocus</p>
            <p className="mt-4 max-w-sm text-sm leading-6 text-slate-600">
              Premium homes, investment-ready properties, and curated lifestyle experiences.
            </p>
            <div className="mt-6 flex gap-3">
              {[Building2, Globe, MapPin, Send].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:border-slate-900 hover:text-slate-900"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Quick Links</p>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li><Link href="/properties">Properties</Link></li>
              <li><Link href="/builders">Builders</Link></li>
              <li><Link href="/locations">Locations</Link></li>
              <li><Link href="/blog">Blogs</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Company</p>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li><Link href="/about">About</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="#">Privacy</Link></li>
              <li><Link href="#">Terms</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Newsletter</p>
            <div className="mt-4 flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 p-1">
              <input
                className="w-full bg-transparent px-3 text-sm outline-none"
                placeholder="Email address"
              />
              <button className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-white">
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-2 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 RealtyFocus. All rights reserved.</p>
          <p>Designed for premium real estate experiences.</p>
        </div>
      </div>
    </footer>
  );
}
