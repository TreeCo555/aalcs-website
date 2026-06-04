"use client";

import { useRouter } from "next/navigation";
import { featuredVideos } from "@/data/reviews/featuredVideos";

type Props = {
  reviewId: string;
  showFeatureButton?: boolean;
  isFeatured?: boolean;
  featuredVideoId?: string | null;
};

const videoOptions = Object.entries(featuredVideos).flatMap(
  ([serviceTitle, videos]) =>
    videos.map((video) => ({
      id: video.id,
      label: `${serviceTitle} - ${video.title}`,
    }))
);

export default function ReviewModerationActions({
  reviewId,
  showFeatureButton = false,
  isFeatured = false,
  featuredVideoId = null,
}: Props) {
  const router = useRouter();

  const moderateReview = async (status: "approved" | "rejected") => {
    await fetch("/api/reviews/moderate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: reviewId, status }),
    });

    router.refresh();
  };

  const toggleFeatured = async () => {
    await fetch("/api/reviews/feature", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: reviewId }),
    });

    router.refresh();
  };

  const makeGeneralReview = async () => {
    await fetch("/api/reviews/feature", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: reviewId, featured: false }),
    });

    router.refresh();
  };

  const assignToVideo = async (videoId: string) => {
    await fetch("/api/reviews/feature", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: reviewId,
        featured: true,
        featuredVideoId: videoId,
      }),
    });

    router.refresh();
  };

  const deleteReview = async () => {
    if (!confirm("Are you sure you want to delete this review?")) return;

    await fetch("/api/reviews/delete", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: reviewId }),
    });

    router.refresh();
  };

  return (
    <div className="mt-5 flex flex-wrap gap-3">
      {!showFeatureButton && (
        <>
          <button
            onClick={() => moderateReview("approved")}
            className="rounded-full bg-[#69ff2f] px-5 py-2 font-bold text-black"
          >
            Approve
          </button>

          <button
            onClick={() => moderateReview("rejected")}
            className="rounded-full bg-red-600 px-5 py-2 font-bold text-white"
          >
            Reject
          </button>
        </>
      )}

      {showFeatureButton && (
        <>
          <button
            onClick={toggleFeatured}
            className="rounded-full border border-yellow-400 px-5 py-2 font-bold text-yellow-300"
          >
            {isFeatured ? "Unfeature" : "⭐ Feature"}
          </button>

          <select
            value={featuredVideoId ?? ""}
            onChange={(e) => {
              if (e.target.value) {
                assignToVideo(e.target.value);
              }
            }}
            className="rounded-full border border-cyan-500 bg-slate-900 px-4 py-2 text-sm text-white"
          >
            <option value="">Assign To Video...</option>

            {videoOptions.map((video) => (
              <option key={video.id} value={video.id}>
                {video.label}
              </option>
            ))}
          </select>

          <button
            onClick={makeGeneralReview}
            className="rounded-full border border-blue-500 px-5 py-2 font-bold text-blue-300"
          >
            General Review
          </button>
        </>
      )}

      <button
        onClick={deleteReview}
        className="rounded-full border border-red-500 px-5 py-2 font-bold text-red-300"
      >
        Delete Review
      </button>
    </div>
  );
}