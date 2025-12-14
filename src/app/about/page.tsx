
import AboutComponent from "@/components/page_components/AboutComponent";
import GithubCalendarComponent from "@/components/page_components/GithubCalendarComponent";
import LeetCodeStatusComponent from "@/components/page_components/LeetCodeStatusComponent";
import ToolsAndTechComponent from "@/components/page_components/ToolsAndTechComponent";
import { categories } from "@/data/skills";
import React from "react";

const AboutPage = () => {
  return (
    <main>
      <AboutComponent/>
      <ToolsAndTechComponent categories={categories}/>
      <GithubCalendarComponent/>
      <LeetCodeStatusComponent/>
    </main>
  );
};

export default AboutPage;
