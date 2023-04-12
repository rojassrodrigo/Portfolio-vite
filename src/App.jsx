import './App.css'
import About from './componentes/About'
import Contact from './componentes/Contact'
import Navbar from './componentes/Navbar'
import Projects from './componentes/Projects'
import Skills from './componentes/Skills'
import Testimonials from './componentes/Testimonials'

function App() {

  return (
  
    <main>
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Testimonials />
      <Contact />
    </main>
  )
}

export default App
