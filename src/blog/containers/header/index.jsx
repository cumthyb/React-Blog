import React from 'react';
import { Layout, Menu, Icon, Badge } from 'antd';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { togglesider } from "../../redux/actions/index"
import "./index.css"
import UserLoginFrom from '../management/login/index'
const {Header} = Layout;

class HeaderCustom extends React.Component {
  constructor() {
    super();
    this.sidercollapsed = false;
    this.state = {
      loading: false,
      visible: false
    }
  }

  onToggle = () => {
    this.sidercollapsed = !this.sidercollapsed;
    this.props.toggle(
      this.sidercollapsed
    );
  }

  onLogin = () => {
    console.log("Click Login")
    this.setState({
      visible: true
    });
    console.log(this.state);
  }

  render() {
    var display=this.props.adminAccess?"inline":"none";
    return (
      <Header className="custom-header" style={ { background: '#fff', padding: 0 } }>
        { /* <Icon className="slider-trigger" type={ 'menu-unfold' } onClick={ this.onToggle } /> */ }
        <Menu theme="light" mode="horizontal" defaultSelectedKeys={ ['1'] } style={ { lineHeight: '64px', width: "1200px", margin: "0 auto" } }>
          <Menu.Item key="1" className="menu-item-nav">
            <Link to={ '/main/home' }><span>首页</span></Link>
          </Menu.Item>
          <Menu.Item key="2" className="menu-item-nav">
            <Link to={ '/main/articles' }><span>文章</span></Link>
          </Menu.Item>
          <Menu.Item key="3" className="menu-item-nav">
            <Link to={ '/main/projects' }><span>项目</span></Link>
          </Menu.Item>
          <Menu.Item key="4" className="menu-item-nav">
            <Link to={ '/main/about' }><span>关于</span></Link>
          </Menu.Item>
          {/* <Menu.Item key="5" className="menu-item-nav" style={ { display:{display}} }> */}
          <Menu.Item key="5" className="menu-item-nav" style={ { display:display} }>
            <Link to={ '/main/management' }><span>管理端</span></Link>
          </Menu.Item>
          <Menu.Item key="6" style={ { lineHeight: '64px', position: "absolute", right: '80px', top: "-65px" } }>>
            <Link to="/management/message">
            <Badge count={ 3 } overflowCount={ 99 } style={ { height: '15px', lineHeight: '15px' } }>
              <Icon type="mail" style={ { fontSize: 16, color: '#1DA57A' } } />
            </Badge>
            </Link>
          </Menu.Item>
          <Menu.Item key="7" className="" style={ { lineHeight: '64px', position: "absolute", right: '0px', top: "0px" } }>
            <span onClick={ this.onLogin }> <Icon type="user" style={ { fontSize: 16, color: '#1DA57A' } }/>{ this.props.username } </span>
            <UserLoginFrom visible={ this.state.visible } loading={ this.state.loading }></UserLoginFrom>
          </Menu.Item>
        </Menu>
      </Header>
      );
  }
}

const mapStateToProps = (state) => {
  var adminAccess = state.reducer_login.adminAccess;
  console.log("管理端开启:" + adminAccess);
  return {
    adminAccess: adminAccess
  }
}

export default connect(mapStateToProps, null)(HeaderCustom);