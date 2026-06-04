"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Navbar from "@/components/Navbar";

type GalleryJob = {
  title: string;
  location: string;
  beforeImages: string[];
  afterImages: string[];
};

type GalleryItem = {
  title: string;
  description?: string;
  includes?: string[];
  jobCategory: string;
  jobs: GalleryJob[];
};

type GalleryCategory = {
  title: string;
  description?: string;
  items: GalleryItem[];
};

type GallerySection = {
  title: string;
  subtitle: string;
  categories: GalleryCategory[];
};


function createJobs(basePath: string, title: string, location = "Innisfail, QLD") {
  return Array.from({ length: 10 }, (_, index) => {
    const jobNumber = index + 1;

    return {
      title: `${title} — Job ${jobNumber}`,
      location,
      beforeImages: [
        `${basePath}/job-${jobNumber}/before/before-1`,
        `${basePath}/job-${jobNumber}/before/before-2`,
        `${basePath}/job-${jobNumber}/before/before-3`,
        `${basePath}/job-${jobNumber}/before/before-4`,
        `${basePath}/job-${jobNumber}/before/before-5`,
        `${basePath}/job-${jobNumber}/before/before-6`,
        `${basePath}/job-${jobNumber}/before/before-7`,
        `${basePath}/job-${jobNumber}/before/before-8`,
        `${basePath}/job-${jobNumber}/before/before-9`,
        `${basePath}/job-${jobNumber}/before/before-10`,
      ],
      afterImages: [
        `${basePath}/job-${jobNumber}/after/after-1`,
        `${basePath}/job-${jobNumber}/after/after-2`,
        `${basePath}/job-${jobNumber}/after/after-3`,
        `${basePath}/job-${jobNumber}/after/after-4`,
        `${basePath}/job-${jobNumber}/after/after-5`,
        `${basePath}/job-${jobNumber}/after/after-6`,
        `${basePath}/job-${jobNumber}/after/after-7`,
        `${basePath}/job-${jobNumber}/after/after-8`,
        `${basePath}/job-${jobNumber}/after/after-9`,
        `${basePath}/job-${jobNumber}/after/after-10`,
      ],
    };
  });
}

