import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavbarDemo from './reusableComponents/NavbarDemo'
import { ShootingStarsAndStarsBackgroundDemo } from "./reusableComponents/Footer";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Exotic Celebrations",
  description: "Plan unforgettable moments with Exotic Celebrations, your trusted event management partner. From weddings and parties to corporate events, we design personalized experiences that make every occasion extraordinary.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavbarDemo />
        {children}
        <ShootingStarsAndStarsBackgroundDemo />
      </body>
    </html>
  );
}
