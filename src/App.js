import React from "react";
import { Toaster } from "react-hot-toast";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/shared/Header";
import HomePage from "./components/screens/HomePage";
import News from "./components/screens/News";
import APICallScreen from "./components/screens/APICallScreen";
import NewsDetailScreen from "./components/screens/NewsDetailScreen";
import Footer from "./components/shared/Footer";

const App = () => {
  return (
    <Router>
      <Toaster />
      <Header />
      <div className="container content">
        <Switch>
          <Route path="/news/:id" component={NewsDetailScreen} />
          <Route path="/api_call" component={APICallScreen} />
          <Route path="/all_news" component={News} />
          <Route path="/" component={HomePage} />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
