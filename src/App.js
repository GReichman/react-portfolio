import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Links from "./pages/Links";
import Portfolio from "./pages/Portfolio";
import Profile from "./pages/Profile";

function App() {
  return (
<Router>
<Navbar/>

    <Switch>
      {/* <Route path="portfolio" component={Portfolio} />
      <Route path="links" component={Links} />
      <Route path="/" component={Profile} /> */}
    </Switch>

<Footer/>
</Router>
  );
}

export default App;
