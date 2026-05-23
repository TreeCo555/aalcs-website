import { gardeningServices } from "@/data/servicesData";
import ServiceCategoryCard from "./ServiceCategoryCard";

export default function GardeningServices() {
  return (
    <section id="garden-maintenance" className="bg-zinc-950 px-6 py-24 text-white sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-green-300">
          Gardening Services
        </p>

        <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
          Professional Garden Care & Presentation
        </h2>

        <p className="mt-5 max-w-3xl text-white/70">
          Professional gardening services focused on clean presentation,
          healthy outdoor spaces, and long-term property upkeep.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {gardeningServices.map((service) => (
            <ServiceCategoryCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}