import { useEffect, useState } from "react";

const ProjectGallery = ({
  images,
  alt,
  onOpen,
  className = "",
  imgClassName = "w-full h-full object-cover cursor-zoom-in",
}: {
  images: string[];
  alt?: string;
  onOpen: (images: string[], index: number) => void;
  className?: string;
  imgClassName?: string;
}) => {
  const [index, setIndex] = useState(0);
  const hasMultiple = images.length > 1;

  // Warm the browser cache for the rest of the gallery so arrow/dot
  // navigation is instant instead of waiting on a fresh fetch each time.
  useEffect(() => {
    images.slice(1).forEach((src) => {
      new window.Image().src = src;
    });
  }, [images]);

  const go = (e: React.MouseEvent, dir: 1 | -1) => {
    e.stopPropagation();
    setIndex((i) => (i + dir + images.length) % images.length);
  };

  return (
    <div className={`relative group/gallery ${className}`}>
      <img
        src={images[index]}
        alt={alt}
        onClick={() => onOpen(images, index)}
        className={imgClassName}
      />
      {hasMultiple && (
        <>
          <button
            onClick={(e) => go(e, -1)}
            aria-label="Previous image"
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full w-8 h-8 flex items-center justify-center cursor-pointer opacity-70 lg:opacity-0 lg:group-hover/gallery:opacity-100 transition-opacity"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            onClick={(e) => go(e, 1)}
            aria-label="Next image"
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full w-8 h-8 flex items-center justify-center cursor-pointer opacity-70 lg:opacity-0 lg:group-hover/gallery:opacity-100 transition-opacity"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6" />
            </svg>
          </button>
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={(e) => {
                  e.stopPropagation();
                  setIndex(i);
                }}
                aria-label={`Go to image ${i + 1}`}
                className={`w-1.5 h-1.5 rounded-full transition-colors cursor-pointer ${
                  i === index ? "bg-white" : "bg-white/40 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ProjectGallery;
