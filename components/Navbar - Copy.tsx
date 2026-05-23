"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const linkClass = (href: string) =>
    pathname === href
      ? "border-b-2 border-[#69ff2f] pb-3 text-[#69ff2f] transition duration-300 hover:-translate-y-1"
      : "transition duration-300 hover:-translate-y-1 hover:text-[#69ff2f]";

  return (
    <nav className="absolute left-0 top-0 z-[99999] w-full border-b border-white/10 bg-black/10">
      <div className="mx-auto flex max-w-[1180px] items-center justify-between px-4 py-3 md:px-8 md:py-4">
        <Link href="/" className="flex items-center gap-2 md:gap-3">
          <Image
            src="/logo.png"
            alt="Aurora Australis Lawn Care Services"
            width={58}
            height={58}
            priority
            className="rounded-full"
          />

          <div className="leading-tight">
            <div className="text-[16px] font-black text-[#19ff37] sm:text-[20px] md:text-[25px]">
              AURORA AUSTRALIS
            </div>
            <div className="text-[10px] font-bold tracking-[0.12em] text-white sm:text-[12px] md:text-[15px] md:tracking-[0.18em]">
              LAWN CARE SERVICES
            </div>
          </div>
        </Link>

        <div className="hidden items-center gap-9 text-[13px] font-bold uppercase text-white lg:flex">
          <Link href="/" className={linkClass("/")}>
            Home
          </Link>

          <Link href="/services" className={linkClass("/services")}>
            Services
          </Link>

          <Link href="/about" className={linkClass("/about")}>
            About Us
          </Link>

          <Link href="/gallery" className="transition duration-300 hover:-translate-y-1 hover:text-[#69ff2f]">
            Gallery
          </Link>

          <Link href="/contact" className={linkClass("/contact")}>
            Contact Us
          </Link>

          <Link
            href="/quote"
            className="rounded border border-[#69ff2f] px-6 py-4 text-white transition duration-300 hover:-translate-y-1 hover:bg-[#19b51f]"
          >
            Get A Free Quote →
          </Link>
        </div>
      </div>
    </nav>
  );
}