"use client";

import { useRouter } from "next/navigation";

export default function ReviewAdminLogout() {
  const router = useRouter();

  const logout = async () => {
    await fetch("/api/review-admin/logout", {
      method: "POST",
    });

    router.push("/review-admin/login");
    router.refresh();
  };

  return (
    <button
      onClick={logout}
      className="rounded-full border border-red-400 px-5 py-2 font-bold text-red-300 transition hover:bg-red-500 hover:text-white"
    >
      Logout
    </button>
  );
}