import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import * as db from "../server/db";
import { recieveNews } from "../store/news";

import NewsCard from "../components/news/NewsCard";
import Carousel from "../components/news/Carousel";

const HomePage = () => {
  const dispatch = useDispatch();
  const router = useHistory();
  // fetching data from redux store based on search query
  const { filteredList: news, loading } = useSelector((state) => state.news);
  // calling db to fetch news and store news in redux store on app mount
  React.useEffect(() => {
    const news = db.find({ count: 8 });
    dispatch(recieveNews(news));
  }, [dispatch]);

  return (
    <div>
      <Carousel />
      <div className="d-flex justify-content-between my-3">
        <h2 className="display-6">Recently Added</h2>
        {/* "show all" button */}
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
        {/* showing loading spinner if still fetching data */}
        {loading && (
          <div className="spinner-grow">
            <span className="visually-hidden">Loading...</span>
          </div>
        )}
        {/* showing news data based on search query or return 8 if no search query provided */}
        {news.map((item) => (
          <div key={item.id} className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
            <NewsCard item={item} />
          </div>
        ))}
        {/* showing warning if no news matched current search query */}
        {news.length === 0 && !loading && (
          <div className="alert alert-warning">NO NEWS MATCHING YOUR SEARCH QUERY</div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
