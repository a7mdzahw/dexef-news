import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import * as db from "../../server/db";

const Carousel = () => {
  const [items, setItems] = React.useState([]);
  const [current] = React.useState(1);
  const { showCarousel } = useSelector((state) => state.news);

  React.useEffect(() => {
    const items = db.find({ count: 5 });
    setItems(items);
  }, []);

  if (!showCarousel) return null;

  return (
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        {items.map((item, i) => (
          <button
            key={item.id}
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={`${i}`}
            className={current === item.id ? `active` : ""}
            aria-current="true"
            aria-label={`slide ${i}`}
          ></button>
        ))}
      </div>
      <div className="carousel-inner">
        {items.map((item) => (
          <div key={item.id} className={`carousel-item ${current === item.id ? `active` : ""}`}>
            <Link className="item" to={`/news/${item.id}`}>
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
