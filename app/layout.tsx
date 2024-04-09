import type { Metadata } from "next";
import { Orbitron, Kalam, Press_Start_2P } from "next/font/google";
import "./globals.scss";
import Navbar from "./components/Header/Navbar";
import { Suspense } from "react";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  variable: "--font-orbitron",
});

const kalam = Kalam({
  subsets: ["latin"],
  weight: "300",
  display: "swap",
  variable: "--font-kalam",
});

const press2p = Press_Start_2P({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-press-start-2p",
});

export const metadata: Metadata = {
  title: "Interview Next App",
  description: "Signifly Interview Project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html
        lang="en"
        className={`${kalam.variable} ${orbitron.variable} ${press2p.variable}`}
      >
        <body>
          <Navbar />
          <Suspense
            fallback={
              <div>
                <p>Loading...</p>
              </div>
            }
          >
            {children}
          </Suspense>
        </body>
      </html>
    </>
  );
}
