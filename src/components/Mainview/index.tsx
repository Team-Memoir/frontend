import React from "react";
import { Route, Switch } from "react-router";
import LandingPage from "pages/LandingPage";
import RegisterPage from "pages/RegisterPage";
import LoginPage from "pages/LoginPage";
import CreateTopicPage from "pages/CreateTopicPage";
import PrivateRoute from "components/PrivateRoute";

const MainView = () => {
  return (
    <main className="page-view" style={{ flexGrow: 10 }}>
      <Switch>
        <Route path="/" component={LandingPage} exact />
        <Route path="/register" component={RegisterPage} />
        <Route path="/login" component={LoginPage} />
        <PrivateRoute path="/create-topic" component={CreateTopicPage} />
      </Switch>
    </main>
  );
};

export default MainView;
