import ProjectsGrid from '@/components/project_components/ProjectsGrid';
import { projects } from '@/data/projects'
import React from 'react'

const ProjectPage = () => {
  return (
    <ProjectsGrid title='Projects' description="A collection of things I've built." projects={projects}/>
  );
}

export default ProjectPage