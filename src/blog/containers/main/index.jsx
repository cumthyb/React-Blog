import React, { Component } from 'react';
import { Route } from "react-router-dom";
import Home from './home/index'
import Atricles from './article/index'
import Projects from './projects/index'
import AboutMe from './aboutme/index'
import './index.css'

class Main extends Component {

    render() {
        return (
            <div id="main-container">
              <Route path="/main/home" component={ Home }></Route>
              <Route path="/main/articles" component={ Atricles }></Route>
              <Route path="/main/projects" component={ Projects }></Route>
              <Route path="/main/about" component={ AboutMe }></Route>
            </div>

            );
    }
}


export default Main;