import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <h2 className="text-4xl font-bold mb-4">404</h2>
      <h3 className="text-xl mb-6">페이지를 찾을 수 없습니다</h3>
      <p className="mb-8">찾으시는 페이지가 존재하지 않거나 이동되었습니다.</p>
      <Link 
        href="/" 
        className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition-colors"
      >
        홈으로 돌아가기
      </Link>
    </div>
  );
} 