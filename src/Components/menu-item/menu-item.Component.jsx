import React from "react";
import "./menu-item.styles.scss";

const MenuItem = ({ title, imageUrl, size }) => {
  return (
    <section className={`${size} menu-item`}>
        <div className="background-img" style={{backgroundImage:`url(${imageUrl})`}} />

        <div className="content">
            <h1 className="title">{title}</h1>
            <span className="subtitle">SHOW NOW!</span>
        </div>
    </section>
  );
};
export default MenuItem;
