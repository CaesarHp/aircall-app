import React from "react";
import { useSelector } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";

import ActivityCard from "./ActivityCard";

const useStyles = makeStyles((theme) => ({
  root: {
    //padding: "0.5rem",
  },
}));

function ActivityContainer() {
  const classes = useStyles();

  const cardInfo = useSelector((state) => state.data.dummyData);

  return (
    <>
      <div className={classes.root}>
        <ActivityCard />
      </div>
    </>
  );
}

export default ActivityContainer;
