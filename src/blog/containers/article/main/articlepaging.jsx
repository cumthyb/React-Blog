import React, { Component } from 'react';
import { Pagination } from 'antd';
import { turnpage } from "../../../redux/actions/index";
import { connect } from 'react-redux'
import "../index.css"

class ArticlePaging extends Component {

    onChange = (pageNumber) => {
        console.log('Page: ', pageNumber);
        this.props.onTurnPage(
            pageNumber
        );
    }

    render() {
        return (
            <Pagination className="articles-paging" showQuickJumper defaultCurrent={ 1 } total={ this.props.total } onChange={ this.onChange } />
            );
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        onTurnPage: (currentpagenumber) => {
            dispatch(turnpage(currentpagenumber))
        }
    }
}

export default connect(null, mapDispatchToProps)(ArticlePaging) ;