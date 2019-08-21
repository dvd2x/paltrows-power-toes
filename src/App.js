import React, { Component } from "react";
import Nav from "./Nav";
import Header from "./Header";
import Footer from "./Footer";
import HomePage from "./HomePage";
import "./App.css";

import AboutPage from "./AboutPage";
import { Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <Nav />
        </nav>
        <header>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
        </header>
        <main>
          <HomePage />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}
