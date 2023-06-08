import React from "react";
import {Link} from "react-router-dom";

import CV from '../../assets/files/CV.pdf'
import style from './CTA.module.less'

const Cta = () => {

    return (
        <div className={style.CTAContainer}>
            <a className={style.downloadCVButton} href={CV} download>
                Downland CV
            </a>
            <Link className={style.letsTalkButton}  to="contacts">
                Let's Talk
            </Link>
        </div>
    );
};

export default Cta;