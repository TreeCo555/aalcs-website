import Link from "next/link";
import Navbar from "@/components/Navbar";
import Image from "next/image";


const beforeAfter = [
  {
    before: "/about/before1.jpg",
    after: "/about/after1.png",
    title: "Front Yard Maintenance",
  },
  {
    before: "/about/before2.jpg",
    after: "/about/after2.jpg",
    title: "Side Access Tidy-Up",
  },
  {
    before: "/about/before3.jpg",
    after: "/about/after3.jpg",
    title: "Backyard Lawn Recovery",
  },
];

export default function AboutPage() {
    return (
    <>
        <Navbar />
        <main className="min-h-screen bg-[#061610] text-white">
      {/* HERO */}
      <section
        className="relative min-h-[78vh] bg-cover bg-center"
        style={{ backgroundImage: "url('/about/work-truck.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/40 via-black/30 to-[#061610]" />

        <div className="relative z-10 mx-auto flex min-h-[78vh] max-w-7xl items-center px-6">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-emerald-300">
              About AALCS
            </p>

            <h1 className="text-4xl font-bold leading-tight md:text-6xl">
              Local lawn care,
              <span className="block text-emerald-300">done properly.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/90">
              Aurora Australis Lawn Care Services provides reliable lawn care
              and lawn maintenance across Innisfail, Fly Fish Point, Mourilyan,
              Babinda and surrounding communities.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/quote"
                className="rounded-full bg-emerald-400 px-7 py-3 font-semibold text-emerald-950 shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-300"
              >
                Get a Free Quote
              </Link>

              <Link
                href="/services"
                className="rounded-full border border-white/30 px-7 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300">
              Who We Are
            </p>
            <h2 className="mt-4 text-3xl font-bold md:text-5xl">
              A local service built on reliability, detail and pride.
            </h2>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-8 shadow-2xl">
            <p className="leading-8 text-white/85">
              Founded on <strong>1 January 2025</strong>, Aurora Australis Lawn
              Care Services was created to provide dependable, professional and
              well-presented lawn care for local homes, properties and
              businesses.
            </p>

            <p className="mt-5 leading-8 text-white/85">
              AALCS focuses on quality lawn care and lawn maintenance, helping
              properties stay clean, tidy and properly maintained all year
              round.
            </p>
          </div>
        </div>
      </section>

      {/* MISSION CARDS */}
      <section className="bg-gradient-to-b from-[#061610] to-[#0b241a] px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              ["Reliable Service", "We show up when we say we will and complete every job with care."],
              ["Quality Workmanship", "Every mow, trim and tidy-up is completed with pride and attention to detail."],
              ["Local Commitment", "Proudly supporting Innisfail and surrounding communities with friendly service."],
            ].map(([title, text]) => (
              <div
                key={title}
                className="rounded-3xl border border-emerald-300/20 bg-white/[0.07] p-7 shadow-xl transition hover:-translate-y-2 hover:border-emerald-300/50"
              >
                <h3 className="text-2xl font-bold text-emerald-300">{title}</h3>
                <p className="mt-4 leading-7 text-white/80">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BEFORE AFTER */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300">
            Our Work
          </p>
          <h2 className="mt-4 text-3xl font-bold md:text-5xl">
            Clean, tidy results you can see.
          </h2>
        </div>

        <div className="grid gap-8">
          {beforeAfter.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-white/10 bg-white/[0.06] p-5 shadow-2xl"
            >
              <h3 className="mb-5 text-2xl font-bold text-emerald-300">
                {item.title}
              </h3>

              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <p className="mb-2 font-semibold text-white/80">Before</p>
                  <img
                    src={item.before}
                    alt={`${item.title} before`}
                    className="h-[360px] w-full rounded-2xl object-cover"
                  />
                </div>

                <div>
                  <p className="mb-2 font-semibold text-white/80">After</p>
                  <img
                    src={item.after}
                    alt={`${item.title} after`}
                    className="h-[360px] w-full rounded-2xl object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="bg-[#0b241a] px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2">
          <img
            src="/about/work-truck.jpg"
            alt="Aurora Australis Lawn Care Services work vehicle"
            className="h-full max-h-[520px] w-full rounded-3xl object-cover shadow-2xl"
          />

          <div className="flex flex-col justify-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300">
              Why Choose Us
            </p>
            <h2 className="mt-4 text-3xl font-bold md:text-5xl">
              Professional lawn care with local pride.
            </h2>

            <ul className="mt-8 space-y-4 text-lg text-white/85">
              <li>✓ Locally owned and operated</li>
              <li>✓ Lawn care and lawn maintenance specialists</li>
              <li>✓ Friendly, professional communication</li>
              <li>✓ Clear quotes and honest service</li>
              <li>✓ Regular and one-off services available</li>
              <li>✓ Careful attention to detail on every job</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SERVICE AREAS */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl rounded-3xl border border-emerald-300/20 bg-emerald-400/10 p-8 text-center shadow-xl">
          <h2 className="text-3xl font-bold">Proudly servicing local communities</h2>
          <p className="mt-4 text-lg text-white/85">
            Innisfail • Fly Fish Point • Mourilyan • Babinda • Surrounding communities
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-6xl rounded-[2rem] bg-gradient-to-r from-emerald-400 to-teal-300 p-10 text-center text-emerald-950 shadow-2xl">
          <h2 className="text-3xl font-bold md:text-5xl">
            Need reliable lawn care?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg">
            Get in touch today and let Aurora Australis Lawn Care Services help
            keep your property looking clean, tidy and well maintained.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <Link
              href="/quote"
              className="rounded-full bg-emerald-950 px-8 py-3 font-semibold text-white transition hover:bg-black"
            >
              Get a Free Quote
            </Link>

            <Link
              href="/contact"
              className="rounded-full border border-emerald-950 px-8 py-3 font-semibold transition hover:bg-emerald-950 hover:text-white"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
    <footer
    id="contact"
    className="relative border-t border-[#1ed12e] bg-black px-8 pt-4 text-white"
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
        className="mt-2 inline-block w-[320px] rounded bg-[#08ba1a] py-2 text-[13px] font-black uppercase text-white"
        >
        Get Your Free Quote Today →
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
  </>
  );
}