function Media({ item, alt }) {
  const shared = 'w-full h-auto object-contain'

  return (
    <div className="w-full rounded-[38px] overflow-hidden bg-surface">
      {item.type === 'video' ? (
        <video
          src={item.src}
          poster={item.poster}
          autoPlay
          muted
          playsInline
          loop
          className={shared}
        />
      ) : (
        <img src={item.src} alt={alt} loading="lazy" className={shared} />
      )}
    </div>
  )
}

export default function Project({ project }) {
  return (
    <div className="fade-enter">
      {/* Hero — full-bleed image behind the title. */}
      {/* The image spans the viewport; only the title is held to the shell. */}
      <section className="w-full h-[60vh] flex flex-col justify-end pb-12 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          {project.headerImage && (
            <img
              src={project.headerImage}
              alt={`${project.title} hero image`}
              className="w-full h-full object-cover"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
        </div>
        <div className="shell">
          <h1 className="text-4xl md:text-6xl font-normal mb-2">{project.title}</h1>
          <p className="text-lg" style={{ color: 'var(--accent)' }}>
            {project.date}
          </p>
        </div>
      </section>

      {/* Brief — full-width band. */}
      <section className="bg-surface w-full py-20 md:py-28">
        <div className="shell grid md:grid-cols-2 gap-12 items-start">
          <h2 className="text-5xl md:text-6xl font-medium leading-tight">{project.briefTitle}</h2>
          <p
            className="text-[23px] font-light leading-relaxed tracking-wide text-justify"
            style={{ color: 'var(--muted)' }}
          >
            {project.briefText}
          </p>
        </div>
      </section>

      {/* Content blocks */}
      <section className="shell py-24 space-y-32">
        {project.blocks.map((block) => (
          <article key={block.title}>
            <div className="mb-6">
              <h3 className="text-4xl md:text-5xl font-medium mb-4">{block.title}</h3>
              <p
                className="font-light text-2xl md:text-[26px] leading-tight"
                style={{ color: 'var(--muted)' }}
              >
                {block.text}
              </p>
            </div>

            {block.media?.length > 0 && (
              <div className="space-y-8">
                {block.media.map((item) => (
                  <Media key={item.src} item={item} alt={block.title} />
                ))}
              </div>
            )}
          </article>
        ))}
      </section>
    </div>
  )
}
