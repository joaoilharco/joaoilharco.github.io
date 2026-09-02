const MUTED = 'rgba(255, 255, 255, 0.8)'

function Media({ item, alt }) {
  if (item.type === 'video') {
    return (
      <div className="w-full rounded-[38px] overflow-hidden bg-[#111111]">
        <video
          src={item.src}
          poster={item.poster}
          autoPlay
          muted
          playsInline
          loop
          className="w-full h-auto object-contain"
        />
      </div>
    )
  }

  return (
    <div className="w-full rounded-[38px] overflow-hidden bg-[#111111]">
      <img src={item.src} alt={alt} className="w-full h-auto object-contain" />
    </div>
  )
}

export default function Project({ project }) {
  return (
    <div className="fade-enter">
      {/* Hero */}
      <section className="px-6 md:px-12 xl:px-[330px] h-[60vh] flex flex-col justify-end pb-12 w-full relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          {project.headerImage && (
            <img
              src={project.headerImage}
              alt={`${project.title} hero image`}
              className="w-full h-full object-cover"
            />
          )}
          <div className="absolute inset-0 bg-linear-to-t from-black via-black/60 to-transparent" />
        </div>
        <h1 className="text-4xl md:text-6xl font-normal mb-2">{project.title}</h1>
        <p className="text-lg" style={{ color: MUTED }}>
          {project.date}
        </p>
      </section>

      {/* Briefing */}
      <section className="bg-[#111111] w-full py-20 md:py-28">
        <div className="px-6 md:px-12 xl:px-[330px] w-full grid md:grid-cols-2 gap-12 items-start">
          <h1 className="text-5xl md:text-6xl font-medium leading-tight">{project.briefTitle}</h1>
          <p
            className="text-[23px] font-light leading-relaxed tracking-wide text-justify"
            style={{ color: MUTED }}
          >
            {project.briefText}
          </p>
        </div>
      </section>

      {/* Content blocks */}
      <section className="px-6 md:px-12 xl:px-[330px] py-24 w-full space-y-32">
        {project.blocks.map((block) => (
          <div key={block.title}>
            <div className="mb-6">
              <h1 className="text-4xl md:text-5xl font-medium mb-4">{block.title}</h1>
              <p
                className="font-light text-2xl md:text-[26px] leading-tight"
                style={{ color: MUTED }}
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
          </div>
        ))}
      </section>
    </div>
  )
}
