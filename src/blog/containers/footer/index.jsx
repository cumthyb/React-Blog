import React from 'react';
import { Layout } from 'antd';
import "./index.css"
const {Footer} = Layout;

class FooterCustom extends React.Component {

  render() {
    return (
      <Footer className="cutom-footer">
        MYBLOG ©2018 Created by CUMTHYB
      </Footer>
      );
  }
}


export default FooterCustom;