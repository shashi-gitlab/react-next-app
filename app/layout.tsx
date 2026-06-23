import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Providers from "./providers";
import { ReadingProgress } from "@/components/ReadingProgress";


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
});

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "MVCart | Quality Products",
    template: "%s | MVCart", // Allows sub-pages to be "Cart | MVCart"
  },
  description: "Premium shopping experience for high-quality goods.",
  metadataBase: new URL("https://mvwebtool.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mvwebtool.com",
    siteName: "MVCart",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${poppins.variable} font-poppins antialiased min-h-screen flex flex-col bg-bgcolor`}>
        <Providers>
          <Header />
          <main className="flex-1">
            {children}
          </main>
        </Providers>
        <Footer />
        <ReadingProgress />
      </body>
    </html>
  );
}
