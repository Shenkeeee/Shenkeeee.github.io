const Navbar = ({ activeFilter, setActiveFilter }) => {
  return (
    <nav className="fixed top-0 left-0 z-50 w-full p-4 flex flex-col sm:flex-row items-center justify-between gap-4 bg-gradient-to-b from-black/80 to-transparent backdrop-blur-[2px]">
      {/* Framework selector */}
      <div className="flex items-center gap-1.5 bg-neutral-900/90 p-1 rounded-lg border border-neutral-800 shadow-xl">
        <button
          onClick={() => setActiveFilter("all")}
          className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
            activeFilter === "all"
              ? "bg-emerald-500 text-neutral-950 font-bold"
              : "text-neutral-400 hover:text-white"
          }`}
        >
          All
        </button>

        <button
          onClick={() => setActiveFilter("react")}
          className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
            activeFilter === "react"
              ? "bg-[#00d8ff] text-neutral-950 font-bold"
              : "text-neutral-400 hover:text-white"
          }`}
        >
          <svg
            className="w-3.5 h-3.5 fill-none stroke-current"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <circle cx="12" cy="12" r="2" fill="currentColor" />
            <ellipse cx="12" cy="12" rx="10" ry="4.5" />
            <ellipse
              cx="12"
              cy="12"
              rx="10"
              ry="4.5"
              transform="rotate(60 12 12)"
            />
            <ellipse
              cx="12"
              cy="12"
              rx="10"
              ry="4.5"
              transform="rotate(120 12 12)"
            />
          </svg>
          React
        </button>

        <button
          onClick={() => setActiveFilter("angular")}
          className={`flex items-center gap-1 px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
            activeFilter === "angular"
              ? "bg-[#dd0031] text-white font-bold"
              : "text-neutral-400 hover:text-white"
          }`}
        >
          <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
            <path d="M12 2L2 5.5v5.3c0 5.7 4.2 10.4 10 11.2 5.8-.8 10-5.5 10-11.2V5.5L12 2zm4.4 14h-2.2l-1-2.4H10.8l-1 2.4H7.6L12 6.2l4.4 9.8zm-3.4-4.5L12 9.2l-1 2.3h2z" />
          </svg>
          Angular
        </button>

        <button
          onClick={() => setActiveFilter("vue")}
          className={`flex items-center gap-1 px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
            activeFilter === "vue"
              ? "bg-[#41b883] text-neutral-950 font-bold"
              : "text-neutral-400 hover:text-white"
          }`}
        >
          <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
            <path d="M24 4H18L12 14L6 4H0L12 24L24 4Z M18 4H14.5L12 8.2L9.5 4H6L12 14L18 4Z" />
          </svg>
          Vue
        </button>
      </div>

      <a
        href="https://github.com/Shenkeeee/"
        target="_blank"
        rel="noreferrer"
        className="text-[#f0ffff] hover:text-[#dddddd] transition-colors text-sm md:text-base font-medium px-4 py-2"
      >
        Back to GitHub
      </a>
    </nav>
  );
};

export default Navbar;
