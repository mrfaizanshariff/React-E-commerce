import React from "react";
import "./menu-item.styles.scss";
import { withRouter } from "react-router-dom";

const MenuItem = ({ title, imageUrl, size, history, linkUrl }) => (
  <div className={`${size} menu-item-container`}>
    <div
      className="background-image"
      style={{ backgroundImage: `url(${imageUrl})` }}
      onClick={() => history.push(linkUrl)}
    />

    <div className="content">
      <h1 className="title">{title[0].toUpperCase() + title.slice(1)}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);
export default withRouter(MenuItem);
