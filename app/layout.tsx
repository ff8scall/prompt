import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({ 
  subsets: ["latin"], 
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "PROMPTFLOW | Professional AI Prompt Archive",
  description: "Visual-first prompt library for high-authority AI image frameworks. Find the result, copy the prompt.",
  metadataBase: new URL("https://prompt.lego-sia.com"),
  verification: {
    other: {
      'msvalidate.01': '048AB450B6B91E03CAF13FDE8415F954',
      'naver-site-verification': '68ce53e8ac3dd29c10688a6efabae4686c72a32c',
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} ${outfit.variable} font-sans antialiased bg-slate-950 text-slate-200 selection:bg-blue-500/30`}>
        {/* Ambient background effect */}
        <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-600/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/4" />
        </div>
        
        {children}
      </body>
    </html>
  );
}
