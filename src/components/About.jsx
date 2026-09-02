import {
  bioLead,
  bioParagraphs,
  education,
  EMAIL,
  experience,
  RESUME_URL,
  skills,
} from '../data/about.js'
import { ArrowUpRight, Squiggle, Underline } from './Doodles.jsx'

// Section label sits large in a left column, content in a wider right column.
function Section({ title, children }) {
  return (
    <section className="mb-20 md:mb-28">
      <div className="grid md:grid-cols-12 gap-6 md:gap-12">
        <div className="md:col-span-4">
          <h2 className="t-h1 font-medium lowercase leading-none">
            {title}
            <span style={{ color: 'var(--accent)' }}>:</span>
          </h2>
        </div>
        <div className="md:col-span-8">{children}</div>
      </div>
    </section>
  )
}

export default function About() {
  return (
    <div className="fade-enter shell pt-10 pb-24 md:pt-16 md:pb-32">
      {/* Bio. Measures live on the text elements themselves: `ch` resolves
          against the element's own font-size, so putting it on a wrapper would
          size it against the inherited 16px instead. */}
      <div className="mb-20 md:mb-24">
        <p
          className="t-lead font-light mb-8 max-w-[30ch]"
          style={{ color: 'var(--muted-strong)' }}
        >
          {bioLead.before}
          <span className="relative inline-block whitespace-nowrap text-white">
            {bioLead.highlight}
            <Underline />
          </span>
          {bioLead.after}
        </p>
        {bioParagraphs.map((paragraph) => (
          <p
            key={paragraph}
            className="t-body font-light max-w-[68ch]"
            style={{ color: 'var(--muted)' }}
          >
            {paragraph}
          </p>
        ))}
      </div>

      <Section title="experience">
        {experience.map((job, index) => (
          <div key={job.title} className={index < experience.length - 1 ? 'mb-14' : undefined}>
            <h3 className="t-h2 font-light mb-2" style={{ color: 'var(--muted-strong)' }}>
              {job.title}
            </h3>
            <p className="t-body mb-2" style={{ color: 'var(--accent)' }}>
              {job.date}
            </p>
            {job.subtitle && (
              <p className="t-body font-light mb-3" style={{ color: 'var(--muted)' }}>
                {job.subtitle}
              </p>
            )}
            <p className="t-body font-light max-w-[68ch]" style={{ color: 'var(--muted)' }}>
              {job.text}
            </p>
          </div>
        ))}
      </Section>

      <Section title="education">
        {education.map((entry) => (
          <div key={entry.title}>
            <h3 className="t-h2 font-light mb-2" style={{ color: 'var(--muted-strong)' }}>
              {entry.title}
            </h3>
            <p className="t-body font-light" style={{ color: 'var(--muted)' }}>
              {entry.text}
            </p>
          </div>
        ))}
      </Section>

      <Section title="skills">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12">
          {skills.map((group) => (
            <div key={group.category}>
              <h4 className="t-body mb-4" style={{ color: 'var(--muted-strong)' }}>
                {group.category}
              </h4>
              <ul className="space-y-2.5">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="t-body font-light flex items-center gap-3"
                    style={{ color: 'var(--muted)' }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full shrink-0"
                      style={{ backgroundColor: 'var(--accent)' }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Contact */}
      <div>
        <Squiggle className="w-40 h-3 mb-10" />
        <div className="flex flex-wrap gap-4">
          <a href={`mailto:${EMAIL}`} className="btn btn-accent">
            Let's chat!
            <ArrowUpRight className="btn-arrow w-5 h-5" strokeWidth={2.4} />
          </a>
          <a href={RESUME_URL} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
            My Resume
            <ArrowUpRight className="btn-arrow w-5 h-5" strokeWidth={2.2} />
          </a>
        </div>
      </div>
    </div>
  )
}
