import React, { useState } from "react";
import ReactJson from "react-json-view";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import MenuIcon from "@material-ui/icons/Menu";
import { CheckCircle } from "@material-ui/icons";
import axios from "axios";
import useStyles from "./Endpoint.styles";

export default function Endpoint() {
  const classes = useStyles();
  const [endpoint, setEndpoint] = useState<string>("");
  const [type, setType] = useState<string>("GET");
  const [payload, setPayload] = useState<Object>({});
  const [responseJSON, setResponseJSON] = useState<any>(null);

  const makeApiCall = async () => {
    switch (type) {
      case "GET":
        const response = await axios.get(endpoint);
        console.log(response)
        setResponseJSON(response);
        break;
    }
  };

  return (
    <Grid container className={classes.grid} alignItems="center" justify="center">
      <Grid item xs={12} className={classes.gridItem}>
        <Paper className={classes.root}>
          <IconButton className={classes.iconButton} aria-label="menu">
            <MenuIcon />
          </IconButton>
          <InputBase
            className={classes.input}
            placeholder="Enter Endpoint"
            inputProps={{ "aria-label": "enter endpoint" }}
            onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
              setEndpoint(e.target.value)
            }
            value={endpoint}
          />
          <IconButton
            type="submit"
            className={classes.iconButton}
            aria-label="search"
            onClick={(): any => makeApiCall()}
          >
            <CheckCircle />
          </IconButton>
        </Paper>
      </Grid>
      <Grid item xs={12} className={classes.gridItem}>
        <Box className={classes.jsonBox}>
          {responseJSON ? <ReactJson src={responseJSON} collapsed={1} /> : null}
        </Box>
      </Grid>
    </Grid>
  );
}
