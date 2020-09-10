import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import "./App.css";

import NavBar from "./components/NavBar";
import ContactPage from "./components/Pages/ContactPage";
import AboutPage from "./components/Pages/AboutPage";
import ProjectsPage from "./components/Pages/ProjectsPage";
import Footer from "./components/Footer";
import theme from "./themes/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <AboutPage />
      <ProjectsPage />
      <ContactPage />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
