import React from "react";
import MemoryIcon from '@mui/icons-material/Memory';
import css from '../css/Skills.module.css';
import Timeline from "./Timeline";

export default function Skills() {
  return (
    <section id="skills">
      
      <div className={css.header}>
        <MemoryIcon />
        <h1 className={css.heading}>
          Habilidades y Tecnologías
        </h1>
        <p className={css.text}>
        Aqui estan algunas de las tecnologías con las que estoy trabajando actualmente
        </p>
      </div>
      <div className={css.timeline}>
        <Timeline/>
      </div>
      

    </section>
  );
}
