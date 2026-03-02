import Education from "@/pages/Education";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Formation - Fahimi Yassir | INSEA & CPGE",
  description:
    "Parcours académique de Fahimi Yassir. Diplôme d'Ingénieur en Data & Software Engineering à l'INSEA Rabat. Classes Préparatoires MP à Tétouan.",
  keywords:
    "Formation, INSEA, CPGE, Classes Préparatoires MP, Data & Software Engineering, Ingénieur, Rabat, Tétouan, Fahimi Yassir Formation",
  openGraph: {
    title: "Formation - Fahimi Yassir",
    description: "Mon parcours académique et ma formation d'ingénieur",
    url: "https://yassir-fahimi.vercel.app/education",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Formation - Fahimi Yassir",
    description: "Mon parcours académique",
  },
  alternates: {
    canonical: "/education",
  },
};

export default function EducationPage() {
  return <Education />;
}
