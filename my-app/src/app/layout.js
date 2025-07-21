import { Onest } from "next/font/google"
import "./globals.css";
import Header from "@/components/reuse/Header/Header";
import Footer from "@/components/reuse/Footer/Footer";
import Head from "next/head";

const onest = Onest({
  subsets: ["latin"], 
  weight: ["300", "400", "500", "700", "800"], 
});

export const metadata = {
  title: "Other code",
  description: "Уникальные цифровые продукты для бизнеса и государства",
}

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://othercode.ru/" />
        <meta property="og:title" content="Other code" />
        <meta property="og:description" content="Уникальные цифровые продукты для бизнеса и государства" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://othercode.ru/" />
        <meta property="og:image" content="/image/home-poster.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Other code" />
        <meta name="twitter:description" content="Уникальные цифровые продукты для бизнеса и государства" />
        <meta name="twitter:image" content="/image/home-poster.jpg" />
      </head>
      <body
        className={`${onest.className} overflow-x-hidden`}
      >
        <a href="#main-content" className="skip-link focusable absolute left-0 top-0 bg-white text-black p-2 z-50">Перейти к основному контенту</a>
        <Header />
          <div id="main-content" tabIndex={-1}>{children}</div>
        <Footer />
      </body>
    </html>
  );
}