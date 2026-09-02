const MUTED = 'rgba(255, 255, 255, 0.8)'

export default function Navbar({ onHome, onAbout, isAbout }) {
  return (
    <nav className="w-full px-6 py-6 md:px-12 xl:pl-[330px] xl:pr-[330px] flex justify-between items-center font-medium tracking-wide fixed top-0 bg-black/90 backdrop-blur-sm z-50 border-b border-transparent transition-all duration-300">
      <button
        type="button"
        onClick={onHome}
        className="text-3xl cursor-pointer hover:text-white transition-colors"
      >
        João Ilharco
      </button>
      <button
        type="button"
        onClick={onAbout}
        className={`text-[23px] font-normal cursor-pointer hover:text-white transition-colors ${
          isAbout ? 'text-white' : ''
        }`}
        style={isAbout ? undefined : { color: MUTED }}
      >
        about
      </button>
    </nav>
  )
}
