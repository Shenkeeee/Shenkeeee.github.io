import { useState } from "react";
import { hackathons, hobbyWeb, mainProjects } from "../data/projects";
import { getImages } from "../utils/getImages";
import ProjectGallery from "./ProjectGallery";

const ProjectLister = ({
  activeFilter,
  setActiveFilter,
  openGallery,
}: {
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
  openGallery: (images: string[], index: number) => void;
}) => {
  // Logic helper to match technologies
  const matchesFilter = (techString: string) => {
    if (activeFilter === "all") return true;
    return techString.toLowerCase().includes(activeFilter);
  };

  const filteredMainProjects = mainProjects.filter((p) =>
    matchesFilter(p.tech),
  );
  const filteredHackathons = hackathons.filter((p) => matchesFilter(p.tech));
  const filteredHobbyWeb = hobbyWeb.filter((p) => matchesFilter(p.tech));

  // Identify grouped elements
  const groupedItems = filteredMainProjects.filter((p) => p.group === 1);
  const hasGroup = groupedItems.length >= 2;

  // Build the render order as it appears in the data, collapsing the
  // grouped pair into a single block at the position of its first member.
  const blocks: Array<
    { type: "group"; items: typeof groupedItems } | { type: "single"; item: (typeof filteredMainProjects)[number] }
  > = [];
  let groupBlockAdded = false;
  filteredMainProjects.forEach((project) => {
    if (project.group === 1) {
      if (hasGroup && !groupBlockAdded) {
        blocks.push({ type: "group", items: groupedItems });
        groupBlockAdded = true;
      }
    } else {
      blocks.push({ type: "single", item: project });
    }
  });

  // State to handle inner toggle index if a valid group exists
  const [activeSubIndex, setActiveSubIndex] = useState<number>(0);

  const renderCard = (project: any, idx: number) => (
    <div
      key={idx}
      className="bg-[#2a2a2a] rounded-xl p-5 border border-neutral-800/80 flex flex-col group hover:border-neutral-700 transition-all duration-300 shadow-md h-full"
    >
      {/* Media Window Container */}
      <div className="overflow-hidden rounded-lg bg-neutral-900 border border-neutral-950 aspect-video mb-4 relative flex items-center justify-center">
        {project.img || project.folder ? (
          <ProjectGallery
            images={getImages(project)}
            alt={project.alt || project.title}
            onOpen={openGallery}
            className="w-full h-full"
            imgClassName="w-full h-full object-cover cursor-zoom-in lg:group-hover:scale-[1.02] transition-transform duration-300"
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
    <main id="main-wrapper">
      {/* TIER 1 SECTION TITLE INTERMEDIARY */}
      {filteredMainProjects.length > 0 && (
        <div className="bg-[#212121] text-center pt-40 -mb-32 pb-4 snap-start relative z-20">
          <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-wider text-neutral-300">
            Featured highlights
          </h2>
          <div className="h-0.5 w-20 bg-emerald-500 mx-auto mt-2.5 rounded"></div>
        </div>
      )}

      {/* MAIN PROJECT BLOCKS, in data order (grouped pair collapses into one block) */}
      {blocks.map((block, visualIndex) =>
        block.type === "group" ? (
        <section
          key="group"
          className={`flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 min-h-[100dvh] lg:h-[100dvh] px-5 pt-28 pb-12 lg:py-0 snap-start snap-always ${
            visualIndex % 2 === 1 ? "bg-[#282828]" : "bg-[#212121]"
          }`}
        >
          {/* Text Information column */}
          <div className="w-full lg:flex-1 lg:basis-[34%] max-w-xl">
            <h2 className="text-2xl lg:text-3xl font-bold leading-tight lg:leading-9 mb-2 text-white">
              {groupedItems[0].title} & {groupedItems[1].title}
            </h2>
            <p className="text-base lg:text-xl text-neutral-400 my-3 lg:my-4 leading-relaxed">
              {groupedItems[0].tech}
            </p>

            {/* Dynamic Live Actions targeting the active sub-index configuration */}
            <div className="flex flex-wrap gap-3 mb-6">
              {groupedItems[activeSubIndex]?.demoUrl && (
                <a
                  href={groupedItems[activeSubIndex].demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block bg-emerald-500 hover:bg-emerald-600 text-neutral-900 font-bold px-4 lg:px-5 py-2 lg:py-2.5 rounded-md transition-colors text-sm lg:text-base"
                >
                  Visit Live ({groupedItems[activeSubIndex].title})
                </a>
              )}
              {groupedItems[activeSubIndex]?.statusUrl && (
                <a
                  href={groupedItems[activeSubIndex].statusUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block bg-neutral-800 border border-neutral-700 text-neutral-200 hover:bg-neutral-700 font-medium px-4 lg:px-5 py-2 lg:py-2.5 rounded-md transition-colors text-sm lg:text-base"
                >
                  Uptime Status
                </a>
              )}
            </div>

            {/* Bullet points mapping exclusively from the first entity */}
            <ul className="space-y-2">
              {groupedItems[0].bullets.map((bullet, bIdx) => (
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

          {/* Picture column + Selector Integration Layer */}
          <div className="w-full lg:flex-1 lg:basis-[59%] max-w-[70rem] flex flex-col gap-4">
            {/* Aspect Window with fixed crossfade layer indices */}
            <div className="w-full relative overflow-hidden aspect-[16/9] rounded-xl shadow-2xl border border-neutral-800 bg-neutral-950">
              {groupedItems.map((item, idx) => {
                const isActive = activeSubIndex === idx;
                return (
                  <img
                    key={idx}
                    src={item.img}
                    alt={item.alt}
                    onClick={() => openGallery(getImages(item), 0)}
                    className={`absolute inset-0 w-full h-full object-cover rounded-xl cursor-pointer transition-all duration-200 ease-in-out ${
                      isActive
                        ? "opacity-100 translate-x-0 scale-100 z-10 pointer-events-auto"
                        : idx < activeSubIndex
                          ? "opacity-0 -translate-x-4 scale-[0.98] z-0 pointer-events-none"
                          : "opacity-0 translate-x-4 scale-[0.98] z-0 pointer-events-none"
                    }`}
                  />
                );
              })}
            </div>

            {/* Interactive Toggle Pill Switchers placed right under the card preview viewport */}
            <div className="flex items-center gap-2 bg-neutral-900/90 p-1.5 rounded-xl border border-neutral-800/80 max-w-xs self-start lg:self-center w-full shadow-md">
              {groupedItems.map((item, sIdx) => (
                <button
                  key={sIdx}
                  onClick={() => setActiveSubIndex(sIdx)}
                  className={`flex-1 text-xs md:text-sm font-semibold py-2 px-3 rounded-lg transition-all ${
                    activeSubIndex === sIdx
                      ? "bg-emerald-500 text-neutral-950 shadow-sm"
                      : "text-neutral-400 hover:text-neutral-200"
                  }`}
                >
                  {item.title}
                </button>
              ))}
            </div>
          </div>
        </section>
        ) : (
        <section
          key={block.item.title}
          className={`flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 min-h-[100dvh] lg:h-[100dvh] px-5 pt-28 pb-12 lg:py-0 snap-start snap-always ${
            visualIndex % 2 === 1 ? "bg-[#282828]" : "bg-[#212121]"
          }`}
        >
          <div className="w-full lg:flex-1 lg:basis-[34%] max-w-xl">
            <h2 className="text-2xl lg:text-3xl font-bold leading-tight lg:leading-9 mb-2 text-white">
              {block.item.title}
            </h2>
            <p className="text-base lg:text-xl text-neutral-400 my-3 lg:my-4 leading-relaxed">
              {block.item.tech}
            </p>

            {(block.item.demoUrl || block.item.statusUrl) && (
              <div className="flex flex-wrap gap-3 mb-6">
                {block.item.demoUrl && (
                  <a
                    href={block.item.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block bg-emerald-500 hover:bg-emerald-600 text-neutral-900 font-bold px-4 lg:px-5 py-2 lg:py-2.5 rounded-md transition-colors text-sm lg:text-base"
                  >
                    Visit Live Site
                  </a>
                )}
                {block.item.statusUrl && (
                  <a
                    href={block.item.statusUrl}
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
              {block.item.bullets.map((bullet, bIdx) => (
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

          <div className="w-full lg:flex-1 lg:basis-[59%] max-w-[70rem]">
            <ProjectGallery
              images={getImages(block.item)}
              alt={block.item.alt}
              onOpen={openGallery}
              imgClassName="w-full max-w-full rounded-xl shadow-lg transition-transform duration-300 lg:hover:scale-[1.01] cursor-pointer object-cover"
            />
          </div>
        </section>
        ),
      )}

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
  );
};

export default ProjectLister;
