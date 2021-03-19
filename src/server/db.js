import news from "./News.json";

// find news and return items = count number
export const find = ({ count = news.articles.length }) => {
  return news.articles
    .slice(0, count)
    .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
};

// find news by its id
export const findById = (id) => {
  return news.articles.find((article) => article.id === +id);
};
