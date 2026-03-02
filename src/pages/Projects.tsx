'use client';

import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { ScrollAnimation } from '@/components/ScrollAnimation';

const projects = [
	{
		title: 'Application Microservices Java',
		description: 'Développement de microservices REST avec Spring Boot. Implémentation de la communication inter-services et gestion des erreurs. Conteneurisation des applications avec Docker.',
		image: '/projects_img/project-1.png',
		github: 'https://github.com/yassir1410/projet_micorservice_library',
		live: '',
		tags: ["Java", "Spring Boot", "REST API", "Docker", "Microservices"]
	},
	{
		title: 'Système de Traitement Temps Réel',
		description: 'Traitement asynchrone des événements via Apache Kafka. Architecture scalable et orientée performance. Sécurisation des APIs avec JWT et Spring Security.',
		image: '/projects_img/project-2.png',
		github: 'https://github.com/MedTahiri/Plateforme-d-Analyse-des-Dossiers-Medicaux-avec-Pipeline-Temps-Reel#',
		live: '',
		tags: ["Java", "Kafka", "Spring Security", "JWT", "Architecture"]
	},
	{
		title: 'module-gestion-des-deplacements-odoo',
		description: 'Module complet de gestion des demandes de déplacement professionnel pour Odoo 18 avec workflow de validation à deux niveaux (Manager → DAF). Intégration de fonctionnalités avancées .',
		image: '/projects_img/project-3.png',
		github: 'https://github.com/yassir1410/module-gestion-des-deplacements-odoo',
		live: '',
		tags: ["Python", "PostgreSQL", "odoo", "odoo's ORM", "Docker"]
	},
];

const Projects = () => {
	return (
		<div className="min-h-screen pt-20 px-4 max-w-6xl mx-auto">
			<ScrollAnimation>
				<h2 className="text-4xl font-bold mb-12 gradient-text">Projets</h2>
			</ScrollAnimation>

			<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
				{projects.map((project, index) => (
					<ScrollAnimation key={project.title}>
						<div className="bg-gray-800/50 rounded-lg overflow-hidden backdrop-blur-sm">
							<img
								src={project.image}
								alt={project.title}
								className="w-full h-48 object-cover"
							/>
							<div className="p-6">
								<h3 className="text-xl font-semibold mb-2">{project.title}</h3>
								<p className="text-gray-400 mb-4">{project.description}</p>
								<div className="flex flex-wrap gap-2 mb-4">
									{project.tags.map(tag => (
										<span key={tag} className="px-2 py-1 text-sm bg-purple-500/20 rounded">
											{tag}
										</span>
									))}
								</div>
								<div className="flex space-x-4">
									<a href={project.github} target="_blank" rel="noopener noreferrer"
										className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors">
										<Github className="w-4 h-4" />
										<span>Code</span>
									</a>
									<a href={project.live} target="_blank" rel="noopener noreferrer"
										className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors">
										<ExternalLink className="w-4 h-4" />
										<span>Live</span>
									</a>
								</div>
							</div>
						</div>
					</ScrollAnimation>
				))}
			</div>
		</div>
	);
};

export default Projects;