import React from 'react'
import { Modal, Button } from 'antd';
import { Form, Icon, Input, Checkbox, message } from 'antd';
import axios from 'axios';
import { CONFIG } from '../../../static/dbconfig'
import './index.less'
import { connect } from 'react-redux';
import { changeAdminAccess, closeUserLoginForm } from '../../../redux/actions/index'

const FormItem = Form.Item;

class FormLogin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: props.visible
        }
        this._isfirst = 1;
        this.props.onClose.bind(this);
    }

    handleOk = () => {
        this._loginCheck()
        this.setState({
            loading: true
        });
        setTimeout(() => {
            this.setState({
                visible: false
            });
        }, 3000);
        this.props.changeLoginVisible({
            loginFormVisible: false
        })
    }

    handleCancel() {
        this.setState({
            visible: false
        });
        console.log(this.props.onClose)
        this.props.onClose();
    }

    _loginCheck = () => {

        var That = this;
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                var user = {
                    username: values.userName,
                    password: values.password,
                }
                const url = `${CONFIG.server}/api/login`
                axios.post(url, user)
                    .then(function(response) {
                        if (response.data.status == -1) {
                            message.info(response.data.msg);
                        } else {
                            message.info("登陆成功");
                            sessionStorage.setItem('__token__', response.data.token);
                            sessionStorage.setItem('__username__', response.data.username);
                            That.props.changeAccess({
                                assessToAdmin: true
                            })
                        }
                    })
                    .catch(function(error) {
                        console.log(error);
                    });
            }
        });
    }

    componentWillReceiveProps(nextproops) {
        if (this._isfirst % 2 === 1) {
            this.setState({
                visible: nextproops.visible
            })
        }
        this._isfirst++;
    }

    render() {
        const {getFieldDecorator} = this.props.form;
        const {visible, loading} = this.state;
        return (
            <Modal style={ { textAlign: "center" } } destroyOnClose={ true } cancelText="取消" okText="登陆" visible={ visible } title="管理端登陆验证" onOk={ this.handleOk.bind(this) }
              onCancel={ this.handleCancel.bind(this) }>
              <Form onSubmit={ this.handleSubmit } className="login-form">
                <FormItem>
                  { getFieldDecorator('userName', {
                        rules: [{
                            required: true,
                            message: 'Please input your username!'
                        }],
                    })(
                        <Input prefix={ <Icon type="user" style={ { color: 'rgba(0,0,0,.25)' } } /> } placeholder="Username" />
                    ) }
                </FormItem>
                <FormItem>
                  { getFieldDecorator('password', {
                        rules: [{
                            required: true,
                            message: 'Please input your Password!'
                        }],
                    })(
                        <Input prefix={ <Icon type="lock" style={ { color: 'rgba(0,0,0,.25)' } } /> } type="password" placeholder="Password" />
                    ) }
                </FormItem>
                <FormItem>
                  { getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                    })(
                        <Checkbox>Remember me</Checkbox>
                    ) }
                  <a className="login-form-forgot" href="">Forgot password</a> Or <a href="">register now!</a>
                </FormItem>
              </Form>
            </Modal>
            );
    }
}

const UserLoginFrom = Form.create()(FormLogin);

const mapDispatchToProps = (dispatch) => {
    return {
        changeAccess: (assessToAdmin) => {
            dispatch(changeAdminAccess(assessToAdmin))
        }
    }
}

export default connect(null, mapDispatchToProps)(UserLoginFrom) ;

