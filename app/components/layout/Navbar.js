"use client"
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-white dark:bg-[#1B062E] absolute top-0 left-0 w-full">
      <div className="max-w-6xl mx-auto px-2 sm:px-6 lg:px-8 py-4 sm:py-6">
        <div className="flex flex-col gap-4 md:gap-0 md:flex-row md:items-center md:justify-between w-full">
          <div className="flex-shrink-0 flex items-center">
          <div class="logo-icon bg-gradient-primary"></div>
            <Image src="https://raw.githubusercontent.com/adarshagupta/trybookai/main/logo.png" width={50} height={50} alt="BookAI Logo" />
            <h1 className="text-xl font-bold text-black dark:text-white">BookAI</h1>
          </div>
          {/* <div className="absolute top-3 right-0 z-50 flex items-center sm:hidden">
            <button
              onClick={toggleMenu}
              aria-controls="mobile-menu"
              aria-expanded={menuOpen ? 'true' : 'false'}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {menuOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div> */}
            <div className="flex flex-wrap gap-x-6 gap-y-4">
              <Link href="/features" className="text-[#1B062E] dark:text-white py-2 text-lg sm:text-base">
                Features
              </Link>
              <Link href="/how-it-works" className="text-[#1B062E] dark:text-white py-2 text-lg sm:text-base">
                How It Works
              </Link>
              <Link href="/roadmap" className="text-[#1B062E] dark:text-white py-2 text-lg sm:text-base">
                Roadmap
              </Link>
              <Link href="/api" className="text-[#1B062E] dark:text-white py-2 text-lg sm:text-base">
                API
              </Link>
              <Link href="/price" className="text-[#1B062E] dark:text-white py-2 text-lg sm:text-base">
                Price
              </Link>
              <Link href="/models" className="text-[#1B062E] dark:text-white py-2 text-lg sm:text-base">
                Models
              </Link>
              <Link href="javascript:void(0)" className="bg-gradient-primary text-white px-3 py-2 rounded-md text-lg sm:text-base font-medium">
                Login / Sign Up
              </Link>
            </div>
        </div>
      </div>
    </nav>
  );
}
