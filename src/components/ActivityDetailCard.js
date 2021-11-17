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
  avatarContainer: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "1rem",
  },
  avatar: {
    width: "3.5rem",
    height: "3.5rem",
  },
  calleeContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "2rem",
  },
  contentContainer: {
    display: "flex",
    flexDirection: "column",
    padding: "1rem",
    textAlign: "center",
    //border: "1px solid #bdbdbd",
    //borderRadius: "10px",
    //margin: "0 2rem 1rem 2rem",
  },
}));

function ActivityDetailCard({
  id,
  createdAt,
  direction,
  from,
  to,
  via,
  duration,
  archive,
  callType,
}) {
  const classes = useStyle();

  const date = moment(createdAt).format("MMMM DD YYYY hh:mm:ss a");

  return (
    <>
      <div className={classes.root}>
        <Grid container>
          <Grid item xs={12}>
            <div className={classes.avatarContainer}>
              <Avatar className={classes.avatar} />
            </div>
          </Grid>

          <Grid item xs={12}>
            <div className={classes.calleeContainer}>
              <Typography variant="h6">{from}</Typography>
              <Typography variant="body2">
                {callType} {direction}
              </Typography>
            </div>
          </Grid>

          <Grid item xs={12}>
            <div className={classes.contentContainer}>
              <Typography variant="body1">To: {to}</Typography>
              <Typography variant="body1">Via: {via}</Typography>
            </div>
          </Grid>

          <Grid item xs={12}>
            <div className={classes.contentContainer}>
              <Typography variant="body1">{date}</Typography>
              <Typography variant="body1">
                Duration: {duration / 60}min
              </Typography>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default ActivityDetailCard;
