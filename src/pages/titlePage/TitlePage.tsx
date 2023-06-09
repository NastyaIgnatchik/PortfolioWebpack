import React from "react";

import me from "../../assets/images/ME.png";
import CTA from "../../components/CTA/CTA";
import HeaderSocials from "../../components/headerSocials/HeaderSocials";
import style from "./titlePage.module.less";

const TitlePage = () => {
  return (
    <div className={style.container}>
      <div className={style.titles}>
        <h5>Hello I'm </h5>
        <h1>Nastya Ignatchik</h1>
        <h5>Frontend Developer</h5>
        <CTA />
        <HeaderSocials />
      </div>
      <div className={style.photoContainer}>
        <div className={style.imageBackground}>
          <img src={me} alt="Picture of the author" />
        </div>
      </div>
    </div>
  );
};

export default TitlePage;
