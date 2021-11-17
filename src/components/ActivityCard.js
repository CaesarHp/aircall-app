import React from "react";
import { useHistory } from "react-router";

import Grid from "@mui/material/Grid";
import { Paper } from "@material-ui/core";
import { Typography } from "@material-ui/core";

import { Card } from "@material-ui/core";
import { CardActionArea } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import moment from "moment";

import PhoneCallbackIcon from "@mui/icons-material/PhoneCallback";

const useStyles = makeStyles((theme) => ({
  root: {
    border: "1px solid #bdbdbd",
    borderRadius: "10px",
    padding: "1rem 0.5rem",
    marginBottom: "1rem",
  },
  dateContainer: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "0.5rem",
  },
  iconContainer: {
    display: "flex",
    justifyContent: "center",
  },
  contentContainer: {
    display: "flex",
    flexDirection: "column",
  },
  timeContainer: {
    display: "flex",
    justifyContent: "flex-end",
  },
  title: {
    fontWeight: 600,
  },
}));

function ActivityCard() {
  const classes = useStyles();

  const history = useHistory();

  const date = moment("2018-04-19T09:38:41.000Z").format("MMMM DD YYYY");
  const time = moment("2018-04-19T09:38:41.000Z").format("hh:mm a");

  const detailPageHandler = () => {
    history.push("./activity-detail");
  };

  return (
    <>
      <div>
        <div className={classes.dateContainer}>
          <Typography variant="body2" className={classes.title}>
            {date}
          </Typography>
        </div>
        <Card elevation={0}>
          <CardActionArea onClick={detailPageHandler} className={classes.root}>
            <Grid container alignItems="center">
              <Grid item xs={2}>
                <div className={classes.iconContainer}>
                  <PhoneCallbackIcon fontSize="small" />
                </div>
              </Grid>
              <Grid item xs={7}>
                <div className={classes.contentContainer}>
                  <Typography variant="body2" className={classes.title}>
                    Pierre-Baptiste Béchu
                  </Typography>
                  <Typography variant="body2">06 46 62 12 33</Typography>
                </div>
              </Grid>
              <Grid item xs={3}>
                <div className={classes.timeContainer}>
                  <Typography variant="body2">{time}</Typography>
                </div>
              </Grid>
            </Grid>
          </CardActionArea>
        </Card>
      </div>
    </>
  );
}

export default ActivityCard;
