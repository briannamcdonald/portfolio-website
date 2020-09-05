import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import "./App.css";

import NavBar from "./components/NavBar";
import ContactPage from "./containers/ContactPage";
import AboutPage from "./containers/AboutPage";
import theme from "./themes/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <AboutPage />
      <ContactPage />
    </ThemeProvider>
  );
}

export default App;
