import { profile } from "@/lib/portfolio-data";
import { ProjectDetail } from "../../components/ProjectDetail";

const project = profile.projects.find((p) => p.slug === "bulldozers-price-prediction")!;

export const metadata = {
  title: `${project.title} | Arsalan Shahyar`,
  description: project.summary,
};

export default function BulldozersPricePredictionPage() {
  return <ProjectDetail project={project} />;
}
