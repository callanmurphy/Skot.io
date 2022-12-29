import React, { Component, useEffect } from "react";
import { Alert } from "../components/alert";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Logout(props) {
  console.log(props);
  const router = useRouter();

  useEffect(() => {
    props.setUser(null);
    router.push("/login");
  });

  return <></>;
}
