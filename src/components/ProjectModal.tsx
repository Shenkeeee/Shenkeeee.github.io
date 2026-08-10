import { useEffect } from "react";

export type Gallery = { images: string[]; index: number } | null;

const ProjectModal = ({
  gallery,
  setGallery,
}: {
  gallery: Gallery;
  setGallery: (g: Gallery) => void;
}) => {
  const go = (dir: 1 | -1) => {
    if (!gallery) return;
    setGallery({
      ...gallery,
      index:
        (gallery.index + dir + gallery.images.length) % gallery.images.length,
    });
  };

  // Close modal on Escape, navigate with arrow keys
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setGallery(null);
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "ArrowRight") go(1);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [gallery]);

  const hasMultiple = !!gallery && gallery.images.length > 1;

  return (
    <div
      onClick={() => setGallery(null)}
      className={`fixed inset-0 z-[1000] w-full h-full bg-black/95 flex justify-center items-center transition-opacity duration-200 ease-in-out ${
        gallery
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      <button
        onClick={() => setGallery(null)}
        className="absolute top-5 right-7 text-white text-4xl font-light cursor-pointer hover:text-neutral-400 transition-colors"
        aria-label="Close modal"
      >
        &times;
      </button>
      {gallery && (
        <>
          <img
            src={gallery.images[gallery.index]}
            alt="Fullscreen look"
            className="max-w-[92%] max-h-[85%] rounded-xl object-contain shadow-2xl border border-neutral-800"
          />
          {hasMultiple && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  go(-1);
                }}
                aria-label="Previous image"
                className="absolute left-3 md:left-8 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center cursor-pointer transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5 md:w-6 md:h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  go(1);
                }}
                aria-label="Next image"
                className="absolute right-3 md:right-8 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center cursor-pointer transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5 md:w-6 md:h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6" />
                </svg>
              </button>
              <div className="absolute bottom-6 right-6 md:right-10 text-white/90 text-sm font-mono bg-black/50 px-2.5 py-1 rounded">
                {gallery.index + 1}/{gallery.images.length}
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default ProjectModal;
