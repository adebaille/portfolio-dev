import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Github, ExternalLink } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      title: 'Choisy Horizon 2032',
      status: 'Terminé',
      statusColor: 'bg-blue-100 text-blue-700',
      technologies: ['React', 'TypeScript', 'Tailwind', 'Vite'],
      description: "Site web pour une campagne municipale pour la ville de Choisy. Projet solo complet incluant design, développement et déploiement. Interface moderne et responsive avec navigation fluide.",
      role: 'Solo — Conception, design, développement et mise en ligne complète du site.',
      github: 'https://github.com/adebaille/choisy-horizon-2032',
      website: 'https://choisyhorizon2032.fr/',
      color: 'from-emerald-500 to-teal-500',
    },
    {
      title: 'Adaopte',
      status: 'Terminé',
      statusColor: 'bg-blue-100 text-blue-700',
      technologies: ['React', 'TypeScript', 'Node', 'Express', 'MySQL'],
      description: "Plateforme d'adoption d'animaux - Reproduction fidèle de maquette Figma, architecture d'une base de données relationnelle et d'une API REST. Implémentation de filtres dynamiques avancés.",
      role: 'Équipe (4 pers.) — Conception BDD, endpoints API et composants modulaires.',
      github: 'https://github.com/adebaille/adaopte',
      color: 'from-indigo-500 to-purple-500',
    },
    {
      title: 'Dataviz Cinéma',
      status: 'Terminé',
      statusColor: 'bg-blue-100 text-blue-700',
      technologies: ['React', 'TypeScript', 'Tailwind', 'Recharts'],
      description: "Visualisation interactive des cinémas parisiens via API Open Data. Interface de dashboard permettant d'analyser les données géographiques et statistiques de manière visuelle.",
      role: 'Binôme — Maquettage UI Figma, intégration Recharts et gestion appels API.',
      github: 'https://github.com/adebaille/dataviz-project',
      website: 'https://dataviz-project-vert.vercel.app/',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Quiz Disney Villains',
      status: 'Terminé',
      statusColor: 'bg-blue-100 text-blue-700',
      technologies: ['HTML', 'CSS', 'TypeScript', 'Git'],
      description: "Application interactive avec logique de score en temps réel. Travail approfondi sur l'algorithmie et la structure du code pour une expérience fluide.",
      role: 'Binôme — Logique de jeu en pair programming et gestion du DOM.',
      github: 'https://github.com/giovanafarinha/quiz',
      website: 'https://quiz-disney.netlify.app/',
      color: 'from-purple-500 to-pink-500',
    },
  ];

  return (
    <section id="projets" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Projets Réalisés
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className={`h-2 bg-gradient-to-r ${project.color}`}></div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  <Badge className={project.statusColor}>{project.status}</Badge>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <p className="text-sm text-gray-700 mb-3 text-justify">{project.description}</p>
                <p className="text-sm text-indigo-600 mb-4">
                  <span className="font-semibold">Rôle :</span> {project.role}
                </p>

                <div className="flex gap-2">
                  <Button variant="outline" asChild className="flex-1">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github size={16} className="mr-2" />
                      GitHub
                    </a>
                  </Button>
                  {project.website && (
                    <Button variant="outline" asChild className="flex-1">
                      <a href={project.website} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={16} className="mr-2" />
                        Site
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}