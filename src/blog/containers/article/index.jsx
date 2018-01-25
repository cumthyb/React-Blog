import React, { Component } from 'react';
import { Row, Col } from 'antd';
import ArticleArea from "./main/articlearea.jsx";
import RightSider from "./sider/rightsider.jsx";
import MockData from "../../mock/mock"

class Articles extends Component {
    constructor() {
        super();
        const data=MockData();
        const article = {
            id: "10000",
            title: "React消息传递",
            time: "2018-01-21",
            category: "前端框架",
            tag: "React;Route;Redux",
            desc: "在React中，数据流动是单向的(单向数据流)，父组件通过props将数据传递到子组件，子组件根据父组件传递来的属性和组件内部状态来确定如何渲染"
        };

        data.unshift(article)

        this.state = {
            articles: data
        }
        console.log(data)
    }

    render() {
        const articlelist = this.state.articles;
        return (
            <div className="articles-container">
              <Row>
                <Col xs={ 24 } sm={ 24 } md={ 20 }>
                <ArticleArea articlelist={ articlelist } />
                </Col>
                <Col xs={ 0 } sm={ 0 } md={ 4 }>
                <RightSider articlelist={ articlelist } />
                </Col>
              </Row>
            </div>

        )
    }
}

export default Articles;