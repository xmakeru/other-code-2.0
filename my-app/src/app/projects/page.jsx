import { PROJECTS_ITEMS } from "@/config/constants/Projects"
import ProjectsClient from "./ProjectsClient"

export const metadata = {
  title: "Other code | Проекты",
  description: "dev",
}

export default function ProjectsPage() {
  return <ProjectsClient projects={PROJECTS_ITEMS} />
}