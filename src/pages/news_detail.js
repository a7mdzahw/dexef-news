import React from "react";
import moment from "moment";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import * as db from "../server/db";
import { setCurrentCard } from "../store/news";

const NewsDetail = () => {
  // pulling id paramter from the uri
  const { id } = useParams();
  const dispatch = useDispatch();

  const [card, setCard] = React.useState({});
  // storing id of selected card in redux store and fetching news by id from db
  React.useEffect(() => {
    dispatch(setCurrentCard(id));
    const card = db.findById(id);
    setCard(card);
  }, [id, dispatch]);

  return (
    <div className="d-flex flex-column mx-5">
      <img
        src={card.urlToImage}
        alt={card.title}
        className="img-fluid "
        style={{ maxHeight: "50vh", objectFit: "cover" }}
      />
      <h2 className="display-5 text-info my-3 fw-normal">{card.title}</h2>
      <p className="text-primary fw-bold">
        Published At: {moment(card.publishedAt).format("MMM Do YYYY, h:mm")}
      </p>
      <p>{card.content}</p>
    </div>
  );
};

export default NewsDetail;
