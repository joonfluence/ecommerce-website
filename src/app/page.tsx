"use client";

import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import Link from "next/link";
import { useState } from "react";

const TABS = [
  { key: "women", label: "여성" },
  { key: "men", label: "남성" },
  { key: "unisex", label: "공용" },
];

export default function Home() {
  const [tab, setTab] = useState("women");
  const filteredProducts = products.filter((p) => p.gender === tab).slice(0, 6);

  return (
    <div className="bg-white dark:bg-neutral-900 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[420px] md:h-[520px] flex items-center justify-center mb-16">
        <img
          src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1200&auto=format&fit=crop"
          alt="핏픽 메인 배경"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-90"
        />
        <div className="relative z-10 text-center text-white flex flex-col items-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">핏픽(FitPick)</h1>
          <p className="text-lg md:text-2xl mb-6 drop-shadow">모던 남녀를 위한 트렌디 패션</p>
          <Link
            href="/category/men"
            className="bg-white/90 dark:bg-neutral-800 text-blue-900 dark:text-white font-semibold px-8 py-3 rounded-lg shadow hover:bg-white dark:hover:bg-neutral-700 transition-colors"
          >
            지금 쇼핑하기
          </Link>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent" />
      </section>

      {/* New Arrivals Section */}
      <section className="max-w-6xl mx-auto px-4 mb-20">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">신상품</h2>
        <div className="flex justify-center gap-4 mb-8">
          {TABS.map((t) => (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              className={`px-5 py-2 rounded-full font-medium border transition-colors ${tab === t.key ? "bg-blue-900 text-white border-blue-900" : "bg-white dark:bg-neutral-800 text-gray-700 dark:text-white border-gray-300 dark:border-neutral-700 hover:bg-gray-100 dark:hover:bg-neutral-700"}`}
            >
              {t.label}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Promotion Banners */}
      <section className="max-w-6xl mx-auto px-4 mb-16 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gray-100 dark:bg-neutral-800 rounded-lg p-6 flex flex-col justify-between items-start min-h-[180px]">
          <div>
            <h3 className="text-lg font-bold mb-2">꿈과 패션의 만남</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">핏픽에서 나만의 스타일을 완성하세요.</p>
          </div>
          <Link href="/category/women" className="text-blue-900 dark:text-blue-200 font-semibold hover:underline">여성 신상품 보기</Link>
        </div>
        <div className="bg-gray-100 dark:bg-neutral-800 rounded-lg p-6 flex flex-col justify-between items-start min-h-[180px]">
          <div>
            <h3 className="text-lg font-bold mb-2">모두를 위한 스타일</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">남녀 모두를 위한 트렌디 아이템을 만나보세요.</p>
          </div>
          <Link href="/category/unisex" className="text-blue-900 dark:text-blue-200 font-semibold hover:underline">공용 상품 보기</Link>
        </div>
        <div className="bg-blue-900 dark:bg-blue-800 rounded-lg p-6 flex flex-col justify-between items-start min-h-[180px] text-white">
          <div>
            <h3 className="text-lg font-bold mb-2">지금 최대 50% 할인</h3>
            <p className="mb-4">특별 할인 상품을 확인해보세요!</p>
          </div>
          <Link href="/category/men" className="font-semibold underline">남성 할인 상품</Link>
        </div>
      </section>
    </div>
  );
}
