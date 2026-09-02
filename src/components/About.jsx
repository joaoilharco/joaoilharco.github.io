import {
  bioLead,
  education,
  EMAIL,
  experience,
  RESUME_URL,
  skills,
} from '../data/about.js'
import { ArrowUpRight } from './Doodles.jsx'

// Sections are marked by a small uppercase label over a hairline rule — the
// heading is a signpost, not a statement, so it stays out of the way of the
// prose it introduces.
function Section({ label, children }) {
  return (
    <section className="about-section">
      <p className="about-label">{label}</p>
      <div>{children}</div>
    </section>
  )
}

export default function About() {
  return (
    <div className="fade-enter about-page">
      {/* Masthead. The name and role already sit in the header and the lead
          paragraph, so this is just the page's title. */}
      <header className="about-masthead">
        <h1 className="about-title">About me</h1>
      </header>

      {/* Bio. Measures live on the text elements themselves: `ch` resolves
          against the element's own font-size, so putting it on a wrapper would
          size it against the inherited 16px instead. */}
      <div className="about-intro">
        <p className="about-lead">
          {bioLead.before}
          <span className="about-highlight">{bioLead.highlight}</span>
          {bioLead.after}
        </p>
      </div>

      <Section label="Experience">
        {experience.map((job) => (
          <article key={job.title} className="about-entry">
            <p className="about-meta">{job.date}</p>
            <h2 className="about-entry-title">{job.title}</h2>
            {job.subtitle && <p className="about-entry-sub">{job.subtitle}</p>}
            <p className="about-body">{job.text}</p>
          </article>
        ))}
      </Section>

      <Section label="Education">
        {education.map((entry) => (
          <article key={entry.title} className="about-entry">
            <h2 className="about-entry-title">{entry.title}</h2>
            <p className="about-body">{entry.text}</p>
          </article>
        ))}
      </Section>

      <Section label="Skills">
        {skills.map((group) => (
          <div key={group.category} className="about-skill-row">
            <p className="about-meta">{group.category}</p>
            <p className="about-body">{group.items.join(' · ')}</p>
          </div>
        ))}
      </Section>

      {/* Contact */}
      <div className="about-contact">
        <a href={`mailto:${EMAIL}`} className="btn btn-accent">
          Let's chat!
          <ArrowUpRight className="btn-arrow w-4 h-4" strokeWidth={2.2} />
        </a>
        <a href={RESUME_URL} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
          My Resume
          <ArrowUpRight className="btn-arrow w-4 h-4" strokeWidth={2.2} />
        </a>
      </div>
    </div>
  )
}
