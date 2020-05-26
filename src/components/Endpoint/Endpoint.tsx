import React, { useState } from "react";
import ReactJson from "react-json-view";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { CheckCircle } from "@material-ui/icons";
import axios from "axios";
import useStyles from "./Endpoint.styles";
import RequestTypes from "./RequestTypes";

export default function Endpoint() {
  const classes = useStyles();
  const [endpoint, setEndpoint] = useState<string>(
    "https://jsonplaceholder.typicode.com/posts"
  );
  const [type, setType] = useState<string>("GET");
  // const [payload, setPayload] = useState<Object>({});
  const [responseJSON, setResponseJSON] = useState<any>(null);

  const makeApiCall = async () => {
    switch (type) {
      case "GET":
        const response = await axios.get(endpoint);
        console.log(response);
        setResponseJSON(response);
        break;
      default:
        console.log(type);
        break;
    }
  };

  const changeType = (event: React.ChangeEvent<HTMLInputElement>) => {
    setType((event.target as HTMLInputElement).value);
  };

  return (
    <Grid
      container
      className={classes.grid}
      alignItems="center"
      justify="center"
    >
      <Grid item xs={12} className={classes.gridItem}>
        <Box display="flex" flexDirection="column" alignItems="center">
          <RequestTypes
            types={["GET", "POST", "PUT", "DEL"]}
            type={type}
            changeType={changeType}
          />

          <Paper className={classes.root}>
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
        </Box>
      </Grid>
      <Grid item xs={12} className={classes.gridItem}>
        <Box
          width="80vw"
          maxHeight="500px"
          overflow="auto"
          mb={4}
          borderRadius="12px"
        >
          {responseJSON ? (
            <ReactJson
              src={responseJSON}
              style={{ borderRadius: "12px", padding: "8px", width: "100%" }}
              theme="harmonic"
              collapsed={1}
            />
          ) : null}
        </Box>
      </Grid>
    </Grid>
  );
}
