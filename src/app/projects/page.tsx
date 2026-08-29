import Projects from "@/pages/Projects";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projets - Portfolio de Fahimi Yassir | Data & Software Engineering",
  description:
    "Découvrez les projets de Fahimi Yassir : applications full-stack, architectures orientées data, systèmes d'IA (RAG, agents intelligents), pipelines ETL et microservices.",
  keywords:
    "Projets Data Engineering, Full Stack, IA, RAG, Microservices, Python, Java, Spring Boot, Kafka, Docker, Fahimi Yassir Projets",
  openGraph: {
    title: "Projets - Portfolio de Fahimi Yassir | Data & Software Engineering",
    description:
      "Mes projets en ingénierie logicielle, systèmes orientés data et IA",
    url: "https://yassir-fahimi.vercel.app/projects",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projets - Portfolio de Fahimi Yassir",
    description: "Mes projets de développement et ingénierie logicielle",
  },
  alternates: {
    canonical: "/projects",
  },
};

export default function ProjectsPage() {
  return <Projects />;
}