const gallerySections: GallerySection[] = [
  {
    title: "Residential Lawn Mowing",
    subtitle:
      "Professional residential lawn maintenance packages designed for clean, reliable, and polished property presentation.",
    categories: [
      {
        title: "Residential Lawn Mowing Packages",
        items: [
          {
            title: "Standard Residential Lawn Maintenance",
            description:
              "A complete professional lawn maintenance service including precision mowing, edging, whipper snipping, and full clean-up blowing for residential properties.",
            includes: [
              "Professional lawn mowing",
              "Precision edging",
              "Whipper snipping",
              "Pathway and driveway blow down",
              "General property presentation finish",
            ],
            jobCategory: "Regular Residential Mowing Jobs",
            jobs: createJobs(
              "/gallery/residential-lawn-mowing/standard-residential-lawn-maintenance",
              "Standard Residential Lawn Maintenance"
            ),
          },
          {
            title: "Complete Residential Mulch Finish Lawn Maintenance",
            description:
              "An enhanced residential lawn maintenance service designed for thick or heavy grass growth, including a second precision mow-over for a cleaner finish.",
            includes: [
              "Professional lawn mowing",
              "Second mow-over mulching pass",
              "Precision edging",
              "Whipper snipping",
              "Pathway and driveway blow down",
              "General property presentation finish",
            ],
            jobCategory: "Mulch Finish Lawn Jobs",
            jobs: createJobs(
              "/gallery/residential-lawn-mowing/complete-residential-mulch-finish-lawn-maintenance",
              "Complete Residential Mulch Finish"
            ),
          },
          {
            title: "Premium Residential Lawn Maintenance",
            description:
              "A premium lawn maintenance package including full mowing and presentation services with grass clipping collection.",
            includes: [
              "Professional lawn mowing",
              "Precision edging",
              "Whipper snipping",
              "Full blow down and clean-up",
              "Grass clipping collection and catch-up service",
            ],
            jobCategory: "Premium Residential Mowing Jobs",
            jobs: createJobs(
              "/gallery/residential-lawn-mowing/premium-residential-lawn-maintenance",
              "Premium Residential Lawn Maintenance"
            ),
          },
          {
            title: "Complete Residential Lawn Maintenance",
            description:
              "A fully managed lawn care solution including mowing, edging, clipping collection, and responsible green waste disposal.",
            includes: [
              "Professional lawn mowing",
              "Precision edging",
              "Whipper snipping",
              "Full clean-up and blow down",
              "Grass clipping collection",
              "Green waste removal and disposal",
            ],
            jobCategory: "Complete Residential Lawn Jobs",
            jobs: createJobs(
              "/gallery/residential-lawn-mowing/complete-residential-lawn-maintenance",
              "Complete Residential Lawn Maintenance"
            ),
          },
        ],
      },
      {
        title: "Whippersnipping",
        items: [
          {
            title: "Professional Whippersnipping",
            description:
              "Professional whippersnipping services for fence lines, pathways, edges, and difficult-to-reach areas.",
            includes: [
              "Fence line trimming",
              "Pathway edge trimming",
              "Garden edge detailing",
              "Difficult access trimming",
              "Professional property presentation finish",
            ],
            jobCategory: "Whippersnipping Jobs",
            jobs: createJobs(
              "/gallery/residential-lawn-mowing/professional-whippersnipping",
              "Professional Whippersnipping"
            ),
          },
        ],
      },

      {
        title: "Edging",
        items: [
          {
            title: "Professional Lawn Edging",
            description:
              "Precision lawn edging services designed to create crisp boundaries and clean property presentation.",
            includes: [
              "Concrete edge detailing",
              "Driveway edge cutting",
              "Pathway edging",
              "Garden border edging",
              "Clean professional finish",
            ],
            jobCategory: "Edging Jobs",
            jobs: createJobs(
              "/gallery/residential-lawn-mowing/professional-lawn-edging",
              "Professional Lawn Edging"
            ),
          },
        ],
      },

      {
        title: "Professional Lawn Mowing",
        items: [
          {
            title: "Professional Lawn Mowing",
            description:
              "Professional lawn mowing services designed to maintain clean, healthy, and well-presented residential lawns.",
            includes: [
              "Professional lawn mowing",
              "Consistent cutting finish",
              "Residential lawn maintenance",
              "Clean mowing patterns",
              "Reliable presentation service",
            ],
            jobCategory: "Professional Lawn Mowing Jobs",
            jobs: createJobs(
              "/gallery/residential-lawn-mowing/professional-lawn-mowing",
              "Professional Lawn Mowing"
            ),
          },
        ],
      },

      {
        title: "Professional Blow Down Service",
        items: [
          {
            title: "Professional Blow Down Service",
            description:
              "Professional outdoor blow down and clean-up services for maintaining polished property presentation.",
            includes: [
              "Driveway blow down",
              "Pathway cleaning",
              "Patio and outdoor clearing",
              "Grass clipping removal",
              "Clean property presentation finish",
            ],
            jobCategory: "Professional Blow Down Jobs",
            jobs: createJobs(
              "/gallery/residential-lawn-mowing/professional-blow-down-service",
              "Professional Blow Down Service"
            ),
          },
        ],
      },

    ],
  },

  {
    title: "Commercial Lawn Mowing",
    subtitle:
      "Professional grounds maintenance and presentation services tailored for commercial properties and managed sites.",
    categories: [
      {
        title: "Commercial Grounds Services",
        items: [
          {
            title: "Commercial Grounds Maintenance",
            description:
              "Professional mowing and grounds presentation services tailored for commercial properties and managed sites.",
            includes: [
              "Commercial lawn mowing",
              "Precision edging",
              "Whipper snipping",
              "Professional site finishing",
            ],
            jobCategory: "Commercial Grounds Jobs",
            jobs: createJobs(
              "/gallery/commercial-lawn-mowing/commercial-grounds-maintenance",
              "Commercial Grounds Maintenance"
            ),
          },
        ],
      },
    ],
  },
  {
    title: "Garden Maintenance",
    subtitle:
      "Professional garden care services focused on tidy presentation, healthy outdoor spaces, and long-term property upkeep.",
    categories: [
      {
        title: "General Garden Maintenance",
        items: [
          {
            title: "Garden Tidy-Ups",
            jobCategory: "Garden Tidy-Up Jobs",
            jobs: createJobs(
              "/gallery/garden-maintenance/general-garden-maintenance/garden-tidy-ups",
              "Garden Tidy-Ups"
            ),
          },
          {
            title: "Light Pruning and Trimming",
            jobCategory: "Light Pruning Jobs",
            jobs: createJobs(
              "/gallery/garden-maintenance/general-garden-maintenance/light-pruning-and-trimming",
              "Light Pruning and Trimming"
            ),
          },
          {
            title: "Weed Removal",
            jobCategory: "Garden Weed Removal Jobs",
            jobs: createJobs(
              "/gallery/garden-maintenance/general-garden-maintenance/weed-removal",
              "Weed Removal"
            ),
          },
          {
            title: "Green Waste Clean-Up",
            jobCategory: "Green Waste Clean-Up Jobs",
            jobs: createJobs(
              "/gallery/garden-maintenance/general-garden-maintenance/green-waste-clean-up",
              "Green Waste Clean-Up"
            ),
          },
        ],
      },
      {
        title: "Hedge Trimming & Shaping",
        items: [
          {
            title: "Hedge Trimming",
            jobCategory: "Hedge Trimming Jobs",
            jobs: createJobs(
              "/gallery/garden-maintenance/hedge-trimming-shaping/hedge-trimming",
              "Hedge Trimming"
            ),
          },
          {
            title: "Decorative Shaping",
            jobCategory: "Decorative Hedge Shaping Jobs",
            jobs: createJobs(
              "/gallery/garden-maintenance/hedge-trimming-shaping/decorative-shaping",
              "Decorative Shaping"
            ),
          },
          {
            title: "Boundary Hedge Maintenance",
            jobCategory: "Boundary Hedge Jobs",
            jobs: createJobs(
              "/gallery/garden-maintenance/hedge-trimming-shaping/boundary-hedge-maintenance",
              "Boundary Hedge Maintenance"
            ),
          },
          {
            title: "Debris Clean-Up",
            jobCategory: "Hedge Debris Clean-Up Jobs",
            jobs: createJobs(
              "/gallery/garden-maintenance/hedge-trimming-shaping/debris-clean-up",
              "Debris Clean-Up"
            ),
          },
        ],
      },
      {
        title: "Garden Labour & Outdoor Services",
        description:
          "Professional garden work focused on the needs and wants of a garden.",
        items: [
          {
            title: "Garden Bed Removal",
            jobCategory: "Garden Bed Removal Jobs",
            jobs: createJobs(
              "/gallery/garden-maintenance/garden-labour-outdoor-services/garden-bed-removal",
              "Garden Bed Removal"
            ),
          },
          {
            title: "Miscellaneous Garden Labour and Outdoor Assistance",
            jobCategory: "Miscellaneous Garden Work Jobs",
            jobs: createJobs(
              "/gallery/garden-maintenance/garden-labour-outdoor-services/miscellaneous-garden-labour-and-outdoor-assistance",
              "Miscellaneous Garden Labour"
            ),
          },
        ],
      },
    ],
  },
  {
    title: "Lawn Care",
    subtitle:
      "Outdoor property maintenance, vegetation control, restoration, and clean-up services for improved property presentation.",
    categories: [
      {
        title: "Weed Control & Vegetation Management",
        items: [
          {
            title: "Selective Weed Treatment",
            jobCategory: "Selective Weed Treatment Jobs",
            jobs: createJobs(
              "/gallery/lawn-care/weed-control-vegetation-management/selective-weed-treatment",
              "Selective Weed Treatment"
            ),
          },
          {
            title: "Fence Line Weed Control",
            jobCategory: "Fence Line Weed Control Jobs",
            jobs: createJobs(
              "/gallery/lawn-care/weed-control-vegetation-management/fence-line-weed-control",
              "Fence Line Weed Control"
            ),
          },
          {
            title: "Targeted Spray Application",
            jobCategory: "Targeted Spray Application Jobs",
            jobs: createJobs(
              "/gallery/lawn-care/weed-control-vegetation-management/targeted-spray-application",
              "Targeted Spray Application"
            ),
          },
        ],
      },
      {
        title: "Yard Clean-Ups & Property Restoration",
        items: [
          {
            title: "Overgrown Yard Restoration",
            jobCategory: "Overgrown Yard Restoration Jobs",
            jobs: createJobs(
              "/gallery/lawn-care/yard-clean-ups-property-restoration/overgrown-yard-restoration",
              "Overgrown Yard Restoration"
            ),
          },
          {
            title: "Vegetation Reduction",
            jobCategory: "Vegetation Reduction Jobs",
            jobs: createJobs(
              "/gallery/lawn-care/yard-clean-ups-property-restoration/vegetation-reduction",
              "Vegetation Reduction"
            ),
          },
          {
            title: "Waste Removal",
            jobCategory: "Waste Removal Jobs",
            jobs: createJobs(
              "/gallery/lawn-care/yard-clean-ups-property-restoration/waste-removal",
              "Waste Removal"
            ),
          },
          {
            title: "Property Presentation Improvement",
            jobCategory: "Property Presentation Jobs",
            jobs: createJobs(
              "/gallery/lawn-care/yard-clean-ups-property-restoration/property-presentation-improvement",
              "Property Presentation Improvement"
            ),
          },
        ],
      },
      {
        title: "Tree & Small Vegetation Removal",
        items: [
          {
            title: "Small Tree Removal",
            jobCategory: "Small Tree Removal Jobs",
            jobs: createJobs(
              "/gallery/lawn-care/tree-small-vegetation-removal/small-tree-removal",
              "Small Tree Removal"
            ),
          },
          {
            title: "Overgrown Vegetation Clearing",
            jobCategory: "Overgrown Vegetation Clearing Jobs",
            jobs: createJobs(
              "/gallery/lawn-care/tree-small-vegetation-removal/overgrown-vegetation-clearing",
              "Overgrown Vegetation Clearing"
            ),
          },
          {
            title: "Palm and Unwanted Plant Removal",
            jobCategory: "Palm and Plant Removal Jobs",
            jobs: createJobs(
              "/gallery/lawn-care/tree-small-vegetation-removal/palm-and-unwanted-plant-removal",
              "Palm and Unwanted Plant Removal"
            ),
          },
          {
            title: "Branch and Limb Removal",
            jobCategory: "Branch and Limb Removal Jobs",
            jobs: createJobs(
              "/gallery/lawn-care/tree-small-vegetation-removal/branch-and-limb-removal",
              "Branch and Limb Removal"
            ),
          },
          {
            title: "Site Clean-Up and Green Waste Removal",
            jobCategory: "Site Clean-Up Jobs",
            jobs: createJobs(
              "/gallery/lawn-care/tree-small-vegetation-removal/site-clean-up-and-green-waste-removal",
              "Site Clean-Up and Green Waste Removal"
            ),
          },
          {
            title: "Safe and Professional Property Presentation Finish",
            jobCategory: "Final Presentation Jobs",
            jobs: createJobs(
              "/gallery/lawn-care/tree-small-vegetation-removal/safe-professional-property-presentation-finish",
              "Professional Property Presentation Finish"
            ),
          },
        ],
      },
    ],
  },
];

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function Accordion({
  id,
  title,
  subtitle,
  children,
  defaultOpen = false,
  level = "section",
  targetIds = [],
}: {
  id?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  level?: "section" | "category" | "service" | "job";
  targetIds?: string[];
}) {
  const detailsRef = useRef<HTMLDetailsElement | null>(null);
  const [open, setOpen] = useState(defaultOpen);
  const [shouldRenderChildren, setShouldRenderChildren] = useState(defaultOpen);

  useEffect(() => {
    if (!id) return;

    const openAndScrollToHash = () => {
      const hash = window.location.hash.replace("#", "");

      if (!hash) return;

      const shouldOpen = hash === id || targetIds.includes(hash);

      if (shouldOpen) {
        setOpen(true);
        setShouldRenderChildren(true);

        if (detailsRef.current) {
          detailsRef.current.open = true;
        }
      }

      if (hash === id) {
        setTimeout(() => {
          document.getElementById(id)?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 500);
      }
    };

    openAndScrollToHash();
    window.addEventListener("hashchange", openAndScrollToHash);

    return () => {
      window.removeEventListener("hashchange", openAndScrollToHash);
    };
  }, [id, targetIds]);

  const styles = {
    section:
      "rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-2xl shadow-black/30",
    category: "rounded-3xl border border-emerald-400/20 bg-slate-900/85",
    service: "rounded-3xl border border-white/10 bg-black/25",
    job: "rounded-2xl border border-white/10 bg-slate-950/70",
  };

  return (
    <details
      ref={detailsRef}
      id={id}
      onToggle={(event) => {
        const isOpen = event.currentTarget.open;

        setOpen(isOpen);

        if (isOpen) {
          setShouldRenderChildren(true);
        }
      }}
      className={`${styles[level]} scroll-mt-28`}
    >
      <summary className="flex w-full cursor-pointer list-none items-center justify-between gap-5 px-6 py-5 text-left sm:px-8 [&::-webkit-details-marker]:hidden">
        <div>
          <h3
            className={
              level === "section"
                ? "text-2xl font-black text-white sm:text-3xl"
                : level === "category"
                  ? "text-xl font-extrabold text-white sm:text-2xl"
                  : "text-lg font-bold text-white sm:text-xl"
            }
          >
            {title}
          </h3>

          {subtitle && (
            <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-400 sm:text-base">
              {subtitle}
            </p>
          )}
        </div>

        <span className="pointer-events-none shrink-0 rounded-full bg-emerald-500 px-4 py-2 text-xs font-black uppercase tracking-wide text-slate-950 transition hover:bg-emerald-400">
          {open ? "Close" : "View"}
        </span>
      </summary>

      <div className="border-t border-white/10 p-5 sm:p-8">
        {children}
      </div>
    </details>
  );
}

function GalleryPhoto({
  imageBasePath,
  alt,
}: {
  imageBasePath: string;
  alt: string;
}) {
  const supportedExtensions = ["jpg", "jpeg", "png", "JPG", "JPEG", "PNG"];
  const [extensionIndex, setExtensionIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) {
    return null;
  }

  const imageSrc = `${imageBasePath}.${supportedExtensions[extensionIndex]}`;

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900">
      <img
        src={imageSrc}
        loading="lazy"
        alt={alt}
        className="h-44 w-full object-cover"
        onError={() => {
          const nextExtensionIndex = extensionIndex + 1;

          if (nextExtensionIndex < supportedExtensions.length) {
            setExtensionIndex(nextExtensionIndex);
          } else {
            setIsVisible(false);
          }
        }}
      />
    </div>
  );
}

