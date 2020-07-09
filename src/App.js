import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./Components/Header";
import ContentRouter from "./Components/ContentRouter";
import ContextMiddleware from "./Components/ContextMiddleware";
import Footer from "./Components/Footer";
import "./custom.scss";
import "react-bootstrap";
require("bootstrap/dist/js/bootstrap.bundle");

function App() {
  return (
    <ContextMiddleware>
      <Router>
        <div className="App">
          <Header />
          <ContentRouter />
          <Footer />
        </div>
      </Router>
    </ContextMiddleware>
  );
}

export default App;
