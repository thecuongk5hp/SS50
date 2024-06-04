import React, { useState } from "react";
import Account from "./Account";
import { Navigate } from "react-router-dom";

export default function PrivateRouter() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  if (isAuthenticated) {
    return <Account />;
  } else {
    return <Navigate to="/login" />;
  }
}
