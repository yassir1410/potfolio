import Skills from "@/pages/Skills";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Compétences Techniques - Fahimi Yassir | Java, Spring Boot, Angular",
  description:
    "Compétences techniques de Fahimi Yassir : Backend (Java 21, Spring Boot, Spring Security, JPA/Hibernate), Frontend (Angular, TypeScript, HTML5, CSS3), Bases de données (PostgreSQL, MongoDB), DevOps (Docker, Git, Kafka).",
  keywords:
    "Java, Spring Boot, Angular, TypeScript, PostgreSQL, Docker, Kafka, Spring Security, JPA, Hibernate, Full Stack, Compétences Techniques, Fahimi Yassir",
  openGraph: {
    title: "Compétences Techniques - Fahimi Yassir",
    description:
      "Mes compétences techniques en développement Java & Angular",
    url: "https://yassir-fahimi.vercel.app/skills",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Compétences Techniques - Fahimi Yassir",
    description: "Mes compétences techniques",
  },
  alternates: {
    canonical: "/skills",
  },
};

export default function SkillsPage() {
  return <Skills />;
}
