import React from "react";

import Grid from "@mui/material/Grid";
import { Typography } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import ArchiveIcon from "@mui/icons-material/Archive";

import ActivityDetailCard from "./ActivityDetailCard";

const useStyle = makeStyles((theme) => ({
  btnContainer: {
    display: "flex",
    justifyContent: "space-between",
    margin: "2rem",
  },
}));

function ActivityDetailContainer() {
  const classes = useStyle();

  return (
    <>
      <Grid conatiner>
        <Grid item xs={12}>
          <ActivityDetailCard />
        </Grid>
        <Grid item xs={12}>
          <div className={classes.btnContainer}>
            {/* <IconButton>
              <ArrowBackIosNewIcon />
            </IconButton>

            <IconButton>
              <ArchiveIcon />
            </IconButton> */}
            <Button
              className={classes.btn}
              startIcon={<KeyboardArrowLeftIcon />}
            >
              Back
            </Button>
            <Button className={classes.btn} startIcon={<ArchiveIcon />}>
              Archive
            </Button>
          </div>
        </Grid>
      </Grid>
    </>
  );
}

export default ActivityDetailContainer;
