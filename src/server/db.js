import news from "./News.json";

export const find = ({ count = news.articles.length }) => {
  return news.articles
    .slice(0, count)
    .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
};

export const findById = (id) => {
  return news.articles.find((article) => article.id === +id);
};
