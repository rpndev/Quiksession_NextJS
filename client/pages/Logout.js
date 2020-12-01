import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { logout } from "../services";

export default function Logout() {
  const router = useRouter();
  useEffect(() => {
    logout();
    router.push("/");
  });

  return <div></div>;
}
