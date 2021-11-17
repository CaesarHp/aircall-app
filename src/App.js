import React, { useEffect } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Header from "./components/Header";
import NavTabs from "./components/NavTabs";
import Activity from "./pages/Activity";
import Archive from "./pages/Archive";
import ActivityDetail from "./pages/ActivityDetail";

function App() {
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
              <Route path="/archive" exact>
                <Archive />
              </Route>
              <Route path="/activity-detail" exact>
                <ActivityDetail />
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
