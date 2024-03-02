import { Inter } from "next/font/google";
import { Merriweather } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/_components/navbar";
import Footer from "@/app/_components/footer";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--sans'
});
const merriweather = Merriweather({ 
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: '--serif'
});

export const metadata = {
  title: "TMU Networking Night",
  description: "This is a webpage to host the Networking Night event, organized by USSTM and PACS! Find all the details about the event here and RSVP!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${merriweather.variable} font-sans`}>
        <Navbar />
        <main className="space-y-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
