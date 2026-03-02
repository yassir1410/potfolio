import Certificates from '@/pages/Certificates';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Certifications - Fahimi Yassir | Java & JavaScript",
  description:
    "Certifications professionnelles de Fahimi Yassir. Certifications Java: Zero to First Job et JavaScript Wizardry sur Udemy.",
  keywords:
    "Certifications, Java, JavaScript, Udemy, Fahimi Yassir, Développement, Formation Continue",
  openGraph: {
    title: "Certifications - Fahimi Yassir",
    description: "Mes certifications professionnelles",
    url: "https://yassir-fahimi.vercel.app/certificates",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Certifications - Fahimi Yassir",
    description: "Mes certifications professionnelles",
  },
  alternates: {
    canonical: "/certificates",
  },
};


export default function CertificatesPage() {
	return <Certificates />;
}