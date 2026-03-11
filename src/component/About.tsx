import { Card } from "@/component/ui/card";
import {
  Sparkles,
  Users,
  ListChecks,
  MessageCircle,
  Lightbulb,
} from "lucide-react";

export function About() {
  const softSkills = [
    { icon: Sparkles, text: "Autonomie & Adaptabilité" },
    { icon: Users, text: "Travail en équipe" },
    { icon: ListChecks, text: "Sens de l'organisation" },
    { icon: MessageCircle, text: "Relation client" },
    { icon: Lightbulb, text: "Résolution de problèmes" },
  ];

  return (
    <section id="a-propos" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            À propos
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-8">
            <h3 className="text-2xl font-bold mb-2 text-indigo-600">Profil</h3>
            <div className="text-gray-700 leading-relaxed space-y-4">
              <p>
                En reconversion vers le développement web, je suis actuellement
                en formation Fullstack à Ada Tech School.
              </p>
              <p>
                Curieuse, créative et déterminée, j'aime comprendre en
                profondeur ce que je construis et transformer des idées en
                solutions numériques concrètes et performantes.
              </p>
              <p>
                Issue d'un parcours administratif et SAV, j'ai développé une
                forte capacité d'organisation, un excellent sens du service et
                une vraie autonomie — des qualités que j'applique aujourd'hui
                dans mes projets techniques.
              </p>
            </div>
          </Card>

          <Card className="p-8">
            <h3 className="text-2xl font-bold mb-4 text-purple-600">
              Soft Skills
            </h3>
            <div className="space-y-3">
              {softSkills.map((skill, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 flex items-center justify-center">
                    <skill.icon size={20} className="text-indigo-600" />
                  </div>
                  <span className="text-gray-700">{skill.text}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <Card className="p-8 mt-8 bg-gradient-to-r from-indigo-50 to-purple-50">
          <h3 className="text-2xl font-bold mb-4 text-indigo-600">Intérêts</h3>
          <div className="flex flex-wrap gap-3">
            {["Création", "Numérique", "Auto-apprentissage", "Musique"].map(
              (interest, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-white rounded-full text-gray-700 shadow-sm">
                  {interest}
                </span>
              ),
            )}
          </div>
        </Card>
      </div>
    </section>
  );
}
