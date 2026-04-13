import { profile } from "@/lib/portfolio-data";
import { ProjectDetail } from "../../components/ProjectDetail";

const project = profile.projects.find((p) => p.slug === "food-vision")!;

export const metadata = {
  title: `${project.title} | Arsalan Shahyar`,
  description: project.summary,
};

export default function FoodVisionPage() {
  return <ProjectDetail project={project} />;
}
