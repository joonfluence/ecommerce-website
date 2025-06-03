import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import Link from "next/link";

export default function MenCategoryPage() {
  // Get only men's products
  const menProducts = products.filter((product) => product.gender === "men");

  return (
    <div className="container mx-auto px-4 py-8 bg-white dark:bg-neutral-900">
      <div className="flex items-center mb-8">
        <Link href="/" className="text-sm text-gray-500 hover:underline mr-2">
          홈
        </Link>
        <span className="text-sm text-gray-500 mr-2">/</span>
        <span className="text-sm font-medium">남성</span>
      </div>

      <h1 className="text-3xl font-bold mb-8">남성 의류</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {menProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
} 