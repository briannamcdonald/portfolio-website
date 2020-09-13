import theme from "./theme";

export const columnDiv = {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

export const rowDiv = {
  width: "100%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
};

export const headerText = {
  ...theme.typography.button,
  fontSize: "1.5rem",
  fontWeight: "bold",
  textShadow: "0.12rem 0.12rem #b2dfdb",
};

export const divider = {
  backgroundColor: "black",
  width: "18rem",
  margin: "1rem",
  marginTop: "0",
  height: "0.12rem",
};
