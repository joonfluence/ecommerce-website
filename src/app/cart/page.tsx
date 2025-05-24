"use client";

import Link from "next/link";
import { ArrowLeft, ShoppingBag } from "lucide-react";

export default function CartPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center mb-8">
        <Link href="/" className="text-sm text-gray-500 hover:underline mr-2">
          홈
        </Link>
        <span className="text-sm text-gray-500 mr-2">/</span>
        <span className="text-sm font-medium">장바구니</span>
      </div>

      <h1 className="text-3xl font-bold mb-8">장바구니</h1>

      <div className="bg-gray-50 rounded-lg p-8 text-center">
        <div className="flex justify-center mb-6">
          <ShoppingBag className="w-16 h-16 text-gray-400" />
        </div>
        <h2 className="text-xl font-bold mb-4">장바구니가 비어있습니다</h2>
        <p className="text-gray-600 mb-8">
          이 데모 사이트에서는 실제 장바구니 기능이 구현되어 있지 않습니다.
          <br />
          백엔드 통합이 필요한 기능입니다.
        </p>
        <Link
          href="/"
          className="inline-flex items-center py-3 px-6 bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          쇼핑 계속하기
        </Link>
      </div>

      <div className="mt-12 border-t pt-8">
        <h2 className="text-xl font-bold mb-4">결제 방법</h2>
        <div className="flex flex-wrap gap-4 mb-8">
          <div className="px-4 py-2 border rounded-md text-center min-w-[120px]">
            네이버페이
          </div>
          <div className="px-4 py-2 border rounded-md text-center min-w-[120px]">
            카카오페이
          </div>
          <div className="px-4 py-2 border rounded-md text-center min-w-[120px]">
            신용카드
          </div>
          <div className="px-4 py-2 border rounded-md text-center min-w-[120px]">
            무통장입금
          </div>
        </div>
        <p className="text-sm text-gray-500">
          * 실제 결제는 이루어지지 않습니다. 이 사이트는 데모용입니다.
        </p>
      </div>
    </div>
  );
} 