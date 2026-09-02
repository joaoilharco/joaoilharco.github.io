import { projects, projectOrder } from '../data/projects.js'
import { EMAIL } from '../data/about.js'

const MUTED = 'rgba(255, 255, 255, 0.8)'

// The original grid drew its 1px rules with per-cell borders: a left border on
// every second card, a top border on everything from the second row down.
function cardBorders(index) {
  const classes = []
  if (index % 2 === 1) classes.push('border-l')
  if (index >= 2) classes.push('border-t')
  return classes.length ? `${classes.join(' ')} border-zinc-900` : ''
}

export default function Home({ onSelectProject }) {
  return (
    <div className="fade-enter">
      {/* Hero */}
      <section className="px-6 md:px-12 xl:px-[330px] pt-8 pb-24 md:pt-16 md:pb-32 max-w-[1536px]">
        <h1 className="text-4xl md:text-6xl font-normal mb-8">Hi!</h1>
        <p
          className="text-2xl md:text-[40px] leading-[1.2] font-light mb-12 max-w-4xl"
          style={{ color: MUTED }}
        >
          I design digital products with a focus on clarity. I am passionate about translating
          complex user needs into experiences that feel simple and intuitive.
        </p>
        <a
          href={`mailto:${EMAIL}`}
          className="btn-hover btn-outline inline-block border border-white rounded-full px-10 py-4 text-2xl font-light tracking-wide"
        >
          Let's work!
        </a>
      </section>

      {/* Project grid */}
      <section className="w-full px-0 grid grid-cols-1 md:grid-cols-2 gap-px bg-black border-t border-zinc-900">
        {projectOrder.map((id, index) => {
          const project = projects[id]
          return (
            <div
              key={id}
              onClick={() => onSelectProject(id)}
              className={`project-card aspect-4/3 md:aspect-16/10 bg-[#0f0f11] w-full relative group overflow-hidden ${cardBorders(
                index
              )}`}
            >
              <img
                src={project.headerImage}
                alt={`${project.title} project`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-sm tracking-widest uppercase">{project.title}</span>
              </div>
            </div>
          )
        })}
      </section>
    </div>
  )
}
