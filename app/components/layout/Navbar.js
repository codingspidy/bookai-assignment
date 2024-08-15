import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <header className="bg-white dark:bg-[#1B062E] absolute top-0 left-0 w-full">
      <div className="max-w-6xl mx-auto px-5 sm:px-7 lg:px-10 py-6 sm:py-8">
        <div className="flex flex-col flex-wrap gap-4 md:flex-row md:items-center md:justify-between w-full">
          <Link href="/" className="flex-shrink-0 flex items-center">
            <div className="w-[30px] h-[30px] rounded-full mr-[10px] bg-gradient-primary"></div>
            <Image src="https://raw.githubusercontent.com/adarshagupta/trybookai/main/logo.png" width={50} height={50} alt="BookAI Logo" />
            <h1 className="text-2xl font-bold text-black dark:text-white">BookAI</h1>
          </Link>
          <nav className="flex flex-wrap gap-x-6 gap-y-4">
            <Link href="/features" className="text-[#1B062E] dark:text-white py-2 text-[15px] md:text-base">
              Features
            </Link>
            <Link href="/how-it-works" className="text-[#1B062E] dark:text-white py-2 text-[15px] md:text-base">
              How It Works
            </Link>
            <Link href="/roadmap" className="text-[#1B062E] dark:text-white py-2 text-[15px] md:text-base">
              Roadmap
            </Link>
            <Link href="/api" className="text-[#1B062E] dark:text-white py-2 text-[15px] md:text-base">
              API
            </Link>
            <Link href="/price" className="text-[#1B062E] dark:text-white py-2 text-[15px] md:text-base">
              Price
            </Link>
            <Link href="/models" className="text-[#1B062E] dark:text-white py-2 text-[15px] md:text-base">
              Models
            </Link>
            <Link href="/login" className="bg-gradient-primary text-white px-3 py-2 rounded-md text-[15px] md:text-base font-medium">
              Login / Sign Up
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
