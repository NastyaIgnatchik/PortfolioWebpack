import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

import style from "./headerSocials.module.less";

const HeaderSocials = () => {
  return (
    <div className={style.headerSocials}>
      <a href="https://www.linkedin.com/in/nastya-ignatchik-7bb004259/">
        <BsLinkedin className={style.icons} />
      </a>
      <a href="https://github.com/NastyaIgnatchik">
        <FaGithub className={style.icons} />
      </a>
    </div>
  );
};

export default HeaderSocials;
