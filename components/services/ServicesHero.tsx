"use client";

import Link from "next/link";
import { useState } from "react";
import {
  lawnMowingServices,
  gardeningServices,
  propertyCareServices,
} from "@/data/servicesData";

export default function ServicesHero() {
  const serviceLinks = [
    ...lawnMowingServices.residentialPackages,
    ...lawnMowingServices.whippersnipping,
    ...lawnMowingServices.edging,
    ...lawnMowingServices.mowingOnly,
    ...lawnMowingServices.blowDownOnly,
    ...lawnMowingServices.commercial,
    ...gardeningServices,
    ...propertyCareServices,
  ];

  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <section className="relative z-[999] overflow-visible bg-black px-6 py-28 text-white sm:px-10 lg:px-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,197,94,0.28),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(20,184,166,0.18),transparent_35%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/70 to-black" />

      <div className="relative z-[80] mx-auto max-w-6xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-green-300">
          AALCS Services
        </p>

        <h1 className="max-w-4xl text-5xl font-bold leading-tight sm:text-6xl lg:text-7xl">
          Professional Outdoor Property Services
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">
          Premium lawn mowing, gardening, and property maintenance services
          across Innisfail, Flying Fish Point, Mourilyan, Babinda and surrounding
          communities.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/quote"
            className="rounded-full bg-green-400 px-7 py-3 text-sm font-bold uppercase tracking-wide text-black transition hover:bg-green-300"
          >
            Request a Quote
          </Link>

          <div className="relative">
            <button
              type="button"
              onClick={() => setServicesOpen((current) => !current)}
              className="rounded-full border border-white/20 px-7 py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:border-green-300 hover:text-green-300"
            >
              View Services
            </button>

            <div
              className={`absolute left-0 top-full z-[99999] mt-3 w-[320px] rounded-2xl border border-white/10 bg-black/95 p-3 shadow-2xl shadow-black/50 backdrop-blur transition-all duration-200 sm:w-[420px] ${
                servicesOpen
                  ? "visible opacity-100"
                  : "invisible opacity-0"
              }`}
            >
              <div className="max-h-[420px] overflow-y-auto pr-1">
                {serviceLinks.map((service) => (
                  <a
                    key={service.title}
                    href={service.galleryLink}
                    onClick={() => setServicesOpen(false)}
                    className="block rounded-xl px-4 py-3 text-sm font-semibold text-white/80 transition hover:bg-green-300/10 hover:text-green-300"
                  >
                    {service.title}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}