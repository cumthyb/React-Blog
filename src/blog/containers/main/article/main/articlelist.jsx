import React, { Component } from 'react';
import ArticleListItem from "../../../../components/articlelistitem/index.jsx"


class ArticleList extends Component {

  render() {
    const articles=this.props.articles;
    return (
      <div>
        { articles.map(function(item, index) {
            return <ArticleListItem article={ item } key={ index }></ArticleListItem>
          }) }
      </div>
      );
  }
}

export default ArticleList;