import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Background3D from "@/components/Background3D";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#000000",
  colorScheme: "dark",
};

export const metadata: Metadata = {
  // Basic metadata
  title: {
    default: "Fahimi Yassir - Étudiant Ingénieur | Développeur Java & Angular – INSEA",
    template: "%s | Fahimi Yassir",
  },
  description:
    "Fahimi Yassir - Étudiant Ingénieur à l'INSEA spécialisé en Data & Software Engineering. Développeur Java, Spring Boot, Angular, TypeScript. Basé à Rabat, Maroc.",

  // Extended keywords for better SEO
  keywords: [
    // Name variations
    "Fahimi Yassir",
    "Yassir Fahimi",
    "yassir-fahimi",

    // Job titles
    "Étudiant Ingénieur",
    "Développeur Java",
    "Développeur Angular",
    "Full Stack Developer",
    "Software Engineer",
    "Backend Developer",
    "Java Developer",
    "Spring Boot Developer",

    // Technologies - Backend
    "Java 21",
    "Spring Boot",
    "Spring Security",
    "JPA/Hibernate",
    "REST API",
    "Microservices",
    "Apache Kafka",

    // Technologies - Frontend
    "Angular",
    "TypeScript",
    "JavaScript",
    "HTML5",
    "CSS3",

    // Technologies - Database
    "PostgreSQL",
    "MongoDB",
    "SQL",
    "Database Design",

    // Technologies - DevOps/Tools
    "Git",
    "GitHub",
    "Docker",
    "CI/CD",

    // Skills
    "Web Development",
    "Full Stack Development",
    "Backend Development",
    "Software Architecture",

    // Location
    "Rabat Developer",
    "Maroc Developer",
    "INSEA",
    "Morocco Developer",

    // Services
    "Portfolio",
    "Stage PFE",
    "Ingénieur Software",
  ].join(", "),

  authors: [
    {
      name: "Fahimi Yassir",
      url: "https://yassir-fahimi.vercel.app",
    },
  ],
  creator: "Fahimi Yassir",
  publisher: "Fahimi Yassir",

  // Manifest
  manifest: "/manifest.json",

  // App-specific metadata
  applicationName: "Fahimi Yassir Portfolio",

  // OpenGraph metadata for social sharing
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://yassir-fahimi.vercel.app/",
    title: "Fahimi Yassir - Étudiant Ingénieur | Développeur Java & Angular",
    description:
      "Étudiant Ingénieur à l'INSEA, spécialisé en Java, Spring Boot, Angular et technologies web modernes. Expert en développement backend et applications Full Stack.",
    siteName: "Fahimi Yassir Portfolio",
    images: [
      {
        url: "https://yassir-fahimi.vercel.app/profile/profile.jpg",
        width: 1200,
        height: 630,
        alt: "Fahimi Yassir - Développeur Java & Angular",
      },
    ],
  },

  // Twitter Card metadata
  twitter: {
    card: "summary_large_image",
    title: "Fahimi Yassir - Étudiant Ingénieur | Développeur Java & Angular",
    description:
      "Étudiant Ingénieur à l'INSEA, spécialisé en Java, Spring Boot, Angular et technologies web modernes.",
    creator: "@yassir_fahimi",
    images: ["https://yassir-fahimi.vercel.app/profile/profile.jpg"],
  },

  // Robots configuration
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Base URL for relative URLs
  metadataBase: new URL("https://yassir-fahimi.vercel.app"),

  // Canonical URL
  alternates: {
    canonical: "/",
  },

  // Verification
  verification: {
    google: "googlea4a36904e14398c1",
    // Add other verifications if needed
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },

  // Additional metadata
  category: "technology",

  // Structured data will be added via JSON-LD in the component
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Structured Data (JSON-LD) for better SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Fahimi Yassir",
    alternateName: "Yassir Fahimi",
    url: "https://yassir-fahimi.vercel.app",
    image: "https://yassir-fahimi.vercel.app/profile/profile.jpg",
    sameAs: [
      "https://github.com/yassir-fahimi",
      "https://linkedin.com/in/yassir-fahimi-265826218",
    ],
    jobTitle: "Étudiant Ingénieur - Développeur Java & Angular",
    worksFor: {
      "@type": "Organization",
      name: "INSEA",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Rabat",
      addressRegion: "Rabat-Salé-Kénitra",
      addressCountry: "MA",
    },
    email: "fahimiyassir4@gmail.com",
    telephone: "+212625343237",
    knowsAbout: [
      "Java",
      "Spring Boot",
      "Angular",
      "TypeScript",
      "PostgreSQL",
      "Docker",
      "REST API",
      "Microservices",
      "JPA/Hibernate",
      "Spring Security",
      "Full Stack Development",
    ],
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "INSEA - Institut National de Statistique et d'Économie Appliquée",
    },
  };

  return (
    <html lang="fr" className={inter.className}>
      <head>
        {/* Favicons */}
        <link rel="shortcut icon" href="/nextjs.png" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/nextjs.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/nextjs.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/nextjs.png" />

        {/* Manifest */}
        <link rel="manifest" href="/manifest.json" />

        {/* Structured Data (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />

        {/* Additional meta tags */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="apple-mobile-web-app-title" content="Yassir Portfolio" />
      </head>
      <body>
        <div className="min-h-screen flex flex-col">
          <Background3D />
          <Navbar />
          <main className="flex-grow">{children}</main>
          <SpeedInsights />
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  );
}
