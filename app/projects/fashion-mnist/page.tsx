import { profile } from "@/lib/portfolio-data";
import { ProjectDetail } from "../../components/ProjectDetail";

const project = profile.projects.find((p) => p.slug === "fashion-mnist")!;

export const metadata = {
  title: `${project.title} | Arsalan Shahyar`,
  description: project.summary,
};

export default function FashionMnistPage() {
  return <ProjectDetail project={project} />;
}
