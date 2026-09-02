import { Link } from 'react-router-dom'
import { projects, projectOrder } from '../data/projects.js'
import { EMAIL } from '../data/about.js'
import { ArrowUpRight } from './Doodles.jsx'

// The grid draws its 1px rules with per-cell borders: a left border on every
// second cell, a top border on everything from the second row down.
function cellRules(index) {
  const classes = []
  if (index % 2 === 1) classes.push('md:border-l')
  if (index >= 2) classes.push('border-t')
  return classes.length ? `${classes.join(' ')} border-hairline` : ''
}

export default function Home() {
  return (
    <div className="fade-enter">
      {/* Hero */}
      <section className="shell pt-10 pb-24 md:pt-20 md:pb-32">
        <h1 className="t-display rise font-medium mb-7">Hi!</h1>

        <p
          className="t-lead rise font-light max-w-[26ch] md:max-w-[34ch] mb-14"
          style={{ color: 'var(--muted-strong)', '--delay': '90ms' }}
        >
          I design digital products with a focus on{' '}
          <span className="text-white">clarity</span>. I translate complex user needs into
          experiences that feel simple and intuitive.
        </p>

        <div className="rise" style={{ '--delay': '180ms' }}>
          <a href={`mailto:${EMAIL}`} className="btn btn-accent">
            Let's work!
            <ArrowUpRight className="btn-arrow w-5 h-5" strokeWidth={2.4} />
          </a>
        </div>
      </section>

      {/* Work — full-bleed, edge to edge, hairline rules between cells. */}
      <section className="w-full grid grid-cols-1 md:grid-cols-2 border-t border-hairline">
        {projectOrder.map((slug, index) => {
          const project = projects[slug]
          return (
            <Link
              key={slug}
              to={`/work/${slug}`}
              className={`group relative block overflow-hidden bg-surface aspect-4/3 md:aspect-16/10 ${cellRules(
                index
              )}`}
            >
              <img
                src={project.headerImage}
                alt={`${project.title} project`}
                loading={index > 1 ? 'lazy' : undefined}
                className="card-media w-full h-full object-cover"
              />

              <div className="card-veil absolute inset-0" />

              <div className="card-caption absolute inset-x-0 bottom-0 p-7 md:p-10">
                <h3 className="t-h2 font-medium leading-none">{project.title}</h3>
                <span className="card-rule mt-4 w-14" />
                <p className="card-date mt-3 t-label" style={{ color: 'var(--muted)' }}>
                  {project.date}
                </p>
              </div>
            </Link>
          )
        })}
      </section>
    </div>
  )
}
