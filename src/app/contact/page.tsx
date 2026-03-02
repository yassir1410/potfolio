import Contact from '@/pages/Contact';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title:
    "Contact - Fahimi Yassir | Développeur Java & Angular",
  description:
    "Contactez Fahimi Yassir pour des projets de développement, stages PFE, ou collaborations. Email : fahimiyassir4@gmail.com | Tél : +212 625343237. Basé à Rabat, Maroc.",
  keywords:
    "Contact Fahimi Yassir, Développeur Java, Stage PFE, Développeur Angular, Spring Boot, Rabat Maroc, INSEA",
  openGraph: {
    title: "Contact - Fahimi Yassir | Développeur Java & Angular",
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