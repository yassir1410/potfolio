import About from '@/pages/About';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "À propos - Fahimi Yassir | Développeur Java & Angular",
  description:
    "Découvrez le parcours de Fahimi Yassir, étudiant ingénieur à l'INSEA spécialisé en Data & Software Engineering. Développeur Java, Spring Boot, Angular basé à Rabat, Maroc.",
  keywords:
    "À propos Fahimi Yassir, Développeur Java, Développeur Angular, INSEA, Spring Boot, Software Engineer Rabat, Maroc",
  openGraph: {
    title: "À propos - Fahimi Yassir | Développeur Java & Angular",
    description:
      "Découvrez mon parcours en tant que développeur Java & Angular à l'INSEA",
    url: "https://yassir-fahimi.vercel.app/about",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "À propos - Fahimi Yassir | Développeur Java & Angular",
    description: "Découvrez mon parcours de développeur",
  },
  alternates: {
    canonical: "/about",
  },
};


export default function AboutPage() {
	return <About />;
}