import React, { useContext } from "react";
import { Route } from "react-router-dom";
import { AuthContext } from "../contexts/Auth";
import SignIn from "./SignIn";

const PrivateRoute = ({ component: RouteComponent }) => {
  const { currentUser } = useContext(AuthContext);
  const Component = currentUser ? RouteComponent : SignIn;

  console.log(currentUser);

  return <Route component={Component} />;
};

export default PrivateRoute;
