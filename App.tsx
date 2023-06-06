import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import Layout from "./src/layouts/Layout";
import About from "./src/pages/about/About";
import Contacts from "./src/pages/contacts/Contacts";
import Portfolio from "./src/pages/portfolio/Portfolio";
import Services from "./src/pages/services/Services";
import Skills from "./src/pages/skills/Skills";
import TitlePage from "./src/pages/titlePage/TitlePage";

const App = () => {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Layout />}>
              <Route  index element={<TitlePage />} />
                  <Route path="about" element={<About />} />
                  <Route path="skills" element={<Skills />} />
                  <Route path="services" element={<Services />} />
                  <Route path="portfolio" element={<Portfolio />} />
                  <Route path="contacts" element={<Contacts />} />
              </Route>
          </Routes>
      </BrowserRouter>
  );
};
export default App;
