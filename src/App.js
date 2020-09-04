import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import "./App.css";

import NavBar from "./components/NavBar";
import ContactPage from "./containers/ContactPage";
import theme from "./themes/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <ContactPage />
    </ThemeProvider>
  );
}

export default App;
