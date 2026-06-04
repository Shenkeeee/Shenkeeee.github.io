import { useEffect } from "react";

const ProjectModal = ({ selectedImg, setSelectedImg }) => {
  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setSelectedImg(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
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
  );
};

export default ProjectModal;
