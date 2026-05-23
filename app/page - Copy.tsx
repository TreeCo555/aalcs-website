import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import {
  lawnMowingServices,
  gardeningServices,
  propertyCareServices,
} from "@/data/servicesData";
import { Bebas_Neue, Satisfy } from "next/font/google";
import {
  Tractor,
  Building2,
  Leaf,
  Sprout,
  ShieldCheck,
  Sparkles,
  Clock3,
} from "lucide-react";

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
});

const satisfy = Satisfy({
  subsets: ["latin"],
  weight: "400",
});

const features = [
  {
    icon: ShieldCheck,
    title: "RELIABLE & TRUSTED",
    text: "Dependable service you can count on.",
  },
  {
    icon: Leaf,
    title: "QUALITY CARE",
    text: "Professional care for healthier lawns.",
  },
  {
    icon: Sparkles,
    title: "ATTENTION TO DETAIL",
    text: "We treat every property like our own.",
  },
  {
    icon: Clock3,
    title: "ON TIME, EVERY TIME",
    text: "Punctual, efficient and professional.",
  },
];

const services = [
  {
    title: "RESIDENTIAL\nLAWN MOWING",
    href: "/services#residential-lawn-mowing",
    image: "/ressidential_stock.jpg",
    icon: Tractor,
    description:
      "Professional residential lawn mowing, edging, whipper snipping and clean-up services tailored to keep your property neat, healthy and visually outstanding.",
  },
  {
    title: "COMMERCIAL\nLAWN MOWING",
    href: "/services#commercial-lawn-mowing",
    image: "/commercial_stock.jpg",
    icon: Building2,
    description:
      "Reliable commercial grounds maintenance solutions designed for businesses, managed properties and professional outdoor presentation.",
  },
  {
    title: "GARDEN\nMAINTENANCE",
    href: "/services#garden-maintenance",
    image: "/garden_stock.jpg",
    icon: Leaf,
    description:
      "Professional garden maintenance including hedging, trimming, weeding and outdoor presentation care for clean and healthy garden spaces.",
  },
  {
    title: "PROPERTY &\nLAWN CARE",
    href: "/services#property-lawn-care",
    image: "/lawn_care_stock.jpg",
    icon: Sprout,
    description:
      "Property clean-ups, weed control, vegetation management, green waste removal and outdoor restoration services for residential and commercial properties.",
  },
];

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

