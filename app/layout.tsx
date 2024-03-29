import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavLinks from "@/components/nav-links";

const inter = Inter({ subsets: ["latin"] });

const navLinks = [
  { href: "/secondPage", label: "SecondPage" },
  { href: "/thirdPage", label: "ThirdPage" },
  { href: "/fourthPage", label: "FourtPage" },
  { href: "/topGames23", label: "TopGames23" },
];
const footerLinks = [
  { href: "/secondPage", label: "About" },
  { href: "/thirdPage", label: "Blog" },
  { href: "/fourthPage", label: "Careers" },
  { href: "/topGames23", label: "Privacy Policy" },
  { href: "/topGames23", label: "Terms of Service" },
  { href: "/topGames23", label: "Contact" },
];

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="bg-[#0C0E16] text-white">
          <nav className="container mx-auto px-4 py-6 flex justify-between items-center">
            <h1 className="text-3xl font-bold">GamePriceVis</h1>
            <div className="flex space-x-4">
              <NavLinks links={navLinks} />
            </div>
          </nav>
        </header>
        {children}
        <footer className="bg-[#161b2f] text-white py-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between">
            <div>
              <h3 className="text-xl font-bold">Game Price Visualizer</h3>
              <p className="mt-2 text-gray-400">All your gaming deals in one place.</p>
            </div>
            <nav className="space-x-4">
            <NavLinks links={footerLinks} />
            </nav>
          </div>
        </div>
      </footer>
      </body>
    </html>
  );
}
