"use client";

import { useEffect, useState } from "react";

type Review = {
  id: string;
  client: string;
  rating: number;
  review: string;
  approvedAt: string;
};

export default function RotatingGeneralReviews({
  reviews,
}: {
  reviews: Review[];
}) {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (reviews.length <= 1) return;

    const interval = setInterval(() => {
      setVisible(false);

      setTimeout(() => {
        setIndex((current) => (current + 1) % reviews.length);
        setVisible(true);
      }, 700);
    }, 5000);

    return () => clearInterval(interval);
  }, [reviews.length]);

  const review = reviews[index];

  return (
    <div className="mt-6">
      <div
        className={`rounded-2xl border border-[#69ff2f]/40 bg-black/40 p-5 transition-opacity duration-700 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="mb-3 text-2xl text-yellow-400">
          {"★".repeat(review.rating)}
        </div>

        <p className="text-white/90">{review.review}</p>

        <div className="mt-5 border-t border-white/10 pt-4 text-sm text-white/60">
          <p className="font-bold text-[#69ff2f]">{review.client}</p>
          <p>{new Date(review.approvedAt).toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  );
}