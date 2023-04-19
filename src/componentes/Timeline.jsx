import React from "react";
import css from "../css/Timeline.module.css"
import iconjs from "../images/iconjs.png"
import iconreact from "../images/iconreact.png"
import redux from "../images/redux.png"
import node from "../images/node1.png"
import expres from "../images/express.png"
import posgre from "../images/postgres.png"
import mongo from "../images/mongo.png"
import scrum from "../images/scrum.png"
import types from "../images/type.png"
import jira from "../images/jira.png"

const Timeline = () => {
  return (
    <div className={css.container}>
      <div className={css.item}>
        <div className={css.icon}>
          <img src={iconjs} alt="icono del evento 1" />
        </div>
        <div className={css.content}>
          <h3>Javascript</h3>
          <p>Desde 2021 - a la Actualidad</p>
        </div>
      </div>
      <div className={css.item}>
        <div className={css.icon}>
          <img src={types} alt="icono del evento 1" />
        </div>
        <div className={css.content}>
          <h3>Typescript</h3>
          <p>Desde 2022 - a la Actualidad</p>
        </div>
      </div>
      <div className={css.item}>
        <div className={css.icon}>
          <img src={iconreact} alt="icono del evento 2" />
        </div>
        <div className={css.content}>
          <h3>React</h3>
          <p>Desde 2022 - a la Actualidad</p>
        </div>
      </div>
      <div className={css.item}>
        <div className={css.icon}>
          <img src={redux} alt="icono del evento 3" />
        </div>
        <div className={css.content}>
          <h3>Redux</h3>
          <p>Desde 2022 - a la Actualidad</p>
        </div>
      </div>
      <div className={css.item}>
        <div className={css.icon}>
          <img src={node} alt="icono del evento 3" />
        </div>
        <div className={css.content}>
          <h3>Node.js</h3>
          <p>Desde 2022 - a la Actualidad</p>
        </div>
      </div>
      <div className={css.item}>
        <div className={css.icon}>
          <img src={expres} alt="icono del evento 3" />
        </div>
        <div className={css.content}>
          <h3>Express.js</h3>
          <p>Desde 2022 - a la Actualidad</p>
        </div>
      </div>
      <div className={css.item}>
        <div className={css.icon}>
          <img src={posgre} alt="icono del evento 3" />
        </div>
        <div className={css.content}>
          <h3>PostgreSQL</h3>
          <p>Desde 2022 - a la Actualidad</p>
        </div>
      </div>
      <div className={css.item}>
        <div className={css.icon}>
          <img src={mongo} alt="icono del evento 3" />
        </div>
        <div className={css.content}>
          <h3>MongoDB</h3>
          <p>Desde 2022 - a la Actualidad</p>
        </div>
      </div>
      <div className={css.item}>
        <div className={css.icon}>
          <img src={scrum} alt="icono del evento 3" />
        </div>
        <div className={css.content}>
          <h3>Scrum Master</h3>
          <p>Desde 2022 - a la Actualidad</p>
        </div>
      </div>
      <div className={css.item}>
        <div className={css.icon}>
          <img src={jira} alt="icono del evento 3" />
        </div>
        <div className={css.content}>
          <h3>Jira</h3>
          <p>Desde 2022 - a la Actualidad</p>
        </div>
      </div>
    </div>
  );
};

export default Timeline;

