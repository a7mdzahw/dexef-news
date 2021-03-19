import React from "react";
import { find } from "../../server/db";
import NewsCard from "../shared/NewsCard";

const News = () => {
  const [news, setNews] = React.useState([]);
  const [more, setMore] = React.useState(8);

  React.useEffect(() => {
    const news = find({ count: more });
    setNews(news);
  }, [more]);

  return (
    <div>
      <h2 className="display-6">Recently Added</h2>
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
      {more < 24 && (
        <div display="d-flex justify-content-center">
          <button className="more-btn" onClick={() => setMore((m) => m * 2)}>
            Show More
          </button>
        </div>
      )}
    </div>
  );
};

export default News;
