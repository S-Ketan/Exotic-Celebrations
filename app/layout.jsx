import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavbarDemo from "./reusableComponents/NavbarDemo";
import { ShootingStarsAndStarsBackgroundDemo } from "./reusableComponents/Footer";
import { Raleway, Poppins, Great_Vibes, Nunito } from "next/font/google";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"], // Add the weights you need
  variable: "--font-nunito",
});

// Define font with desired weights and styles
const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "700"], // Regular and Bold weights
  variable: "--font-raleway", // Define a custom variable name for the font
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // Regular, Semi-Bold, and Bold weights for Poppins
  variable: "--font-poppins",
});
const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"], // Great Vibes has only 400 weight
  variable: "--font-greatvibes",
});

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
  description:
    "Plan unforgettable moments with Exotic Celebrations, your trusted event management partner. From weddings and parties to corporate events, we design personalized experiences that make every occasion extraordinary.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${raleway.variable} ${poppins.variable} ${greatVibes.variable} ${nunito.variable}`}
    >
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
