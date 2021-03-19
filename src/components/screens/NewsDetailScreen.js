import React from "react";
import moment from "moment";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { findById } from "../../server/db";
import { setCurrentCard } from "../../store/news";

const NewsDetailScreen = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [card, setCard] = React.useState({});

  React.useEffect(() => {
    dispatch(setCurrentCard(id));
    const card = findById(id);
    setCard(card);
  }, [id]);

  return (
    <div className="d-flex flex-column mx-5">
      <img
        src={card.urlToImage}
        alt={card.title}
        className="img-fluid "
        style={{ maxHeight: "50vh", objectFit: "cover" }}
      />
      <h2 className="display-5 text-info my-3">{card.title}</h2>
      <p className="text-primary">
        Published At: {moment(card.publishedAt).format("MMM D YYYY, h:mm")}
      </p>
      <p>{card.content}</p>
    </div>
  );
};

export default NewsDetailScreen;
