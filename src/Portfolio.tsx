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

  const projects = [
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
    },
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
      <nav className="absolute top-0 right-0 z-50 w-full p-4 flex justify-end">
        <ul>
          <li>
            <a
              href="https://github.com/Shenkeeee/"
              className="text-[#f0ffff] hover:text-[#dddddd] transition-colors text-lg pr-5 leading-[60px] font-medium"
            >
              Back to GitHub
            </a>
          </li>
        </ul>
      </nav>

      {/* Main Content Sections */}
      <main id="main-wrapper">
        {projects.map((project, index) => (
          <section
            key={index}
            className={`flex flex-wrap items-center justify-center gap-12 h-[100dvh] px-5 snap-start snap-always ${
              index % 2 === 1 ? "bg-[#282828]" : "bg-[#212121]"
            }`}
          >
            {/* Text Information column */}
            <div className="flex-1 basis-[34%] max-w-xl">
              <h2 className="text-3xl font-bold leading-9 mb-2">
                {project.title}
              </h2>
              <p className="text-xl text-neutral-400 my-7 leading-7">
                {project.tech}
              </p>

              <ul className="space-y-2">
                {project.bullets.map((bullet, bIdx) => (
                  <li
                    key={bIdx}
                    className="flex items-start gap-3 text-xl leading-7 text-neutral-200"
                  >
                    <span className="mt-1 flex-shrink-0">
                      {bullet.status === "check" ? (
                        /* Tailwind replacement checkmark icon */
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
                        /* Tailwind replacement loading icon */
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
            <div className="flex-1 basis-[59%] max-w-[70rem]">
              <img
                src={project.img}
                alt={project.alt}
                onClick={() => setSelectedImg(project.img)}
                className="w-full max-w-full rounded-xl shadow-lg transition-transform duration-300 hover:scale-[1.01] cursor-pointer object-cover"
              />
            </div>
          </section>
        ))}
      </main>

      {/* Fullscreen Image Modal */}
      <div
        onClick={() => setSelectedImg(null)}
        className={`fixed inset-0 z-[1000] w-full h-full bg-black/90 flex justify-center items-center transition-opacity duration-200 ease-in-out ${
          selectedImg
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={() => setSelectedImg(null)}
          className="absolute top-5 right-7 text-white text-4xl font-bold cursor-pointer hover:text-neutral-300 transition-colors"
          aria-label="Close modal"
        >
          &times;
        </button>

        {/* Modal Image Display */}
        {selectedImg && (
          <img
            src={selectedImg}
            alt="Fullscreen look"
            className="max-w-[85%] max-h-[85%] rounded-xl object-contain shadow-[0_0_12px_rgba(255,255,255,1)]"
          />
        )}
      </div>
    </div>
  );
}
