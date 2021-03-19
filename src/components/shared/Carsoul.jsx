import React from "react";
import { Link } from "react-router-dom";
import { find, findById } from "../../server/db";

const Carousel = () => {
  const [card, setCard] = React.useState({});
  React.useEffect(() => {
    const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
    let random_id;
    setInterval(() => {
      random_id = random(1, 20);
      const card = findById(random_id);
      setCard(card);
    }, 10000);
    setCard(findById(5));
  }, []);
  return (
    <>
      <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active vw-100 d-flex justify-content-center my-3">
            <div className="w-100 d-flex justify-content-center">
              <Link to={`/news/${card.id}`}>
                <img
                  src={card && card.urlToImage}
                  alt={card && card.title}
                  style={{ minHeight: "30vh", maxHeight: "30vh", width: "50%" }}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousel;
