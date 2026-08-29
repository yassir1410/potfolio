'use client';

import { motion } from 'framer-motion';
import { Briefcase, MapPin, Building2, ArrowRight } from 'lucide-react';
import { ScrollAnimation } from '@/components/ScrollAnimation';

const experiences = [
	{
		title: "Ingénieur Full Stack & IA (PFE)",
		company: "AI4U / Seven Eleven Media",
		location: "Rabat, Maroc",
		period: "Fév. 2026 – Août 2026",
		type: "PFE",
		image: "/experience/ai4clinic_preview.png",
		description: [
			"Projet de Fin d'Études (PFE) : Développement d'AI4Clinic v3.0, une plateforme SaaS médicale multi-tenant (marketplace, cashback, gestion des cabinets).",
			"Architecture backend moderne avec Node.js, Express.js, Prisma et PostgreSQL, incluant la gestion d'isolation multi-tenant.",
			"Utilisation de PostGIS pour les recherches géospatiales de médecins selon la géolocalisation.",
			"Intégration d'un assistant virtuel WhatsApp basé sur Claude API (Anthropic) pour l'automatisation de la prise de rendez-vous en Français et Darija.",
			"Implémentation de fonctionnalités temps réel avec Socket.io pour la gestion des files d'attente.",
			"Développement frontend sur Next.js 15 (SSR/ISR) avec interfaces adaptées aux rôles médecin et secrétaire."
		],
		technologies: ["Next.js 15", "Node.js", "Express", "Prisma", "PostgreSQL", "PostGIS", "Claude API", "Socket.io"]
	},
	{
		title: "Développeur Full Stack (Stagiaire)",
		company: "D3 Soft",
		location: "Tanger, Maroc",
		period: "Juil. 2025 – Sept. 2025",
		type: "Stage",
		image: "/experience/liasse_fiscale_preview.png",
		description: [
			"Développement d'une application web de génération de la liasse fiscale marocaine conforme aux exigences de la DGI.",
			"Développement de fonctionnalités Full Stack et automatisation de l'import des balances comptables.",
			"Implémentation des calculs fiscaux et génération des différents états réglementaires.",
			"Participation à la modélisation des données et intégration des règles métier des cellules fiscales."
		],
		technologies: ["Laravel", "React", "Inertia.js", "MySQL"]
	},
	{
		title: "Développeur Web (Stagiaire)",
		company: "Miacorp",
		location: "Tanger, Maroc",
		period: "Juil. 2024 – Sept. 2024",
		type: "Stage",
		image: "/experience/legaltech_preview.png",
		description: [
			"Participation au développement d'une plateforme automatisant la génération de documents juridiques pour la création d'entreprises en France.",
			"Conception et développement de formulaires dynamiques et intégration d'APIs externes.",
			"Mise en place de la génération automatisée de documents PDF officiels."
		],
		technologies: ["Python", "Flask", "React", "PostgreSQL"]
	}
];

const Experience = () => {
	return (
		<div className="min-h-screen pt-16 sm:pt-20 px-4 max-w-5xl mx-auto pb-16 sm:pb-20">
			<ScrollAnimation>
				<h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 gradient-text flex items-center gap-3">
					<Briefcase className="w-7 h-7 sm:w-8 sm:h-8" />
					Professional Experience
				</h2>
			</ScrollAnimation>

			<div className="space-y-8 sm:space-y-12">
				{experiences.map((exp, index) => (
					<ScrollAnimation key={exp.company + exp.title}>
						<div className="group relative bg-gray-800/50 rounded-xl sm:rounded-2xl overflow-hidden backdrop-blur-sm hover:bg-gray-800/70 transition-all border border-white/5">
							<div className="grid grid-cols-1 md:grid-cols-[1fr,300px]">
								<div className="p-6 sm:p-8">
									<div className="flex items-center gap-3 mb-4 sm:mb-6">
										<div className="p-2 sm:p-3 bg-white/10 rounded-lg sm:rounded-xl group-hover:bg-white/20 transition-colors">
											<Building2 className="w-6 h-6 sm:w-7 sm:h-7" />
										</div>
										<div>
											<h3 className="text-xl sm:text-2xl font-bold mb-1">{exp.title}</h3>
											<p className="text-gray-400 text-base sm:text-lg">{exp.company}</p>
										</div>
									</div>

									<div className="flex flex-wrap items-center gap-2 text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
										<MapPin className="w-4 h-4 text-gray-400" />
										<span>{exp.location}</span>
										<span>•</span>
										<span>{exp.period}</span>
									</div>

									<ul className="space-y-3 sm:space-y-4 mb-6">
										{exp.description.map((item, i) => (
											<li
												key={i}
												className="flex items-start gap-3 text-gray-300 text-sm sm:text-base"
											>
												<ArrowRight className="w-5 h-5 mt-0.5 text-gray-400 flex-shrink-0" />
												<span className="leading-relaxed">{item}</span>
											</li>
										))}
									</ul>

									{exp.technologies && (
										<div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
											{exp.technologies.map((tech) => (
												<span
													key={tech}
													className="px-3 py-1 text-xs sm:text-sm bg-white/10 hover:bg-white/15 text-gray-200 rounded-full transition-colors font-medium"
												>
													{tech}
												</span>
											))}
										</div>
									)}
								</div>

								<div className="relative hidden md:block overflow-hidden">
									<img
										src={exp.image}
										alt={exp.company}
										className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
									/>
									<div className="absolute inset-0 bg-gradient-to-r from-gray-800/80 to-transparent" />
								</div>
							</div>
						</div>
					</ScrollAnimation>
				))}
			</div>
		</div>
	);
};

export default Experience;