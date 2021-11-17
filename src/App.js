import React, { useEffect } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import { useDispatch } from "react-redux";
import { fetchActivityData } from "./store/activityActions";

import Header from "./components/Header";
import NavTabs from "./components/NavTabs";
import Activity from "./pages/Activity";
import Archive from "./pages/Archive";
import ActivityDetail from "./pages/ActivityDetail";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchActivityData());
  }, [dispatch]);

  return (
    <>
      <BrowserRouter>
        <div className="container">
          <Header />
          <NavTabs />
          <div className="container-view">
            <Switch>
              <Route path="/" exact>
                <Redirect to="/activity" />
              </Route>
              <Route path="/activity" exact>
                <Activity />
              </Route>
              <Route path="/activity-detail/:activityId" exact>
                <ActivityDetail />
              </Route>
              <Route path="/archive" exact>
                <Archive />
              </Route>
              <Route path="/notfound" exact>
                Page not found
              </Route>
              <Route path="*">Page not found</Route>
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
