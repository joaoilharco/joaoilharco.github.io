import { useEffect, useLayoutEffect, useRef, useSyncExternalStore } from 'react'
import { Link } from 'react-router-dom'
import { projects, projectOrder } from '../data/projects.js'
import { introPlayed, setHomeScroll, setIntroPlayed, subscribeIntro } from '../lib/intro.js'

// The grid draws its 1px rules with per-cell borders: a left border on every
// second cell, a top border on everything from the second row down.
function cellRules(index) {
  const classes = []
  if (index % 2 === 1) classes.push('md:border-l')
  if (index >= 2) classes.push('border-t')
  return classes.length ? `${classes.join(' ')} border-hairline` : ''
}

export default function Home() {
  // The intro is on screen until it has been scrolled through — at which
  // point the header flips this and the section comes straight out of the
  // document, so scrolling back up lands on the work rather than on the
  // greeting again.
  const showIntro = !useSyncExternalStore(subscribeIntro, introPlayed)
  const introRef = useRef(null)
  const introHeightRef = useRef(0)
  const gridRef = useRef(null)
  const anchorRef = useRef(null)

  // Keep the intro's height to hand while it is mounted; it is what the
  // remembered scroll position has to be adjusted by when the intro leaves
  // along with the whole page.
  useLayoutEffect(() => {
    if (introRef.current) {
      introHeightRef.current = introRef.current.offsetHeight
    }
  })

  // The intro can also be dropped while you are still on the page, the moment
  // you have scrolled past it. Note where the work sits in the viewport just
  // before that happens — the store tells us first, while the intro is still
  // in the document.
  useEffect(
    () =>
      subscribeIntro(() => {
        anchorRef.current = gridRef.current?.getBoundingClientRect().top ?? null
      }),
    []
  )

  // ...and put the work back on that exact line afterwards, so a screen's
  // worth of document disappearing from above is invisible.
  useLayoutEffect(() => {
    if (showIntro || anchorRef.current === null) return

    const settled = gridRef.current?.getBoundingClientRect().top
    const drift = settled == null ? 0 : settled - anchorRef.current

    // The shift is measured rather than assumed: browsers anchor the scroll
    // offset themselves when content above the viewport goes away, so the
    // drift is usually zero and this lands on the position we already have.
    // Scrolled anyway, because an explicit scroll is also what settles the
    // offset when the browser has not anchored it.
    window.scrollTo(0, window.scrollY + drift)

    anchorRef.current = null
    introHeightRef.current = 0
  }, [showIntro])

  // Cleanup runs during the commit that navigates away, before anything has
  // touched the scroll position. Half the intro is enough to count as seen —
  // by then the wordmark is most of the way up and the work is in view. The
  // height is zeroed as the intro leaves, so a value here means it is still
  // in the document and its removal has yet to be paid for.
  useLayoutEffect(
    () => () => {
      const introHeight = introHeightRef.current
      const scrolled = window.scrollY

      if (introHeight && scrolled >= introHeight * 0.5) {
        setIntroPlayed(true)
      }

      // If the intro is going away, the document above these cards shrinks by
      // exactly its height — so take that off the remembered position and the
      // same cards are still under the cursor when you come back.
      setHomeScroll(Math.max(0, scrolled - (introPlayed() ? introHeight : 0)))
    },
    []
  )

  return (
    <div>
      {/* Intro. The wordmark you see here is the header's own, flown down
          into this slot — the heading below is an invisible placeholder that
          tells it where to sit and how big to be. */}
      {showIntro && (
        <section ref={introRef} className="hero-intro">
          <h1 id="hero-wordmark-slot" className="hero-wordmark font-hand" aria-hidden="true">
            João Ilharco
          </h1>

          <p className="hero-tagline">
            I design digital products and
            <br />
            this is my portfolio.
          </p>
        </section>
      )}

      {/* Work — full-bleed, edge to edge, hairline rules between cells. */}
      <section
        ref={gridRef}
        className="fade-enter w-full grid grid-cols-1 md:grid-cols-2 border-t border-hairline"
      >
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
