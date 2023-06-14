import React from "react";
import { AiOutlineFolderOpen } from "react-icons/ai";
import { FiUsers } from "react-icons/fi";
import { RiAwardLine } from "react-icons/ri";
import {Link} from "react-router-dom";

import about from "../../assets/images/about.jpg";
import style from "./aboutStyle.module.less";

const About = () => {
  return (
    <div className={style.container}>
      <h5>Get to know</h5>
      <h2 className={style.pageName}>About Me</h2>
      <div className={style.containerForPhotoArticlesText}>
        <div className={style.photoBackground}>
          <img src={about} className={style.aboutImage} alt='about'/>
        </div>

        <div className={style.articlesAndText}>
          <article className={style.article}>
            <RiAwardLine className={style.aboutIcons} />
            <h2>Experience</h2>
            <small>No Experience</small>
          </article>
          <article className={style.article}>
            <FiUsers className={style.aboutIcons} />
            <h2>Clients</h2>
            <small>No Clients</small>
          </article>
          <article className={style.article}>
            <AiOutlineFolderOpen className={style.aboutIcons} />
            <h2>Projects</h2>
            <small>No Projects</small>
          </article>
          <div className={style.textAndButton}>
            <p className="mx-0.5 my-2.5 text-color-light leading-6 ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Consequuntur cum, dicta eius nobis placeat praesentium quo! Ab
              accusamus consectetur, dolore, eaque id ipsum molestiae nemo quae
              quidem quo, sequi vel?
            </p>
            <Link to="/contacts" className={style.button}>
              Let's Talk
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
