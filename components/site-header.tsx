import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Building2, PhoneCall, Search } from "lucide-react";

const navItems = [
  { label: "Properties", href: "/properties" },
  { label: "Builders", href: "/builders" },
  { label: "Locations", href: "/locations" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#f7f3ec]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-900 text-white shadow-lg shadow-slate-900/20">
            <Building2 className="h-5 w-5" />
          </div>
          <div>
            <p className="font-heading text-base font-semibold tracking-wide text-slate-900">RealtyFocus</p>
            <p className="text-xs text-slate-500">Luxury Living</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-600 transition hover:text-slate-900"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" className="hidden sm:flex">
            <Search className="h-4 w-4" />
          </Button>
          <Button variant="outline" className="hidden sm:inline-flex">
            <PhoneCall className="mr-2 h-4 w-4" />
            Book a Visit
          </Button>
          <Button className="bg-slate-900 text-white hover:bg-slate-800">Get Started</Button>
        </div>
      </div>
    </header>
  );
}
