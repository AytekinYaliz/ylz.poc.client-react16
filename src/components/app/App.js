import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import "./App.scss";
import Navigation from "../navigation/Navigation";


export default function App() {
   return (
      <Router>
         <Navigation />
      </Router>
   );
}
