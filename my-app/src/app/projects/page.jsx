import { PROJECTS_ITEMS } from "@/config/constants/Projects"
import ProjectsClient from "./ProjectsClient"

export const metadata = {
  title: "Other code | Проекты",
  description: "Портфолио реализованных проектов: web, blockchain, мобильные приложения, UX-дизайн, SEO, чат-боты. Сложные цифровые продукты для бизнеса и государства.",
  openGraph: {
    title: "Other code | Проекты",
    description: "Портфолио реализованных проектов: web, blockchain, мобильные приложения, UX-дизайн, SEO, чат-боты.",
    url: "https://othercode.ru/projects",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Other code | Проекты",
    description: "Портфолио реализованных проектов: web, blockchain, мобильные приложения, UX-дизайн, SEO, чат-боты.",
  }
};

export default function ProjectsPage() {
  return <ProjectsClient projects={PROJECTS_ITEMS} />
}