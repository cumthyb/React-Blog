import React, { Component } from 'react';
import { Row, Col, Card } from 'antd';
import {Link} from 'react-router-dom';
import "./index.css"
const { Meta } = Card;

class WellCome extends Component {


    handNavItemClick(){
     return <Link to="/home" />;
    }

    render() {
        return (
            <Row style={ { "height": "100%" } }>
              <Col span={ 12 } style={ { "height": "100%" } }>
              <div className="home-container-left"></div>
              <div className="log">
                <Card 
                hoverable 
                style={ { width: "100%",background:"none"}  } 
                cover={<img alt="example" src={ require('./dog.jpg') } /> } 
                bordered = {false} 
                >
                  <Meta title="波帝伯爵" description="公无渡河，公竟渡河！" />
                </Card>
              </div>
              </Col>
              <Col span={ 12 } style={ { "height": "100%" } }>
              <div className="home-container-right">
              <Row gutter={32} style={ { "margin": "40px" } } >
                 <Col span={12}>  <Link to="/home"> <div className="navitem">首页 </div></Link>   </Col>
                 <Col span={12}>  <Link to="/articles"> <div className="navitem">文章</div></Link> </Col>
              </Row>
              <Row gutter={32} style={ { "margin": "40px" } }>
                 <Col span={12}> <Link to="/projects"> <div className="navitem">项目</div></Link> </Col>
                 <Col span={12}> <Link to="/about"> <div className="navitem">关于</div></Link> </Col>
              </Row >
              </div>
              </Col>
            </Row>
        )
    }
}



export default WellCome;