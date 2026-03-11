import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from './ui/button';

export function HeroWithSkills() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8">
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
              <p className="text-lg text-indigo-600">
                En formation
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button
                variant="default"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700"
              >
                <Mail size={16} className="mr-2" />
                Me contacter
              </Button>
              <Button variant="outline" asChild>
                <a href="https://github.com/adebaille" target="_blank" rel="noopener noreferrer">
                  <Github size={16} className="mr-2" />
                  GitHub
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="https://www.linkedin.com/in/alison-debaille-58b3a23a4/" target="_blank" rel="noopener noreferrer">
                  <Linkedin size={16} className="mr-2" />
                  LinkedIn
                </a>
              </Button>
            </div>
          </div>

          <div className="relative hidden md:block">
            {/* Grille de compétences visuelles */}
            <div className="grid grid-cols-3 gap-4">
              {/* React */}
              <div className="bg-gradient-to-br from-cyan-400 to-blue-500 p-6 rounded-2xl shadow-xl hover:scale-110 transition-transform flex flex-col items-center justify-center aspect-square">
                <svg viewBox="0 0 24 24" className="w-16 h-16 mb-2 text-white" fill="currentColor">
                  <path d="M12 10.11c1.03 0 1.87.84 1.87 1.89 0 1-.84 1.85-1.87 1.85S10.13 13 10.13 12c0-1.05.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7-.52-.59-1.03-1.23-1.51-1.9a22.7 22.7 0 0 1-2.4-.36c-.51 2.14-.32 3.61.31 3.96m.71-5.74l-.29-.51c-.11.29-.22.58-.29.86.27.06.57.11.88.16l-.3-.51m6.54-.76l.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9c-.6 0-1.17 0-1.71.03-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47.54.03 1.11.03 1.71.03.6 0 1.17 0 1.71-.03.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7.52.59 1.03 1.23 1.51 1.9.82.08 1.63.2 2.4.36.51-2.14.32-3.61-.32-3.96m-.7 5.74l.29.51c.11-.29.22-.58.29-.86-.27-.06-.57-.11-.88-.16l.3.51m1.45-7.05c1.47.84 1.63 3.05 1.01 5.63 2.54.75 4.37 1.99 4.37 3.68 0 1.69-1.83 2.93-4.37 3.68.62 2.58.46 4.79-1.01 5.63-1.46.84-3.45-.12-5.37-1.95-1.92 1.83-3.91 2.79-5.38 1.95-1.46-.84-1.62-3.05-1-5.63-2.54-.75-4.37-1.99-4.37-3.68 0-1.69 1.83-2.93 4.37-3.68-.62-2.58-.46-4.79 1-5.63 1.47-.84 3.46.12 5.38 1.95 1.92-1.83 3.91-2.79 5.37-1.95M17.08 12c.34.75.64 1.5.89 2.26 2.1-.63 3.28-1.53 3.28-2.26 0-.73-1.18-1.63-3.28-2.26-.25.76-.55 1.51-.89 2.26M6.92 12c-.34-.75-.64-1.5-.89-2.26-2.1.63-3.28 1.53-3.28 2.26 0 .73 1.18 1.63 3.28 2.26.25-.76.55-1.51.89-2.26m9.25 0l.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9c-.6 0-1.17 0-1.71.03-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47.54.03 1.11.03 1.71.03.6 0 1.17 0 1.71-.03.29-.47.61-.94.91-1.47z"/>
                </svg>
                <span className="text-white font-bold text-sm">React</span>
              </div>

              {/* TypeScript */}
              <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-6 rounded-2xl shadow-xl hover:scale-110 transition-transform flex flex-col items-center justify-center aspect-square">
                <svg viewBox="0 0 24 24" className="w-16 h-16 mb-2 text-white" fill="currentColor">
                  <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"/>
                </svg>
                <span className="text-white font-bold text-sm">TypeScript</span>
              </div>

              {/* Node.js */}
              <div className="bg-gradient-to-br from-green-500 to-emerald-600 p-6 rounded-2xl shadow-xl hover:scale-110 transition-transform flex flex-col items-center justify-center aspect-square">
                <svg viewBox="0 0 24 24" className="w-16 h-16 mb-2 text-white" fill="currentColor">
                  <path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z"/>
                </svg>
                <span className="text-white font-bold text-sm">Node.js</span>
              </div>

              {/* HTML5 */}
              <div className="bg-gradient-to-br from-orange-500 to-red-500 p-6 rounded-2xl shadow-xl hover:scale-110 transition-transform flex flex-col items-center justify-center aspect-square">
                <svg viewBox="0 0 24 24" className="w-16 h-16 mb-2 text-white" fill="currentColor">
                  <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/>
                </svg>
                <span className="text-white font-bold text-sm">HTML5</span>
              </div>

              {/* CSS3 */}
              <div className="bg-gradient-to-br from-blue-400 to-blue-600 p-6 rounded-2xl shadow-xl hover:scale-110 transition-transform flex flex-col items-center justify-center aspect-square">
                <svg viewBox="0 0 24 24" className="w-16 h-16 mb-2 text-white" fill="currentColor">
                  <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"/>
                </svg>
                <span className="text-white font-bold text-sm">CSS3</span>
              </div>

              {/* Tailwind */}
              <div className="bg-gradient-to-br from-teal-400 to-cyan-500 p-6 rounded-2xl shadow-xl hover:scale-110 transition-transform flex flex-col items-center justify-center aspect-square">
                <svg viewBox="0 0 24 24" className="w-16 h-16 mb-2 text-white" fill="currentColor">
                  <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"/>
                </svg>
                <span className="text-white font-bold text-sm">Tailwind</span>
              </div>

              {/* Git */}
              <div className="bg-gradient-to-br from-red-500 to-orange-600 p-6 rounded-2xl shadow-xl hover:scale-110 transition-transform flex flex-col items-center justify-center aspect-square">
                <svg viewBox="0 0 24 24" className="w-16 h-16 mb-2 text-white" fill="currentColor">
                  <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187"/>
                </svg>
                <span className="text-white font-bold text-sm">Git</span>
              </div>

              {/* MySQL */}
              <div className="bg-gradient-to-br from-blue-600 to-cyan-600 p-6 rounded-2xl shadow-xl hover:scale-110 transition-transform flex flex-col items-center justify-center aspect-square">
                <svg viewBox="0 0 24 24" className="w-16 h-16 mb-2 text-white" fill="currentColor">
                  <path d="M16.405 5.501c-.115 0-.193.014-.274.033v.013h.014c.054.104.146.18.214.273.054.107.1.214.154.32l.014-.015c.094-.066.14-.172.14-.333-.04-.047-.046-.094-.08-.14-.04-.067-.126-.1-.18-.153z"/>
                </svg>
                <span className="text-white font-bold text-sm">MySQL</span>
              </div>

              {/* Figma */}
              <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-6 rounded-2xl shadow-xl hover:scale-110 transition-transform flex flex-col items-center justify-center aspect-square">
                <svg viewBox="0 0 24 24" className="w-16 h-16 mb-2 text-white" fill="currentColor">
                  <path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539zm-.024-7.51a3.023 3.023 0 0 0-3.019 3.019c0 1.665 1.365 3.019 3.044 3.019 1.705 0 3.093-1.376 3.093-3.068v-2.97H8.148zm7.704 0h-.098c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h.098c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.49-4.49 4.49zm-.097-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h.098c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-.098z"/>
                </svg>
                <span className="text-white font-bold text-sm">Figma</span>
              </div>
            </div>
          </div>

          {/* Version mobile - Cards en grille */}
          <div className="md:hidden grid grid-cols-3 gap-3">
            {[
              { name: 'React', color: 'from-cyan-400 to-blue-500' },
              { name: 'TypeScript', color: 'from-blue-500 to-indigo-600' },
              { name: 'Node.js', color: 'from-green-500 to-emerald-600' },
              { name: 'HTML5', color: 'from-orange-500 to-red-500' },
              { name: 'CSS3', color: 'from-blue-400 to-blue-600' },
              { name: 'Tailwind', color: 'from-teal-400 to-cyan-500' },
              { name: 'Git', color: 'from-red-500 to-orange-600' },
              { name: 'MySQL', color: 'from-blue-600 to-cyan-600' },
              { name: 'Figma', color: 'from-purple-500 to-pink-500' },
            ].map((tech, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${tech.color} text-white p-4 rounded-xl shadow-lg text-center`}
              >
                <p className="text-xs font-bold">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}