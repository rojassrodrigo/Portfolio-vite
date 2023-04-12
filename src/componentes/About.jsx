import React from 'react';
import css from '../css/About.module.css';
import perfil from '../images/perfil1.jpg';

export default function About() {
  return (
    <section id="about">
      <div className={css.card}>
        <div className={css.cardContent}>
          <h1>
            Hola, soy Rodrigo
            <br/>Full Stack Developer
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
            laborum quasi, incidunt dolore iste nostrum cupiditate voluptas?
            Laborum, voluptas natus?
          </p>
          <div className={css.ctaContainer}>
            <a href="#contact">Trabaja conmigo</a>
            <a href="#projects">Mira mis trabajos anteriores</a>
          </div>
        </div>
        <div className={css.cardImage}>
          <img alt="hero" src={perfil} className={css.image} />
        </div>
      </div>
    </section>
  );
}
