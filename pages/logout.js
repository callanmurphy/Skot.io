import React, { useEffect } from "react";
import Router from "next/router";

export default function Logout(props) {
  useEffect(() => {
    props.setUser(null);
    Router.push("/login");
  });

  return <></>;
}
