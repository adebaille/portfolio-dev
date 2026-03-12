import { Card } from './ui/card';
import { Badge } from '@/component/ui/badge';
import { Code2, Layers, Wrench } from 'lucide-react';

export function Skills() {
  const languages = ['HTML5', 'CSS3', 'JS', 'TypeScript', 'SQL'];
  const frameworks = ['React', 'Node.js', 'Express', 'Tailwind', 'Recharts'];
  const tools = ['Git / GitHub / VS Code', 'Figma / DrawSQL / Jira', 'Pair programming & Agile'];

  return (
    <section id="competences" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Compétences
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-100 to-indigo-200 flex items-center justify-center">
                <Code2 size={24} className="text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold">Langages</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {languages.map((lang, index) => (
                <Badge key={index} variant="secondary" className="bg-indigo-100 text-indigo-700 hover:bg-indigo-200">
                  {lang}
                </Badge>
              ))}
            </div>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center">
                <Layers size={24} className="text-purple-600" />
              </div>
              <h3 className="text-xl font-bold">Frameworks & Libs</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {frameworks.map((framework, index) => (
                <Badge key={index} variant="secondary" className="bg-purple-100 text-purple-700 hover:bg-purple-200">
                  {framework}
                </Badge>
              ))}
            </div>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-pink-100 to-pink-200 flex items-center justify-center">
                <Wrench size={24} className="text-pink-600" />
              </div>
              <h3 className="text-xl font-bold">Outils & Méthodes</h3>
            </div>
            <div className="space-y-2">
              {tools.map((tool, index) => (
                <div key={index} className="flex items-start gap-2">
                  <span className="text-pink-600 mt-1">•</span>
                  <span className="text-sm text-gray-700">{tool}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}