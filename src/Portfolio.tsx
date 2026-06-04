import { useState } from "react";
import ProjectModal from "./components/ProjectModal";
import Navbar from "./components/Navbar";
import ProjectLister from "./components/ProjectLister";

export default function Portfolio() {
  const [selectedImg, setSelectedImg] = useState(null);
  const [activeFilter, setActiveFilter] = useState("all"); // 'all', 'react', 'angular', 'vue'

  return (
    <div className="bg-[#212121] text-[#f0ffff] min-h-screen snap-y snap-mandatory overflow-y-auto font-sans antialiased selection:bg-neutral-700 selection:text-white">
      <Navbar activeFilter={activeFilter} setActiveFilter={setActiveFilter} />

      <ProjectLister
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
        setSelectedImg={setSelectedImg}
      />

      <ProjectModal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
    </div>
  );
}
