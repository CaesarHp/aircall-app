import React from "react";
import { useHistory } from "react-router";

import Grid from "@mui/material/Grid";
import { Typography } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import moment from "moment";

import PhoneCallbackIcon from "@mui/icons-material/PhoneCallback";
import ArchiveIcon from "@mui/icons-material/Archive";

const useStyles = makeStyles((theme) => ({
  root: {
    border: "1px solid #bdbdbd",
    borderRadius: "10px",
    padding: "1rem 0.5rem",
    marginBottom: "1rem",
    cursor: "pointer",
  },
  dateContainer: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "0.5rem",
  },
  iconContainer: {
    display: "flex",
    justifyContent: "center",
    zIndex: 2000,
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

function ActivityCard({
  id,
  createdAt,
  direction,
  from,
  to,
  via,
  duration,
  archive,
  callType,
  postArchive,
}) {
  const classes = useStyles();

  const history = useHistory();

  const date = moment(createdAt).format("MMMM DD YYYY");
  const time = moment(createdAt).format("hh:mm a");

  const detailPageHandler = () => {
    history.push(`/activity-detail/${id}`);
  };

  const archiveHandler = () => {
    postArchive(id, archive);
  };

  return (
    <>
      <div>
        <div className={classes.dateContainer}>
          <Typography variant="body2" className={classes.title}>
            {date}
          </Typography>
        </div>

        <Paper elevation={0} className={classes.root}>
          <Grid container alignItems="center">
            <Grid item xs={10}>
              <Grid container alignItems="center" onClick={detailPageHandler}>
                <Grid item xs={2}>
                  <div className={classes.iconContainer}>
                    <PhoneCallbackIcon fontSize="small" />
                  </div>
                </Grid>
                <Grid item xs={8}>
                  <div className={classes.contentContainer}>
                    <Typography variant="body2" className={classes.title}>
                      {from ? from : "Unknown"}
                    </Typography>
                    <Typography variant="body2">
                      {to ? to : "Unknown"}
                    </Typography>
                  </div>
                </Grid>
                <Grid item xs={2}>
                  <div className={classes.timeContainer}>
                    <Typography variant="body2">{time}</Typography>
                  </div>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={2}>
              <div onClick={archiveHandler} className={classes.iconContainer}>
                <IconButton>
                  <ArchiveIcon />
                </IconButton>
              </div>
            </Grid>
          </Grid>
        </Paper>
      </div>
    </>
  );
}

export default ActivityCard;
