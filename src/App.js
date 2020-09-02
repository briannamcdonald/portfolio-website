import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import "./App.css";

import NavBar from "./components/NavBar";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
    </ThemeProvider>
  );
}

export default App;
