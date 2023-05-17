import React from "react";
import "./Page.css";

export default function Card({ image, title, description }) {
  return (
    <div className="horizontal-card">
      <div className="horizontal-card-image" style={{ backgroundImage: `url(${image})` }}></div>
      
    </div>
  );
}
