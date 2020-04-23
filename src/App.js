import React from 'react';
import { BrowserRouter as Router,Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Links from "./pages/Links";
import Portfolio from "./pages/Portfolio";
import Profile from "./pages/Profile";

function App() {
  return (
    <Router>
      <div>

      <Navbar />
      <Switch>

      <Route  path="/links" component={Links} />
      <Route  path="/portfolio" component={Portfolio} />
      <Route  path="/" component={Profile} />
      </Switch>

      <Footer />
      </div>
    </Router>
  );
}

export default App;
