import React from 'react'
import ProjectCard from './ProjectCard'


const projectsData = [
    {
        id: 1,
        title: "Public Housing Analysis (STOR-320 Final Project)",
        description: "As part of a final group project, I analyzed the public housing market by developing various prediction models to determine the factors influencing government spending and rent prices. Utilizing R and leveraging the tidyverse and model R packages, I conducted comprehensive data analysis and created insightful visualizations.",
        image: "/images/projects/FinalPaper.png",
        gitUrl: "/",
        previewUrl: "/Final-Paper.pdf"
    },
]

const ProjectSection = () => {
  return (
    <>
        <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
            My Projects
        </h2>
        <div>
            {projectsData.map((project) =>(
             <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image} 
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
              />
            ))}
        </div>
    </>
  )
}

export default ProjectSection