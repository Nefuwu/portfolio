import styles from './ProjectsStyles.module.css';
import falconbot from '../../assets/falconbot.png';
import docAuto from '../../assets/docAuto.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section
      id="projects"
      className={styles.container}
    >
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={falconbot}
          link="https://github.com/Nefuwu/FalconBot-Final"
          h3="FalconBot"
          p="Student Assistant ChatBot"
        />
        <ProjectCard
          src={docAuto}
          link="https://github.com/Nefuwu/Document-Automation"
          h3="AutoDoc"
          p="Document Automation System"
        />
      </div>
    </section>
  );
}

export default Projects;
