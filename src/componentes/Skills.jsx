import React from "react";
import MemoryIcon from '@mui/icons-material/Memory';
import css from '../css/Skills.module.css';
import Timeline from "./Timeline";

export default function Skills() {
  return (
    <section id="skills" className={css.header}>
      <div className={css.header}>
        <MemoryIcon />
        <h1 className={css.heading}>
          Habilidades y Tecnologías
        </h1>
        <p className={css.text}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi sit
          ipsa delectus eum quo voluptas aspernatur accusantium distinctio
          possimus est.
        </p>
      </div>
      <div className={css.timeline}>
        <Timeline/>
      </div>
    </section>
  );
}
