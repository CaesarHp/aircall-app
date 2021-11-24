import React, { useState, useEffect, useCallback } from "react";

import { useParams } from "react-router-dom";

import ActivityDetailContainer from "../components/ActivityDetailContainer";

const getDataApi = process.env.AIR_CALL_GET_DATA_API;

function ActivityDetail() {
  const params = useParams();

  const [detailData, setDetailData] = useState({});

  const callbackFetch = useCallback(() => {
    const fetchDataById = async () => {
      try {
        const response = await fetch(`${getDataApi}${params.activityId}`);

        if (!response.ok) {
          throw new Error("Can not fetch data");
        }

        const data = await response.json();

        setDetailData(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchDataById();
  }, [params.activityId]);

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
    }
  };

  useEffect(() => {
    callbackFetch();
  }, [callbackFetch]);

  if (!detailData.id) {
    return <div style={{ textAlign: "center" }}> Page not found</div>;
  }

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
        postArchive={postArchive}
        callbackFetch={callbackFetch}
      />
    </>
  );
}

export default ActivityDetail;
