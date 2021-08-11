import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from  "./Components/Footer/Footer"
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import OurDoctors from "./Components/OurDoctors/OurDoctors";
import BlogComponent from "./Components/Blog/Blog";
import Contact from "./Components/Contact/Contact";
import "./Components/Sass/responsive.scss";
import "./Components/Sass/App.scss";

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About} />
          <Route exact path="/doctor" component={OurDoctors} />
          <Route exact path="/blog" component={BlogComponent} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;