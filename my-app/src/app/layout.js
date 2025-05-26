import { Onest } from "next/font/google"
import "./globals.css";
import Header from "@/components/reuse/Header/Header";



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
      <body
        className={`${onest.className} overflow-x-hidden`}
      >
        <Header />
          {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}