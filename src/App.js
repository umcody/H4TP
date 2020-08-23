
import React from 'react';
import logo from './logo.svg';
import {Route,Switch} from "react-router-dom";
import Landing from "./components/landing";
import Record from "./components/record";
import Url from "./components/url";
import Language from "./components/language";
import Watch from "./components/firebase";



function App() {


  return (
    <div className="App">
      <h1>
        SUBLIVE
      </h1>
      <Switch>
        <Route path ="/watch" component={Watch}/>
        <Route path = "/record" component = {Record}/>
        <Route path = "/url" component = {Url}/>
        <Route path = "/language" component = {Language}/>
        <Route path = "" component = {Landing}/>
      </Switch>
      
    
    </div>
  );
}

export default App;
