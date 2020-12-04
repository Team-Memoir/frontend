import React from "react";
import { connect } from "react-redux";
import { Redirect, Route, RouteProps, useLocation } from "react-router-dom";

interface PrivateRouteProps extends RouteProps {
  user?: any;
}

const PrivateRoute = (props: PrivateRouteProps) => {
  // do something with authentication
  const { user } = props;
  const location = useLocation();

  if (!user.email) {
    return <Redirect to="/login" from={location.pathname} />;
  }

  return <Route {...props} />;
};

const mapState = (state: any) => ({ user: state.user });

export default connect(mapState, null)(PrivateRoute);
