import React from "react";
import { useSelector } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";

import ActivityCard from "./ActivityCard";

const useStyles = makeStyles((theme) => ({
  root: {},
}));

function ActivityContainer() {
  const classes = useStyles();

  const cardInfo = useSelector((state) => state.data.activityData);

  const filteredCardInfo = cardInfo.filter((item) => !item.is_archived);

  // const dummy = {
  //   id: 7834,
  //   created_at: "2018-04-19T09:38:41.000Z",
  //   direction: "outbound",
  //   from: "Pierre-Baptiste Béchu",
  //   to: "06 46 62 12 33",
  //   via: "NYC Office",
  //   duration: "120",
  //   is_archived: true,
  //   call_type: "missed",
  // };

  return (
    <>
      <div className={classes.root}>
        {filteredCardInfo.map((item) => (
          <ActivityCard
            key={item.id}
            id={item.id}
            createdAt={item.created_at}
            direction={item.direction}
            from={item.from}
            to={item.to}
            via={item.via}
            duration={item.duration}
            archive={item.is_archived}
            callType={item.call_type}
          />
        ))}
      </div>
    </>
  );
}

export default ActivityContainer;
