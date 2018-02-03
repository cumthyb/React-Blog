import React, { Component } from 'react';
import { Table, Icon, Popconfirm, Button, Divider, message } from 'antd';
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
      console.log(atricles);
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

  editClick = (id) => {
    console.log(id)
  }

  onDelete = (id) => {
    console.log(id)

  }

  getAtricles() {
    console.log("getAtricles")
    const url = `${CONFIG.server}/api/article/queryall`
    var result;
    var promise = new Promise(function(resolve, reject) {
      console.log(url)
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

  componentWillMount() {
    this.columns = [{
      title: '序号',
      dataIndex: 'index',
      width: 200,
    }, {
      title: '标题',
      dataIndex: 'title',
    }, {
      title: '操作',
      dataIndex: 'opera',
      width: 250,
      render: (text, record) => <div className='opera'>
                                  <span><Icon type="eye-o" /> 查看</span>
                                  <Divider type="vertical" />
                                  <span onClick={ () => this.editClick(record.key) }><Icon type="edit" /> 修改</span>
                                  <Divider type="vertical" />
                                  <span><Popconfirm title="确定要删除吗?" cancelText="容我三思" okText='朕意已决' okType='danger' onConfirm={ () => this.onDelete(record.key) }><Icon type="minus-square-o" /> 删除 </Popconfirm></span>
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
    return (
      <div>
        <div style={ { marginBottom: 16 } }>
          <Button type="primary" onClick={ this.reloadData } disabled={ !hasSelected } loading={ loading }>
            加载
          </Button>
          <span style={ { marginLeft: 8 } }>{ hasSelected ? `已选择 ${selectedRowKeys.length} 项` : '' }</span>
        </div>
        <Table rowSelection={ rowSelection } columns={ this.columns } dataSource={ this.state.data } />
      </div>
      );
  }
}


export default ArticleMain ;