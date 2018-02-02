import React, { Component } from 'react';
import { Layout } from 'antd';
import { Route, Switch } from "react-router-dom";
import Article from "../article/index.jsx"
import Projects from "../project/index.jsx"
import AboutMe from "../aboutme/index.jsx"
import WrappedArticleInfoForm from "../management/index.jsx"
import "./index.css";
const {Content} = Layout;

class ContentCustom extends Component {

  render() {
    return (
      <Content className="content-container" id="content-container">
        <Route exact path="/home/" component={ Article } />
        <Route path="/home/article" component={ Article } />
        <Route path="/home/projects" component={ Projects } />
        <Route path="/home/about" component={ AboutMe } />
        <Route path="/home/management" component={ WrappedArticleInfoForm } />
      </Content>
    )
  }

}
export default ContentCustom;