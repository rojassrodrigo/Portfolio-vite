import React from 'react';
import css from '../css/About.module.css';
import perfil from '../images/perfil1.jpg';
import cv from '../images/RodrigoRojas.jpg'

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
          Soy un profesional con conocimientos en Backend y Frontend, 
          lo que me ha permitido destacar en la resolución de conflictos y la organización.
           Siempre estoy en constante búsqueda 
          de aprendizaje y mejora. Agradezco su interés en mi perfil y espero poder
           colaborar juntos en el futuro.
          </p>
          <div className={css.ctaContainer}>
            <a className={css.button} href="#contact">Trabaja conmigo</a>
            <a className={css.button} href={cv} download>Descargar Curriculum</a>
          </div>
        </div>
        <div className={css.cardImage}>
          <img alt="hero" src={perfil} className={css.image} />
        </div>
      </div>
    </section>
  );
}
