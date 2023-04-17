import React from 'react';
import css from '../css/About.module.css';
import perfil from '../images/perfil2.jpg';
import cv from '../images/RodrigoRojas.jpg'
import { TypeAnimation } from 'react-type-animation';

export default function About() {
  return (
    <section id="about">
      <div className={css.card}>
        <div className={css.cardContent}>
          <TypeAnimation
            sequence={[
              'Rodrigo Victor Rojas', // Types 'Hola, soy Rodrigo'
              1000, // Waits 1s
              'Full Stack Developer',
              1000,
              () => {
                console.log('Sequence completed');
              },
            ]}
            speed={145}
            style={{
              fontFamily: 'Roboto, sans-serif',
              fontSize: '2.7rem',
              marginBottom: '10px',
              lineHeight: '1.5',
              fontWeight: 'bold',
              display: 'block',
              textShadow: '2px 2px #529',
            }}
            repeat={Infinity}
          />
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
        <div className={css.cardImage} >
          <img alt="hero" src={perfil} />
        </div>
      </div>
    </section>
  );
}
