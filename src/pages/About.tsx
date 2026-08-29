'use client';

import { motion } from 'framer-motion';
import Link from "next/link";
import { Code2, Briefcase, GraduationCap, Award, Users, Globe } from 'lucide-react';
import { ScrollAnimation } from '@/components/ScrollAnimation';

const About = () => {
	const achievements = [
		{
			icon: <Briefcase className="w-6 h-6" />,
			title: "3 Expériences",
			description: "SaaS Médical (PFE), Fintech & LegalTech"
		},
		{
			icon: <Code2 className="w-6 h-6" />,
			title: "6+ Projets",
			description: "Microservices Kafka, SaaS IA, DevOps & Full Stack"
		},
		{
			icon: <GraduationCap className="w-6 h-6" />,
			title: "INSEA",
			description: "Diplôme d'Ingénieur Data & Software Engineering"
		},
		{
			icon: <Award className="w-6 h-6" />,
			title: "CPGE MP",
			description: "Classes Préparatoires aux Grandes Écoles"
		}
	];

	const interests = [
		"Intelligence Artificielle & Agents RAG",
		"Ingénierie Logicielle & Architectures",
		"Traitement & Ingénierie de Données",
		"Développement Full-Stack",
		"Architectures Backend Modernes",
		"Automatisation & Aide à la décision"
	];

	return (
		<div className="min-h-screen pt-20 px-4 max-w-5xl mx-auto pb-20">
			<ScrollAnimation>
				<motion.h2 className="text-4xl font-bold mb-8 gradient-text">
					About Me
				</motion.h2>
			</ScrollAnimation>

			<div className="grid md:grid-cols-2 gap-8">
				<ScrollAnimation>
					<div className="overflow-hidden rounded-2xl bg-gray-800/50">
						<img
							src="/profile/profile.jpg"
							alt="Fahimi Yassir"
							className="w-full h-auto hover:scale-105 transition-transform duration-500"
						/>
					</div>
				</ScrollAnimation>

				<ScrollAnimation className="space-y-6">
					<div className="space-y-4">
						<p className="text-gray-300 leading-relaxed">
							Je suis Fahimi Yassir, ingénieur en Data & Software Engineering, diplômé de l&apos;INSEA, avec une formation scientifique solide issue des classes préparatoires MP.
						</p>
						<p className="text-gray-300 leading-relaxed">
							Je conçois et développe des applications de bout en bout en combinant développement full-stack, ingénierie logicielle et systèmes orientés data. Je porte une attention particulière à la structuration, la maintenabilité et la scalabilité des solutions, avec une approche orientée vers la conception de systèmes cohérents et adaptés à des besoins métiers réels.
						</p>
						<p className="text-gray-300 leading-relaxed">
							Je m&apos;intéresse particulièrement à l&apos;Intelligence Artificielle, aux agents intelligents et aux systèmes basés sur le RAG, notamment pour l&apos;automatisation, l&apos;exploitation des données et l&apos;aide à la décision. J&apos;explore leur intégration au sein d&apos;architectures applicatives complètes, en reliant traitement des données, logique métier, services backend et expérience utilisateur.
						</p>
						<p className="text-gray-300 leading-relaxed">
							Mon approche repose sur les principes fondamentaux de l&apos;ingénierie logicielle : clarté du code, modularité, découplage, robustesse et évolutivité. Mon objectif est de transformer des problématiques complexes en solutions logicielles fiables, maintenables et capables d&apos;évoluer.
						</p>
					</div>

					<ScrollAnimation>
						<div className="pt-4">
							<h3 className="text-2xl font-semibold mb-4 gradient-text">Quick Facts</h3>
							<ul className="list-none space-y-3">
								{["Basé à Rabat, Maroc", "Ingénieur Data & Software Engineering - INSEA", "Langues : Français, Anglais, Arabe"].map((fact, index) => (
									<motion.li
										key={fact}
										className="flex items-center space-x-2 text-gray-300"
									>
										<span className="w-2 h-2 bg-white rounded-full" />
										<span>{fact}</span>
									</motion.li>
								))}
							</ul>
						</div>
					</ScrollAnimation>

					<ScrollAnimation>
						<div className="flex justify-start space-x-4">
							<Link
								href="/files/cv_pdf/cv_yassir_dev.pdf"
								target="_blank"
								rel="noopener noreferrer"
								className="px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-100 transition-colors"
							>
								Download CV
							</Link>
							<Link
								href="/skills"
								className="px-6 py-3 bg-white/10 text-white rounded-full font-medium hover:bg-white/20 transition-colors"
							>
								My Skills
							</Link>
						</div>
					</ScrollAnimation>
				</ScrollAnimation>
			</div>

			<ScrollAnimation>
				<div className="mt-16">
					<h3 className="text-2xl font-semibold mb-8 gradient-text">Achievements</h3>
					<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
						{achievements.map((achievement, index) => (
							<ScrollAnimation key={achievement.title}>
								<div className="bg-white/5 p-6 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-colors h-full flex flex-col justify-between">
									<div>
										<div className="text-white mb-4">{achievement.icon}</div>
										<h4 className="text-xl font-semibold mb-2">{achievement.title}</h4>
										<p className="text-gray-400 text-sm">{achievement.description}</p>
									</div>
								</div>
							</ScrollAnimation>
						))}
					</div>
				</div>
			</ScrollAnimation>

			<ScrollAnimation>
				<div className="mt-16">
					<h3 className="text-2xl font-semibold mb-8 gradient-text">Areas of Interest</h3>
					<div className="grid grid-cols-2 md:grid-cols-3 gap-4">
						{interests.map((interest, index) => (
							<ScrollAnimation key={interest}>
								<div className="bg-white/5 p-4 rounded-xl backdrop-blur-sm flex items-center gap-3">
									<Globe className="w-5 h-5 text-gray-400" />
									<span className="text-gray-300">{interest}</span>
								</div>
							</ScrollAnimation>
						))}
					</div>
				</div>
			</ScrollAnimation>
		</div>
	);
};

export default About;