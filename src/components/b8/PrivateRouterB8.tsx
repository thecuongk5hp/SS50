import React from "react";
import { Outlet } from "react-router-dom";

export default function PrivateRouterB8() {
  return (
    <div>
      PrivateRouterB8
      <Outlet />
    </div>
  );
}
