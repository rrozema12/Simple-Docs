import React from "react";
import Header from "./components/Header/Header";
import Endpoint from "./components/Endpoint/Endpoint";
import Login from "./containers/Login/Login";
import { Box } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";
import useStyles from "./App.styles";
/**
 * COLOR PALETTE:
 * #162447, #1f4068, #1b1b2f, #e43f5a
 */

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
});

console.log(client)

function App() {
  const classes = useStyles();
  return (
    <ApolloProvider client={client}>
      <Box className={classes.body}>
        <Router>
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/">
              <Header />
              <Endpoint />
            </Route>
          </Switch>
        </Router>
      </Box>
    </ApolloProvider>
  );
}

export default App;
