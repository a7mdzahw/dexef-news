import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";

const NewsCard = ({ item }) => {
  return (
    <div className=" mb-3">
      <img src={item.urlToImage} alt={item.title} className="card-img-top fluid card-img" />
      <div className="mt-2">
        <Link className="card-link" to={`/news/${item.id}`}>
          <h2 className="card-title display-6 text-sm">{item.title}</h2>
        </Link>
        <p className="card-text text-muted">
          {moment(item.publishedAt).format("MMM Do YYYY, h:mm a")}
        </p>
      </div>
    </div>
  );
};

export default NewsCard;
