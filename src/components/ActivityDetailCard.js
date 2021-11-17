import React from "react";

import moment from "moment";

import Grid from "@mui/material/Grid";
import { Avatar } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles((theme) => ({
  root: {
    marginBottom: "5rem",
  },
  userInfoContainer: {
    display: "flex",
    margin: "1rem 2rem 2rem 2rem",
  },
  avatarContainer: {
    display: "flex",
    justifyContent: "center",
    marginRight: "1rem",
  },
  avatar: {
    width: "3.5rem",
    height: "3.5rem",
  },
  calleeContainer: {
    display: "flex",
    flexDirection: "column",
  },
  title: {
    fontWeight: 400,
  },
  contentContainer: {
    display: "flex",
    flexDirection: "column",
    padding: "0.8rem 1rem",
    border: "1px solid #bdbdbd",
    borderRadius: "10px",
    margin: "0 2rem 1rem 2rem",
  },
}));

function ActivityDetailCard() {
  const classes = useStyle();

  const date = moment("2018-04-19T09:38:41.000Z").format(
    "MMMM DD YYYY hh:mm:ss a"
  );
  const time = moment("2018-04-19T09:38:41.000Z").format("hh:mm a");

  return (
    <>
      <div className={classes.root}>
        <Grid conatiner>
          <Grid item xs={12}>
            <div className={classes.userInfoContainer}>
              <div className={classes.avatarContainer}>
                <Avatar className={classes.avatar}>P</Avatar>
              </div>
              <div className={classes.calleeContainer}>
                <Typography
                  variant="h6"
                  style={{ color: "red" }}
                  className={classes.title}
                >
                  Pierre-Baptiste Béchu
                </Typography>
                <Typography variant="body2">Missed Outbound</Typography>
              </div>
            </div>
          </Grid>

          <Grid item xs={12}>
            <div className={classes.contentContainer}>
              <Typography variant="body1">To: 06 46 62 12 33</Typography>
              <Typography variant="body1">Via: NYC Office</Typography>
            </div>
          </Grid>

          <Grid item xs={12}>
            <div className={classes.contentContainer}>
              <Typography variant="body1">{date}</Typography>
              <Typography variant="body1">Duration: 60s</Typography>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default ActivityDetailCard;
