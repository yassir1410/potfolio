import Experience from '@/pages/Experience';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Expérience Professionnelle - Fahimi Yassir | Data & Software Engineer",
  description:
    "Expérience professionnelle de Fahimi Yassir. Stages en ingénierie logicielle, IA & Full Stack chez AI4U, D3 Soft et Miacorp.",
  keywords:
    "Expérience Professionnelle, Stages, AI4U, D3 Soft, Miacorp, Data Engineer, Software Engineer, Full Stack, Fahimi Yassir",
  openGraph: {
    title: "Expérience Professionnelle - Fahimi Yassir",
    description: "Mon parcours professionnel et mes stages en ingénierie logicielle & IA",
    url: "https://yassir-fahimi.vercel.app/experience",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Expérience Professionnelle - Fahimi Yassir",
    description: "Mon parcours professionnel et mes stages",
  },
  alternates: {
    canonical: "/experience",
  },
};


export default function ExperiencePage() {
	return <Experience />;
}