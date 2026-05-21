import Image from "next/image";
import Navbar from "@/components/Navbar";
import Link from "next/link";

import ServicesHero from "@/components/services/ServicesHero";
import LawnMowingPackages from "@/components/services/LawnMowingPackages";
import GardeningServices from "@/components/services/GardeningServices";
import PropertyCareServices from "@/components/services/PropertyCareServices";
import WhyChooseAALCS from "@/components/services/WhyChooseAALCS";
import ServicesCTA from "@/components/services/ServicesCTA";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <ServicesHero />

      <section id="lawn-mowing-packages" className="scroll-mt-28">
        <LawnMowingPackages />
      </section>

      <section id="gardening-services" className="scroll-mt-28">
        <GardeningServices />
      </section>

      <section id="property-care-services" className="scroll-mt-28">
        <PropertyCareServices />
      </section>

      <WhyChooseAALCS />
      <ServicesCTA />

      <footer
        id="contact"
        className="relative border-t border-[#1ed12e] bg-black px-8 pt-4"
      >
        <Image
          src="/aurora-alt.jpg"
          alt="Aurora footer"
          fill
          className="object-cover opacity-45"
        />

        <div className="absolute inset-0 bg-black/55" />

        <div className="relative z-10 mx-auto max-w-[1080px]">
          <div id="quote" className="text-center">
            <h2 className="text-[28px] font-black uppercase">
              Ready To Transform Your Outdoor Space?
            </h2>

            <p className="text-[13px]">
              Get in touch today for a free, no-obligation quote.
            </p>

            <Link
              href="/quote"
              className="mt-2 inline-block w-[320px] rounded bg-[#08ba1a] py-2 text-[13px] font-black uppercase text-white transition hover:bg-[#10d122]"
            >
              GET YOUR FREE QUOTE TODAY →
            </Link>
          </div>

          <div className="grid gap-10 py-7 text-[13px] md:grid-cols-4">
            <div>
              <div className="flex items-center gap-3">
                <div className="flex w-[120px] flex-col items-center">
                  <Image src="/logo.png" alt="Logo" width={120} height={120} />

                  <a
                    href="https://www.facebook.com/auroraaustralis.lcs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center rounded bg-[#1877F2] px-5 py-2 text-[13px] font-bold text-white transition hover:opacity-90"
                  >
                    Facebook
                  </a>
                </div>

                <div>
                  <h3 className="text-[20px] font-black text-[#19ff37]">
                    AURORA AUSTRALIS
                  </h3>

                  <p className="tracking-[0.12em]">
                    LAWN CARE SERVICES
                  </p>
                </div>
              </div>

              <p className="mt-3">
                Professional care. Outstanding results.
              </p>
            </div>

            <div>
              <h4 className="font-black uppercase text-[#69ff2f]">
                Services
              </h4>

              <ul className="mt-3 space-y-1 leading-6">
                <li>
                  <Link href="/services#lawn-mowing-packages" className="transition hover:text-[#69ff2f]">
                    Residential Lawn Mowing
                  </Link>
                </li>

                <li>
                  <Link href="/services#lawn-mowing-packages" className="transition hover:text-[#69ff2f]">
                    Commercial Lawn Mowing
                  </Link>
                </li>

                <li>
                  <Link href="/services#gardening-services" className="transition hover:text-[#69ff2f]">
                    Garden Maintenance
                  </Link>
                </li>

                <li>
                  <Link href="/services#property-care-services" className="transition hover:text-[#69ff2f]">
                    Lawn Care
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-black uppercase text-[#69ff2f]">
                Quick Links
              </h4>

              <ul className="mt-3 space-y-1 leading-6">
                <li>
                  <Link href="/" className="transition hover:text-[#69ff2f]">
                    Home
                  </Link>
                </li>

                <li>
                  <Link href="/services" className="transition hover:text-[#69ff2f]">
                    Services
                  </Link>
                </li>

                <li>
                  <Link href="/about" className="transition hover:text-[#69ff2f]">
                    About Us
                  </Link>
                </li>

                <li>
                  <Link href="/gallery" className="transition hover:text-[#69ff2f]">
                    Gallery 
                  </Link>
                </li>

                <li>
                  <Link href="/contact" className="transition hover:text-[#69ff2f]">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-black uppercase text-[#69ff2f]">
                Contact Us
              </h4>

              <p className="mt-3 leading-6">
                0489 248 397
                <br />
                aa.lawncareservices.j@gmail.com
                <br />
                Innisfail, QLD 4860
                <br />
                and surrounding areas
              </p>
            </div>
          </div>

          <div className="border-t border-white/10 py-3 text-xs">
            © 2026 Aurora Australis Lawn Care Services. All rights reserved.

            <span className="float-right">
              ABN: 33 129 052 267
            </span>
          </div>
        </div>
      </footer>
    </main>
  );
}