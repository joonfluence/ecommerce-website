"use client";
import { useAuth } from "@/components/AuthProvider";
import { useRouter } from "next/navigation";

const BuyButton = () => {
  const { user } = useAuth();
  const router = useRouter();

  const handleBuyClick = () => {
    if (!user) {
      router.push("/login");
      return;
    }
    router.push("/checkout");
  };

  return (
    <button
      className="w-full py-3 bg-black text-white rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
      onClick={handleBuyClick}
      aria-label="구매하기"
      tabIndex={0}
      onKeyDown={e => { if (e.key === "Enter") handleBuyClick(); }}
      type="button"
    >
      구매하기
    </button>
  );
};

export default BuyButton; 