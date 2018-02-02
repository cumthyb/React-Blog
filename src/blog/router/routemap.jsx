import React, { Component } from 'react';
import { Layout } from 'antd';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import createBrowserHistory from 'history/createBrowserHistory';

import HeaderCustom from '../containers/header/index.jsx';
import FooterCustom from '../containers/footer/index.jsx';
import Main from '../containers/main/index.jsx';
import Management from '../containers/management/index.jsx';
import NotFound from '../containers/404/index.jsx'

const Content = Layout.Content;

//const history = createBrowserHistory();
class RouteMap extends Component {

  render() {
    return (
      //history={this.props.history}

      <Router>
        <Layout className="home-container-layout" style={ { height: '100%', width: '100%', overflow: 'auto' } }>
          <HeaderCustom></HeaderCustom>
          <Content>
            <Switch>
              <Route exact path="/" component={ Main } />
              <Route path="/main" component={ Main } />
              <Route path="/management" component={ Management } />
              <Route component={ NotFound } />
            </Switch>
          </Content>
          <FooterCustom></FooterCustom>
        </Layout>
      </Router>

      );
  }
}

export default RouteMap;