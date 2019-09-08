import React from "react";
import "./menu-item.styles.scss";
import { withRouter } from "react-router-dom";

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => {
  return (
    <section
      className={`${size} menu-item`}
      onClick={()=> history.push(`${match.path}${linkUrl}`)}
      
    >
      <div
        className="background-img"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">SHOW NOW!</span>
      </div>
    </section>
  );
};
export default withRouter(MenuItem);
