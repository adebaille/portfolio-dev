import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";

export function HeroWithSkills() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-5xl sm:text-6xl font-bold">
                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Alison Debaille
                </span>
              </h1>
              <p className="text-2xl text-gray-600">
                Développeuse Web Fullstack
              </p>
              <p className="text-lg text-indigo-600">En formation</p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button
                variant="default"
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white">
                <Mail size={16} className="mr-2" />
                Me contacter
              </Button>
              <Button variant="outline" asChild>
                <a
                  href="https://github.com/adebaille"
                  target="_blank"
                  rel="noopener noreferrer">
                  <Github size={16} className="mr-2" />
                  GitHub
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a
                  href="https://www.linkedin.com/in/alison-debaille-58b3a23a4/"
                  target="_blank"
                  rel="noopener noreferrer">
                  <Linkedin size={16} className="mr-2" />
                  LinkedIn
                </a>
              </Button>
            </div>
          </div>

          {/* Version desktop */}
          <div className="relative hidden md:block">
            <div className="grid grid-cols-3 gap-4">
              {[
                {
                  name: "React",
                  slug: "react",
                  color: "from-cyan-400 to-blue-500",
                },
                {
                  name: "TypeScript",
                  slug: "typescript",
                  color: "from-blue-500 to-indigo-600",
                },
                {
                  name: "Node.js",
                  slug: "nodedotjs",
                  color: "from-green-500 to-emerald-600",
                },
                {
                  name: "HTML5",
                  slug: "html5",
                  color: "from-orange-500 to-red-500",
                },
                {
                  name: "CSS3",
                  slug: "css",
                  color: "from-blue-400 to-blue-600",
                },
                {
                  name: "Tailwind",
                  slug: "tailwindcss",
                  color: "from-teal-400 to-cyan-500",
                },
                {
                  name: "Git",
                  slug: "git",
                  color: "from-red-500 to-orange-600",
                },
                {
                  name: "MySQL",
                  slug: "mysql",
                  color: "from-blue-600 to-cyan-600",
                },
                {
                  name: "Figma",
                  slug: "figma",
                  color: "from-purple-500 to-pink-500",
                },
              ].map((tech, index) => (
                <div
                  key={index}
                  className={`bg-gradient-to-br ${tech.color} p-6 rounded-2xl shadow-xl hover:scale-110 transition-transform flex flex-col items-center justify-center aspect-square`}>
                  <img
                    src={`https://cdn.simpleicons.org/${tech.slug}/white`}
                    className="w-16 h-16 mb-2"
                    alt={tech.name}
                  />
                  <span className="text-white font-bold text-sm">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Version mobile */}
          <div className="md:hidden grid grid-cols-3 gap-3">
            {[
              {
                name: "React",
                slug: "react",
                color: "from-cyan-400 to-blue-500",
              },
              {
                name: "TypeScript",
                slug: "typescript",
                color: "from-blue-500 to-indigo-600",
              },
              {
                name: "Node.js",
                slug: "nodedotjs",
                color: "from-green-500 to-emerald-600",
              },
              {
                name: "HTML5",
                slug: "html5",
                color: "from-orange-500 to-red-500",
              },
              {
                name: "CSS3",
                slug: "css",
                color: "from-blue-400 to-blue-600",
              },
              {
                name: "Tailwind",
                slug: "tailwindcss",
                color: "from-teal-400 to-cyan-500",
              },
              { name: "Git", slug: "git", color: "from-red-500 to-orange-600" },
              {
                name: "MySQL",
                slug: "mysql",
                color: "from-blue-600 to-cyan-600",
              },
              {
                name: "Figma",
                slug: "figma",
                color: "from-purple-500 to-pink-500",
              },
            ].map((tech, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${tech.color} text-white p-4 rounded-xl shadow-lg flex flex-col items-center justify-center text-center`}>
                <img
                  src={`https://cdn.simpleicons.org/${tech.slug}/white`}
                  className="w-8 h-8 mb-1"
                  alt={tech.name}
                />
                <p className="text-xs font-bold">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
