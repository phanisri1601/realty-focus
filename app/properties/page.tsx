import Link from "next/link";
import { ArrowDownUp, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PropertyCard } from "@/components/property-card";
import { featuredProperties } from "@/lib/mock-data";

export default function PropertiesPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Property Listing</p>
          <h1 className="mt-3 font-heading text-5xl text-slate-900">Find your ideal space</h1>
        </div>
        <div className="flex gap-3">
          <Button variant="outline"><SlidersHorizontal className="mr-2 h-4 w-4" /> Filters</Button>
          <Button variant="outline"><ArrowDownUp className="mr-2 h-4 w-4" /> Sort</Button>
        </div>
      </div>

      <section className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {featuredProperties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </section>

      <div className="mt-10 flex justify-center">
        <Button className="rounded-full bg-slate-900">Load More</Button>
      </div>
    </main>
  );
}
