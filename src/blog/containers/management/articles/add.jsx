import React, { Component } from 'react';
import { Input, Button, Form, Modal, Icon, Checkbox ,message} from 'antd';
import { Row, Col } from 'antd';
import "./index.css";
import Editor from '../../../components/richtexteditor/editor'
import { CONFIG } from '../../../static/dbconfig'
import axios from 'axios';
const FormItem = Form.Item;

class EditAtricle extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showArcticleInfoForm: false,
            articlecontent:''
        }
    }

    getArticleHtml(content) {
        console.log(content);
        this.setState({
            articlecontent:content
        })
    }

    hasErrors(fieldsError) {
        return Object.keys(fieldsError).some(field => fieldsError[field]);
    }


    handlePublish() {
        this.setState({
            showArcticleInfoForm: true
        })
    }

    handleArticleOK=()=> {
        console.log("handleArticleOK");

        let That=this;
        this.props.form.validateFields((err, values) => {
            if(!err){
                var article={};
                article.title=values.arctile_title;
                article.author='admin';
                article.abstract=values.arctile_abstract;
                article.category=values.arctile_category;
                article.tags=values.arctile_tag;
                article.ispublic=values.arctile_ispublic;
                article.content=this.state.articlecontent;
                const url = `${CONFIG.server}/api/article/publish`
                axios.post(url, article)
                    .then(function(response) {
                        if (response.data.status == -1) {
                            message.info(response.data.msg);
                        } else {
                            message.info("文章发表成功");    
                            setTimeout(()=>{
                                That.setState({
                                    showArcticleInfoForm: false
                                })
                            },2000)
                        }
                    })
                    .catch(function(error) {
                        console.log(error);
                    });

            }
            else{
                message.error("提交信息不完整")
            }
        })

    }


    handleFormClose() {
        console.log("handleFormClose");

        this.setState({
            showArcticleInfoForm: false
        })
    }

    //
    arcticleInfoForm() {
        const {getFieldDecorator, getFieldsError, getFieldError, isFieldTouched} = this.props.form;
        const userNameError = isFieldTouched('userName') && getFieldError('userName');
        const passwordError = isFieldTouched('password') && getFieldError('password');

        const formItemLayout = {
            labelCol: { span: 4 },
            wrapperCol: { span: 20 },
        };

        return (
            <Modal title="文章信息" visible={ this.state.showArcticleInfoForm } onOk={ this.handleArticleOK.bind(this) } onCancel={ this.handleFormClose.bind(this) }>
              <Form id="article-form" layout="inline" onSubmit={ this.handleSubmit }>
                <FormItem label="文章标题" {...formItemLayout} validateStatus={ userNameError ? 'error' : '' } help={ userNameError || '' }>
                  { getFieldDecorator('arctile_title', {
                        rules: [{
                            required: true,
                            message: 'Please input your arctile_title!'
                        }],
                    })(
                        <Input prefix={ <Icon type="user" style={ { color: 'rgba(0,0,0,.25)' } } /> } placeholder="arctile_title" />
                    ) }
                </FormItem>
                <FormItem label="文章分类" {...formItemLayout} validateStatus={ passwordError ? 'error' : '' } help={ passwordError || '' }>
                  { getFieldDecorator('arctile_category', {
                        rules: [{
                            required: true,
                            message: 'Please input your arctile_category!'
                        }],
                    })(
                        <Input prefix={ <Icon type="lock" style={ { color: 'rgba(0,0,0,.25)' } } /> } type="password" placeholder="arctile_category" />
                    ) }
                </FormItem>
                <FormItem label="文章标签" {...formItemLayout} validateStatus={ passwordError ? 'error' : '' } help={ passwordError || '' }>
                  { getFieldDecorator('arctile_tag', {
                        rules: [{
                            required: true,
                            message: 'Please input your arctile_tag!'
                        }],
                    })(
                        <Input prefix={ <Icon type="lock" style={ { color: 'rgba(0,0,0,.25)' } } /> } type="password" placeholder="arctile_tag" />
                    ) }
                </FormItem>
                <FormItem label="文章摘要" {...formItemLayout} validateStatus={ passwordError ? 'error' : '' } help={ passwordError || '' }>
                  { getFieldDecorator('arctile_abstract', {
                        rules: [{
                            required: true,
                            message: 'Please input your arctile_abstract!'
                        }],
                    })(
                        <Input prefix={ <Icon type="lock" style={ { color: 'rgba(0,0,0,.25)' } } /> } type="password" placeholder="arctile_abstract" />
                    ) }
                </FormItem>
                <FormItem label=" 是否公开" {...formItemLayout}>
                  { getFieldDecorator('arctile_ispublic', {
                        valuePropName: 'checked',
                        initialValue: true,
                        rules: [{
                            required: false,
                            message: 'Please input your arctile_abstract!'
                        }]
                    })(
                        <Checkbox></Checkbox>
                    ) }
                </FormItem>
                { /* <FormItem>
                                                  <Button type="primary" htmlType="submit" disabled={ this.hasErrors(getFieldsError()) }>
                                                    Log in
                                                  </Button>
                                                </FormItem> */ }
              </Form>
            </Modal>
        )
    }

    render() {
        return (
            <div>
              <Row style={ { "margin": "20px 0" } }>
                <Col span={ 16 }>
                <Input addonBefore="标题" placeholder="大爷，求赐名" style={ { 'border': 'none' } } />
                </Col>
                <Col span={ 4 } offset={ 4 }>
                <Button type="primary" icon="notification" style={ { "float": "right" } } onClick={ this.handlePublish.bind(this) }>发表</Button>
                </Col>
              </Row>
              <Editor getHtml={ this.getArticleHtml.bind(this) }></Editor>
              { this.arcticleInfoForm() }
            </div>

            );
    }
}


export default EditAtricle;