export default function HomePage() {
  return (
    <main className="overflow-hidden bg-black text-white">
      <section className="relative min-h-[1150px]">
        <Image
          src="/hero.jpg"
          alt="Aurora Australis Lawn Care Services"
          fill
          priority
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/18 via-transparent to-transparent" />

        <Navbar />

        <div className="relative z-[80] mx-auto flex min-h-[980px] max-w-[1700px] items-start px-12 pt-[165px]">
          <div className="max-w-[980px]">
          <h1 className={`${bebas.className} max-w-[980px] text-[132px] uppercase leading-[0.88] tracking-[0.01em] text-white drop-shadow-[0_4px_18px_rgba(0,0,0,0.8)]`}>
            Professional Care.
            <br />
            <span className="text-[#00c832]">Outstanding</span> Results.
          </h1>

          <p className={`${satisfy.className} mt-5 text-[72px] leading-none tracking-wide text-[#74ff54] drop-shadow-[0_3px_12px_rgba(0,0,0,0.7)]`}>
            Let Your Property Shine
          </p>
            <p className="mt-8 max-w-[760px] text-[32px] leading-[1.18] font-medium leading-6 text-white drop-shadow-[0_3px_10px_rgba(0,0,0,0.75)]">
              Reliable, high-quality lawn and garden care for homes and
              businesses in{" "}
              <span className="font-bold text-[#19ff37]">
                Innisfail and surrounding areas.
              </span>
            </p>

            <div className="mt-12 flex gap-7">
              <a
                href="/quote"
                className="rounded-md bg-[#08c51f] px-12 py-6 text-[24px] font-black uppercase tracking-wide shadow-[0_0_18px_rgba(0,255,60,0.35)] transition hover:bg-[#10e132]"
              >
                Get A Free Quote →
              </a>

              <div className="relative group">
                <a
                  href="/services"
                  className="block rounded-md border border-[#73ff38] bg-black/35 px-12 py-6 text-[24px] font-black uppercase tracking-wide shadow-[0_0_18px_rgba(0,0,0,0.35)] transition hover:bg-[#0b2618]"
                >
                  View Services →
                </a>

                <div className="invisible absolute left-0 top-full z-[9999] mt-4 w-[420px] rounded-2xl border border-[#73ff38]/20 bg-black/95 p-4 opacity-0 shadow-[0_0_35px_rgba(0,255,120,0.12)] backdrop-blur-md transition-all duration-200 group-hover:visible group-hover:opacity-100">
                  <div className="max-h-[500px] overflow-y-auto pr-2">
                    {serviceLinks.map((service) => (
                      <a
                        key={service.title}
                        href={service.galleryLink.replace("/gallery", "/services")}
                        className="block rounded-xl px-4 py-3 text-[15px] font-semibold text-white/85 transition hover:bg-[#0b2618] hover:text-[#73ff38]"
                      >
                        {service.title}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 z-20 grid w-[92%] max-w-[1400px] -translate-x-1/2 rounded-2xl border border-[#5cff70]/15 bg-black/38 px-7 py-6 shadow-[0_0_50px_rgba(0,255,120,0.10)] backdrop-blur-md md:grid-cols-4">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
              <div
                key={feature.title}
                className="flex gap-4 border-white/10 px-5 md:border-r last:border-r-0"
              >
                <div className="text-[#7cff36]">
                  <Icon size={38} strokeWidth={2.2} />
                </div>
                <div>
                  <h3 className="text-[13px] font-black text-[#69ff2f]">
                    {feature.title}
                  </h3>
                  <p className="mt-1 text-[13px] leading-5 text-white">
                    {feature.text}
                  </p>
                </div>
              </div>
                );
              })}
          </div>  
      </section>

      <section
        id="services"
        className="bg-white px-8 py-8 text-center text-[#0b2618]"
      >
        <p className="text-[13px] font-black uppercase text-[#0ec22a]">
          Our Services
        </p>

        <h2 className="mt-2 text-[34px] font-black uppercase leading-tight">
          Complete <span className="text-[#0ebe27]">Lawn & Garden</span>{" "}
          Solutions
        </h2>

        <p className="mx-auto mt-3 max-w-3xl text-[15px] text-black">
          From regular lawn mowing to complete garden care, we keep your outdoor
          spaces looking their best all year round.
        </p>

        <div className="mx-auto mt-7 grid max-w-[1050px] gap-5 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <a
              key={service.title}
              href={service.href}
              className="block overflow-hidden rounded-md border border-gray-200 bg-white shadow-[0_4px_14px_rgba(0,0,0,0.16)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_14px_30px_rgba(0,0,0,0.25)]"
            >
              <div className="relative h-[125px]">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="relative px-6 pb-7 pt-9">
                <div className="absolute left-1/2 top-[-34px] flex h-[68px] w-[68px] -translate-x-1/2 items-center justify-center rounded-full border-4 border-white bg-[#23792a] text-2xl text-white">
                  <service.icon size={30} strokeWidth={2.2} />
                </div>

                <h3 className="whitespace-pre-line text-[16px] font-black leading-5">
                  {service.title}
                </h3>

                <p className="mt-4 text-[12px] leading-5 text-black">
                  {service.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section id="about" className="relative px-8 py-14">
        <Image
          src="/aurora-section.jpg"
          alt="Aurora background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />

        <div className="relative z-10 mx-auto grid max-w-[1080px] items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-[13px] font-black uppercase text-[#19ff37]">
              About Us
            </p>

            <h2 className="mt-2 text-[26px] font-black uppercase leading-tight">
              Locally Owned & Passionate
              <br />
              About What We Do
            </h2>

            <p className="mt-4 text-[14px] leading-6">
              <span className="font-bold text-[#69ff2f]">
                Aurora Australis Lawn Care Services
              </span>{" "}
              is a locally owned business based in Innisfail, QLD. We take pride
              in delivering high-quality lawn and garden care with a strong
              focus on reliability, communication and customer satisfaction.
            </p>

            <p className="mt-4 text-[14px] leading-6">
              Proudly servicing{" "}
              <span className="font-bold text-[#69ff2f]">
                Innisfail and surrounding areas.
              </span>
              <br />
              Innisfail • Fly Fish Point • Mourilyan • Babinda • and surrounding communities
            </p>

            <Link
              href="/about"
              className="inline-flex items-center justify-center rounded-xl border border-[#69ff2f] px-6 py-4 font-bold uppercase tracking-wide text-[#69ff2f] transition duration-300 hover:bg-[#69ff2f] hover:text-black"
            >
              LEARN MORE ABOUT US →
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-5 text-center">
            {["LOCAL\nEXPERTS", "QUALITY\nGUARANTEED", "CUSTOMER\nFOCUSED"].map(
              (item) => (
                <div
                  key={item}
                  className="rounded-xl border border-[#69ff2f] bg-black/45 px-5 py-8 text-[17px] font-bold"
                >
                  <div className="mb-4 text-5xl text-[#69ff2f]">♡</div>
                  <p className="whitespace-pre-line">{item}</p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

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
                    <p className="tracking-[0.12em]">LAWN CARE SERVICES</p>
                  </div>
                </div>
              </div>

              </div>

              <div>
                <h4 className="font-black uppercase text-[#69ff2f]">Services</h4>
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
            <span className="float-right">ABN: 33 129 052 267</span>
          </div>
        </div>
      </footer>
    </main>
  );
}