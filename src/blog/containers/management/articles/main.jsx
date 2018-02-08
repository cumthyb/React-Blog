import React, { Component } from 'react';
import { Table, Icon, Popconfirm, Button, Divider, message } from 'antd';
import { Link } from "react-router-dom";
import './index.css'
import UUID from 'uuid';
import { CONFIG } from '../../../static/dbconfig'
import axios from 'axios';

class ArticleMain extends Component {
  constructor(props) {
    super(props)
    this.columns = {};
    this.state = {
      data: [],
      selectedRowKeys: [], // Check here to configure the default column
      loading: false,
    }
  }

  reloadData = () => {
    this.setState({
      loading: true
    });

    const promise = this.getAtricles();
    promise.then(atricles => {
      let data = [];
      if (!atricles) return;
      atricles.map((item, index) => {
        data.push({
          key: item._id,
          index: index + 1,
          title: item.title
        });
      })

      this.setState({
        selectedRowKeys: [],
        loading: false,
        data: data
      });

    }).catch((error) => {
      message.error(error)
    });

  }

  onSelectChange = (selectedRowKeys) => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({
      selectedRowKeys
    });
  }

  handEditArticle = (id, sender) => {
    console.log("查看文章:");
    console.log(id);
    console.log(sender);
    /* const promise = this.getAtricleByID(id);
     promise.then((content) => {
       console.log(content.content)
       this.props.history.push('/management/viewarticle/'+id);
     }

     ).catch((err) => {
       message.error(err)
     }

     );*/
    return <Link to={ '/management/viewarticle/' + id } />;
  }

  handDelArticle = (id, sender) => {
    console.log(id)

  }

  //添加文章
  handNewArticle = () => {
    console.log(this.props.history)
    this.props.history.push('/management/addarticle')
  }


  getAtricles() {
    const url = `${CONFIG.server}/api/article/queryall`
    var result;
    var promise = new Promise(function(resolve, reject) {
      axios.post(url)
        .then(function(response) {
          if (response.data.status == -1) {
            message.info(response.data.msg);
          } else {
            resolve(response.data.result);
          }
        })
        .catch(function(error) {
          message.info(error);
        })
    })
    return promise;
  }

  getAtricleByID(id) {
    console.log("getAtricleByID：" + id)
    const url = `${CONFIG.server}/api/article/queryID`
    var result;
    var promise = new Promise(function(resolve, reject) {

      axios.post(url, {
        id: id
      })
        .then(function(response) {
          if (response.data.status == -1) {
            message.info(response.data.msg);
          } else {
            resolve(response.data.result);
          }
        })
        .catch(function(error) {
          message.info(error);
        })
    })
    return promise;
  }

  componentWillMount() {
    this.columns = [{
      title: '序号',
      dataIndex: 'index',
      width: 100,
    }, {
      title: '标题',
      dataIndex: 'title',
    }, {
      title: '操作',
      dataIndex: 'opera',
      width: 250,
      render: (text, record) => <div className='opera'>
                                  <span onClick={ this.handEditArticle.bind(this, record.key) }>
                                                                  <Link to={ '/management/viewarticle/' + record.key }><Icon type="eye-o" /> <span>查看</span> </Link>
                                  </span>
                                  <Divider type="vertical" />
                                  <span onClick={ this.handEditArticle.bind(this, record.key) }><Icon type="edit" /> 修改</span>
                                  <Divider type="vertical" />
                                  <span><Popconfirm title="确定要删除吗?" cancelText="容我三思" okText='朕意已决' okType='danger' onConfirm={ () => this.handDelArticle(record.key) }><Icon type="minus-square-o" /> 删除 </Popconfirm></span>
                                </div>
    }];

    this.reloadData();

  }

  render() {
    const {loading, selectedRowKeys} = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };
    const hasSelected = selectedRowKeys.length > 0;
    const root = this.props.match.url;
    return (
      <div>
        <div style={ { marginBottom: 16 } }>
          <Button type="primary" shape="circle" icon="plus" size={ 'small' } style={ { marginRight: 10 } } onClick={ this.handNewArticle.bind(this) }></Button>
          <Button type="primary" onClick={ this.reloadData } disabled={ !hasSelected } loading={ loading }>
            加载
          </Button>
          <span style={ { marginLeft: 8 } }>{ hasSelected ? `已选择 ${selectedRowKeys.length} 项` : '' }</span>
        </div>
        <Table className="formTable" rowSelection={ rowSelection } columns={ this.columns } dataSource={ this.state.data } pagination={ { pageSize: 20 } } scroll={ { y: '100%' } }
        />
      </div>
      );
  }
}



export default ArticleMain ;