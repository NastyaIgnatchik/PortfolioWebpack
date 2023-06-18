import React from "react";

import { dataPortfolio } from "../../../data/portfolioData";
import style from "./portfolioStyle.module.less";

interface IData {
  id: number;
  image: string;
  title: string;
  github: string;
  demo: string;
}

const Portfolio = () => {
  return (
    <div className={style.container}>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className={style.containerForArticle}>
        {dataPortfolio.map((element: IData) => {
          return (
            <article className={style.article} key={element.id}>
              <img
                className={style.img}
                src={element.image}
                alt="portfolioCards"
              />

              <div className={style.portfolioInfo}>
                <h3>{element.title}</h3>
                <div className={style.portfolioInfoButton}>
                  <a
                    className={
                      element.github
                        ? `${style.button}`
                        : `${style.disabledButton}`
                    }
                    href={element?.github}
                  >
                    Github
                  </a>
                  <a
                    className={
                      element.demo
                        ? `${style.button}`
                        : `${style.disabledButton}`
                    }
                    href={element?.demo}
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
