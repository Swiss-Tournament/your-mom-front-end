import React from "react";
import { Redirect } from "react-router-dom";

const UserLogOut = () => {
  localStorage.removeItem("token");
  return <Redirect to="/"></Redirect>;
};

export default UserLogOut;
