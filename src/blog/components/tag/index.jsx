import React, { Component } from 'react';
import { Icon, Tag } from 'antd';
import Mock from 'mockjs';
import { Link } from 'react-router-dom';
import "./index.css"

class TagCard extends Component {
    constructor() {
        super();
    }

    render() {

        const tagList = [... new Set(this.props.tags)].map((item, index) => {
            return <Tag color={ Mock.Random.color() } key={ index } style={ { margin: "3px 5px" } }>
                     <Link to={ `tag/${item}` }>
                     { item }
                     </Link>
                   </Tag>
        });

        return (
            <div className="tagcard-container">
              <div className="tagcard-title">
                <Icon type="tag-o" />标签</div>
              <div className="tagcard-list">
                { tagList }
              </div>
            </div>
            );
    }


}


export default TagCard