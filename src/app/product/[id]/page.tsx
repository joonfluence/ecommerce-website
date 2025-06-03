"use client";

import { products } from "@/data/products";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useState } from "react";

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === params.id);
  const [quantity, setQuantity] = useState(1);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  if (!product) {
    notFound();
  }

  const handleAddToCart = () => {
    // In a real application, this would interact with a shopping cart API
    alert(`${quantity}개의 ${product.name}이(가) 장바구니에 추가되었습니다.`);
  };

  return (
    <div className="container mx-auto px-4 py-8 bg-white dark:bg-neutral-900">
      <div className="flex items-center mb-8">
        <Link href="/" className="text-sm text-gray-500 hover:underline mr-2">
          홈
        </Link>
        <span className="text-sm text-gray-500 mr-2">/</span>
        <Link
          href={`/category/${product.gender}`}
          className="text-sm text-gray-500 hover:underline mr-2"
        >
          {product.gender === "men"
            ? "남성"
            : product.gender === "women"
            ? "여성"
            : "공용"}
        </Link>
        <span className="text-sm text-gray-500 mr-2">/</span>
        <span className="text-sm font-medium">{product.name}</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div className="relative h-[500px] w-full rounded-lg overflow-hidden border border-gray-200 dark:border-neutral-700 bg-white dark:bg-neutral-800">
            <Image
              src={product.images[activeImageIndex]}
              alt={product.name}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Thumbnail Gallery */}
          {product.images.length > 1 && (
            <div className="flex space-x-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImageIndex(index)}
                  className={`relative h-20 w-20 border-2 rounded overflow-hidden ${
                    activeImageIndex === index
                      ? "border-black"
                      : "border-transparent"
                  }`}
                >
                  <Image
                    src={image}
                    alt={`${product.name} thumbnail ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            <p className="text-xl font-semibold mb-4">
              {product.price.toLocaleString()}원
            </p>
            <p className="text-sm text-gray-600 mb-6">{product.category}</p>
          </div>

          <div className="border-t border-b py-6">
            <p className="mb-6 text-gray-700 leading-relaxed">
              {product.description}
            </p>
          </div>

          <div className="flex items-center space-x-4 mb-6">
            <label htmlFor="quantity" className="text-gray-700 font-medium">
              수량:
            </label>
            <div className="flex items-center border rounded">
              <button
                className="px-3 py-1 border-r"
                onClick={() =>
                  setQuantity((prev) => (prev > 1 ? prev - 1 : prev))
                }
                disabled={quantity <= 1}
              >
                -
              </button>
              <span className="px-4 py-1">{quantity}</span>
              <button
                className="px-3 py-1 border-l"
                onClick={() => setQuantity((prev) => prev + 1)}
              >
                +
              </button>
            </div>
          </div>

          <div className="space-y-4">
            <button
              onClick={handleAddToCart}
              className="w-full py-3 px-6 bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
            >
              장바구니에 담기
            </button>
            <button className="w-full py-3 px-6 bg-white border border-black rounded-md hover:bg-gray-50 transition-colors">
              바로 구매하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 