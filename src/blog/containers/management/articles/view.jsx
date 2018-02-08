import React from 'react';
import HtmlViewer from '../.../../../../components/richtexteditor/htmlviewer'
import { CONFIG } from '../../../static/dbconfig'
import axios from 'axios';
import { message } from 'antd'

class ArticleView extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            content: ''
        }
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

    componentWillMount(){
        let id=this.props.match.params.id;
        let promise=this.getAtricleByID(id);
        promise.then(content=>{
            console.log(content.content);
            this.setState({
                content:content.content
            })
        }).catch(err=>{
            message.info(err);
        })
    }

    render() {
        return (
            <HtmlViewer html={ this.state.content }></HtmlViewer>
            );
    }
}

export default ArticleView;