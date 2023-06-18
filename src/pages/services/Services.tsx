import React from "react";
import { BsCheck2 } from "react-icons/bs";

import style from "./servicesStyle.module.less";

interface IServices {
  service: string;
}

const arrayForCount = [1, 2, 3, 4, 5, 6];

const services = [
  {
    service: "UI/UX Design",
  },
  {
    service: "Web Development",
  },
  {
    service: "Content Creation",
  },
];

const Services = () => {
  return (
    <div className={style.container}>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className={style.containerForArticles}>
        {services.map((element: IServices) => {
          return (
            <article className={style.article}>
              <div className={style.articleHead}>
                <h3>{element.service}</h3>
              </div>
              <ul>
                {arrayForCount.map((num: number) => {
                  return (
                    <li key={num}>
                      <BsCheck2 className={style.items} />
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit.{" "}
                      </p>
                    </li>
                  );
                })}
              </ul>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
