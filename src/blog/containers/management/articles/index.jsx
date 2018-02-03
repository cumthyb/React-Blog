import React from 'react';
import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete,Modal } from 'antd';

import './index.css'

const FormItem = Form.Item;
const Option = Select.Option;
const AutoCompleteOption = AutoComplete.Option;

class ArticleInfoFrom extends React.Component {
    constructor() {
        super();
    }


    handleSubmit(e) {
        e.preventDefault();
        console.log(this)
        console.log(this.props)
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
        console.log("提交信息");
    }


    render() {

        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: {
                    span: 24
                },
                sm: {
                    span: 8
                },
            },
            wrapperCol: {
                xs: {
                    span: 24
                },
                sm: {
                    span: 16
                },
            },
        };

        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 16,
                    offset: 8,
                },
            },
        };

        return (

        
            <Form onSubmit={ this.handleSubmit.bind(this) } className="article-form">
              <FormItem {...formItemLayout} label="文章标题">
                { getFieldDecorator('title', {
                      rules: [{
                          required: true,
                          message: '请输入文章标题!'
                      }],
                  })(
                      <Input prefix={ <Icon type="info" style={ { color: 'rgba(0,0,0,.25)' } } /> } placeholder="文章标题" />
                  ) }
              </FormItem>
              <FormItem {...formItemLayout} label="文章分类">
                { getFieldDecorator('category', {
                      rules: [{
                          required: true,
                          message: '请输入文章分类!'
                      }],
                  })(
                      <Input prefix={ <Icon type="paper-clip" style={ { color: 'rgba(0,0,0,.25)' } } /> } placeholder="文章分类" />
                  ) }
              </FormItem>
              <FormItem {...formItemLayout} label="文章标签">
                { getFieldDecorator('tags', {
                      rules: [{
                          required: true,
                          message: '请输入文章标签!'
                      }],
                  })(
                      <Input prefix={ <Icon type="tags-o" style={ { color: 'rgba(0,0,0,.25)' } } /> } placeholder="文章标签" />
                  ) }
              </FormItem>
              <FormItem {...tailFormItemLayout} label="是否公开">
                { getFieldDecorator('ispublish', {
                      valuePropName: 'checked',
                      initialValue: true,
                  })(
                      <Checkbox></Checkbox>
                  ) }
              </FormItem>
              <FormItem>
                <Button type="primary" htmlType="submit" className="article-form-submit">
                  开始编辑
                </Button>
                <Button className="article-form-cancel">
                  取消
                </Button>
                <Button className="article-form-reset">
                  重置
                </Button>
              </FormItem>
            </Form>
            );
    }
}


const WrappedArticleInfoForm = Form.create()(ArticleInfoFrom);

export default WrappedArticleInfoForm