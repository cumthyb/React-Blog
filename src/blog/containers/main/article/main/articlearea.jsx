import React, { Component } from 'react';
import ArticleBanner from "./articlebanner.jsx";
import ArticleList from "./articlelist.jsx";
import ArticlePaging from "./articlepaging.jsx"
import { connect } from 'react-redux'
import "../index.css"

class ArticleArea extends Component {

    render() {
        const currentpage = this.props.currentpage ? this.props.currentpage : 1;
        const articlesOnpage = this.props.articlelist.slice(currentpage * 10 - 10, currentpage * 10 - 1)
        return (
            <div>
              <ArticleBanner></ArticleBanner>
              <ArticleList articles={ articlesOnpage }></ArticleList>
              <ArticlePaging total={ this.props.articlelist.length }></ArticlePaging>
            </div>
            );
    }
}

const mapStateToProps = (state) => {
    var currentpage = state.reducer_turnpage.currentpage;
    console.log("当前页:" + currentpage);
    return {
        currentpage: currentpage
    }
}


export default connect(mapStateToProps, null)(ArticleArea) ;