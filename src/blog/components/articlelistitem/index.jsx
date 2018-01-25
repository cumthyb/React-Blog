import React, { Component } from 'react';
import { Icon } from 'antd';
import { Link } from 'react-router-dom';
import "./index.css"

class ArticleListItem extends Component {

  render() {

    var tags = this.props.article.tag.split(';');

    return (
      <div className="article-list-item-card zoomIn animated">
        <div className="article-list-item-card-title">
          <Link to={ `/articles/${this.props.article.id}` }>
          { this.props.article.title }
          </Link>
        </div>
        <div className="article-list-item-card-metainfo">
          <Icon type="calendar" />
          <span className="article-list-item-card-label time">  { this.props.article.time }</span>
          <Icon type="bars" />
          <span className="article-list-item-card-label category">{ this.props.article.category }</span>
          <Icon type="tag-o" />
          { tags.map((tag, index) => {
              return <span className="article-list-item-card-label tag" key={ index }>{ tag }</span>
            }) }
        </div>
        <div className="article-list-item-card-desc">
          { this.props.article.desc }
        </div>
      </div>
      );
  }
}


export default ArticleListItem;