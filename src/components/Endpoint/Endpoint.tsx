import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { CheckCircle } from "@material-ui/icons";
import axios from "axios";
import useStyles from "./Endpoint.styles";

export default function Endpoint() {
  const classes = useStyles();
  const [endpoint, setEndpoint] = useState<string>("");
  const [type, setType] = useState<string>("GET");
  const [payload, setPayload] = useState<Object>({});

  const makeApiCall = async () => {
    switch (type) {
      case "GET":
        const response = await axios.get(endpoint);
        console.log(response);
        break;
    }
    console.log(endpoint);
  };

  return (
    <Paper component="form" className={classes.root}>
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
        onClick={() => makeApiCall()}
      >
        <CheckCircle />
      </IconButton>
    </Paper>
  );
}
