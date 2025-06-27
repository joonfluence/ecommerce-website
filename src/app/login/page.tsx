"use client";
import { useAuth } from "@/components/AuthProvider";

const LoginPage = () => {
  const { signInWithGoogle, loading } = useAuth();

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <h1 className="text-2xl font-bold mb-6">로그인</h1>
      <button
        onClick={signInWithGoogle}
        className="px-6 py-3 bg-black text-white rounded hover:bg-gray-800 transition-colors"
        aria-label="구글로 로그인"
        tabIndex={0}
        disabled={loading}
      >
        {loading ? "로그인 중..." : "구글로 1초 로그인"}
      </button>
    </div>
  );
};

export default LoginPage; 