import React from "react";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF, FaTelegramPlane } from "react-icons/fa";

import style from "./footer.module.less";

const Footer = () => {
  return (
    <div className={style.containerFooter}>
      <div className={style.linkContainer}>
        <a>
          <FaTelegramPlane />
        </a>
        <a>
          <FaFacebookF />
        </a>
        <a>
          <BsInstagram />
        </a>
      </div>
      <div>
        <small>&copy;Made by Nastya </small>
      </div>
    </div>
  );
};

export default Footer;
