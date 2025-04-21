import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/header/Header";
import Footer from "./components/Footer/Footer";
import { Montserrat } from 'next/font/google';
import CommingSoon from "./pages/commingSoon/page";
import { LanguageProvider } from "./language/LanguageProvider";

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg" href="/img/drive_fav_white.svg" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} antialiased`}
      >
        {/* <CommingSoon /> */}
        <LanguageProvider>
        <Header />
        {children}
        <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
