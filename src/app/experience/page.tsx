import Experience from '@/pages/Experience';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Expérience Professionnelle - Fahimi Yassir | Stages",
  description:
    "Expérience professionnelle de Fahimi Yassir. Stages chez D3 Soft (Laravel, React) et Miacorp (développement web, APIs). Développement d'applications métier avec Java, Spring Boot, Angular.",
  keywords:
    "Expérience Professionnelle, Stages, D3 Soft, Miacorp, Développeur Full Stack, Java, Spring Boot, Angular, Laravel, React, Fahimi Yassir",
  openGraph: {
    title: "Expérience Professionnelle - Fahimi Yassir",
    description: "Mon parcours professionnel et mes stages",
    url: "https://yassir-fahimi.vercel.app/experience",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Expérience Professionnelle - Fahimi Yassir",
    description: "Mon parcours professionnel",
  },
  alternates: {
    canonical: "/experience",
  },
};


export default function ExperiencePage() {
	return <Experience />;
}