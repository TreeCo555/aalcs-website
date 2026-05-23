import { lawnMowingServices } from "@/data/servicesData";
import ServiceCategoryCard from "./ServiceCategoryCard";

export default function LawnMowingPackages() {
  return (
    <section id="services" className="bg-black px-6 py-24 text-white sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-green-300">
          Lawn Mowing
        </p>

        <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
          Residential & Commercial Lawn Maintenance
        </h2>

        <p className="mt-5 max-w-3xl text-white/70">
          Professional mowing packages designed for clean presentation, reliable
          upkeep, and outstanding results across homes, businesses, and managed properties.
        </p>

        <div className="mt-12 space-y-20">
          <div>
            <h3 id="residential-lawn-mowing" className="mb-5 text-2xl font-bold text-green-300">
              Residential Lawn Mowing
            </h3>

            <div className="space-y-10">
              <div>
                <h4 className="mb-4 text-xl font-bold text-white">
                  Residential Lawn Mowing Packages
                </h4>

                <div className="space-y-6">
                  {lawnMowingServices.residentialPackages.map((service) => (
                    <div
                      key={service.title}
                      id={service.galleryLink.split("#")[1]}
                      className="scroll-mt-32"
                    >
                      <ServiceCategoryCard {...service} />
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="mb-4 text-xl font-bold text-white">
                  Individual Residential Lawn Services
                </h4>

                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                  {lawnMowingServices.whippersnipping.map((service) => (
                    <div
                      key={service.title}
                      id={service.galleryLink.split("#")[1]}
                      className="scroll-mt-32"
                    >
                      <ServiceCategoryCard {...service} />
                    </div>
                  ))}

                  {lawnMowingServices.edging.map((service) => (
                    <div
                      key={service.title}
                      id={service.galleryLink.split("#")[1]}
                      className="scroll-mt-32"
                    >
                      <ServiceCategoryCard {...service} />
                    </div>
                  ))}
                  {lawnMowingServices.mowingOnly.map((service) => (
                    <div
                      key={service.title}
                      id={service.galleryLink.split("#")[1]}
                      className="scroll-mt-32"
                    >
                      <ServiceCategoryCard {...service} />
                    </div>
                  ))}

                  {lawnMowingServices.blowDownOnly.map((service) => (
                    <div
                      key={service.title}
                      id={service.galleryLink.split("#")[1]}
                      className="scroll-mt-32"
                    >
                      <ServiceCategoryCard {...service} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 id="commercial-lawn-mowing" className="mb-5 text-2xl font-bold text-green-300">
              Commercial Grounds Maintenance
            </h3>

            <div className="space-y-6">
              {lawnMowingServices.commercial.map((service) => (
                <div
                  key={service.title}
                  id={service.galleryLink.split("#")[1]}
                  className="scroll-mt-32"
                >
                  <ServiceCategoryCard {...service} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}