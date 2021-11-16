import React from "react";

import Grid from "@mui/material/Grid";
import { Paper } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import moment from "moment";

import PhoneCallbackIcon from "@mui/icons-material/PhoneCallback";

const useStyles = makeStyles((theme) => ({
  root: {
    border: "1px solid #eee",
    padding: "0.5rem",
  },
  contentContainer: {
    display: "flex",
    flexDirection: "column",
  },
}));

function ActivityCard() {
  const classes = useStyles();

  const date = moment("2018-04-19T09:38:41.000Z").format("MMMM, Do YYYY");
  const time = moment("2018-04-19T09:38:41.000Z").format("hh:mm a");

  return (
    <>
      <div>
        <Typography variant="body1">{date}</Typography>
        <Paper elevation={0} className={classes.root}>
          <Grid container>
            <Grid item xs={2}>
              <div>
                <PhoneCallbackIcon />
              </div>
            </Grid>
            <Grid item xs={7}>
              <div className={classes.contentContainer}>
                <Typography variant="body1">06 46 62 12 33</Typography>
                <Typography variant="body1">Pierre-Baptiste Béchu</Typography>
              </div>
            </Grid>
            <Grid item xs={3}>
              <Typography variant="body1">{time}</Typography>
            </Grid>
          </Grid>
        </Paper>
      </div>
    </>
  );
}

export default ActivityCard;
