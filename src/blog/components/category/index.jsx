import React, { Component } from 'react';
import { Icon } from 'antd';
import "./index.css"

class CategoryCard extends Component {
    constructor() {
        super();
    }

    render() {
        const categoryList = this.props.categories.sort((a, b) => b.sum - a.sum).map(
            item => {
                return <li key={ item.category }>
                         { item.category }<span>{ item.sum }</span></li>;
            });
        return (
            <div className="categorycard-container">
              <div className="categorycard-title">
                <Icon type="bars" />分类</div>
              <div className="categorycard-list">
                { categoryList }
              </div>
            </div>
            );
    }


}


export default CategoryCard