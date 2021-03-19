import React from "react";

import { find } from "../server/db";
import NewsCard from "../components/news/NewsCard";

const News = () => {
  const [news, setNews] = React.useState([]);
  const [more, setMore] = React.useState(8);

  React.useEffect(() => {
    // calling DB to get some news
    const news = find({ count: more });
    setNews(news);
  }, [more]);

  return (
    <div>
      {/* showing most 8 news */}
      <h2 className="display-6">Recently Added</h2>
      <div className="row">
        {news.map((item) => (
          <div key={item.id} className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
            <NewsCard item={item} />
          </div>
        ))}
      </div>
      {/* showing "show more" button if there are more news */}
      {more < 24 && (
        <div className="d-flex justify-content-center mt-2">
          <button className="more-btn" onClick={() => setMore((m) => m * 2)}>
            Show More
          </button>
        </div>
      )}
    </div>
  );
};

export default News;
