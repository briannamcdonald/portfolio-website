import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import "./App.css";

import NavBar from "./components/NavBar";
import ContactPage from "./components/ContactPage";
import AboutPage from "./components/AboutPage";
import Footer from "./components/Footer";
import theme from "./themes/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <AboutPage />
      <ContactPage />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
