"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const linkClass = (href: string) =>
    pathname === href
      ? "border-b-2 border-[#69ff2f] pb-3 text-[#69ff2f] transition duration-300 hover:-translate-y-1"
      : "transition duration-300 hover:-translate-y-1 hover:text-[#69ff2f]";

  return (
    <nav className="absolute left-0 top-0 z-[99999] w-full border-b border-white/10 bg-black/20 backdrop-blur-sm">
      <div className="mx-auto flex max-w-[1180px] items-center justify-between px-4 py-3 md:px-8 md:py-4">
        <Link href="/" className="flex items-center gap-2 md:gap-3">
          <Image
            src="/logo.png"
            alt="Aurora Australis Lawn Care Services"
            width={58}
            height={58}
            priority
            className="rounded-full md:h-[72px] md:w-[72px]"
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

        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          className="rounded border border-[#69ff2f] px-4 py-2 text-[12px] font-black uppercase text-white lg:hidden"
        >
          Menu
        </button>

        <div className="hidden items-center gap-9 text-[13px] font-bold uppercase text-white lg:flex">
          <Link href="/" className={linkClass("/")}>Home</Link>
          <Link href="/services" className={linkClass("/services")}>Services</Link>
          <Link href="/about" className={linkClass("/about")}>About Us</Link>
          <Link href="/gallery" className="transition duration-300 hover:-translate-y-1 hover:text-[#69ff2f]">Gallery</Link>
          <Link href="/contact" className={linkClass("/contact")}>Contact Us</Link>

          <Link
            href="/quote"
            className="rounded border border-[#69ff2f] px-6 py-4 text-white transition duration-300 hover:-translate-y-1 hover:bg-[#19b51f]"
          >
            Get A Free Quote →
          </Link>
        </div>
      </div>

      {menuOpen && (
        <div className="absolute left-4 right-4 top-full z-[100000] mt-3 rounded-xl border border-[#69ff2f]/40 bg-black/95 p-4 text-center text-[14px] font-bold uppercase text-white shadow-[0_0_30px_rgba(0,255,80,0.35)] lg:hidden">
          <Link href="/" className="block py-3">Home</Link>
          <Link href="/services" className="block py-3">Services</Link>
          <Link href="/about" className="block py-3">About Us</Link>
          <Link href="/gallery" className="block py-3">Gallery</Link>
          <Link href="/contact" className="block py-3">Contact Us</Link>
          <Link href="/quote" className="mt-3 block rounded bg-[#08c51f] px-4 py-4">
            Get A Free Quote →
          </Link>
        </div>
      )}
    </nav>
  );
}