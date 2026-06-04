"use client";
import { ChangeEvent, FormEvent, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import {
  CalendarCheck,
  CheckCircle,
  Clock3,
  DollarSign,
  Leaf,
  PencilLine,
  ShieldCheck,
  Star,
} from "lucide-react";

export default function QuotePage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    suburb: "",
    postcode: "",
    services: [] as string[],
    details: "",
    timeframe: "",
    heardFrom: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleServiceChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setFormData((prev) => ({
      ...prev,
      services: e.target.checked
        ? [...prev.services, value]
        : prev.services.filter((service) => service !== value),
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const response = await fetch("/api/quote", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert("Quote request sent successfully!");

      setFormData({
        name: "",
        phone: "",
        email: "",
        address: "",
        suburb: "",
        postcode: "",
        services: [],
        details: "",
        timeframe: "",
        heardFrom: "",
      });
    } else {
      alert("Something went wrong. Please try again.");
    }

    setLoading(false);
  };
  return (
    <main className="overflow-hidden bg-black text-white">
      <section className="relative min-h-[420px]">
        <Image
          src="/aurora-section.jpg"
          alt="Get a free quote"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />
        <Navbar />

        <div className="relative z-10 mx-auto flex min-h-[420px] max-w-[1180px] flex-col items-center justify-center px-8 pt-28 text-center">
          <h1 className="text-[56px] font-black uppercase tracking-wide">
            Get A <span className="text-[#69ff2f]">Free Quote</span>
          </h1>

          <div className="mt-4 h-[3px] w-[260px] bg-[#69ff2f]" />

          <p className="mt-7 text-[22px] font-black text-[#69ff2f]">
            Fast. Free. No obligation.
          </p>

          <p className="mt-3 max-w-[620px] text-[17px] leading-8 text-white/90">
            Tell us about your property and we&apos;ll get back to you with a
            tailored lawn care quote.
          </p>
        </div>
      </section>

      <section className="relative px-8 py-14">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(105,255,47,0.12),transparent_35%)]" />

        <div className="relative z-10 mx-auto grid max-w-[1080px] gap-7 lg:grid-cols-[1.2fr_0.9fr]">
          <div className="rounded-xl border border-[#69ff2f]/25 bg-white/[0.04] p-7 shadow-[0_0_30px_rgba(105,255,47,0.08)]">
            <div className="mb-7 flex items-center gap-3">
              <PencilLine className="text-[#69ff2f]" />
              <h2 className="text-[24px] font-black uppercase">
                Tell Us About <span className="text-[#69ff2f]">Your Property</span>
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="grid gap-4">
            <div className="grid gap-4 md:grid-cols-2">
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="quote-input"
              />

              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="quote-input"
              />
            </div>

            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="quote-input"
            />

            <input
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Property Address"
              className="quote-input"
            />

            <div className="grid gap-4 md:grid-cols-2">
              <input
                name="suburb"
                value={formData.suburb}
                onChange={handleChange}
                placeholder="Suburb / City"
                className="quote-input"
              />

              <input
                name="postcode"
                value={formData.postcode}
                onChange={handleChange}
                placeholder="Postcode"
                className="quote-input"
              />
            </div>

              <div className="rounded-md border border-white/15 bg-black/45 p-4">
                <p className="mb-3 text-sm text-white/80">
                  What services are you interested in?
                </p>

                <div className="grid gap-3 text-sm text-white/80 md:grid-cols-2">
                  <label className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      name="services"
                      value="Residential Lawn Mowing"
                      checked={formData.services.includes("Residential Lawn Mowing")}
                      onChange={handleServiceChange}
                    />
                    Residential Lawn Mowing
                  </label>

                  <label className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      name="services"
                      value="Commercial Lawn Mowing"
                      checked={formData.services.includes("Commercial Lawn Mowing")}
                      onChange={handleServiceChange}
                    />
                    Commercial Lawn Mowing
                  </label>

                  <label className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      name="services"
                      value="Garden Maintenance"
                      checked={formData.services.includes("Garden Maintenance")}
                      onChange={handleServiceChange}
                    />
                    Garden Maintenance
                  </label>

                  <label className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      name="services"
                      value="Property & Lawn Care"
                      checked={formData.services.includes("Property & Lawn Care")}
                      onChange={handleServiceChange}
                    />
                    Property & Lawn Care
                  </label>
                </div>
              </div>
              <textarea
                name="details"
                value={formData.details}
                onChange={handleChange}
                placeholder="Tell us about your property and what you need"
                rows={5}
                className="quote-input"
              />

              <select
                name="timeframe"
                value={formData.timeframe}
                onChange={handleChange}
                className="quote-input"
              >
                <option>When would you like the work done?</option>
                <option>As soon as possible</option>
                <option>This week</option>
                <option>Next week</option>
                <option>Flexible</option>
              </select>

              <select
                name="heardFrom"
                value={formData.heardFrom}
                onChange={handleChange}
                className="quote-input"
              >
                <option>How did you hear about us?</option>
                <option>Google</option>
                <option>Facebook</option>
                <option>Friend / Referral</option>
                <option>Seen our vehicle</option>
              </select>

              <button
                type="submit"
                className="rounded-md bg-[#69ff2f] px-7 py-4 text-[13px] font-black uppercase text-black transition hover:-translate-y-1 hover:bg-[#7cff45]"
              >
                {loading ? "Sending..." : "Submit Request →"}
              </button>

              <p className="flex items-center justify-center gap-2 text-xs text-white/60">
                <ShieldCheck size={14} className="text-[#69ff2f]" />
                We respect your privacy. Your information is safe with us.
              </p>
            </form>
          </div>

          <div className="flex h-full flex-col justify-between rounded-xl border border-[#69ff2f]/25 bg-white/[0.04] p-7 shadow-[0_0_30px_rgba(105,255,47,0.08)]">
            <div className="mb-7 flex items-center gap-3">
              <Clock3 className="text-[#69ff2f]" />
              <h2 className="text-[24px] font-black uppercase">
                What Happens <span className="text-[#69ff2f]">Next?</span>
              </h2>
            </div>

            <div className="space-y-9">
              <Step number="1" title="We Receive Your Request" text="We review the details you provide about your property and needs." />
              <Step number="2" title="We Assess Your Needs" text="Our team checks your requirements to prepare an accurate quote." />
              <Step number="3" title="You Get Your Quote" text="We contact you with a tailored, no-obligation quote." />
              <Step number="4" title="We Get To Work" text="Once you're happy, we schedule the job and take care of the rest." />
            </div>

            <div className="mt-12 rounded-lg border border-[#69ff2f]/40 bg-black/35 p-8">
              <h3 className="flex items-center gap-3 text-[19px] font-black uppercase">
                <Leaf className="text-[#69ff2f]" />
                100% Free & <span className="text-[#69ff2f]">No Obligation</span>
              </h3>
              <p className="mt-3 text-sm leading-6 text-white/75">
                Get professional advice and a competitive quote with absolutely
                no obligation.
              </p>
            </div>
          </div>
        </div>

        <div className="relative z-10 mx-auto mt-8 grid max-w-[1080px] gap-6 rounded-xl border border-[#69ff2f]/25 bg-white/[0.04] p-8 md:grid-cols-4">
          <Benefit icon={ShieldCheck} title="No Obligation" text="Get a free quote with no commitment." />
          <Benefit icon={DollarSign} title="Competitive Pricing" text="Fair, transparent pricing you can trust." />
          <Benefit icon={Star} title="Quality Guaranteed" text="Professional service with outstanding results." />
          <Benefit icon={CalendarCheck} title="On Time, Every Time" text="We respect your time and always deliver." />
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
              <h4 className="font-black uppercase text-[#69ff2f]">Quick Links</h4>

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
                  <Link href="/reviews" className="transition hover:text-[#69ff2f]">
                    Reviews
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
              <h4 className="font-black uppercase text-[#69ff2f]">Contact Us</h4>
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

function Step({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="flex gap-4">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#69ff2f] text-lg font-black text-[#69ff2f]">
        {number}
      </div>
      <div>
        <h3 className="font-black">{title}</h3>
        <p className="mt-1 text-sm leading-6 text-white/75">{text}</p>
      </div>
    </div>
  );
}

function Benefit({
  icon: Icon,
  title,
  text,
}: {
  icon: React.ElementType;
  title: string;
  text: string;
}) {
  return (
    <div className="text-center">
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-[#69ff2f] text-[#69ff2f]">
        <Icon size={28} />
      </div>
      <h3 className="mt-4 text-sm font-black uppercase">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-white/70">{text}</p>
    </div>
  );
}