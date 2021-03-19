import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import * as db from "../../server/db";
import { recieveNews } from "../../store/news";
import Carousel from "../shared/Carsoul";
import NewsCard from "../shared/NewsCard";

const HomePage = () => {
  const dispatch = useDispatch();
  const router = useHistory();
  const { filteredList: news } = useSelector((state) => state.news);

  React.useEffect(() => {
    const news = db.find({ count: 8 });
    dispatch(recieveNews(news));
  }, []);

  return (
    <div>
      {/* <Carousel /> */}
      <div className="d-flex justify-content-between mb-2">
        <h2 className="display-6">Recently Added</h2>
        <span>
          <button
            className="btn btn-secondary ml-auto p-1"
            onClick={() => router.push("/all_news")}
          >
            show all
          </button>
        </span>
      </div>

      <div className="row">
        {news.map((item) => (
          <div key={item.id} className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
            <NewsCard item={item} />
          </div>
        ))}
        {news.length === 0 && (
          <div className="alert alert-warning">NO NEWS MATCHING YOUR SEARCH QUERY</div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
