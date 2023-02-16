import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Booking from "./pages/booking";
import Dashboard from "./pages/dashboard";
import Screen from "./pages/screen";

function App() {
  return (
    <Router>
      <Route path="/">
        <Dashboard />
      </Route>
      <Route path="/select">
        <Screen />
      </Route>
      <Route path="/book">
        <Booking />
      </Route>
    </Router>
  );
}

export default App;
