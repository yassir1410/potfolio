'use client';

import { motion } from 'framer-motion';
import {
	Code2, Layout, Server, Database, MessageSquare, Lightbulb, Users, Brain,
	Cloud, Terminal, Wrench,
} from 'lucide-react';
import { ScrollAnimation } from '@/components/ScrollAnimation';
import {
  JavaScriptLogo, HTML5Logo,
  CSSLogo, ReactLogo, TypeScriptLogo, NodeLogo,
  MongoDBLogo, VSCodeLogo, GitLogo, TailwindLogo, NextjsLogo,
  VirtualBoxLogo,
  MicroservicesLogo,
  ArchitectureLogo,
  JavaLogo,
  PythonLogo,
  PHPLogo,
  KubernetesLogo
} from '@/components/TechLogos';

const skills = [
  {
    category: "Backend",
    icon: <Server className="w-6 h-6" />,
    items: [
      { name: "Laravel", icon: <Code2 className="w-4 h-4" /> },
      { name: "Spring Boot", icon: <Server className="w-4 h-4" /> },
      { name: "Fast API", icon: <Server className="w-4 h-4" /> },
      { name: "ORM", icon: <Database className="w-4 h-4" /> },
    ],
  },
  {
    category: "Frontend",
    icon: <Layout className="w-6 h-6" />,
    items: [
      { name: "React", icon: <ReactLogo /> },
      { name: "JavaScript", icon: <JavaScriptLogo /> },
      { name: "Tailwind CSS", icon: <TailwindLogo /> },
      { name: "CSS3", icon: <CSSLogo /> },
    ],
  },
  {
    category: "Bases de données",
    icon: <Database className="w-6 h-6" />,
    items: [
      { name: "PostgreSQL", icon: <Database className="w-4 h-4" /> },
      { name: "MySQL", icon: <Database className="w-4 h-4" /> },
      { name: "MongoDB", icon: <MongoDBLogo /> },
    ],
  },
  {
    category: "DevOps",
    icon: <Wrench className="w-6 h-6" />,
    items: [
      { name: "Docker", icon: <Cloud className="w-4 h-4" /> },
      { name: "Git", icon: <GitLogo /> },
      { name: "Kubernetes", icon: <KubernetesLogo /> },
      { name: "Apache Kafka", icon: <Server className="w-4 h-4" /> },
    ],
  },
  {
    category: "Méthodologies  & Outils",
    icon: <Wrench className="w-6 h-6" />,
    items: [
      { name: "Méthode Agile", icon: <Cloud className="w-4 h-4" /> },
      { name: "TDD", icon: <GitLogo /> },
      { name: "DDD", icon: <Server className="w-4 h-4" /> },
      { name: "Microservices", icon: <Server className="w-4 h-4" /> }
    ],
  },
    {
    category: "DATA & AI",
    icon: <Wrench className="w-6 h-6" />,
    items: [
      { name: "ML", icon: <Cloud className="w-4 h-4" /> },
      { name: "NLP", icon: <GitLogo /> },
      { name: "RAG", icon: <Server className="w-4 h-4" /> },
      { name: "LLM", icon: <Server className="w-4 h-4" /> }
    ],
  },
  {
    category: "Langages",
    icon: <Code2 className="w-6 h-6" />,
    items: [
      { name: "Java", icon: <JavaLogo /> },
      { name: "Python", icon: <PythonLogo /> },
      { name: "PHP", icon: <PHPLogo /> },
      { name: "JavaScript", icon: <JavaScriptLogo /> },
    ],
  },
  {
    category: "Soft Skills",
    icon: <Brain className="w-6 h-6" />,
    items: [
      { name: "Esprit d'analyse", icon: <Lightbulb className="w-4 h-4" /> },
      { name: "Autonomie", icon: <Users className="w-4 h-4" /> },
      { name: "Résolution de problèmes", icon: <Wrench className="w-4 h-4" /> },
      { name: "Communication", icon: <MessageSquare className="w-4 h-4" /> },
    ],
  },
  {
    category: "Langues",
    icon: <MessageSquare className="w-6 h-6" />,
    items: [
      { name: "Français ", icon: <MessageSquare className="w-4 h-4" /> },
      { name: "Anglais ", icon: <MessageSquare className="w-4 h-4" /> },
      { name: "Arabe (Maternelle)", icon: <MessageSquare className="w-4 h-4" /> },
    ],
  },
  
];

const Skills = () => {
	return (
		<div className="min-h-screen pt-20 px-4 max-w-6xl mx-auto pb-20">
			<ScrollAnimation>
				<h2 className="text-4xl font-bold mb-4 gradient-text">Compétences Techniques</h2>
			</ScrollAnimation>

			<ScrollAnimation>
				<p className="text-gray-400 mb-12 max-w-2xl">
					Un aperçu complet de mes compétences techniques et des outils avec lesquels je travaille
				</p>
			</ScrollAnimation>

			<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
				{skills.map((skillGroup, index) => (
					<ScrollAnimation key={skillGroup.category}>
						<div className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm hover:bg-gray-800/70 transition-all border border-white/5">
							<div className="flex items-center space-x-3 mb-6">
								<div className="p-2 bg-white/10 rounded-lg">
									{skillGroup.icon}
								</div>
								<h3 className="text-lg font-semibold">{skillGroup.category}</h3>
							</div>
							<div className="grid grid-cols-2 gap-4">
								{skillGroup.items.map((skill, skillIndex) => (
									<div
										key={skill.name}
										className="bg-gray-700/50 px-4 py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-white/10 transition-all group"
									>
										<div className="text-gray-400 group-hover:text-white transition-colors">
											{skill.icon}
										</div>
										<span className="text-gray-400 group-hover:text-white transition-colors text-sm">
											{skill.name}
										</span>
									</div>
								))}
							</div>
						</div>
					</ScrollAnimation>
				))}
			</div>
		</div>
	);
};

export default Skills;