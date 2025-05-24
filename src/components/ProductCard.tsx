"use client";

import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types/product";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/product/${product.id}`} className="group">
      <div className="rounded-md overflow-hidden border border-gray-200 hover:shadow-md transition-shadow duration-300 h-full flex flex-col">
        <div className="relative aspect-[3/4] w-full">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-4 flex flex-col flex-grow">
          <h3 className="font-medium text-gray-900 mb-1">{product.name}</h3>
          <p className="text-sm text-gray-500 mb-2 flex-grow">{product.category}</p>
          <div className="flex justify-between items-center">
            <p className="font-bold">{product.price.toLocaleString()}원</p>
          </div>
        </div>
      </div>
    </Link>
  );
} 