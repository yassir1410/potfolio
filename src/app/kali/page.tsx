import type { Metadata } from 'next';
import Kali from '@/pages/Kali';

export const metadata: Metadata = {
  title: "Kali Linux & Cybersecurity - Fahimi Yassir",
  description:
    "Découvrez les connaissances de Fahimi Yassir en Kali Linux, outils de cybersécurité, tests d'intrusion et bonnes pratiques de sécurité.",
  keywords:
    "Kali Linux, Cybersecurity, Penetration Testing, Security Tools, Ethical Hacking, Linux, Security Best Practices, Web Security, Fahimi Yassir",
  openGraph: {
    title: "Kali Linux & Cybersecurity - Fahimi Yassir",
    description: "Mon expérience avec Kali Linux et la cybersécurité",
    url: "https://yassir-fahimi.vercel.app/kali",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kali Linux & Cybersecurity",
    description: "My experience with security tools",
  },
  alternates: {
    canonical: "/kali",
  },
};


export default function KaliPage() {
	return <Kali />;
}