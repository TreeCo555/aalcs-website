"use client";
import { ChangeEvent, FormEvent, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import {
  Send,
  Phone,
  Mail,
  MapPin,
  Clock3,
  ShieldCheck,
  CalendarCheck,
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert("Message sent successfully!");
      setFormData({
        name: "",
        phone: "",
        email: "",
        subject: "",
        message: "",
      });
    } else {
      alert("Something went wrong. Please try again.");
    }

    setLoading(false);
  };
  return (
    <main className="overflow-hidden bg-black text-white">
      <section className="relative min-h-[390px]">
        <Image
          src="/aurora-section.jpg"
          alt="Contact Aurora Australis Lawn Care Services"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <Navbar />

        <div className="relative z-10 mx-auto flex min-h-[390px] max-w-[1180px] flex-col items-center justify-center px-8 pt-28 text-center">
          <h1 className="text-[54px] font-black uppercase tracking-wide">
            Contact <span className="text-[#69ff2f]">Us</span>
          </h1>

          <div className="mt-4 h-[3px] w-[240px] bg-[#69ff2f]" />

          <p className="mt-7 max-w-[620px] text-[17px] leading-8 text-white/90">
            We&apos;re here to help. Get in touch for a free quote or any
            questions about our lawn and garden care services.
          </p>
        </div>
      </section>

      <section className="relative px-8 py-14">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(105,255,47,0.12),transparent_35%)]" />

        <div className="relative z-10 mx-auto grid max-w-[1080px] gap-7 lg:grid-cols-[1.25fr_0.9fr]">
          <div className="rounded-xl border border-[#69ff2f]/25 bg-white/[0.04] p-7 shadow-[0_0_30px_rgba(105,255,47,0.08)]">
            <div className="mb-7 flex items-center gap-3">
              <Send className="text-[#69ff2f]" />
              <h2 className="text-[24px] font-black uppercase">
                Send Us A <span className="text-[#69ff2f]">Message</span>
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="grid gap-4">
              <div className="grid gap-4 md:grid-cols-2">
                <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="rounded-md border border-white/15 bg-black/45 px-4 py-4 text-sm outline-none transition focus:border-[#69ff2f]"
                />
                <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="rounded-md border border-white/15 bg-black/45 px-4 py-4 text-sm outline-none transition focus:border-[#69ff2f]"
                />
              </div>

                <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="rounded-md border border-white/15 bg-black/45 px-4 py-4 text-sm outline-none transition focus:border-[#69ff2f]"
                />

                <input
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="rounded-md border border-white/15 bg-black/45 px-4 py-4 text-sm outline-none transition focus:border-[#69ff2f]"
                />

                <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows={6}
                className="rounded-md border border-white/15 bg-black/45 px-4 py-4 text-sm outline-none transition focus:border-[#69ff2f]"
                />

              <button
                type="submit"
                className="rounded-md bg-[#69ff2f] px-7 py-4 text-[13px] font-black uppercase text-black transition hover:-translate-y-1 hover:bg-[#7cff45]"
              >
                {loading ? "Sending..." : "Send Message →"}
              </button>

              <p className="flex items-center justify-center gap-2 text-xs text-white/60">
                <ShieldCheck size={14} className="text-[#69ff2f]" />
                We respect your privacy. Your information is safe with us.
              </p>
            </form>
          </div>

          <div className="rounded-xl border border-[#69ff2f]/25 bg-white/[0.04] p-7 shadow-[0_0_30px_rgba(105,255,47,0.08)]">
            <div className="mb-7 flex items-center gap-3">
              <Phone className="text-[#69ff2f]" />
              <h2 className="text-[24px] font-black uppercase">
                Contact Information
              </h2>
            </div>

            <div className="space-y-7 text-sm">
              <Info icon={Phone} title="Phone" text="0489 248 397" />
              <Info icon={Mail} title="Email" text="aa.lawncareservices.j@gmail.com" />
              <Info
                icon={MapPin}
                title="Location"
                text="Innisfail, QLD 4860 and surrounding areas"
              />
              <Info
                icon={Clock3}
                title="Business Hours"
                text="Monday - Friday: 7:00 AM - 6:00 PM"
                secondText="Saturday: 8:00 AM - 4:00 PM"
                thirdText="Sunday: Closed"
              />
            </div>
          </div>
        </div>

        <div className="relative z-10 mx-auto mt-8 grid max-w-[1080px] gap-7 rounded-xl border border-[#69ff2f]/25 bg-white/[0.04] p-7 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h2 className="flex items-center gap-3 text-[24px] font-black uppercase">
              <MapPin className="text-[#69ff2f]" />
              Our Service Area
            </h2>

            <p className="mt-6 text-[15px] leading-7 text-white/80">
              Proudly providing professional lawn care services across
              Innisfail, Fly Fish Point, Mourilyan, Babinda and surrounding
              communities.
            </p>

            <Link
              href="/services"
              className="mt-7 inline-block rounded border border-[#69ff2f] px-7 py-4 text-[13px] font-black uppercase text-[#69ff2f] transition hover:-translate-y-1 hover:bg-[#69ff2f] hover:text-black"
            >
              View All Services →
            </Link>
          </div>

        <div className="relative flex min-h-[320px] items-center justify-center overflow-hidden rounded-lg border border-white/10 bg-black/40 p-6">
        <div className="relative h-[520px] w-[520px] overflow-hidden rounded-full border-2 border-[#69ff2f] shadow-[0_0_45px_rgba(105,255,47,0.22)]">
            <Image
            src="/Service_location.png"
            alt="Aurora Australis service area map"
            fill
            className="object-cover"
            />
        </div>
        </div>
        </div>

        <div className="relative z-10 mx-auto mt-8 flex max-w-[1080px] flex-col items-center justify-between gap-6 rounded-xl border border-[#69ff2f]/25 bg-white/[0.04] p-8 md:flex-row">
          <div className="flex items-center gap-5">
            <div className="flex h-[72px] w-[72px] items-center justify-center rounded-full border border-[#69ff2f] text-[#69ff2f]">
              <CalendarCheck size={34} />
            </div>

            <div>
              <h2 className="text-[25px] font-black uppercase">
                Ready For A <span className="text-[#69ff2f]">Beautiful Lawn?</span>
              </h2>
              <p className="mt-2 text-sm text-white/75">
                Get your free, no-obligation quote today.
              </p>
            </div>
          </div>

          <a
            href="/quote"
            className="rounded-md bg-[#69ff2f] px-8 py-4 text-[13px] font-black uppercase text-black transition hover:-translate-y-1 hover:bg-[#7cff45]"
          >
            Get A Free Quote →
          </a>
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
    </main>
  );
}

function Info({
  icon: Icon,
  title,
  text,
  secondText,
  thirdText,
}: {
  icon: React.ElementType;
  title: string;
  text: string;
  secondText?: string;
  thirdText?: string;
}) {
  return (
    <div className="flex gap-4">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#69ff2f] text-[#69ff2f]">
        <Icon size={22} />
      </div>

      <div>
        <h3 className="font-black">{title}</h3>
        <p className="mt-1 leading-6 text-white/80">{text}</p>
        {secondText && <p className="leading-6 text-white/80">{secondText}</p>}
        {thirdText && <p className="leading-6 text-white/80">{thirdText}</p>}
      </div>
    </div>
  );
}