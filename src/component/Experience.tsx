import { Card } from "./ui/card";
import { Briefcase, GraduationCap } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      title: "Assistante administrative",
      company: "LM Control",
      period: "2022 — 2025",
      description:
        "Gestion complète du SAV, pilotage des dossiers clients complexes et coordination administrative pour assurer la satisfaction client.",
    },
    {
      title: "Agent SAV",
      company: "BUT Saint-Priest",
      period: "2017 — 2022",
      description:
        "Expertise technique en diagnostic produit, gestion des flux logistiques et résolution de litiges en autonomie.",
    },
    {
      title: "Hôtesse d'accueil",
      company: "BUT Saint-Priest",
      period: "2016 — 2017",
      description:
        "Accueil et orientation des clients en magasin, gestion des appels entrants et traitement des demandes de premier niveau.",
    },
    {
      title: "Expériences antérieures",
      company: "",
      period: "2010 — 2016",
      description: "",
      subItems: [
        { role: "Service Civique", place: "IME Bouquet" },
        { role: "Garde d'enfants", place: "Lyon" },
        { role: "Assistante Maternelle", place: "Lyon 8" },
        { role: "Restauration, secrétariat médical, vente", place: "Divers" },
      ],
    },
  ];

  const formations = [
    {
      title: "Dev Web Fullstack",
      school: "Ada Tech School",
      period: "Depuis 2025",
      highlight: true,
    },
    {
      title: "CAP Petite Enfance",
      school: "Lycée Marie Curie",
      period: "2015",
      highlight: false,
    },
    {
      title: "Bac Pro Secrétariat",
      school: "Lycée F. Forest",
      period: "2012",
      highlight: false,
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Parcours
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Expériences Professionnelles */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-100 to-indigo-200 flex items-center justify-center">
                <Briefcase size={20} className="text-indigo-600" />
              </div>
              <h3 className="text-2xl font-bold">
                Expériences Professionnelles
              </h3>
            </div>

            <div className="space-y-4">
              {experiences.map((exp, index) => (
                <Card
                  key={index}
                  className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="font-bold text-lg">{exp.title}</h4>
                    <span className="text-sm text-gray-500 shrink-0 ml-2">
                      {exp.period}
                    </span>
                  </div>
                  {exp.company && (
                    <p className="text-indigo-600 mb-1">{exp.company}</p>
                  )}
                  {exp.description && (
                    <p className="text-sm text-gray-700">{exp.description}</p>
                  )}
                  {exp.subItems && (
                    <div className="mt-2 space-y-1">
                      {exp.subItems.map((item, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 text-sm">
                          <span className="font-medium text-gray-800">
                            {item.role}
                          </span>
                          <span className="text-gray-400">•</span>
                          <span className="text-indigo-600">{item.place}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </Card>
              ))}
            </div>
          </div>

          {/* Formation */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center">
                <GraduationCap size={20} className="text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold">Formation</h3>
            </div>

            <div className="space-y-4">
              {formations.map((formation, index) => (
                <Card
                  key={index}
                  className={`p-6 hover:shadow-lg transition-shadow ${
                    formation.highlight
                      ? "border-2 border-indigo-300 bg-gradient-to-br from-indigo-50 to-purple-50"
                      : ""
                  }`}>
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold text-lg">{formation.title}</h4>
                    <span className="text-sm text-gray-500">
                      {formation.period}
                    </span>
                  </div>
                  <p
                    className={
                      formation.highlight
                        ? "text-indigo-600"
                        : "text-purple-600"
                    }>
                    {formation.school}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
