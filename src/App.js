import React from "react";
import { Toaster } from "react-hot-toast";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// shared components
import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";
// pages
import HomePage from "./pages/index";
import AllNews from "./pages/all_news";
import APICallScreen from "./pages/api_call";
import NewsDetail from "./pages/news_detail";
import ScrollToTop from "./components/shared/ScrollToTop";

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Toaster />
      <Header />
      <div className="container content">
        <Switch>
          <Route path="/news/:id" component={NewsDetail} />
          <Route path="/api_call" component={APICallScreen} />
          <Route path="/all_news" component={AllNews} />
          <Route path="/" component={HomePage} />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
