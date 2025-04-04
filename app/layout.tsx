import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Nunito,
  Poppins,
  Quicksand,
} from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import { ReduxProvider } from "@/redux/reduxProvider/ReduxProvider";
import { Toaster } from "sonner";

// Local font (Unchanged)
const austinCyr = localFont({
  src: "../public/fonts/AustinCyr/AustinCyr-Bold.eot",
  variable: "--font-austincyr",
});

// Google fonts with required weights
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const nunito = Nunito({
  weight: ["200", "400", "700"], // Define required weights
  subsets: ["latin"],
  variable: "--font-nunito",
});

const poppins = Poppins({
  weight: ["100", "400", "700"], // Define required weights
  subsets: ["latin"],
  variable: "--font-poppins",
});

const quicksand = Quicksand({
  weight: ["300", "500", "700"], // Define required weights
  subsets: ["latin"],
  variable: "--font-quicksand",
});

export const metadata: Metadata = {
  title: "VIP Yacht",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${austinCyr.variable} ${nunito.variable} ${poppins.variable} ${quicksand.variable} antialiased overflow-x-hidden`}
      >
        <ReduxProvider>
          <Toaster position="top-center" />
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
