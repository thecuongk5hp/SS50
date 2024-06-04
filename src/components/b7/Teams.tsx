import React from "react";
import { Outlet } from "react-router-dom";

export default function Teams() {
  return (
    <div>
      <h1>Trang teams</h1>
      <Outlet />{" "}
    </div>
  );
}
