import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import Link from "next/link";

export default function WomenCategoryPage() {
  // Get only women's products
  const womenProducts = products.filter((product) => product.gender === "women");

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center mb-8">
        <Link href="/" className="text-sm text-gray-500 hover:underline mr-2">
          홈
        </Link>
        <span className="text-sm text-gray-500 mr-2">/</span>
        <span className="text-sm font-medium">여성</span>
      </div>

      <h1 className="text-3xl font-bold mb-8">여성 의류</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {womenProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
} 