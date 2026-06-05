"use client";

import Navbar from "@/components/Navbar";
import { useEffect, useRef, useState } from "react";
import { featuredVideos } from "@/data/reviews/featuredVideos";
import { customerReviews } from "@/data/reviews/customerReviews";
import Image from "next/image";
import Link from "next/link";
import RotatingGeneralReviews from "@/components/reviews/RotatingGeneralReviews";

const services = [
  {
    title: "Standard Residential Lawn Maintenance",
    featuredVideos: 0,
    reviews: 0,
  },
  {
    title: "Complete Residential Mulch Finish Lawn Maintenance",
    featuredVideos: 0,
    reviews: 0,
  },
  {
    title: "Premium Residential Lawn Maintenance",
    featuredVideos: 0,
    reviews: 0,
  },
  {
    title: "Complete Residential Lawn Maintenance",
    featuredVideos: 0,
    reviews: 0,
  },
  {
    title: "Professional Whippersnipping",
    featuredVideos: 0,
    reviews: 0,
  },
  {
    title: "Professional Lawn Edging",
    featuredVideos: 0,
    reviews: 0,
  },
  {
    title: "Professional Lawn Mowing",
    featuredVideos: 0,
    reviews: 0,
  },
  {
    title: "Professional Blow Down Service",
    featuredVideos: 0,
    reviews: 0,
  },
  {
    title: "Commercial Grounds Maintenance",
    featuredVideos: 0,
    reviews: 0,
  },
  {
    title: "General Garden Maintenance",
    featuredVideos: 0,
    reviews: 0,
  },
  {
    title: "Hedge Trimming & Shaping",
    featuredVideos: 0,
    reviews: 0,
  },
  {
    title: "Garden Labour & Outdoor Services",
    featuredVideos: 0,
    reviews: 0,
  },
  {
    title: "Weed Control & Vegetation Management",
    featuredVideos: 0,
    reviews: 0,
  },
  {
    title: "Yard Clean-Ups & Property Restoration",
    featuredVideos: 0,
    reviews: 0,
  },
  {
    title: "Tree & Small Vegetation Removal",
    featuredVideos: 0,
    reviews: 0,
  },
];



