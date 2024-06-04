import React, { useEffect } from "react";
import "./header.css";
import { NavLink, Outlet } from "react-router-dom";

export default function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-primary">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" to="/contact">
              Contact
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/about">
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/post">
              Post
            </NavLink>
          </li>
        </ul>
      </nav>
      <Outlet></Outlet>
    </>
  );
}
