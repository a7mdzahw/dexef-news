import { current } from "@reduxjs/toolkit";
import React from "react";
import { Link } from "react-router-dom";
import { find } from "../../server/db";

const Carousel = () => {
  const [items, setItems] = React.useState([]);
  const [current, setCurrent] = React.useState(1);

  React.useEffect(() => {
    const items = find({ count: 5 });
    console.log(items);
    setItems(items);
  }, []);

  return (
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        {items.map((item, i) => (
          <button
            key={item.id}
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={`${i}`}
            className={current === item.id && "active"}
            aria-current="true"
            aria-label={`slide ${i}`}
          ></button>
        ))}
      </div>
      <div className="carousel-inner">
        {items.map((item) => (
          <div className={`carousel-item ${current === item.id && "active"}`}>
            <Link to={`/news/${item.id}`}>
              <img
                src={item.urlToImage}
                className="d-block w-100 caro-img"
                alt={item.title}
                style={{ maxHeight: "40vh" }}
              />
              <div className="carousel-caption text-light d-md-block">
                <h5>{item.title}</h5>
                <p className="d-none d-md-block text-sm">{item.content}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
