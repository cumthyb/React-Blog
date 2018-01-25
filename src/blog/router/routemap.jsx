import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
//import createBrowserHistory from 'history/createBrowserHistory';

import AboutMe from '../containers/aboutme/index';
import Article from '../containers/article/index';
import Home from '../containers/home/index';
import Projects from '../containers/project/index';
import NotFound from '../containers/404/index';
import WellCome from "../containers/wellcome/index"

//const history = createBrowserHistory();

class RouteMap extends Component {

  render() {
    return (
      //history={this.props.history}
      <Router >
        <Switch>
          <Route exact path="/" component={WellCome}/>
          <Route path="/home" component={Home}/>
          <Route path="/articles" component={Article}/>
          <Route path="/projects" component={Projects}/>
          <Route path="/about" component={AboutMe}/>
          <Route component={NotFound}/>
        </Switch>
      </Router>
    );
  }
}

export default RouteMap;