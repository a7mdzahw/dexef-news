import React from "react";
import Element from "./Element";
import Swipper from "./Swipper";

const NewsSkeleton = () => {
  return (
    <div className="skeleton-wrapper">
      <div className="news-skeleton">
        <Element type="thumbnail" />
        <Element type="title" />
      </div>
      <Swipper />
    </div>
  );
};

export default NewsSkeleton;
