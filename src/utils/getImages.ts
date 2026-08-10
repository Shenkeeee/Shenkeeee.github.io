// Gallery folders live in src/assets/galleries/<folder>/, files named
// 1_x.webp, 2_y.webp, ... — drop files in, no data changes needed.
const galleryModules = import.meta.glob("/src/assets/galleries/*/*", {
  eager: true,
  import: "default",
}) as Record<string, string>;

// A project defines either `folder` (a gallery) or a single `img`.
export const getImages = (project: { img?: string; folder?: string }) => {
  if (project.folder) {
    return Object.entries(galleryModules)
      .filter(([path]) => path.includes(`/galleries/${project.folder}/`))
      .sort(([a], [b]) => {
        const numOf = (p: string) =>
          parseInt(p.split("/").pop()!.match(/^\d+/)?.[0] ?? "0", 10);
        return numOf(a) - numOf(b);
      })
      .map(([, url]) => url);
  }
  return project.img ? [project.img] : [];
};
