import { propertyCareServices } from "@/data/servicesData";
import ServiceCategoryCard from "./ServiceCategoryCard";

export default function PropertyCareServices() {
  return (
    <section id="property-lawn-care" className="bg-black px-6 py-24 text-white sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-green-300">
          Property & Lawn Care
        </p>

        <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
          Property Restoration & Outdoor Care
        </h2>

        <p className="mt-5 max-w-3xl text-white/70">
          Outdoor property maintenance solutions designed to restore,
          maintain, and improve the presentation of residential and
          commercial outdoor spaces.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {propertyCareServices.map((service) => (
            <ServiceCategoryCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}