import React, { useState, useEffect } from "react";

import { Typography } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import ActivityCard from "./ActivityCard";
import RefreshIcon from "@mui/icons-material/Refresh";

const getDataApi = process.env.AIR_CALL_GET_DATA_API;
const resetDataApi = process.env.AIR_CALL_RESET_DATA_API;

const useStyles = makeStyles((theme) => ({
  noItem: {
    textAlign: "center",
    padding: "1rem 0",
  },
  btnContainer: {
    display: "flex",
    justifyContent: "center",
    margin: " 2rem 3rem",
  },
}));

function ActivityContainer() {
  const classes = useStyles();

  useEffect(() => {
    fetchActivity();
  }, []);

  const [cardData, setCardData] = useState([]);

  const fetchActivity = async () => {
    try {
      const response = await fetch(getDataApi);

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
      const response = await fetch(`${getDataApi}${id}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ is_archived: !archive }),
      });

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
      const response = await fetch(resetDataApi);

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
        {filteredCardInfo.length > 0 ? (
          filteredCardInfo.map((item) => (
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
          ))
        ) : (
          <Typography variant="body2" className={classes.noItem}>
            No activity
          </Typography>
        )}
        <div className={classes.btnContainer}>
          <Button
            variant="outlined"
            disableElevation
            onClick={resetHandler}
            className={classes.btn}
            startIcon={<RefreshIcon />}
          >
            Refresh
          </Button>
        </div>
      </div>
    </>
  );
}

export default ActivityContainer;
