import React from 'react'
import { Modal, Button } from 'antd';

class FormLogin extends React.Component {

    constructor(props) {
        super();
        this.state = {
            loading: props.loading,
            visible: props.visible,
        }
    }

    handleOk = () => {
        console.log("Click OK")
        this.setState({
            loading: true
        });
        setTimeout(() => {
            this.setState({
                loading: false,
                visible: false
            });
        }, 3000);
    }

    handleCancel = () => {
        console.log("Click Cancle")

        this.setState({
            visible: false
        });
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            loading: nextProps.loading,
            visible: nextProps.visible
        });
    }

    render() {
        console.log(this.state)
        const { visible, loading } = this.state;
        return (
            <Modal cancelText="取消" okText="登陆" visible={ visible } title="Title" onOk={ this.handleOk.bind(this) } onCancel={ this.handleCancel.bind(this) } 
            // footer={ [<Button key="back" onClick={ this.handleCancel.bind(this) }>Return</Button>,
            // <Button key="submit" type="primary" loading={ loading } onClick={ this.handleOk.bind(this) }> Submit </Button>,] }
            >
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
            </Modal>

            );
    }
}


export default FormLogin;