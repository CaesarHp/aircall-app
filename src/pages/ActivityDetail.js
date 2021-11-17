import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router";

import ActivityDetailContainer from "../components/ActivityDetailContainer";

function ActivityDetail() {
  const params = useParams();
  const history = useHistory();

  const allActivity = useSelector((state) => state.data.activityData);

  const selectedActivity = allActivity.find(
    (item) => item.id === Number(params.activityId)
  );

  if (!selectedActivity) {
    history.push("/notfound");
    return null;
  }

  return (
    <>
      <ActivityDetailContainer
        id={selectedActivity.id}
        createdAt={selectedActivity.created_at}
        direction={selectedActivity.direction}
        from={selectedActivity.from}
        to={selectedActivity.to}
        via={selectedActivity.via}
        duration={selectedActivity.duration}
        archive={selectedActivity.is_archived}
        callType={selectedActivity.call_type}
      />
    </>
  );
}

export default ActivityDetail;
