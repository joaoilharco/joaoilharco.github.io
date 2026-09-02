import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const isAbout = useLocation().pathname === '/about'

  return (
    // The header scrolls away with the page — it is part of the document, not
    // a fixed overlay. The three-column grid is what keeps the wordmark
    // optically centred no matter how wide the "about" link gets.
    <nav className="relative z-50 w-full px-6 md:px-10 py-6 md:py-7 grid grid-cols-[1fr_auto_1fr] items-center">
      <span aria-hidden="true" />

      <Link
        to="/"
        className="font-hand text-[30px] md:text-[38px] leading-none justify-self-center"
      >
        João Ilharco
      </Link>

      <Link
        to="/about"
        data-active={isAbout}
        className="link-underline justify-self-end text-base md:text-lg font-normal"
        style={{ color: isAbout ? '#fff' : 'var(--muted)' }}
      >
        about
      </Link>
    </nav>
  )
}
