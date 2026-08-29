import About from '@/pages/About';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "À propos - Fahimi Yassir | Ingénieur Data & Software Engineering",
  description:
    "Découvrez le parcours de Fahimi Yassir, ingénieur en Data & Software Engineering, diplômé de l'INSEA (CPGE MP). Spécialisé en ingénierie logicielle, full-stack, systèmes orientés data et IA (RAG).",
  keywords:
    "À propos Fahimi Yassir, Ingénieur Data & Software Engineering, INSEA, CPGE MP, Full Stack, IA, RAG, Software Engineer Rabat, Maroc",
  openGraph: {
    title: "À propos - Fahimi Yassir | Ingénieur Data & Software Engineering",
    description:
      "Découvrez mon parcours d'ingénieur en Data & Software Engineering diplômé de l'INSEA",
    url: "https://yassir-fahimi.vercel.app/about",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "À propos - Fahimi Yassir | Ingénieur Data & Software Engineering",
    description: "Découvrez mon parcours et mon expertise en ingénierie logicielle & data",
  },
  alternates: {
    canonical: "/about",
  },
};


export default function AboutPage() {
	return <About />;
}