"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Bath, BedDouble, Ruler, Heart } from "lucide-react";

interface PropertyCardProps {
  property: {
    id: number;
    slug: string;
    title: string;
    location: string;
    price: string;
    type: string;
    bhk: string;
    area: string;
    image: string;
    badge: string;
  };
}

export function PropertyCard({ property }: PropertyCardProps) {
  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ duration: 0.25 }}
      className="group overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm"
    >
      <div className="relative h-80 overflow-hidden">
        <Image
          src={property.image}
          alt={property.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 via-transparent to-transparent" />
        <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-slate-900">
          {property.badge}
        </div>
        <button className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-slate-900">
          <Heart className="h-4 w-4" />
        </button>
        <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-white">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-white/70">{property.type}</p>
            <h3 className="mt-1 text-2xl font-semibold">{property.title}</h3>
          </div>
          <span className="rounded-full bg-white/10 px-3 py-1 text-sm backdrop-blur-md">{property.bhk}</span>
        </div>
      </div>

      <div className="space-y-4 p-5">
        <div className="flex items-center justify-between">
          <p className="text-sm text-slate-500">{property.location}</p>
          <p className="text-xl font-semibold text-slate-900">{property.price}</p>
        </div>

        <div className="flex items-center gap-4 text-sm text-slate-500">
          <span className="flex items-center gap-1"><BedDouble className="h-4 w-4" /> 3 Beds</span>
          <span className="flex items-center gap-1"><Bath className="h-4 w-4" /> 3 Bath</span>
          <span className="flex items-center gap-1"><Ruler className="h-4 w-4" /> {property.area}</span>
        </div>

        <Link
          href={`/properties/${property.slug}`}
          className="inline-flex items-center text-sm font-semibold text-slate-900"
        >
          View Details
        </Link>
      </div>
    </motion.article>
  );
}
