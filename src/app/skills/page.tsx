import Skills from "@/pages/Skills";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Compétences Techniques - Fahimi Yassir | Data & Software Engineering",
  description:
    "Compétences techniques de Fahimi Yassir : Full-Stack, Backend & Frontend, Ingénierie Logicielle, Data & IA (ML, NLP, RAG, LLM), Bases de données (PostgreSQL, MySQL, MongoDB), DevOps (Docker, Git, Kubernetes, Kafka).",
  keywords:
    "Data Engineering, Software Engineering, RAG, IA, Full Stack, Python, Java, Spring Boot, React, Angular, PostgreSQL, Docker, Kafka, Fahimi Yassir",
  openGraph: {
    title: "Compétences Techniques - Fahimi Yassir | Data & Software Engineering",
    description:
      "Mes compétences techniques en ingénierie logicielle, systèmes orientés data et IA",
    url: "https://yassir-fahimi.vercel.app/skills",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Compétences Techniques - Fahimi Yassir",
    description: "Mes compétences techniques en ingénierie logicielle & data",
  },
  alternates: {
    canonical: "/skills",
  },
};

export default function SkillsPage() {
  return <Skills />;
}
