import { useState } from "react";
import ProjectModal, { type Gallery } from "./components/ProjectModal";
import Navbar from "./components/Navbar";
import ProjectLister from "./components/ProjectLister";

export default function Portfolio() {
  const [gallery, setGallery] = useState<Gallery>(null);
  const [activeFilter, setActiveFilter] = useState("all"); // 'all', 'react', 'angular', 'vue'

  const openGallery = (images: string[], index: number) =>
    setGallery({ images, index });

  return (
    <div className="bg-[#212121] text-[#f0ffff] min-h-screen snap-y snap-mandatory overflow-y-auto font-sans antialiased selection:bg-neutral-700 selection:text-white">
      <Navbar activeFilter={activeFilter} setActiveFilter={setActiveFilter} />

      <ProjectLister
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
        openGallery={openGallery}
      />

      <ProjectModal gallery={gallery} setGallery={setGallery} />
    </div>
  );
}
