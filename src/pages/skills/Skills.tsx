import React from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";

import { experienceFrontend } from "../../../data/experienseData";
import { experienceBackend } from "../../../data/experienseData";
import style from "./skillsStyle.module.less";

const Experience = () => {
  interface IExperience {
    id: number;
    skill: string;
    degree: string;
  }
  return (
    <div className={style.container}>
      <h5>That Skills I Have</h5>
      <h2>My Experience</h2>

      <div className={style.cardsContainer}>
        <div className={style.experienceCard}>
          <h3 className={style.skillsTitle}>Frontend Development</h3>

          <div className={style.skillsList}>
            {experienceFrontend.map((element: IExperience) => {
              return (
                <article className={style.article} key={element.id}>
                  <AiOutlineCheckCircle className={style.icons} />
                  <div>
                    <h4>{element.skill}</h4>
                    <small>{element.degree}</small>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <div className={style.experienceCard}>
          <h3 className={style.skillsTitle}>Backend Development</h3>
          <div className={style.skillsList}>
            {experienceBackend.map((element: IExperience) => {
              return (
                <article className={style.article} key={element.id}>
                  <AiOutlineCheckCircle className={style.icons} />
                  <div>
                    <h4>{element.skill}</h4>
                    <small>{element.degree}</small>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
