import React from "react";
import Header from "./components/Header/Header";
import Endpoint from "./components/Endpoint/Endpoint"
import { Box } from "@material-ui/core";
import useStyles from "./App.styles";
/**
 * COLOR PALETTE:
 * #162447, #1f4068, #1b1b2f, #e43f5a
 */

function App() {
  const classes = useStyles();
  return (
    <Box className={classes.body}>
      <Header />
      <Box
        width="100%"
        height="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Endpoint />
      </Box>
    </Box>
  );
}

export default App;
