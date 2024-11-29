import React from "react";
import styles from "./ProgectsStyles.module.css";
import ProjectCard from "../../common/ProjectCard";
import artKissDesignLogo from "../../assets/artKissLogo.png";
import gardenLogo from "../../assets/gardenIcon.png";
import pongGameLogo from "../../assets/machine.png";

const Projects = () => {
  return (
    <div>
      <section id="projects" className={styles.container}>
        <h1 className="sectionTitle">Projects</h1>
        <div className={styles.projectsContainer}>
          <ProjectCard
            src={artKissDesignLogo}
            link="https://artkissdesign.pl/"
            title="Art Kiss Design"
            description="Online store(commercial)"
          />
          <ProjectCard
            src={gardenLogo}
            link="https://store-e1th.onrender.com/"
            title="Garden store"
            description="Online store(training project)"
          />
          <ProjectCard
            src={pongGameLogo}
            link="https://pong-game-p670.onrender.com"
            title="The Pong Game"
            description="JS,CSS,HTML(training project)"
            className={styles.machine}
          />
        </div>
      </section>
    </div>
  );
};

export default Projects;
