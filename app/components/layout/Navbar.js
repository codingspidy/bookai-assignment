import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <header className="absolute z-10 top-0 left-0 w-full px-5 sm:px-7 lg:px-10 py-6 sm:py-8" role="banner">
      <div className="flex flex-col flex-wrap gap-4 md:flex-row md:items-center md:justify-between w-full max-w-6xl mx-auto ">
        <Link href="/" className="flex-shrink-0 flex items-center" aria-label="Homepage">
          <div className="w-[30px] h-[30px] rounded-full mr-[10px] bg-gradient-primary" aria-hidden="true"></div>
          <Image src="https://raw.githubusercontent.com/adarshagupta/trybookai/main/logo.png" width={50} height={50} alt="BookAI Logo" />
          <h1 className="text-2xl font-bold text-black dark:text-white">BookAI</h1>
        </Link>
        <nav className="flex flex-wrap gap-x-6 gap-y-4" aria-label="Main Navigation">
          <Link href="/features" className="text-[#1B062E] dark:text-white py-2 text-[15px] md:text-base" aria-label="Features">
            Features
          </Link>
          <Link href="/how-it-works" className="text-[#1B062E] dark:text-white py-2 text-[15px] md:text-base" aria-label="How It Works">
            How It Works
          </Link>
          <Link href="/roadmap" className="text-[#1B062E] dark:text-white py-2 text-[15px] md:text-base" aria-label="Roadmap">
            Roadmap
          </Link>
          <Link href="/api" className="text-[#1B062E] dark:text-white py-2 text-[15px] md:text-base" aria-label="API">
            API
          </Link>
          <Link href="/price" className="text-[#1B062E] dark:text-white py-2 text-[15px] md:text-base" aria-label="Price">
            Price
          </Link>
          <Link href="/models" className="text-[#1B062E] dark:text-white py-2 text-[15px] md:text-base" aria-label="Models">
            Models
          </Link>
          <Link href="/login" className="bg-gradient-primary text-white px-5 py-3 rounded-md text-[15px] md:text-base font-medium" aria-label="Login or Sign Up">
            Login / Sign Up
          </Link>
        </nav>
      </div>
    </header>
  );
}
