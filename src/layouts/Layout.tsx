import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { NavLink, Outlet } from "react-router-dom";

import Footer from "../components/footer/Footer";
import style from "./layoutStyle.module.less";

const Layout = () => {
  return (
    <div className={style.mainContainer}>
      <header>
        <AiOutlineMenu className={style.menu} />
        <NavLink
          className={({ isActive }) => (isActive ? `${style.active}` : "")}
          to="about"
        >
          about
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? `${style.active}` : "")}
          to="contacts"
        >
          contacts
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? `${style.active}` : "")}
          to="portfolio"
        >
          portfolio
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? `${style.active}` : "")}
          to="services"
        >
          services
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? `${style.active}` : "")}
          to="skills"
        >
          skills
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? `${style.active}` : "")}
          to="/"
        >
          home
        </NavLink>
      </header>
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
