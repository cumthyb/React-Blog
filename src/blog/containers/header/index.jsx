import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { togglesider } from "../../redux/actions/index"
import "./index.css"
const {Header} = Layout;

class HeaderCustom extends React.Component {
  constructor() {
    super();
    this.sidercollapsed = false;
  }

  onToggle = () => {
    this.sidercollapsed = !this.sidercollapsed;
    this.props.toggle(
      this.sidercollapsed
    );
  }

  render() {
    return (
      <Header className="custom-header">
        <Icon className="slider-trigger" type={ 'menu-unfold' } onClick={ this.onToggle } />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={ ['1'] } style={ { lineHeight: '64px' } }>
          <Menu.Item key="1" className="menu-item-nav">
            <Link to={ '/home/article' }><span>首页</span></Link>
          </Menu.Item>
          <Menu.Item key="2" className="menu-item-nav">
            <Link to={ '/home/projects' }><span>项目</span></Link>
          </Menu.Item>
          <Menu.Item key="3" className="menu-item-nav">
            <Link to={ '/home/about' }><span>关于</span></Link>
          </Menu.Item>
        </Menu>
      </Header>
      );
  }

}

const mapStateToProps = (state) => {
  return {
    iscollapsed: state.iscollapsed
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggle: (collapsed) => {
      dispatch(togglesider(collapsed))
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(HeaderCustom);