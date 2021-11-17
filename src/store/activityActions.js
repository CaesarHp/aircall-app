import { dataActions } from "./data-slice";

export const fetchActivityData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://aircall-job.herokuapp.com/activities"
      );

      if (!response.ok) {
        throw new Error("Can not fetch activity data");
      }

      const data = await response.json();

      return data;
    };

    try {
      const activityData = await fetchData();
      dispatch(dataActions.storeData(activityData));
    } catch (error) {
      console.error(error);
    }
  };
};
