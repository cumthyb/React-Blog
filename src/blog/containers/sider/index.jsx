import React from 'react';
import { Layout, Menu, Icon, Card } from 'antd';
import { connect } from 'react-redux'
import "./index.css";
const {Sider} = Layout;
const {Meta} = Card;


class SiderCustom extends React.Component {

  constructor(props) {
    super();
  }

  render() {
    return (

      <Sider trigger={ null } collapsible collapsed={ this.props.sidercollapsed }>
        <div className="sider-log">
          <Card hoverable id="sider-card" cover={ <img alt="log" src={ require('../../static/dog.jpg') } /> } bordered={ false }>
            <Meta className="card-description" title="波帝伯爵" description="公无渡河，公竟渡河！" />
          </Card>
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={ ['1'] }>
          <Menu.Item key="1">
            <Icon type="user" />
            <span>nav 1</span>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="video-camera" />
            <span>nav 2</span>
          </Menu.Item>
          <Menu.Item key="3">
            <Icon type="upload" />
            <span>nav 3</span>
          </Menu.Item>
        </Menu>
      </Sider>
      );
  }

}

const mapStateToProps = (state) => {
  console.log(state.reducer_sider)
  return {
    sidercollapsed: state.reducer_sider.iscollapsed
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SiderCustom);