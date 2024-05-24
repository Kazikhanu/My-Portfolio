import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/gallery1.png';
import freshBurger from '../../assets/movie.png';
import hipsster from '../../assets/django1.png';
import fitLift from '../../assets/calculator.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Жасалған проекттер</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="https://github.com/Kazikhanu/Gallery-App"
          h3="React"
          p="Gallery-App"
        />
        <ProjectCard
          src={freshBurger}
          link="https://github.com/Kazikhanu/ReactMovies"
          h3="React"
          p="React-Movies"
        />
        <ProjectCard
          src={hipsster}
          link="https://github.com/Kazikhanu/Django-Project"
          h3="React"
          p="Django Project"
        />
        <ProjectCard
          src={fitLift}
          link="https://github.com/Kazikhanu/Calculator"
          h3="React"
          p="React Calculator"
        />
      </div>
    </section>
  );
}

export default Projects;
