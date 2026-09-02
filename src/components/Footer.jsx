import { Link } from 'react-router-dom'
import { EMAIL } from '../data/about.js'

export default function Footer() {
  return (
    <footer className="border-t border-hairline mt-auto">
      <div className="shell py-10 md:py-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="flex items-center gap-5 text-lg">
          <Link
            to="/"
            aria-label="Home"
            className="transition-colors duration-200 hover:text-[var(--accent)]"
            style={{ color: 'var(--muted)' }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
          </Link>

          {/* TODO: point at the real LinkedIn profile URL. */}
          <a
            href="#"
            className="link-underline"
            style={{ color: 'var(--muted)' }}
          >
            LinkedIn
          </a>

          <a
            href={`mailto:${EMAIL}`}
            className="link-underline"
            style={{ color: 'var(--muted)' }}
          >
            Contact
          </a>
        </div>

        <div className="text-lg" style={{ color: 'var(--muted)' }}>
          Made in Portugal
        </div>
      </div>
    </footer>
  )
}
