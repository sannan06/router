import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Error from "./Components/Error";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Switch>
     
        <Route path = "/" component = { Home } exact/>
        <Route path = "/about" component = { About }/>
        <Route path = "/contact" component = { Contact }/>
        <Route component = { Error }/>
      
      </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
