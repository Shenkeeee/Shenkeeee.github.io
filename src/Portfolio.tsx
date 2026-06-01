import { useState, useEffect } from "react";
import { mainProjects, hackathons, hobbyWeb } from "./data/projects";

export default function Portfolio() {
  const [selectedImg, setSelectedImg] = useState(null);
  const [activeFilter, setActiveFilter] = useState("all"); // 'all', 'react', 'angular', 'vue'

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setSelectedImg(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Logic helper to match technologies
  const matchesFilter = (techString) => {
    if (activeFilter === "all") return true;
    return techString.toLowerCase().includes(activeFilter);
  };

  const filteredMainProjects = mainProjects.filter((p) =>
    matchesFilter(p.tech),
  );
  const filteredHackathons = hackathons.filter((p) => matchesFilter(p.tech));
  const filteredHobbyWeb = hobbyWeb.filter((p) => matchesFilter(p.tech));

  const renderCard = (project, idx) => (
    <div
      key={idx}
      className="bg-[#2a2a2a] rounded-xl p-5 border border-neutral-800/80 flex flex-col group hover:border-neutral-700 transition-all duration-300 shadow-md h-full"
    >
      {/* Media Window Container */}
      <div className="overflow-hidden rounded-lg bg-neutral-900 border border-neutral-950 aspect-video mb-4 relative flex items-center justify-center">
        {project.img ? (
          <img
            src={project.img}
            alt={project.alt || project.title}
            onClick={() => setSelectedImg(project.img)}
            className="w-full h-full object-cover cursor-zoom-in lg:group-hover:scale-[1.02] transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-[#242424] via-[#2c2c2c] to-[#242424] flex items-center justify-center p-4 select-none">
            <svg
              className="w-10 h-10 text-neutral-600/50"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.25"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 00.1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375 0 11-.75 0 .375 0 01.75 0z"
              />
            </svg>
          </div>
        )}
      </div>

      {/* Header Row: Title & Action Link */}
      <div className="flex items-start justify-between gap-4 mb-1.5">
        <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-emerald-400 transition-colors line-clamp-1">
          {project.title}
        </h3>
        {project.projectUrl && (
          <a
            href={project.projectUrl}
            target="_blank"
            rel="noreferrer"
            className="text-xs bg-emerald-500/10 hover:bg-emerald-500 text-emerald-400 hover:text-neutral-950 font-semibold px-2.5 py-1 rounded transition-colors whitespace-nowrap"
          >
            Link ↗
          </a>
        )}
      </div>

      {/* Subtitles / Badges Metadata */}
      {(project.subtitle || project.isNonWeb) && (
        <div className="flex flex-wrap items-center gap-2 mb-3">
          {project.subtitle && (
            <p className="text-xs md:text-sm text-neutral-400 font-medium">
              {project.subtitle}
            </p>
          )}
          {project.isNonWeb && (
            <span className="text-[10px] font-semibold bg-blue-500/10 text-blue-400 border border-blue-900/30 px-2 py-0.5 rounded uppercase tracking-wider whitespace-nowrap">
              Non-Web Tech
            </span>
          )}
        </div>
      )}

      {/* Tech Stack Badge & Description */}
      <div className="mt-1">
        <p className="text-xs font-mono text-emerald-400/90 mb-2 bg-emerald-950/20 inline-block px-2.5 py-1 rounded border border-emerald-900/30">
          {project.tech}
        </p>
        <p className="text-sm text-neutral-300 leading-relaxed font-normal line-clamp-4">
          {project.desc}
        </p>
      </div>
    </div>
  );

  return (
    <div className="bg-[#212121] text-[#f0ffff] min-h-screen snap-y snap-mandatory overflow-y-auto font-sans antialiased selection:bg-neutral-700 selection:text-white">
      {/* Dynamic Navigation & Framework Filter Menu */}
      <nav className="fixed top-0 left-0 z-50 w-full p-4 flex flex-col sm:flex-row items-center justify-between gap-4 bg-gradient-to-b from-black/80 to-transparent backdrop-blur-[2px]">
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

      {/* Main Content Sections */}
      <main id="main-wrapper">
        {/* TIER 1 SECTION TITLE INTERMEDIARY */}
        {filteredMainProjects.length > 0 && (
          <div className="bg-[#212121] text-center pt-28 -mb-16 pb-4 snap-start">
            <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-wider text-neutral-300">
              Featured highlights
            </h2>
            <div className="h-0.5 w-20 bg-emerald-500 mx-auto mt-2.5 rounded"></div>
          </div>
        )}

        {/* TIER 1: CORE RESPONSIVE FULLSCREEN SECTIONS */}
        {filteredMainProjects.map((project, index) => (
          <section
            key={index}
            className={`flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 min-h-[100dvh] lg:h-[100dvh] px-5 pt-28 pb-12 lg:py-0 snap-start snap-always ${
              index % 2 === 1 ? "bg-[#282828]" : "bg-[#212121]"
            }`}
          >
            {/* Text Information column */}
            <div className="w-full lg:flex-1 lg:basis-[34%] max-w-xl">
              <h2 className="text-2xl lg:text-3xl font-bold leading-tight lg:leading-9 mb-2">
                {project.title}
              </h2>
              <p className="text-base lg:text-xl text-neutral-400 my-3 lg:my-4 leading-relaxed">
                {project.tech}
              </p>

              {/* Interactive Dashboard Action Links */}
              {(project.demoUrl || project.statusUrl) && (
                <div className="flex flex-wrap gap-3 mb-6">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-block bg-emerald-500 hover:bg-emerald-600 text-neutral-900 font-bold px-4 lg:px-5 py-2 lg:py-2.5 rounded-md transition-colors text-sm lg:text-base"
                    >
                      Visit Live Site ↗
                    </a>
                  )}
                  {project.statusUrl && (
                    <a
                      href={project.statusUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-block bg-neutral-800 border border-neutral-700 text-neutral-200 hover:bg-neutral-700 font-medium px-4 lg:px-5 py-2 lg:py-2.5 rounded-md transition-colors text-sm lg:text-base"
                    >
                      Uptime Status
                    </a>
                  )}
                </div>
              )}

              <ul className="space-y-2">
                {project.bullets.map((bullet, bIdx) => (
                  <li
                    key={bIdx}
                    className="flex items-start gap-3 text-base lg:text-xl leading-relaxed text-neutral-200"
                  >
                    <span className="mt-1 flex-shrink-0">
                      <svg
                        className="w-5 h-5 text-emerald-400"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                    </span>
                    <span>{bullet.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Picture column */}
            <div className="w-full lg:flex-1 lg:basis-[59%] max-w-[70rem]">
              <img
                src={project.img}
                alt={project.alt}
                onClick={() => setSelectedImg(project.img)}
                className="w-full max-w-full rounded-xl shadow-lg transition-transform duration-300 lg:hover:scale-[1.01] cursor-pointer object-cover"
              />
            </div>
          </section>
        ))}

        {/* TIER 2: STRUCTURED ROW SEGMENTATION LABELS */}
        {(filteredHackathons.length > 0 || filteredHobbyWeb.length > 0) && (
          <section className="min-h-screen bg-[#212121] px-6 py-24 snap-start snap-always border-t border-neutral-800/40">
            <div className="max-w-[95rem] mx-auto w-full">
              <div className="mb-14 text-center">
                <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-wider text-neutral-300">
                  More Projects
                </h2>
                <div className="h-0.5 w-20 bg-emerald-500 mx-auto mt-2.5 rounded"></div>
              </div>

              <div className="space-y-20">
                {/* CATEGORY ROW 1: Hackathons */}
                {filteredHackathons.length > 0 && (
                  <div>
                    <div className="mb-6">
                      <h3 className="text-xl lg:text-2xl font-bold tracking-tight text-white">
                        Hackathons
                      </h3>
                      <div className="h-0.5 w-12 bg-emerald-500 mt-1.5 rounded"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
                      {filteredHackathons.map((p, i) => renderCard(p, i))}
                    </div>
                  </div>
                )}

                {/* CATEGORY ROW 2: Hobby & Other */}
                {filteredHobbyWeb.length > 0 && (
                  <div>
                    <div className="mb-6">
                      <h3 className="text-xl lg:text-2xl font-bold tracking-tight text-white">
                        Hobby & Other
                      </h3>
                      <div className="h-0.5 w-12 bg-emerald-500 mt-1.5 rounded"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
                      {filteredHobbyWeb.map((p, i) => renderCard(p, i))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        {/* Fallback layout if everything is filtered out */}
        {filteredMainProjects.length === 0 &&
          filteredHackathons.length === 0 &&
          filteredHobbyWeb.length === 0 && (
            <div className="h-screen w-full flex flex-col items-center justify-center text-center px-4 snap-start">
              <p className="text-neutral-400 text-lg mb-2">
                No projects found matching that filter.
              </p>
              <button
                onClick={() => setActiveFilter("all")}
                className="text-emerald-400 hover:underline font-medium text-sm"
              >
                Clear Filter
              </button>
            </div>
          )}
      </main>

      {/* Fullscreen Image Modal */}
      <div
        onClick={() => setSelectedImg(null)}
        className={`fixed inset-0 z-[1000] w-full h-full bg-black/95 flex justify-center items-center transition-opacity duration-200 ease-in-out ${
          selectedImg
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <button
          onClick={() => setSelectedImg(null)}
          className="absolute top-5 right-7 text-white text-4xl font-light cursor-pointer hover:text-neutral-400 transition-colors"
          aria-label="Close modal"
        >
          &times;
        </button>
        {selectedImg && (
          <img
            src={selectedImg}
            alt="Fullscreen look"
            className="max-w-[92%] max-h-[85%] rounded-xl object-contain shadow-2xl border border-neutral-800"
          />
        )}
      </div>
    </div>
  );
}
