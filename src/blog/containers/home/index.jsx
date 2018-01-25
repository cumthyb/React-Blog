import React, { Component } from 'react';
import { Layout } from 'antd';
import HeaderCustom from '../header/index.jsx';
import SiderCustom from '../sider/index.jsx';
import ContentCustom from '../content/index.jsx';
import FooterCustom from '../footer/index.jsx';
import "./index.css"

class Home extends Component {

  render() {
    return (
      <Layout className="home-container-layout">
        <SiderCustom sidercollapsed={ false }></SiderCustom>
        <Layout>
          <HeaderCustom></HeaderCustom>
          <ContentCustom></ContentCustom>
          <FooterCustom></FooterCustom>
        </Layout>
      </Layout>
      );
  }
}


export default Home;

