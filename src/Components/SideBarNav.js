import React from "react";
import { Link } from "react-router-dom";
import './SideBar.css'
export default function SideBar() {
  const screens = [
    {
      name: "Onboarding",
      path: "/onboarding",
    },
    {
      name: "Map",
      path: "/map",
    },
    {
      name: "Monitor",
      path: "/monitor",
    },
    {
      name: "Enrich",
      path: "/enrich",
    },
    {
      name: "Analyze",
      path: "/analyze",
    },
    {
      name: "Act",
      path: "/act",
    },
  ];

  const screensList = screens.map((item) => (
    <Link  className="links" to={{ pathname: item.path }} key={item.name}>
      <button className="sidebar-button">{item.name}</button>
    </Link>
  ));

  return (
    <aside className="sidebar">
      <div className="button-container">
        {screensList}
      </div>
    </aside>
  );
}

