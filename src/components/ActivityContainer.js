import React, { useState, useEffect } from "react";

import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import ActivityCard from "./ActivityCard";

const useStyles = makeStyles((theme) => ({
  root: {},
}));

function ActivityContainer() {
  const classes = useStyles();

  useEffect(() => {
    fetchActivity();
  }, []);

  const [cardData, setCardData] = useState([]);

  const fetchActivity = async () => {
    try {
      const response = await fetch(
        "https://aircall-job.herokuapp.com/activities"
      );

      if (!response.ok) {
        throw new Error("Can not fetch data");
      }

      const data = await response.json();

      setCardData(data);
    } catch (error) {
      console.error(error);
    }
  };

  const postArchive = async (id, archive) => {
    try {
      const response = await fetch(
        `https://aircall-job.herokuapp.com/activities/${id}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ is_archived: !archive }),
        }
      );

      if (!response.ok) {
        throw new Error("Can not fetch data");
      }
    } catch (error) {
      console.error(error);
    } finally {
      await fetchActivity();
    }
  };

  const resetActivity = async () => {
    try {
      const response = await fetch("https://aircall-job.herokuapp.com/reset");

      if (!response.ok) {
        throw new Error("Can not fetch data");
      }
    } catch (error) {
      console.error(error);
    } finally {
      await fetchActivity();
    }
  };

  const resetHandler = () => {
    resetActivity();
  };

  const filteredCardInfo = cardData.filter((item) => !item.is_archived);

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
            postArchive={postArchive}
          />
        ))}
        <div>
          <Button onClick={resetHandler} variant="contained">
            Reset
          </Button>
        </div>
      </div>
    </>
  );
}

export default ActivityContainer;
