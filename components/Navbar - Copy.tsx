import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="absolute left-0 top-0 z-50 w-full border-b border-white/10 bg-black/10">
      <div className="mx-auto flex max-w-[1180px] items-center justify-between px-8 py-4">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Aurora Australis Lawn Care Services"
            width={72}
            height={72}
            priority
            className="rounded-full"
          />

          <div className="leading-tight">
            <div className="text-[25px] font-black text-[#19ff37]">
              AURORA AUSTRALIS
            </div>
            <div className="text-[15px] font-bold tracking-[0.18em] text-white">
              LAWN CARE SERVICES
            </div>
          </div>
        </Link>

        <div className="hidden items-center gap-9 text-[13px] font-bold uppercase text-white lg:flex">
          <Link
            href="/"
            className="border-b-2 border-[#69ff2f] pb-3 text-[#69ff2f] transition duration-300 hover:-translate-y-1"
          >
            Home
          </Link>

          <Link
            href="/services"
            className="transition duration-300 hover:-translate-y-1 hover:text-[#69ff2f]"
          >
            Services
          </Link>

          <Link
            href="#about"
            className="transition duration-300 hover:-translate-y-1 hover:text-[#69ff2f]"
          >
            About Us
          </Link>

          <Link
            href="#gallery"
            className="transition duration-300 hover:-translate-y-1 hover:text-[#69ff2f]"
          >
            Gallery
          </Link>

          <Link
            href="/contact"
            className="transition duration-300 hover:-translate-y-1 hover:text-[#69ff2f]"
          >
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