import Projects from "@/pages/Projects";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projets - Portfolio de Fahimi Yassir | Applications Java & Angular",
  description:
    "Découvrez les projets de Fahimi Yassir. Applications microservices Java, systèmes de traitement temps réel avec Kafka, applications Full Stack Angular & Spring Boot.",
  keywords:
    "Projets Java, Microservices Spring Boot, Applications Angular, PostgreSQL, Docker, Kafka, Full Stack, Fahimi Yassir Projets",
  openGraph: {
    title: "Projets - Portfolio de Fahimi Yassir",
    description:
      "Mes projets de développement Java, Spring Boot et Angular",
    url: "https://yassir-fahimi.vercel.app/projects",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projets - Portfolio de Fahimi Yassir",
    description: "Mes projets de développement",
  },
  alternates: {
    canonical: "/projects",
  },
};

export default function ProjectsPage() {
  return <Projects />;
}
