import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { HashRouter, Switch, Route } from "react-router-dom";
import "./App.css";

import AcademicProjectsPage from "./components/Pages/AcademicProjectsPage/AcademicProjectsPage";
import NavBar from "./components/NavBar";
import FrontPage from "./components/Pages/FrontPage";
import AboutPage from "./components/Pages/AboutPage";
import ContactPage from "./components/Pages/ContactPage";
import ProjectsPage from "./components/Pages/ProjectsPage";
import Footer from "./components/Footer";
import theme from "./theme/theme";

const website = (
  <div>
    <NavBar />
    <FrontPage />
    <AboutPage />
    <ProjectsPage />
    <ContactPage />
    <Footer />
  </div>
);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <HashRouter basename="/">
        <Switch>
          <Route
            exact
            path="/academic-projects"
            render={() => <AcademicProjectsPage />}
          />
          <Route path="/" render={() => website} />
        </Switch>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
