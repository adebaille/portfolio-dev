import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Header } from './component/Header'
import { HeroWithSkills } from './component/Hero'
import { About } from './component/About'
import { Skills } from './component/Skills'
import { Projects } from './component/Project'
import { Experience } from './component/Experience'
import { Contact } from './component/Contact'


function App() {

  return (
    <>
    <Header />
    <HeroWithSkills />
    <About />
    <Skills />
    <Projects />
    <Experience />
    <Contact />
    </>
  )
}

export default App

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
