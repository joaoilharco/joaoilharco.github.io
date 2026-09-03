import { useLayoutEffect } from 'react'
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigationType,
  useParams,
} from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Project from './components/Project.jsx'
import { projects } from './data/projects.js'
import { getHomeScroll } from './lib/intro.js'

// New navigations start at the top, as in the original site — except home,
// which resumes where you left it. The remembered position already accounts
// for the intro being gone, so coming back from a project lands on the same
// cards rather than a screen below them.
//
// This runs before paint, so the page is drawn in its restored position
// rather than jumping a frame later. Back/forward (POP) elsewhere is left to
// the browser.
function ScrollRestore() {
  const { pathname } = useLocation()
  const navigationType = useNavigationType()

  useLayoutEffect(() => {
    if (pathname === '/') {
      window.scrollTo(0, getHomeScroll())
    } else if (navigationType !== 'POP') {
      window.scrollTo(0, 0)
    }
  }, [pathname, navigationType])

  return null
}

function ProjectRoute() {
  const { slug } = useParams()
  const project = projects[slug]

  // Unknown slug: send them home rather than rendering an empty shell.
  if (!project) {
    return <Navigate to="/" replace />
  }

  return <Project key={slug} project={project} />
}

export default function App() {
  return (
    <div className="relative min-h-screen flex flex-col selection:bg-white selection:text-black">
      <ScrollRestore />
      <Navbar />

      <main className="grow relative">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work/:slug" element={<ProjectRoute />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  )
}
