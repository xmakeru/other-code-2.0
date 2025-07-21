import MainContent from "./MainContent"

export const metadata = {
  title: "Other code | Услуги",
  description: "Комплексные услуги по разработке: web, мобильные приложения, чат-боты, сопровождение, SEO/SMM, искусственный интеллект. Для бизнеса и государства.",
  openGraph: {
    title: "Other code | Услуги",
    description: "Комплексные услуги по разработке: web, мобильные приложения, чат-боты, сопровождение, SEO/SMM, искусственный интеллект.",
    url: "https://othercode.ru/uslugi",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Other code | Услуги",
    description: "Комплексные услуги по разработке: web, мобильные приложения, чат-боты, сопровождение, SEO/SMM, искусственный интеллект.",
  }
};

export default function UslugiPage() {
  return (
      <main className="md:pt-[262px] sm:pt-[146px] pt-[123px] min-h-screen mb-to-footer px-main">
        <MainContent />
      </main>
  )
}