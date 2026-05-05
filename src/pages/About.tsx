'use client';

import { motion } from 'framer-motion';
import Link from "next/link";
import { Code2, Briefcase, GraduationCap, Award, Users, Globe } from 'lucide-react';
import { ScrollAnimation } from '@/components/ScrollAnimation';

const About = () => {
	const achievements = [
		{
			icon: <Code2 className="w-6 h-6" />,
			title: "6+ Projets",
			description: "Data Engineering, IA, Full Stack"
		},
		{
			icon: <Briefcase className="w-6 h-6" />,
			title: "2 Stages",
			description: "Expérience en développement backend"
		},
		{
			icon: <GraduationCap className="w-6 h-6" />,
			title: "INSEA",
			description: "Data & Software Engineering"
		}
	];

	const interests = [
		"Agents IA Multi-Agents",
		"RAG & Systèmes Intelligents",
		"Traitement de Données",
		"Python & Machine Learning",
		"Architectures Backend Modernes",
		"Génération de Documents"
	];

	return (
		<div className="min-h-screen pt-20 px-4 max-w-4xl mx-auto pb-20">
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
							Je suis Fahimi Yassir, étudiant en 3ème année en Data & Software Engineering à l&apos;INSEA, avec une formation scientifique issue des classes préparatoires MP.
						</p>
						<p className="text-gray-300 leading-relaxed">
							Je conçois des applications de bout en bout en combinant développement full-stack et systèmes orientés data, avec une attention particulière portée à la structuration, la maintenabilité et la scalabilité. Mon approche ne se limite pas à développer des fonctionnalités, mais vise à construire des systèmes cohérents, capables d&apos;évoluer et de répondre à des besoins métiers réels.
						</p>
						<p className="text-gray-300 leading-relaxed">
							Je m&apos;intéresse particulièrement aux agents intelligents et aux systèmes basés sur l&apos;IA, notamment dans des contextes d&apos;automatisation et d&apos;aide à la décision. J&apos;explore la manière d&apos;intégrer ces capacités dans des architectures applicatives complètes, en reliant logique métier, traitement de données et interaction utilisateur.
						</p>
						<p className="text-gray-300 leading-relaxed">
							Je porte une attention forte aux principes d&apos;ingénierie logicielle : clarté du code, découplage, modularité et qualité globale des systèmes, avec pour objectif de résoudre efficacement des problèmes complexes.
						</p>
					</div>

					<ScrollAnimation>
						<div className="pt-4">
							<h3 className="text-2xl font-semibold mb-4 gradient-text">Quick Facts</h3>
							<ul className="list-none space-y-3">
								{["Basé à Rabat, Maroc", "Ingénieur Data & Software Engineering - INSEA", "Langues : Français , Anglais , Arabe"].map((fact, index) => (
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
								href="/files/cv_pdf/Fahimi_Yassir(CV).pdf"
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
					<div className="grid md:grid-cols-3 gap-6">
						{achievements.map((achievement, index) => (
							<ScrollAnimation key={achievement.title}>
								<div className="bg-white/5 p-6 rounded-xl backdrop-blur-sm">
									<div className="text-white mb-4">{achievement.icon}</div>
									<h4 className="text-xl font-semibold mb-2">{achievement.title}</h4>
									<p className="text-gray-400">{achievement.description}</p>
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