"use client";

import { useMediaQuery } from "@/lib/useMediaQuery";
import GalaxyComponent from "./galaxy-component";

export default function GalaxyWrapper() {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const galaxySize = isDesktop ? 500 : 300;

  return (
    <GalaxyComponent
      title="<Coding/>"
      subtitle="Code for Harmony"
      badges={["Optimal", "Readable", "Scalable", "Maintainable", "Clean Code"]}
      size={galaxySize}
    />
  );
}
