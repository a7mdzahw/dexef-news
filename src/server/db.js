import news from "./News.json";

export const find = ({ count = news.articles.length }) => {
  return news.articles.slice(0, count);
};

export const findById = (id) => {
  return news.articles.find((article) => article.id == id);
};
