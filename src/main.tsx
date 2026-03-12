import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Header } from './component/Header'
import { HeroWithSkills } from './component/Hero'
import { About } from './component/About'
import { Skills } from './component/Skills'


function App() {

  return (
    <>
    <Header />
    <HeroWithSkills />
    <About />
    <Skills />
    </>
  )
}

export default App

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
