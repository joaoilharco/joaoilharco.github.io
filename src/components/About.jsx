import { bio, education, EMAIL, experience, RESUME_URL, skills } from '../data/about.js'

const MUTED = 'rgba(255, 255, 255, 0.8)'

function Section({ title, children }) {
  return (
    <div className="mb-24 max-w-6xl mx-auto">
      <h2 className="text-[23px] font-semibold lowercase mb-8 text-white">{title}</h2>
      {children}
    </div>
  )
}

export default function About() {
  return (
    <div className="fade-enter px-6 md:px-12 xl:px-[330px] pt-8 pb-24 md:pt-16 md:pb-32 w-full">
      {/* Bio */}
      <div
        className="text-2xl md:text-[26px] leading-[1.2] font-light space-y-12 mb-24 max-w-6xl mx-auto"
        style={{ color: MUTED }}
      >
        {bio.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      <Section title="experience:">
        {experience.map((job, index) => (
          <div key={job.title} className={index < experience.length - 1 ? 'mb-16' : undefined}>
            <h3 className="text-[26px] font-light mb-2" style={{ color: MUTED }}>
              {job.title}
            </h3>
            <p className="text-[23px] mb-2" style={{ color: MUTED }}>
              {job.date}
            </p>
            {job.subtitle && (
              <p className="text-[23px] font-light mb-4" style={{ color: MUTED }}>
                {job.subtitle}
              </p>
            )}
            <p className="text-[23px] font-light leading-tight mt-4" style={{ color: MUTED }}>
              {job.text}
            </p>
          </div>
        ))}
      </Section>

      <Section title="education:">
        {education.map((entry) => (
          <div key={entry.title}>
            <h3 className="text-[26px] font-light mb-2" style={{ color: MUTED }}>
              {entry.title}
            </h3>
            <p className="text-[23px] font-light" style={{ color: MUTED }}>
              {entry.text}
            </p>
          </div>
        ))}
      </Section>

      <Section title="skills:">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-12 text-lg font-light leading-relaxed">
          {skills.map((group) => (
            <div key={group.category}>
              <h4 className="mb-4 text-[23px] font-normal" style={{ color: MUTED }}>
                {group.category}
              </h4>
              <ul className="space-y-2 text-[23px]" style={{ color: MUTED }}>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Buttons */}
      <div className="flex flex-wrap gap-6 max-w-6xl mx-auto">
        <a
          href={`mailto:${EMAIL}`}
          className="btn-hover btn-outline border border-white rounded-full px-10 py-4 text-2xl font-light tracking-wide"
        >
          Let's chat!
        </a>
        <a
          href={RESUME_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-hover btn-solid bg-white text-black rounded-full px-10 py-4 text-2xl font-medium tracking-wide inline-block text-center"
        >
          My Resume
        </a>
      </div>
    </div>
  )
}