export default function ReviewsPage() {
  const [selectedService, setSelectedService] = useState<string | null>(null);
    const [generalRating, setGeneralRating] = useState(5);
    const [serviceRating, setServiceRating] = useState(5);

    const [generalReview, setGeneralReview] = useState("");
    const [serviceReview, setServiceReview] = useState("");
    const [generalClient, setGeneralClient] = useState("");
    const [serviceClient, setServiceClient] = useState("");

    const [generalSubmitted, setGeneralSubmitted] = useState(false);
    const [serviceSubmitted, setServiceSubmitted] = useState(false);
  const detailRef = useRef<HTMLDivElement | null>(null);
    const [approvedReviews, setApprovedReviews] = useState<any[]>([]);

    useEffect(() => {
    async function loadApprovedReviews() {
        const response = await fetch("/api/reviews/approved");
        const data = await response.json();

        if (data.success) {
        setApprovedReviews(data.reviews);
        }
    }

    loadApprovedReviews();
    }, []);

    const approvedGeneralReviews = approvedReviews.filter(
      (review) =>
        review.reviewType === "general" ||
        review.showInGeneralReviews === true
    );
    
  const openService = (title: string) => {
    setSelectedService(title);

    setTimeout(() => {
      detailRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  };

  const closeService = () => {
    setSelectedService(null);
  };

    const selectedServiceData = services.find(
    (service) => service.title === selectedService
    );

    const approvedServiceReviews = selectedServiceData
      ? approvedReviews.filter(
          (review) =>
            review.reviewType === "service" &&
            review.serviceTitle === selectedServiceData.title
        )
      : [];

    const featuredServiceReviews = approvedServiceReviews.filter(
      (review) => review.featured === true
    );

    const additionalServiceReviews = approvedServiceReviews.filter(
      (review) => review.featured !== true
    );

    const totalApprovedReviews = approvedReviews.length;


    const averageRating =
    totalApprovedReviews > 0
        ? (
            approvedReviews.reduce((sum, review) => sum + review.rating, 0) /
            totalApprovedReviews
        ).toFixed(1)
        : "0.0";

    const totalFeaturedVideos = Object.values(featuredVideos).reduce(
    (sum, serviceVideos) => sum + serviceVideos.length,
    0
    );

    const sortedServices = [...services].sort((a, b) => {
    const aVideos = featuredVideos[a.title]?.length ?? 0;
    const bVideos = featuredVideos[b.title]?.length ?? 0;

    const aReviews =
        approvedReviews.filter(
        (review) =>
            review.reviewType === "service" &&
            review.serviceTitle === a.title
        ).length + a.reviews;

    const bReviews =
        approvedReviews.filter(
        (review) =>
            review.reviewType === "service" &&
            review.serviceTitle === b.title
        ).length + b.reviews;

    if (bVideos !== aVideos) return bVideos - aVideos;

    return bReviews - aReviews;
    });
  return (
    <main className="overflow-hidden bg-black text-white">
      <Navbar />

      <div className="px-6 py-32">
      <section className="mx-auto max-w-6xl text-center">
        <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#69ff2f]">
          AALCS Reviews
        </p>

        <h1 className="mt-4 text-4xl font-black md:text-6xl">
          Customer Reviews & Job Videos
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-lg text-white/80">
          Browse service-specific reviews, featured job videos, and customer
          feedback for Aurora Australis Lawn Care Services.
        </p>
        <div className="mx-auto mt-8 grid max-w-4xl gap-4 md:grid-cols-4">
        <div className="rounded-2xl border border-[#69ff2f]/30 bg-white/10 p-4 backdrop-blur">
            <div className="text-2xl">⭐⭐⭐⭐⭐</div>
            <div className="mt-2 text-xl font-black">
            {totalApprovedReviews > 0 ? averageRating : "Pending"}
            </div>
            <div className="text-sm text-white/60">Average Rating</div>
        </div>

        <div className="rounded-2xl border border-[#69ff2f]/30 bg-white/10 p-4 backdrop-blur">
            <div className="text-2xl">📝</div>
            <div className="mt-2 text-xl font-black">{totalApprovedReviews}</div>
            <div className="text-sm text-white/60">Approved Reviews</div>
        </div>

        <div className="rounded-2xl border border-[#69ff2f]/30 bg-white/10 p-4 backdrop-blur">
            <div className="text-2xl">📹</div>
            <div className="mt-2 text-xl font-black">{totalFeaturedVideos}</div>
            <div className="text-sm text-white/60">Featured Videos</div>
        </div>

        <div className="rounded-2xl border border-[#69ff2f]/30 bg-white/10 p-4 backdrop-blur">
            <div className="text-2xl">🌿</div>
            <div className="mt-2 text-xl font-black">{services.length}</div>
            <div className="text-sm text-white/60">Services & Packages</div>
        </div>
        </div>
      </section>

    <section className="mx-auto mt-14 max-w-6xl rounded-3xl border border-white/15 bg-white/10 p-6 shadow-2xl backdrop-blur">
    <h2 className="text-2xl font-black">
    General AALCS Reviews
    </h2>

    <p className="mt-2 text-sm text-white/60">
    ⭐ {approvedGeneralReviews.length} Approved General Reviews
    </p>

    <p className="mt-3 text-white/70">
        General reviews are submitted for approval before appearing publicly.
    </p>

    {approvedGeneralReviews.length > 0 && (
      <RotatingGeneralReviews reviews={approvedGeneralReviews} />
    )}

    <form
    className="mt-6 grid gap-5"
    onSubmit={async (e) => {
      e.preventDefault();
      setGeneralSubmitted(false);

      try {
        const response = await fetch("/api/reviews", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            reviewType: "general",
            client: generalClient.trim() || "Anonymous",
            rating: generalRating,
            review: generalReview,
          }),
        });

        const data = await response.json();

        if (!response.ok || !data.success) {
          alert(data.message || "Failed to submit review. Please try again.");
          return;
        }

        setGeneralSubmitted(true);
      } catch (error) {
        console.error("Failed to submit general review:", error);
        alert("Failed to submit review. Please try again.");
      }
    }}
    >
        <div>
        <label className="mb-2 block font-bold text-[#69ff2f]">
            Star Rating
        </label>

        <div className="flex gap-2 text-3xl">
        {[1, 2, 3, 4, 5].map((star) => (
            <button
            key={star}
            type="button"
            onClick={() => setGeneralRating(star)}
            className={star <= generalRating ? "text-yellow-400" : "text-white/30"}
            >
            ★
            </button>
        ))}
        </div>
        </div>

        <div>
        <label className="mb-2 block font-bold text-[#69ff2f]">
            Your Name <span className="text-white/50">(optional)</span>
        </label>

        <input
            type="text"
            value={generalClient}
            onChange={(e) => setGeneralClient(e.target.value)}
            className="w-full rounded-2xl border border-white/15 bg-black/40 px-4 py-3 text-white outline-none focus:border-[#69ff2f]"
        />
        </div>

        <div>
        <label className="mb-2 block font-bold text-[#69ff2f]">
            Your Review
        </label>

        <textarea
            required
            maxLength={1000}
            rows={5}
            value={generalReview}
            onChange={(e) => setGeneralReview(e.target.value)}
            placeholder="Tell us about your experience with Aurora Australis Lawn Care Services..."
            className="w-full rounded-2xl border border-white/15 bg-black/40 px-4 py-3 text-white outline-none focus:border-[#69ff2f]"
        />
        </div>

        <p className="text-right text-sm text-white/50">
        {generalReview.length} / 1000 characters
        </p>

        <button
        type="submit"
        className="w-fit rounded-full bg-[#69ff2f] px-6 py-3 font-black text-black transition hover:scale-105"
        >
        Submit Review For Approval
        </button>

        <p className="text-sm text-white/50">
        Reviews require approval before appearing publicly.
        </p>
        {generalSubmitted && (
        <div className="rounded-2xl border border-[#69ff2f]/40 bg-[#69ff2f]/10 p-4 text-[#69ff2f]">
            ✅ Thank you for your review.

            <div className="mt-2 text-white/80">
            Your review has been submitted for approval and will be reviewed before appearing publicly.
            </div>
        </div>
        )}
    </form>
    </section>

      {!selectedServiceData && (
        <section className="mx-auto mt-10 max-w-6xl">
          <h2 className="text-3xl font-black">Choose A Service Or Package</h2>

          <div className="mt-6 grid gap-5">
            {sortedServices.map((service) => (
              <button
                key={service.title}
                onClick={() => openService(service.title)}
                className="rounded-3xl border border-white/15 bg-white/10 p-6 text-left shadow-xl backdrop-blur transition hover:-translate-y-1 hover:border-[#69ff2f]"
              >
                <div className="text-sm text-white/70">
                📹 {(featuredVideos[service.title]?.length ?? 0) + service.featuredVideos} Featured Videos
                </div>
                <div className="mt-1 text-sm text-white/70">
                ⭐{" "}
                {
                approvedReviews.filter(
                    (review) =>
                    review.reviewType === "service" &&
                    review.serviceTitle === service.title
                ).length + service.reviews
                }{" "}
                Reviews
                </div>

                <h3 className="mt-3 text-2xl font-black">{service.title}</h3>
              </button>
            ))}
          </div>
        </section>
      )}

      {selectedServiceData && (
        <section ref={detailRef} className="mx-auto mt-10 max-w-6xl">
          <button
            onClick={closeService}
            className="mb-6 rounded-full border border-[#69ff2f] px-5 py-3 font-bold text-[#69ff2f] transition hover:bg-[#69ff2f] hover:text-black"
          >
            ← Return To Reviews List
          </button>

          <div className="rounded-3xl border border-[#69ff2f]/40 bg-white/10 p-6 shadow-2xl backdrop-blur">
            <p className="text-sm text-white/70">
              📹 {selectedServiceData.featuredVideos} Featured Videos
            </p>
            <p className="mt-1 text-sm text-white/70">
              ⭐ {selectedServiceData.reviews} Reviews
            </p>

            <h2 className="mt-4 text-3xl font-black md:text-5xl">
              {selectedServiceData.title}
            </h2>
          </div>

            <div className="mt-8 rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur">
            <h3 className="mb-6 text-2xl font-black">
                Featured Videos & Reviews
            </h3>

            {(featuredVideos[selectedServiceData.title] ?? []).length > 0 ? (
                <div className="grid gap-8">
                {featuredVideos[selectedServiceData.title].map((item, index) => {
                  const matchedReview = featuredServiceReviews.find(
                    (review) => review.featuredVideoId === item.id
                  );

                  return (
                    <div
                    key={`${item.youtubeId}-${index}`}
                    className="grid gap-6 lg:grid-cols-2"
                    >
                    <div className="overflow-hidden rounded-2xl border border-[#69ff2f]/30 bg-black">
                        <div className="aspect-video">
                        <iframe
                            className="h-full w-full"
                            src={`https://www.youtube.com/embed/${item.youtubeId}`}
                            title={`Featured Job Video ${index + 1}`}
                            allowFullScreen
                        />
                        </div>

                        <div className="flex flex-wrap gap-3 p-4">
                        <a
                            href={`https://www.youtube.com/watch?v=${item.youtubeId}`}
                            target="_blank"
                            rel="noreferrer"
                            className="rounded-full bg-[#69ff2f] px-4 py-2 font-bold text-black"
                        >
                            Open On YouTube
                        </a>

                        <a
                            href="https://youtube.com"
                            target="_blank"
                            rel="noreferrer"
                            className="rounded-full border border-[#69ff2f] px-4 py-2 font-bold text-[#69ff2f]"
                        >
                            Visit Channel
                        </a>
                        </div>
                    </div>

                    <div className="rounded-2xl border border-[#69ff2f]/30 bg-white/5 p-6">
                      {matchedReview ? (
                        <>
                          <div className="mb-4 text-3xl text-yellow-400">
                            {"★".repeat(matchedReview.rating)}
                          </div>

                          <div className="mb-4 text-xl font-bold text-[#69ff2f]">
                            Featured Customer Review
                          </div>

                          <p className="text-lg leading-relaxed text-white/90">
                            {matchedReview.review}
                          </p>

                          <div className="mt-6 border-t border-white/10 pt-6">
                            <div className="font-bold text-[#69ff2f]">
                              {matchedReview.client}
                            </div>

                            <div className="mt-1 text-white/60">
                              {selectedServiceData.title}
                            </div>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="mb-4 text-3xl text-yellow-400">
                            {"★".repeat(item.rating)}
                          </div>

                          <div className="mb-4 text-xl font-bold text-[#69ff2f]">
                            {item.title}
                          </div>

                          <p className="text-lg leading-relaxed text-white/90">
                            {item.review}
                          </p>

                          <div className="mt-6 border-t border-white/10 pt-6">
                            <div className="font-bold text-[#69ff2f]">
                              {item.client}
                            </div>

                            <div className="mt-1 text-white/60">
                              {selectedServiceData.title}
                            </div>

                            <div className="mt-1 text-white/50">
                              {item.date}
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                    </div>
                );
                })}
                </div>
            ) : (
                <p className="text-white/70">
                Featured YouTube videos and approved featured reviews for this
                service will appear here.
                </p>
            )}
            </div>

        <div className="mt-8 rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur">
        <h3 className="text-2xl font-black">Additional Customer Reviews</h3>

        {[
        ...(customerReviews[selectedServiceData.title] ?? []),
        ...additionalServiceReviews
        ].length > 0 ? (
            <div className="mt-6 grid gap-5 md:grid-cols-2">
            {[
            ...(customerReviews[selectedServiceData.title] ?? []),
            ...additionalServiceReviews
            ].map((item, index) => (
                <div
                key={`${item.client}-${index}`}
                className="rounded-2xl border border-white/15 bg-white/5 p-6"
                >
                <div className="mb-4 text-2xl text-yellow-400">
                    {"★".repeat(item.rating)}
                </div>

                <p className="leading-relaxed text-white/90">
                    {item.review}
                </p>

                <div className="mt-6 border-t border-white/10 pt-5">
                    <div className="font-bold text-[#69ff2f]">
                    {item.client}
                    </div>

                    <div className="mt-1 text-sm text-white/60">
                    {selectedServiceData.title}
                    </div>

                    <div className="mt-1 text-sm text-white/50">
                    {item.date}
                    </div>
                </div>
                </div>
            ))}
            </div>
        ) : (
            <p className="mt-3 text-white/70">
            Approved customer reviews for this service will appear here.
            </p>
        )}
        </div>

        <div className="mt-8 rounded-3xl border border-[#69ff2f]/40 bg-white/10 p-6 backdrop-blur">
        <h3 className="text-2xl font-black">
            Leave A Review For This Service
        </h3>

        <p className="mt-3 text-white/70">
            Reviews submitted here will be linked to{" "}
            <span className="font-bold text-[#69ff2f]">
            {selectedServiceData.title}
            </span>{" "}
            and will require approval before appearing publicly.
        </p>

        <form
        className="mt-6 grid gap-5"
        onSubmit={async (e) => {
          e.preventDefault();
          setServiceSubmitted(false);

          try {
            const response = await fetch("/api/reviews", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                reviewType: "service",
                serviceTitle: selectedServiceData.title,
                client: serviceClient.trim() || "Anonymous",
                rating: serviceRating,
                review: serviceReview,
              }),
            });

            const data = await response.json();

            if (!response.ok || !data.success) {
              alert(data.message || "Failed to submit review. Please try again.");
              return;
            }

            setServiceSubmitted(true);
          } catch (error) {
            console.error("Failed to submit service review:", error);
            alert("Failed to submit review. Please try again.");
          }
        }}
        >
            <div>
            <label className="mb-2 block font-bold text-[#69ff2f]">
                Star Rating
            </label>

            <div className="flex gap-2 text-3xl">
            {[1, 2, 3, 4, 5].map((star) => (
                <button
                key={star}
                type="button"
                onClick={() => setServiceRating(star)}
                className={star <= serviceRating ? "text-yellow-400" : "text-white/30"}
                >
                ★
                </button>
            ))}
            </div>
            </div>

            <div>
            <label className="mb-2 block font-bold text-[#69ff2f]">
                Your Name <span className="text-white/50">(optional)</span>
            </label>

            <input
                type="text"
                value={serviceClient}
                onChange={(e) => setServiceClient(e.target.value)}
                className="w-full rounded-2xl border border-white/15 bg-black/40 px-4 py-3 text-white outline-none focus:border-[#69ff2f]"
            />
            </div>

            <div>
            <label className="mb-2 block font-bold text-[#69ff2f]">
                Your Review
            </label>

            <textarea
                required
                maxLength={1000}
                rows={5}
                value={serviceReview}
                onChange={(e) => setServiceReview(e.target.value)}
                placeholder={`Tell us about your experience with ${selectedServiceData.title}...`}
                className="w-full rounded-2xl border border-white/15 bg-black/40 px-4 py-3 text-white outline-none focus:border-[#69ff2f]"
            />
            </div>

            <p className="text-right text-sm text-white/50">
            {serviceReview.length} / 1000 characters
            </p>

            <button
            type="submit"
            className="w-fit rounded-full bg-[#69ff2f] px-6 py-3 font-black text-black transition hover:scale-105"
            >
            Submit Service Review For Approval
            </button>

            <p className="text-sm text-white/50">
            Reviews require approval before appearing publicly.
            </p>
            {serviceSubmitted && (
            <div className="rounded-2xl border border-[#69ff2f]/40 bg-[#69ff2f]/10 p-4 text-[#69ff2f]">
                ✅ Thank you for your review.

                <div className="mt-2 text-white/80">
                Your review has been submitted for approval and linked to this service.
                </div>
            </div>
            )}
        </form>
        </div>
        </section>
      )}

      </div>

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
              </div>

              </div>

              <div>
                <h4 className="font-black uppercase text-[#69ff2f]">Services</h4>
              <ul className="mt-3 space-y-1 leading-6">
                <li>
                  <Link href="/services#lawn-mowing-packages" className="transition hover:text-[#69ff2f]">
                    Residential Lawn Mowing
                  </Link>
                </li>

                <li>
                  <Link href="/services#lawn-mowing-packages" className="transition hover:text-[#69ff2f]">
                    Commercial Lawn Mowing
                  </Link>
                </li>

                <li>
                  <Link href="/services#gardening-services" className="transition hover:text-[#69ff2f]">
                    Garden Maintenance
                  </Link>
                </li>

                <li>
                  <Link href="/services#property-care-services" className="transition hover:text-[#69ff2f]">
                    Lawn Care
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-black uppercase text-[#69ff2f]">
                Quick Links
              </h4>

              <ul className="mt-3 space-y-1 leading-6">
                <li>
                  <Link href="/" className="transition hover:text-[#69ff2f]">
                    Home
                  </Link>
                </li>

                <li>
                  <Link href="/services" className="transition hover:text-[#69ff2f]">
                    Services
                  </Link>
                </li>

                <li>
                  <Link href="/about" className="transition hover:text-[#69ff2f]">
                    About Us
                  </Link>
                </li>

                <li>
                  <Link href="/gallery" className="transition hover:text-[#69ff2f]">
                    Gallery 
                  </Link>
                </li>

                <li>
                  <Link href="/reviews" className="transition hover:text-[#69ff2f]">
                    Reviews
                  </Link>
                </li>

                <li>
                  <Link href="/contact" className="transition hover:text-[#69ff2f]">
                    Contact Us
                  </Link>
                </li>
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