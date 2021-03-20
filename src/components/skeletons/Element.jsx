import React from "react";
import "./skeleton.css";

const Element = ({ type }) => {
  const classes = `skeleton ${type}`;
  return <div className={classes}></div>;
};

export default Element;
