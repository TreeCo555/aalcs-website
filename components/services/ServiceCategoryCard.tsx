"use client";

type ServiceCategoryCardProps = {
  title: string;
  galleryLink?: string;
  description: string;
  includes: string[];
};

export default function ServiceCategoryCard({
  title,
  galleryLink,
  description,
  includes,
}: ServiceCategoryCardProps) {
  return (
    <article className="group rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-black/30 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-green-300/40 hover:bg-white/[0.07]">
      <h3 className="text-2xl font-bold text-white">{title}</h3>

      <p className="mt-4 text-sm leading-7 text-white/70">{description}</p>

      <ul className="mt-6 space-y-3">
        {includes.map((item) => (
          <li key={item} className="flex gap-3 text-sm text-white/75">
            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-green-300" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      {galleryLink && (
        <a
          href={galleryLink}
          onClick={(event) => {
            event.preventDefault();

            window.location.href = galleryLink;
          }}
          className="mt-6 inline-flex items-center rounded-full border border-green-300/30 px-4 py-2 text-sm font-semibold text-[#66ffcc] transition hover:bg-green-300 hover:text-black"
        >
          View in Gallery →
        </a>
      )}
    </article>
  );
}