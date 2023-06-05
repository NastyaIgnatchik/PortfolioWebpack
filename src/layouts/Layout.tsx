import React from "react";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <header style={{ display: "flex", flexDirection: "row", gap: "40px" }}>
        <Link to="about">about</Link>
        <Link to="contacts">contacts</Link>
        <Link to="portfolio">portfolio</Link>
        <Link to="services">services</Link>
        <Link to="skills">skills</Link>
        <Link to="/">titlePage</Link>
      </header>
      <main>
        <Outlet />
        layout
      </main>
      <footer>footer</footer>
    </div>
  );
};

export default Layout;
