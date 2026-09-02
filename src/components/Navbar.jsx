import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const isAbout = useLocation().pathname === '/about'
  const [lifted, setLifted] = useState(false)

  // The hairline only appears once the page has moved, so the header sits
  // flush against the hero on load.
  useEffect(() => {
    const onScroll = () => setLifted(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 bg-black/80 backdrop-blur-md transition-colors duration-300 border-b ${
        lifted ? 'border-hairline' : 'border-transparent'
      }`}
    >
      <div className="shell py-5 md:py-6 flex justify-between items-center">
        <Link
          to="/"
          className="font-hand text-[34px] md:text-[42px] leading-none -mb-1"
        >
          João Ilharco
        </Link>

        <Link
          to="/about"
          data-active={isAbout}
          className="link-underline text-lg md:text-xl font-normal"
          style={{ color: isAbout ? '#fff' : 'var(--muted)' }}
        >
          about
        </Link>
      </div>
    </nav>
  )
}
