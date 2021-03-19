import React from "react";
import { useDispatch } from "react-redux";
import { useHistory, Link } from "react-router-dom";

import { searchNews, toggleCarousel } from "../../store/news";

const Header = () => {
  const router = useHistory();
  const dispatch = useDispatch();

  const [query, setQuery] = React.useState("");
  const [showSearch, setShowSearch] = React.useState(false);

  return (
    <header>
      <nav
        className="navbar navbar-expand  navbar-dark fixed-top"
        style={{ backgroundColor: "#301b3f" }}
      >
        <div className="container ">
          <Link className=" navbar-brand gap-2 p-0" to="/">
            <i className="bi bi-newspaper"></i>
            {"  "}Sports Life
          </Link>

          <ul className="navbar-nav">
            <div className="form-inline d-flex align-items-center me-1">
              <button
                onClick={() => router.push("/api_call")}
                className="nav-link btn  ml-auto btn-sm p-1  text-light"
                style={{ backgroundColor: "#28527a" }}
              >
                Call API
              </button>
            </div>
            <li className="nav-item">
              <Link className="nav-link" to="/all_news">
                <i className="bi bi-bell"></i>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/search"
                onClick={() => {
                  setShowSearch(!showSearch);
                  dispatch(toggleCarousel(showSearch));
                }}
              >
                <i className="bi bi-search"></i>
              </Link>
            </li>
            {showSearch && (
              <form className="form-inline">
                <input
                  type="text"
                  autoFocus
                  value={query}
                  placeholder="Search.."
                  className="form-control"
                  onChange={(e) => {
                    setQuery(e.target.value);
                    dispatch(searchNews(e.target.value));
                  }}
                />
              </form>
            )}
            <li className="nav-item">
              <Link className="nav-link" to="/profile">
                <i className="bi bi-person-circle"></i>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
