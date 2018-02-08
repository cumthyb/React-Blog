import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb, Icon,Form } from 'antd';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Articles_M from './articles/index.jsx'
import Tags_M from './tags/index.jsx'
import Categories_M from './categories/index.jsx'
import ArticleEditor from './articles/add';
import ArticleMain from './articles/main.jsx'
import ArticleView from './articles/view';

import './index.css';

const {SubMenu} = Menu;
const {Content, Sider} = Layout;
const ArticleEditorCus =Form.create()(ArticleEditor)

class Management extends Component {

  render() {
    const root = this.props.match.url;
    return (
      <Layout id="management-container">
        <Sider width={ 200 } style={ { background: '#fff' } }>
          <Menu mode="inline" defaultSelectedKeys={ ['4'] } style={ { borderRight: 0 } }>
            <Menu.Item key="1">
              <Link to={ `${root}/user` }>
              <Icon type="team" /><span>用户管理</span></Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to={ `${root}/tag` }>
              <Icon type="tags" /><span>标签管理</span></Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to={ `${root}/category` }>
              <Icon type="paper-clip" /><span>分类管理</span></Link>
            </Menu.Item>
            <Menu.Item key="4">
              <Link to={ `${root}/article` }>
              <Icon type="file-text" /><span>文章管理</span></Link>
            </Menu.Item>
            {/* <Menu.Item key="5">
              <Link to={ `${root}/addarticle` }>
              <Icon type="file-text" /><span>添加文章</span></Link>
            </Menu.Item> */}
          </Menu>
        </Sider>
        <Layout style={ { padding: '0 24px 24px' } }>
          <Breadcrumb style={ { margin: '16px 0' } }>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content style={ { background: '#fff', padding: 24, margin: 0, minHeight: 280 } }>
            <Switch>
              <Route path={ `${root}/user` } component={ Tags_M } />
              <Route path={ `${root}/tag` } component={ Tags_M } />
              <Route path={ `${root}/category` } component={ Categories_M } />
              <Route path={ `${root}/article` } component={ ArticleMain } />
              <Route path={ `${root}/addarticle` } component={ ArticleEditorCus } />      
              <Route path={ `${root}/viewarticle/:id` } component={ ArticleView } />                  
              <Route path={ `${root}/` } component={ ArticleMain } />
            </Switch>
          </Content>
        </Layout>
      </Layout>
      );
  }
}


export default Management;