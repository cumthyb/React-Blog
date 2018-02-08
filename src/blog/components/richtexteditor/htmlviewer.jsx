import React, { Component } from 'react';
import './index.css';

class HtmlViewer extends Component {
  render() {
    return (
      <div className="quill">
        <div className="ql-container ql-snow" style={ { border: "none" } }>
          <div className="ql-editor">
            <div dangerouslySetInnerHTML={ { __html: this.props.html } }></div>
          </div>
        </div>
      </div>
      );
  }
}

export default HtmlViewer;