function PhotoGrid({
  title,
  images,
  type,
}: {
  title: string;
  images: string[];
  type: "before" | "after";
}) {
  return (
    <div>
      <h6
        className={`mb-3 text-sm font-black uppercase tracking-[0.25em] ${
          type === "before" ? "text-slate-300" : "text-emerald-300"
        }`}
      >
        {title}
      </h6>

      <div className="grid gap-3 sm:grid-cols-3">
        {images.map((image, index) => (
          <GalleryPhoto
            key={image}
            imageBasePath={image}
            alt={`${title} photo ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

function JobAccordion({ job }: { job: GalleryJob }) {
  return (
    <Accordion title={job.title} subtitle={job.location} level="job">
      <div className="grid gap-6 lg:grid-cols-2">
        <PhotoGrid title="Before Photos" images={job.beforeImages} type="before" />
        <PhotoGrid title="After Photos" images={job.afterImages} type="after" />
      </div>
    </Accordion>
  );
}

function GalleryItemAccordion({ item }: { item: GalleryItem }) {
  return (
    <Accordion
      id={slugify(item.title)}
      title={item.title}
      subtitle={item.jobCategory}
      level="service"
    >
      {item.description && (
        <p className="mb-6 max-w-4xl leading-7 text-slate-300">
          {item.description}
        </p>
      )}

      {item.includes && (
        <ul className="mb-8 grid gap-3 sm:grid-cols-2">
          {item.includes.map((service) => (
            <li
              key={service}
              className="rounded-xl border border-emerald-400/20 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-50"
            >
              ✓ {service}
            </li>
          ))}
        </ul>
      )}

      <div className="mb-5 rounded-2xl border border-emerald-400/20 bg-emerald-400/10 px-5 py-4">
        <p className="text-sm font-black uppercase tracking-[0.25em] text-emerald-300">
          Job Category
        </p>
        <p className="mt-2 text-lg font-bold text-white">{item.jobCategory}</p>
      </div>

      <div className="space-y-4">
        {item.jobs.map((job) => (
          <JobAccordion key={job.title} job={job} />
        ))}
      </div>

      <div className="mt-8">
        <Link
          href="/quote"
          className="inline-flex rounded-full border border-emerald-400/40 px-5 py-2 text-sm font-semibold text-emerald-200 transition hover:bg-emerald-400 hover:text-slate-950"
        >
          Request this service
        </Link>
      </div>
    </Accordion>
  );
}

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <section className="relative overflow-hidden px-6 py-28 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(16,185,129,0.35),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(59,130,246,0.25),_transparent_35%)]" />

        <div className="relative mx-auto max-w-4xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.35em] text-emerald-300">
            AALCS Gallery
          </p>

          <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl">
            Our Work Gallery
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Browse our before and after job results by service area. Open only
            the section, service, and job you want to view for a smoother gallery
            experience.
          </p>

          <div className="mt-10">
            <Link
              href="/quote"
              className="rounded-full bg-emerald-500 px-8 py-4 text-sm font-bold uppercase tracking-wide text-slate-950 transition hover:bg-emerald-400"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="mb-8">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-emerald-300">
            Services
          </p>
          <h2 className="text-3xl font-black text-white sm:text-4xl">
            Choose a Gallery Category
          </h2>
        </div>

        <div className="space-y-6">
          {gallerySections.map((section) => (
            <Accordion
              key={section.title}
              id={slugify(section.title)}
              title={section.title}
              subtitle={section.subtitle}
              level="section"
              targetIds={section.categories.flatMap((category) => [
                slugify(category.title),
                ...category.items.map((item) => slugify(item.title)),
              ])}
            >
              <div className="space-y-6">
                {section.categories.map((category) => (
            <Accordion
              key={category.title}
              id={slugify(category.title)}
              title={category.title}
              subtitle={category.description}
              level="category"
              targetIds={category.items.map((item) => slugify(item.title))}
            >
                    <div className="space-y-5">
                      {category.items.map((item) => (
                        <GalleryItemAccordion key={item.title} item={item} />
                      ))}
                    </div>
                  </Accordion>
                ))}
              </div>
            </Accordion>
          ))}
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
                  <p className="tracking-[0.12em]">LAWN CARE SERVICES</p>
                </div>
              </div>

              <p className="mt-5 text-[13px] font-bold">
                Professional care. Outstanding results.
              </p>
            </div>

            <div>
              <h4 className="font-black uppercase text-[#69ff2f]">Services</h4>
              <ul className="mt-3 space-y-1 leading-6">
                <li><Link href="/services#lawn-mowing-packages">Residential Lawn Mowing</Link></li>
                <li><Link href="/services#lawn-mowing-packages">Commercial Lawn Mowing</Link></li>
                <li><Link href="/services#garden-maintenance">Garden Maintenance</Link></li>
                <li><Link href="/services#property-lawn-care">Lawn Care</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-black uppercase text-[#69ff2f]">
                Quick Links
              </h4>
              <ul className="mt-3 space-y-1 leading-6">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/services">Services</Link></li>
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/gallery">Gallery</Link></li>
                <li>
                  <Link href="/reviews" className="transition hover:text-[#69ff2f]">
                    Reviews
                  </Link>
                </li>
                <li><Link href="/contact">Contact Us</Link></li>
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
