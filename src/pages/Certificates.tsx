'use client';

import { motion } from 'framer-motion';
import { Award, Calendar, ExternalLink } from 'lucide-react';
import { ScrollAnimation } from '@/components/ScrollAnimation';

const certificates = [
	{
		title: "Java: Zero to First Job",
		issuer: "Udemy",
		date: "2025",
		link: ".https://www.udemy.com/certificate/UC-7626cc95-59d2-453d-a04f-6725622cf4a2/",
		description: "Formation complète Java couvrant les fondamentaux du langage, la programmation orientée objet, les collections, les streams, et les bonnes pratiques de développement.",
		skills: ["Java", "OOP", "Collections", "Streams"]
	},
	{
		title: "JavaScript Wizardry",
		issuer: "Udemy",
		date: "2025",
		link: "https://www.udemy.com/certificate/UC-ffae3f94-873a-4fb6-942d-9d90b29f0e25/",
		description: "Formation avancée JavaScript couvrant les concepts modernes ES6+, la programmation asynchrone, les design patterns et les techniques avancées.",
		skills: ["JavaScript", "ES6+", "Async/Await", "Design Patterns"]
	},
];

const Certificates = () => {
	return (
		<div className="min-h-screen pt-20 px-4 max-w-6xl mx-auto pb-20">
			<ScrollAnimation>
				<motion.div
					className="flex items-center gap-3 mb-12"
					initial={{ opacity: 0, x: -20 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.8 }}
				>
					<Award className="w-8 h-8" />
					<h2 className="text-4xl font-bold gradient-text">Certificates</h2>
				</motion.div>
			</ScrollAnimation>

			<div className="grid md:grid-cols-2 gap-6">
				{certificates.map((cert, index) => (
					<ScrollAnimation key={cert.title}>
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: index * 0.1 }}
							className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm hover:bg-gray-800/70 transition-all group border border-white/5"
						>
							<h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
							<div className="text-gray-400 space-y-2">
								<div className="flex items-center justify-between">
									<span className="text-lg">{cert.issuer}</span>
									<div className="flex items-center gap-2">
										<Calendar className="w-4 h-4" />
										<span>{cert.date}</span>
									</div>
								</div>
								<p className="text-gray-300 line-clamp-2">{cert.description}</p>
								<div className="flex flex-wrap gap-2 mt-4">
									{cert.skills.map((skill) => (
										<span
											key={skill}
											className="px-2 py-1 text-sm bg-white/10 rounded-full"
										>
											{skill}
										</span>
									))}
								</div>
								<motion.a
									href={cert.link}
									target="_blank"
									rel="noopener noreferrer"
									className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 mt-4 group-hover:translate-x-2 transition-transform"
									whileHover={{ scale: 1.05 }}
								>
									View Certificate
									<ExternalLink className="w-4 h-4" />
								</motion.a>
							</div>
						</motion.div>
					</ScrollAnimation>
				))}
			</div>
		</div>
	);
};

export default Certificates;