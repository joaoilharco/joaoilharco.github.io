import { EMAIL } from '../data/about.js'

const MUTED = 'rgba(255, 255, 255, 0.8)'

export default function Footer({ onHome }) {
  return (
    <footer
      className="px-6 md:px-12 xl:px-[330px] py-12 flex flex-col md:flex-row justify-between items-start md:items-center text-[23px] font-normal tracking-wide border-t border-zinc-900 mt-auto"
      style={{ color: MUTED }}
    >
      <div className="flex items-center gap-4 mb-4 md:mb-0">
        <button
          type="button"
          onClick={onHome}
          aria-label="Home"
          className="hover:text-white transition-colors cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
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
        </button>
        <span>•</span>
        {/* TODO: point at the real LinkedIn profile URL. */}
        <a href="#" className="hover:text-white transition-colors">
          LinkedIn
        </a>
        <span>•</span>
        <a href={`mailto:${EMAIL}`} className="hover:text-white transition-colors">
          Contact
        </a>
      </div>

      <div>Made in Portugal</div>
    </footer>
  )
}
