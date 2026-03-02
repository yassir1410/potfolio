'use client';

import { motion } from 'framer-motion';
import Link from "next/link";
import { Code2, Briefcase, GraduationCap, Award, Users, Globe } from 'lucide-react';
import { ScrollAnimation } from '@/components/ScrollAnimation';

const About = () => {
	const achievements = [
		{
			icon: <Code2 className="w-6 h-6" />,
			title: "5+ Projets",
			description: "Applications Java, Angular & Full Stack"
		},
		{
			icon: <Briefcase className="w-6 h-6" />,
			title: "2 Stages",
			description: "Expérience professionnelle"
		},
		{
			icon: <GraduationCap className="w-6 h-6" />,
			title: "INSEA",
			description: "Data & Software Engineering"
		}
	];

	const interests = [
		"Développement Backend Java",
		"Angular & Frontend",
		"Architecture Microservices",
		"Spring Boot & Spring Security",
		"Docker & DevOps",
		"Bases de Données"
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
							Bonjour ! Je suis Fahimi Yassir, étudiant en 3ème année à l&apos;INSEA (Institut National de Statistique et d&apos;Économie Appliquée) en Data & Software Engineering, orienté développement Java et Angular.
						</p>
						<p className="text-gray-300 leading-relaxed">
							Mon parcours inclut des classes préparatoires MP à Tétouan, suivies d&apos;une formation d&apos;ingénieur à l&apos;INSEA à Rabat. J&apos;ai acquis une expérience concrète à travers des stages en entreprise, notamment chez D3 Soft et Miacorp, où j&apos;ai développé des applications métier avec Laravel, React, Spring Boot et Angular.
						</p>
						<p className="text-gray-300 leading-relaxed">
							Je me spécialise dans la conception d&apos;applications backend robustes avec Spring Boot et le développement d&apos;interfaces web dynamiques avec Angular. Sensible à la qualité du code, aux bonnes pratiques et à l&apos;architecture logicielle. Je recherche un Stage PFE (6 mois) à partir de février 2026.
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