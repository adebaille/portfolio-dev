import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Mail, MapPin, Github, Linkedin, Send, FileText } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Contactez-moi
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mb-4"></div>
          <p className="text-gray-600">
            Je suis à la recherche d'une alternance de 12 mois à partir de juin
            2026 (rythme 4j/1j).
            <br />
            N'hésitez pas à me contacter pour discuter de vos projets !
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-100 to-indigo-200 flex items-center justify-center flex-shrink-0">
                <Mail size={20} className="text-indigo-600" />
              </div>
              <div>
                <h3 className="font-bold mb-1">Email</h3>
                <a
                  href="mailto:adebaille@gmail.com"
                  className="text-gray-600 hover:text-indigo-600 transition-colors">
                  adebaille@gmail.com
                </a>
              </div>
            </div>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center flex-shrink-0">
                <FileText size={20} className="text-purple-600" />
              </div>
              <div>
                <h3 className="font-bold mb-1">CV</h3>

                <a
                  href="./CV_Alison_Developpeuse.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-purple-600 transition-colors text-sm">
                  Télécharger mon CV
                </a>
              </div>
            </div>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-100 to-pink-200 flex items-center justify-center flex-shrink-0">
                <MapPin size={20} className="text-pink-600" />
              </div>
              <div>
                <h3 className="font-bold mb-1">Localisation</h3>
                <p className="text-gray-600">Bron (69500)</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-100 to-cyan-200 flex items-center justify-center flex-shrink-0">
                <Send size={20} className="text-cyan-600" />
              </div>
              <div>
                <h3 className="font-bold mb-1">Réseaux</h3>
                <div className="flex gap-3 mt-2">
                  <a
                    href="https://github.com/adebaille"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-900 transition-colors">
                    <Github size={24} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/alison-debaille-58b3a23a4/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-600 transition-colors">
                    <Linkedin size={24} />
                  </a>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <Card className="p-8 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-center">
          <h3 className="text-2xl font-bold mb-2">Recherche d'alternance</h3>
          <p className="mb-1">12 mois • Disponible début juin 2026</p>
          <p className="text-sm opacity-90">
            Rythme 4 jours en entreprise / 1 jour en formation
          </p>
          <Button
            variant="secondary"
            className="mt-6 bg-white text-indigo-600 hover:bg-gray-100 w-fit mx-auto"
            asChild>
            <a href="mailto:adebaille@gmail.com">
              <Mail size={16} className="mr-2" />
              Envoyez-moi un message
            </a>
          </Button>
        </Card>
      </div>
    </section>
  );
}
