import React from 'react'
import CodeIcon from '@mui/icons-material/Code';
import { projects } from '../Data';
import css from '../css/Projects.module.css'

export default function Projects() { 
  return (
    <section id="projects">
      <div className={css.projectContainer}>
        <div className={css.sectionHeader}>
          <CodeIcon />
          <h1>Aplicaciones que he construido</h1>
          <p>Estas son algunas de las aplicaciones que estuve desarrollando, todas me ayudaron a poder encontrar soluciones innovadoras y poder ofrecer una experiencia de usuario fluida y eficiente.</p>
        </div>
        <div className={css.projectList}>
          {projects.map((project) => ( 
            <a href={project.link} target="_blank" key={project.image} className={css.project}>
              <img alt="gallery" src={project.image} />
              <div>
                <h2>{project.subtitle}</h2>
                <h1>{project.title}</h1>
                <p>{project.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
