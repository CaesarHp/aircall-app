import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import ActivityDetailContainer from "../components/ActivityDetailContainer";

function ActivityDetail() {
  const params = useParams();

  const [detailData, setDetailData] = useState({});

  const fetchDataById = async () => {
    try {
      const response = await fetch(
        `https://aircall-job.herokuapp.com/activities/${params.activityId}`
      );

      if (!response.ok) {
        throw new Error("Can not fetch data");
      }

      const data = await response.json();

      setDetailData(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchDataById();
  }, []);

  return (
    <>
      <ActivityDetailContainer
        id={detailData.id}
        createdAt={detailData.created_at}
        direction={detailData.direction}
        from={detailData.from}
        to={detailData.to}
        via={detailData.via}
        duration={detailData.duration}
        archive={detailData.is_archived}
        callType={detailData.call_type}
      />
    </>
  );
}

export default ActivityDetail;
