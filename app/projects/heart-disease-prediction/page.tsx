import { profile } from "@/lib/portfolio-data";
import { ProjectDetail } from "../../components/ProjectDetail";

const project = profile.projects.find((p) => p.slug === "heart-disease-prediction")!;

export const metadata = {
  title: `${project.title} | Arsalan Shahyar`,
  description: project.summary,
};

export default function HeartDiseasePredictionPage() {
  return <ProjectDetail project={project} />;
}
