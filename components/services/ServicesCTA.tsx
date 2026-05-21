import Link from "next/link";

export default function ServicesCTA() {
  return (
    <section className="bg-black px-6 py-24 text-white sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-green-300/20 bg-gradient-to-br from-green-400/15 via-white/[0.04] to-black p-8 shadow-2xl shadow-green-950/40 sm:p-12">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-green-300">
          Get Started
        </p>

        <h2 className="mt-4 max-w-3xl text-4xl font-bold sm:text-5xl">
          Ready to Transform Your Outdoor Space?
        </h2>

        <p className="mt-5 max-w-2xl text-white/75">
          Contact Aurora Australis Lawn Care Services today for professional
          lawn mowing, gardening, and property maintenance solutions tailored
          to your property.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/quote"
            className="rounded-full bg-green-400 px-7 py-3 text-sm font-bold uppercase tracking-wide text-black transition hover:bg-green-300"
          >
            Request a Quote
          </Link>

          <Link
            href="/"
            className="rounded-full border border-white/20 px-7 py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:border-green-300 hover:text-green-300"
          >
            Back Home
          </Link>
        </div>
      </div>
    </section>
  );
}