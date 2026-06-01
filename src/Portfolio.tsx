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

  // ROW 1: Hackathons & Sprints
  const hackathons = [
    {
      title: "BREAD CRAMPS",
      subtitle: "4th Hackathon Participation - GDE MIT 2026",
      tech: "React + FastAPI + SQLite + Azure AI",
      desc: "Logs meal sequences and physical symptom markers to map biological wellness data patterns. Built hand-in-hand under pure crunch pressure in less than 24 hours.",
      img: "./assets/breadCramps.webp",
      alt: "Bread Cramps presentation preview",
      projectUrl: "https://devpost.com/software/bread-cramps",
    },
    {
      title: "OTPilot",
      subtitle: "3rd Hackathon Participation - OTP Bank IT 2025",
      tech: "Vue + FastAPI + Azure AI",
      desc: "An AI-driven data optimization system.",
      img: "./assets/otpilot.webp",
      alt: "OTPilot architecture interface layout",
    },
  ];

  // ROW 2: Custom Web Apps, Hobby Frameworks & Engine R&D
  const hobbyWeb = [
    {
      title: "Fish Anomaly Detector",
      subtitle: "Research Support Tool",
      tech: "React + FastAPI + AI + Railway",
      desc: "Website that uses machine learning models on the backend to flag physical and health abnormalities in fish for a scientific research project. Has a fully editable result onto a canvas on the frontend with clipboard usage.",
      img: "./assets/fishSegmenter.webp",
      alt: "Fish analyzer interface",
      demoUrl: "https://halak-web-support-production.up.railway.app/",
    },
    {
      title: "Wedding Site",
      subtitle: "Gift for Friends",
      tech: "React + Vercel",
      desc: "A wedding website built as a personalized gift for close friends to showcase event details, song list and timetable.",
      img: "./assets/abiWedding.webp",
      alt: "Wedding website preview",
    },
    {
      title: "Conqueror Game",
      subtitle: "Corporate Simulation",
      tech: "Angular + Firebase + Flask",
      desc: "Built in a 10-person Scrum team collaborating with Evosoft. Led the frontend development team, and designed in Figma.",
      img: "./assets/conqueror.webp",
      alt: "Conqueror game module screen",
    },
    {
      title: "Christmas Name Shuffler",
      subtitle: "Holiday Utility App",
      tech: "React + Firebase",
      desc: "A quick festive app for holiday gift exchanges. Features real-time group entries and randomized name drawing.",
      img: "./assets/christmas-draw.webp",
      alt: "Christmas shuffler screen",
    },
    {
      title: "Don't Starve: Restore the Balance",
      subtitle: "University Thesis Project",
      tech: "Godot + GDScript",
      desc: "A game made in godot introducing custom mechanics, light/shadow forms, and new abilities. Received a perfect score from university.",
      img: "./assets/dont-starve.webp",
      alt: "Don't Starve mod preview",
      isNonWeb: true,
    },
  ];

  const renderCard = (project, idx) => (
    <div
      key={idx}
      className="bg-[#2a2a2a] rounded-xl p-5 border border-neutral-800/80 flex flex-col justify-between group hover:border-neutral-700 transition-all duration-300 shadow-md h-full"
    >
      <div className="flex flex-col h-full justify-between">
        <div>
          {/* Media Window Container with smart CSS UI Backup graphic */}
          <div className="overflow-hidden rounded-lg bg-neutral-900 border border-neutral-950 aspect-video mb-4 relative flex items-center justify-center">
            {project.img ? (
              <img
                src={project.img}
                alt={project.alt || project.title}
                onClick={() => setSelectedImg(project.img)}
                className="w-full h-full object-cover cursor-zoom-in lg:group-hover:scale-[1.02] transition-transform duration-300"
              />
            ) : (
              <div className="w-full h-full bg-gray-300 flex items-center justify-center p-4 select-none">
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
                    d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375 0 11-.75 0 .375 0 01.75 0z"
                  />
                </svg>
              </div>
            )}
          </div>

          <div className="flex items-start justify-between gap-4 mb-1">
            <div>
              <h3 className="text-base font-bold text-white group-hover:text-emerald-400 transition-colors line-clamp-1">
                {project.title}
              </h3>
              <div className="flex flex-wrap items-center gap-2 mt-0.5">
                {project.subtitle && (
                  <p className="text-xs text-neutral-400 font-medium">
                    {project.subtitle}
                  </p>
                )}
                {project.isNonWeb && (
                  <span className="text-[9px] font-semibold bg-blue-500/10 text-blue-400 border border-blue-900/30 px-1.5 py-0.5 rounded uppercase tracking-wider">
                    Non-Web Tech
                  </span>
                )}
              </div>
            </div>
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
        </div>

        <div className="mt-3">
          <p className="text-xs font-mono text-emerald-400/90 mb-3 bg-emerald-950/20 inline-block px-2 py-0.5 rounded border border-emerald-900/30">
            {project.tech}
          </p>
          <p className="text-xs text-neutral-300 leading-relaxed font-normal line-clamp-4">
            {project.desc}
          </p>
        </div>
      </div>
    </div>
  );

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
        <section className="min-h-screen bg-[#212121] px-6 py-24 snap-start snap-always border-t border-neutral-800/40">
          <div className="max-w-[95rem] mx-auto w-full space-y-16">
            {/* CATEGORY ROW 1: Hackathons */}
            <div>
              <div className="mb-6">
                <h2 className="text-xl lg:text-2xl font-bold tracking-tight text-white">
                  Hackathons
                </h2>
                <div className="h-0.5 w-12 bg-emerald-500 mt-1.5 rounded"></div>
              </div>
              {/* Responsive 4 column container layout matrix */}
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
                {hackathons.map((p, i) => renderCard(p, i))}
              </div>
            </div>

            {/* CATEGORY ROW 2: Hobby (Includes Consolidated Game/Research) */}
            <div>
              <div className="mb-6">
                <h2 className="text-xl lg:text-2xl font-bold tracking-tight text-white">
                  Hobby
                </h2>
                <div className="h-0.5 w-12 bg-emerald-500 mt-1.5 rounded"></div>
              </div>
              {/* Responsive 4 column container layout matrix */}
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
                {hobbyWeb.map((p, i) => renderCard(p, i))}
              </div>
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
