import React from "react";
import Home from "./components/pages/homePage";
import ContactUs from "./components/pages/contactUs";
import "./App.css";
import Navbar from "./components/navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Destination from "./components/pages/destinationPage";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/contactUs" component={ContactUs} />
        <Route path="/Destination/Rajasthan" exact component={Destination} />
      </Switch>
    </Router>
  );
}

export default App;
