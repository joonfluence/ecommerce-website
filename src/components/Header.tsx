"use client";

import Link from "next/link";
import { useState } from "react";
import { ShoppingCart } from "lucide-react";
import GoogleLoginButton from './GoogleLoginButton';
import { useAuth } from './AuthProvider';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, signOut, loading } = useAuth();

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-neutral-900 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          FitPick
        </Link>

        {/* Mobile menu button */}
        <button 
          className="md:hidden" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
        
        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/category/men" className="hover:text-gray-500">
            남성
          </Link>
          <Link href="/category/women" className="hover:text-gray-500">
            여성
          </Link>
          <Link href="/category/unisex" className="hover:text-gray-500">
            공용
          </Link>
        </nav>

        <Link href="/cart" className="flex items-center mr-2">
          <ShoppingCart className="w-6 h-6" />
        </Link>
        {user ? (
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-700" aria-label="로그인된 사용자">{user.email}</span>
            <button
              onClick={signOut}
              onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && signOut()}
              className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="로그아웃"
              tabIndex={0}
              type="button"
              disabled={loading}
            >
              로그아웃
            </button>
          </div>
        ) : (
          <div className="w-40"><GoogleLoginButton /></div>
        )}
      </div>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-2 flex flex-col space-y-2">
            <Link 
              href="/category/men" 
              className="py-2 hover:text-gray-500"
              onClick={() => setIsMenuOpen(false)}
            >
              남성
            </Link>
            <Link 
              href="/category/women" 
              className="py-2 hover:text-gray-500"
              onClick={() => setIsMenuOpen(false)}
            >
              여성
            </Link>
            <Link 
              href="/category/unisex" 
              className="py-2 hover:text-gray-500"
              onClick={() => setIsMenuOpen(false)}
            >
              공용
            </Link>
          </div>
        </div>
      )}
    </header>
  );
} 