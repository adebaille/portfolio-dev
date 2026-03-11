import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Header } from './component/Header'
import { HeroWithSkills } from './component/Hero'


function App() {

  return (
    <>
    <Header />
    <HeroWithSkills />
    </>
  )
}

export default App

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
