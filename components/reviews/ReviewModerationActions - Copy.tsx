"use client";

import { useRouter } from "next/navigation";

type Props = {
  reviewId: string;
};

export default function ReviewModerationActions({
  reviewId,
}: Props) {
  const router = useRouter();

  const moderateReview = async (
    status: "approved" | "rejected"
  ) => {
    await fetch("/api/reviews/moderate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: reviewId,
        status,
      }),
    });

    router.refresh();
  };

  return (
    <div className="mt-5 flex gap-3">
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
    </div>
  );
}