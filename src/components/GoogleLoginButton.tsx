import React from 'react';
import { useAuth } from './AuthProvider';

const GoogleLoginButton = () => {
  const { signInWithGoogle, loading } = useAuth();

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      signInWithGoogle();
    }
  };

  return (
    <button
      onClick={signInWithGoogle}
      onKeyDown={handleKeyDown}
      aria-label="구글로 로그인"
      tabIndex={0}
      className="w-full py-2 px-4 bg-white border border-gray-300 rounded-md shadow-sm flex items-center justify-center gap-2 text-gray-700 font-semibold hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition"
      disabled={loading}
      type="button"
    >
      <svg className="w-5 h-5 mr-2" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <g clipPath="url(#clip0_17_40)">
          <path d="M47.5 24.5C47.5 22.8 47.3 21.2 47 19.7H24V28.3H37.2C36.6 31.2 34.7 33.6 32 35.1V40.1H39.6C44.1 36.1 47.5 30.8 47.5 24.5Z" fill="#4285F4"/>
          <path d="M24 48C30.5 48 35.9 45.9 39.6 40.1L32 35.1C30.1 36.3 27.7 37.1 24 37.1C17.7 37.1 12.2 32.9 10.4 27.3H2.6V32.5C6.3 40.1 14.4 48 24 48Z" fill="#34A853"/>
          <path d="M10.4 27.3C9.9 25.8 9.6 24.2 9.6 22.5C9.6 20.8 9.9 19.2 10.4 17.7V12.5H2.6C0.9 15.7 0 19 0 22.5C0 26 0.9 29.3 2.6 32.5L10.4 27.3Z" fill="#FBBC05"/>
          <path d="M24 9.9C27.7 9.9 30.7 11.2 32.7 13.1L39.8 6C35.9 2.4 30.5 0 24 0C14.4 0 6.3 7.9 2.6 15.5L10.4 20.7C12.2 15.1 17.7 9.9 24 9.9Z" fill="#EA4335"/>
        </g>
        <defs>
          <clipPath id="clip0_17_40">
            <rect width="48" height="48" fill="white"/>
          </clipPath>
        </defs>
      </svg>
      {loading ? '로그인 중...' : '구글로 1초 로그인'}
    </button>
  );
};

export default GoogleLoginButton; 