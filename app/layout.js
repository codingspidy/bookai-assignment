import { Inter } from "next/font/google";
import "./globals.scss";
import Navbar from "./components/layout/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark dark:bg-[#1B062E] bg-white">
      <body id="content" className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
