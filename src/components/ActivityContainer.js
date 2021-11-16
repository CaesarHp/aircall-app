import React from "react";
import { useSelector } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";

import ActivityCard from "./ActivityCard";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "1rem",
  },
}));

function ActivityContainer() {
  const classes = useStyles();

  const cardInfo = useSelector((state) => state.data.dummyData);

  return (
    <>
      <div className={classes.root}></div>
    </>
  );
}

export default ActivityContainer;
