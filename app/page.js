import ThemeToggle from "./components/ThemeToggle";
import Link from "next/link";
import ThreeSnowflakes from "./components/ThreeSnowFlakes";

export const metadata = {
  title: "BookAI: Revolutionary AI-Powered Book Generation | Create Professional Books in Minutes",
  description: "BookAI harnesses cutting-edge artificial intelligence to generate high-quality, professional books in minutes. Revolutionize your writing process with our AI-powered book creation tool. Experience the future of authorship today.",
};

export default function Home() {
  return (
    <>
      <main className="min-h-screen text-[#1B062E] dark:text-white">
        <section className="relative flex flex-col min-h-screen items-center justify-center pt-[250px] lg:pt-[100px] pb-16 lg:pb-0 px-6 sm:px-10 lg:px-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-center leading-snug max-w-5xl">
            Explore the Possibilities of <span className="text-[#500d8a] dark:text-[#7C21CC] border-b-4 border-b-[#678AFF] pb-[3px] leading-snug">AI Book Writing</span> with BookAI
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-center max-w-2xl">
            Unleash the power of AI to create captivating books in minutes. Download, distribute wherever you want. Generate unlimited free books.
          </p>
          <div className="mt-10 flex flex-col items-center sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              href="/playground"
              className="px-8 py-3 bg-gradient-primary transition-transform duration-300 ease-in-out hover:translate-y-[-5px] text-white font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#678AFF] dark:focus:ring-offset-[#1B062E]"
              aria-label="Get Started"
            >
              Get Started
            </Link>
            <Link
              href="/api"
              className="px-8 py-3 bg-gradient-primary transition-transform duration-300 ease-in-out hover:translate-y-[-5px] text-white font-medium rounded-full hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#678AFF] dark:focus:ring-offset-[#1B062E]"
              aria-label="Get API Access"
            >
              Get API Access
            </Link>
          </div>
          <ThemeToggle />
        </section>
      </main>
      <ThreeSnowflakes />
    </>
  );
}
