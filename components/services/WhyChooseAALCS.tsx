import {
  ShieldCheck,
  Building2,
  Sparkles,
  MapPin,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Professional & Reliable",
    description:
      "Consistent, high-quality service with attention to detail and dependable scheduling.",
  },

  {
    icon: Building2,
    title: "Residential & Commercial",
    description:
      "Tailored outdoor maintenance solutions for homes, businesses, and managed properties.",
  },

  {
    icon: Sparkles,
    title: "Presentation Focused",
    description:
      "We prioritise clean finishes, sharp presentation, and visually outstanding results.",
  },

  {
    icon: MapPin,
    title: "Local & Trusted",
    description:
      "Proudly servicing Innisfail, Flying Fish Point, Mourilyan, Babinda, and surrounding communities.",
  },
];

export default function WhyChooseAALCS() {
  return (
    <section className="bg-zinc-950 px-6 py-24 text-white sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-green-300">
          Why Choose AALCS
        </p>

        <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
          Professional Service Backed By Quality & Care
        </h2>

        <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-400/10">
                  <Icon className="h-7 w-7 text-green-300" />
                </div>

                <h3 className="mt-6 text-xl font-bold">
                  {feature.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-white/70">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}