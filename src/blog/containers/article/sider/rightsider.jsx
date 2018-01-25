import React, { Component } from 'react';
import CategoryCard from "../../../components/category/index.jsx"
import TagCard from "../../../components/tag/index.jsx"

class RightSider extends Component {

    constructor(props) {
        super(props);
        props.articlelist


        let m_categories = {};
        let s_tags = new Set();

        props.articlelist.map((item) => {
            m_categories[item["category"]] = m_categories[item["category"]] ? m_categories[item["category"]] + 1 : 1;
            s_tags.add(...item["tag"].split(";"))
        })

        // console.log(m_categories)

        let categories = [];
        let o = {};
        for (var key in m_categories) {
            o = {};
            o["category"] = key;
            o["sum"] = m_categories[key];
            categories.push(o);
        }

        this.state = {
            categories: categories,
            tags: [...s_tags]
        }

    // console.log(this.state.categories);
    // console.log(this.state.tags);
    }


    render() {


        return (
            <div>
              <div>RightSider</div>
              <CategoryCard categories={ this.state.categories }></CategoryCard>
              <TagCard tags={ this.state.tags }></TagCard>
            </div>
            );
    }
}


export default RightSider;