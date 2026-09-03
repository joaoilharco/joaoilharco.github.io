import { useCallback, useEffect, useLayoutEffect, useRef, useSyncExternalStore } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { introPlayed, setIntroPlayed, subscribeIntro } from '../lib/intro.js'

const clamp = (n, min, max) => Math.min(max, Math.max(min, n))
const lerp = (a, b, t) => a + (b - a) * t
// Ease-in-out so the wordmark leaves the hero and settles into the header
// without a visible kink at either end.
const ease = (t) => (t < 0.5 ? 2 * t * t : 1 - (-2 * t + 2) ** 2 / 2)

export default function Navbar() {
  const { pathname } = useLocation()
  const isHome = pathname === '/'
  const isAbout = pathname === '/about'
  // Project pages keep the links but lose the bar: the header sits over the
  // full-bleed hero instead of pushing it down.
  const isProject = pathname.startsWith('/work/')

  // The intro only plays on a home page that is showing one. Home reads the
  // same store, so the two always agree — including at the instant the flight
  // finishes and the intro is dropped from the document. The subscription is
  // read on every route, never behind the `isHome` test: a hook that is only
  // sometimes called changes the hook order and takes the tree down with it.
  const played = useSyncExternalStore(subscribeIntro, introPlayed)
  const showIntro = isHome && !played

  // The header's own copy of the wordmark. While the intro is on screen it is
  // only a layout placeholder — the visible one is the fixed element below,
  // which flies into this exact spot as you scroll.
  const navRef = useRef(null)
  const dockRef = useRef(null)
  const flyRef = useRef(null)
  const progressRef = useRef(0)
  const settleRef = useRef(0)

  const sync = useCallback(() => {
    const dock = dockRef.current
    const fly = flyRef.current
    const slot = document.getElementById('hero-wordmark-slot')

    if (!dock || !fly || !slot) return

    const scrollY = window.scrollY
    const heroTop = slot.getBoundingClientRect().top + scrollY
    const dockTop = dock.getBoundingClientRect().top
    const heroSize = parseFloat(getComputedStyle(slot).fontSize)
    const dockSize = parseFloat(getComputedStyle(dock).fontSize)

    // The flight is tied to the intro's own height: it ends at the exact
    // scroll position where the intro has run out and the work grid slides
    // under the header. From there the page keeps scrolling but the header —
    // wordmark and all — is done moving.
    const introBottom = slot.parentElement.getBoundingClientRect().bottom + scrollY
    const travel = Math.max(1, introBottom - navRef.current.offsetHeight)
    const p = ease(clamp(scrollY / travel, 0, 1))
    progressRef.current = p

    // Both ends of the interpolation are viewport positions the wordmark
    // actually has to hit, and p only ever grows: the path from the middle of
    // the intro to the header is a straight line, never overshooting past the
    // top of the screen on the way.
    const y = lerp(heroTop, dockTop, p)
    const scale = lerp(heroSize / dockSize, 1, p)

    fly.style.transform = `translate3d(-50%, ${y.toFixed(2)}px, 0) scale(${scale.toFixed(4)})`

    // The header is pinned for the flight and then let go. Its sticky offset
    // goes negative once the wordmark has landed, which is the same thing as
    // scrolling away: it rides up and off with the page, wordmark and all,
    // instead of dragging along at the top of the screen waiting for the
    // intro to be taken out from under it.
    navRef.current.style.top = `${Math.min(0, travel - scrollY).toFixed(2)}px`

    // The tagline is in the document and would otherwise scroll away at full
    // speed while the wordmark glides, crossing over it. These values put it
    // on the wordmark's path and fade it out, so the intro leaves as one
    // piece.
    //
    // It tracks the wordmark's *bottom*, not its top: the wordmark shrinks
    // downwards from its own top edge, so its underside climbs faster than
    // its top does. Following the top would leave the tagline visibly sagging
    // away from the name it belongs to.
    const wordmarkRise = y + fly.offsetHeight * scale - (heroTop + slot.offsetHeight)

    const root = document.documentElement.style
    root.setProperty('--hero-p', p.toFixed(4))
    root.setProperty('--hero-dy', `${(wordmarkRise + scrollY).toFixed(2)}px`)
    // Shrinking by the wordmark's own factor, measured against where it
    // started, so both lines of the intro lose size at the same rate.
    root.setProperty('--hero-tag-scale', (scale / (heroSize / dockSize)).toFixed(4))

    // Landed. The wordmark is sitting exactly on the header's own copy now,
    // so handing over to it and taking the intro out of the document is an
    // invisible swap — and there is nothing left above to scroll back to.
    //
    // Waiting for the scroll to settle first: a wheel or trackpad gesture in
    // flight is aiming at an absolute position, and taking a screen's worth
    // of document out from under it lands that gesture at the bottom of the
    // page. Nothing is moving by the time this fires, and the header has
    // already stopped being pinned, so the wait costs nothing on screen.
    clearTimeout(settleRef.current)
    if (p >= 1) {
      settleRef.current = setTimeout(() => {
        if (progressRef.current >= 1) setIntroPlayed(true)
      }, 160)
    }
  }, [])

  // The intro sizes itself against the header, so publish the header's real
  // height rather than guessing at it in CSS.
  useLayoutEffect(() => {
    const publish = () => {
      const height = navRef.current?.offsetHeight
      if (height) {
        document.documentElement.style.setProperty('--nav-h', `${height}px`)
      }
    }

    publish()
    window.addEventListener('resize', publish)
    return () => window.removeEventListener('resize', publish)
  }, [])

  useLayoutEffect(() => {
    if (!showIntro) {
      document.documentElement.style.setProperty('--hero-p', '1')
      // Back to a plain header: whatever offset the flight left behind is the
      // business of the sticky positioning that is no longer there.
      navRef.current?.style.removeProperty('top')
      return
    }

    let frame = 0
    const onScroll = () => {
      if (frame) return
      frame = requestAnimationFrame(() => {
        frame = 0
        sync()
      })
    }

    sync()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    return () => {
      if (frame) cancelAnimationFrame(frame)
      clearTimeout(settleRef.current)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [showIntro, sync])

  // Web fonts land after first paint and change the wordmark's metrics, so
  // re-measure once they are ready.
  useEffect(() => {
    if (!showIntro || !document.fonts) return
    document.fonts.ready.then(sync)
  }, [showIntro, sync])

  // The header is part of the document and scrolls away with it. Two
  // exceptions: while the intro is playing it is pinned, because it is the
  // spot the wordmark is flying to and that spot has to stay on screen for
  // the length of the flight; and on a project page it is lifted out of the
  // flow entirely so the hero image can run to the top of the window behind
  // it. Either way it scrolls away like everything else.
  const placement = isProject
    ? 'absolute inset-x-0 top-0'
    : `${showIntro ? 'sticky' : 'relative'} top-0 bg-black`

  return (
    // The three-column grid is what keeps the wordmark optically centred no
    // matter how wide the "about" link gets.
    <nav
      ref={navRef}
      className={`${placement} z-50 w-full px-6 md:px-10 py-6 md:py-7 grid grid-cols-[1fr_auto_1fr] items-center`}
    >
      <span aria-hidden="true" />

      <Link
        ref={dockRef}
        to="/"
        aria-hidden={showIntro}
        tabIndex={showIntro ? -1 : undefined}
        className="wordmark justify-self-center"
        style={showIntro ? { visibility: 'hidden' } : undefined}
      >
        João Ilharco
      </Link>

      {showIntro && (
        <Link ref={flyRef} to="/" className="wordmark wordmark-fly">
          João Ilharco
        </Link>
      )}

      <Link
        to="/about"
        data-active={isAbout}
        className="link-underline justify-self-end text-base md:text-lg font-normal"
        style={{ color: '#fff' }}
      >
        about
      </Link>
    </nav>
  )
}
