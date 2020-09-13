import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import "./App.css";

import NavBar from "./components/NavBar";
import FrontPage from "./components/Pages/FrontPage";
import AboutPage from "./components/Pages/AboutPage";
import ContactPage from "./components/Pages/ContactPage";
import ProjectsPage from "./components/Pages/ProjectsPage";
import Footer from "./components/Footer";
import theme from "./theme/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <FrontPage />
      <AboutPage />
      <ProjectsPage />
      <ContactPage />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
