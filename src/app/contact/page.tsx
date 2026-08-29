import Contact from '@/pages/Contact';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title:
    "Contact - Fahimi Yassir | Ingénieur Data & Software Engineering",
  description:
    "Contactez Fahimi Yassir, Ingénieur en Data & Software Engineering (INSEA), pour des projets, opportunités ou collaborations. Email : fahimiyassir4@gmail.com | Tél : +212 625343237. Basé à Rabat, Maroc.",
  keywords:
    "Contact Fahimi Yassir, Ingénieur Data & Software Engineering, INSEA, Full Stack, RAG, IA, Rabat Maroc",
  openGraph: {
    title: "Contact - Fahimi Yassir | Ingénieur Data & Software Engineering",
    description: "Contactez-moi pour des projets et collaborations",
    url: "https://yassir-fahimi.vercel.app/contact",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact - Fahimi Yassir",
    description: "Contactez-moi pour des projets et collaborations",
  },
  alternates: {
    canonical: "/contact",
  },
};


export default function ContactPage() {
	return <Contact />;
}