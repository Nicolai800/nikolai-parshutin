import React from "react";
import styles from "./ProgectsStyles.module.css";
import ProjectCard from "../../common/ProjectCard";
import projectsData from "../../data/projectsDataArray";

const Projects = () => {
  return (
    <div>
      <section id="projects" className={styles.container}>
        <h1 className="sectionTitle">Projects</h1>
        <div className={styles.projectsContainer}>
          {projectsData.map((project, index) => (
            <ProjectCard
              key={index}
              src={project.src}
              link={project.link}
              title={project.title}
              description={project.description}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
