import { useEffect, useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Project from './components/Project.jsx'
import { projects } from './data/projects.js'

export default function App() {
  // view: 'home' | 'about' | 'project'
  const [view, setView] = useState({ name: 'home', projectId: null })

  // Every view switch starts at the top, as in the original site.
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [view])

  const goHome = () => setView({ name: 'home', projectId: null })
  const goAbout = () => setView({ name: 'about', projectId: null })
  const goProject = (projectId) => setView({ name: 'project', projectId })

  const project = view.name === 'project' ? projects[view.projectId] : null

  return (
    <div className="min-h-screen flex flex-col selection:bg-white selection:text-black">
      <Navbar onHome={goHome} onAbout={goAbout} isAbout={view.name === 'about'} />

      {/* Spacer for fixed nav */}
      <div className="h-20" />

      <main className="grow relative">
        {view.name === 'about' && <About />}
        {project && <Project key={view.projectId} project={project} />}
        {(view.name === 'home' || (view.name === 'project' && !project)) && (
          <Home onSelectProject={goProject} />
        )}
      </main>

      <Footer onHome={goHome} />
    </div>
  )
}
