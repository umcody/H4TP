
import React from 'react';
import logo from './logo.svg';
import {Route,Switch} from "react-router-dom";
import Landing from "./components/landing";
import Record from "./components/record";
import Url from "./components/url";



function App() {


  return (
    <div className="App">
      <h1>
        SUBLIVE
      </h1>
      <Switch>
        <Route path = "/record" component = {Record}/>
        <Route path = "/url" component = {Url}/>
        <Route exact path = "" component = {Landing}/>
      </Switch>
      
    
    </div>
  );
}

export default App;
