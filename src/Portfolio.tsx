import React, { useState, useEffect } from "react";

export default function Portfolio() {
  const [selectedImg, setSelectedImg] = useState(null);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setSelectedImg(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const mainProjects = [
    {
      title: "Btervjogsi",
      tech: "React + Vite + FastAPI + Cloudflare + Railway",
      bullets: [
        {
          text: "Main portfolio platform for a driving school",
          status: "check",
        },
        {
          text: "Highly responsive layout optimized for conversions",
          status: "check",
        },
        {
          text: "Clean component architecture and optimized assets",
          status: "check",
        },
        { text: "FastAPI backend hosted on Railway", status: "check" },
        {
          text: "Cloudflare integration for CDN, proxy, and security",
          status: "check",
        },
      ],
      img: "./assets/btervjogsi.webp",
      alt: "Btervjogsi project screenshot",
      demoUrl: "https://btervjogsi.hu/",
      statusUrl: "https://mazsolajogsi.betteruptime.com/",
    },
    {
      title: "Mazsolajogsi",
      tech: "React + Vite + FastAPI + Cloudflare + Railway",
      bullets: [
        {
          text: "Main portfolio platform for a driving school",
          status: "check",
        },
        {
          text: "Highly responsive layout optimized for conversions",
          status: "check",
        },
        {
          text: "Clean component architecture and optimized assets",
          status: "check",
        },
        { text: "FastAPI backend hosted on Railway", status: "check" },
        {
          text: "Cloudflare integration for CDN, proxy, and security",
          status: "check",
        },
      ],
      img: "./assets/mazsolajogsi.webp",
      alt: "Mazsolajogsi project screenshot",
      demoUrl: "https://mazsolajogsi.hu/",
      statusUrl: "https://mazsolajogsi.betteruptime.com/",
    },
    {
      title: "Deckbuilder",
      tech: "Angular + Firebase + Dexie.js",
      bullets: [
        { text: "Deployed for production use", status: "check" },
        { text: "Flexible database", status: "check" },
        { text: "Automatic deck loading via URL", status: "check" },
      ],
      img: "./assets/deckbuilder.webp",
      alt: "Deckbuilder screenshot",
      demoUrl: "https://agilisdeckbuilder.web.app/",
    },
  ];

  const secondaryProjects = [
    {
      title: "Conqueror game",
      tech: "Angular + Firebase + Python flask",
      bullets: [
        {
          text: "Cooperated with Evosoft in an agile environment",
          status: "check",
        },
        { text: "Using Scrum methodology", status: "check" },
        { text: "Team project with 10 members", status: "check" },
        {
          text: "Main Role: Frontend and design with Figma, contributed to full-stack",
          status: "check",
        },
      ],
      img: "./assets/conqueror.webp",
      alt: "Conqueror like project screenshot",
    },
    {
      title: "Christmas Name Shuffler",
      tech: "React + Firebase",
      bullets: [
        { text: "Users can enter their names to participate", status: "check" },
        { text: "Random name selection from the pool", status: "check" },
        { text: "Simple and stylish user interface", status: "check" },
      ],
      img: "./assets/christmas-draw.webp",
      alt: "Christmas Draw Screenshot",
    },
    {
      title: "Don't Starve: Restore the Balance edition",
      tech: "Thesis project in Godot",
      bullets: [
        { text: "Light and Shadow form", status: "check" },
        { text: "Character abilities added", status: "check" },
        { text: "Rogue-like gameplay", status: "check" },
        { text: "Rated max by Uni, tested by friends", status: "check" },
      ],
      img: "./assets/dont-starve.webp",
      alt: "Don't starve like project screenshot",
    },
  ];

  return (
    <div className="bg-[#212121] text-[#f0ffff] min-h-screen snap-y snap-mandatory overflow-y-auto font-sans antialiased selection:bg-neutral-700 selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 right-0 z-50 w-full p-4 flex justify-end bg-gradient-to-b from-black/60 to-transparent pointer-events-none">
        <ul>
          <li>
            <a
              href="https://github.com/Shenkeeee/"
              className="text-[#f0ffff] hover:text-[#dddddd] transition-colors text-sm md:text-lg pr-3 md:pr-5 leading-[50px] md:leading-[60px] font-medium pointer-events-auto"
            >
              Back to GitHub
            </a>
          </li>
        </ul>
      </nav>

      {/* Main Content Sections */}
      <main id="main-wrapper">
        {/* TIER 1: CORE RESPONSIVE FULLSCREEN SECTIONS */}
        {mainProjects.map((project, index) => (
          <section
            key={index}
            className={`flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 min-h-[100dvh] lg:h-[100dvh] px-5 pt-24 pb-12 lg:py-0 snap-start snap-always ${
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
                      {bullet.status === "check" ? (
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
                      ) : (
                        <svg
                          className="w-5 h-5 text-amber-400 animate-spin"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                          />
                        </svg>
                      )}
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

        {/* TIER 2: COMBINED GRID VIEW FOR ALL SECONDARY/UTILITY PROJECTS */}
        <section className="min-h-[100dvh] lg:h-[100dvh] flex flex-col justify-center bg-[#212121] px-6 py-24 lg:py-0 snap-start snap-always border-t border-neutral-800/40">
          <div className="max-w-[85rem] mx-auto w-full">
            <div className="mb-8">
              <h2 className="text-2xl lg:text-3xl font-bold tracking-tight">
                More Projects
              </h2>
              <p className="text-sm lg:text-base text-neutral-400 mt-1">
                Hobby projects & academic work
              </p>
            </div>

            {/* 3 Columns Layout Group */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
              {secondaryProjects.map((project, index) => (
                <div
                  key={index}
                  className="bg-[#2a2a2a] rounded-xl p-5 border border-neutral-800/80 flex flex-col justify-between h-full group hover:border-neutral-700 transition-all duration-300 shadow-md"
                >
                  <div>
                    {/* Media Display Window Container */}
                    <div className="overflow-hidden rounded-lg bg-neutral-900 border border-neutral-950 aspect-video mb-4">
                      <img
                        src={project.img}
                        alt={project.alt}
                        onClick={() => setSelectedImg(project.img)}
                        className="w-full h-full object-cover cursor-zoom-in lg:group-hover:scale-[1.02] transition-transform duration-300"
                      />
                    </div>

                    <h3 className="text-xl font-bold text-white mb-1">
                      {project.title}
                    </h3>
                    <p className="text-xs font-mono text-emerald-400/90 mb-4 bg-emerald-950/20 inline-block px-2.5 py-0.5 rounded border border-emerald-900/30">
                      {project.tech}
                    </p>

                    {/* Uniform List Architecture */}
                    <ul className="space-y-2 mt-2">
                      {project.bullets.map((bullet, bIdx) => (
                        <li
                          key={bIdx}
                          className="flex items-start gap-2 text-sm text-neutral-300 leading-snug"
                        >
                          <span className="mt-0.5 text-emerald-500 text-xs flex-shrink-0">
                            ✓
                          </span>
                          <span>{bullet.text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
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
