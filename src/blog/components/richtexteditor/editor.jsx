import React, { Component } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './index.css';

class RichTextEditor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editorHtml: '',
            theme: 'snow'
        }
        this.refDom=null;
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(html) {
        this.setState({
            editorHtml: html
        });
        this.props.getHtml(html);
        console.log(this.refDom.getEditor().getFormat())
    }

    modules = {
        toolbar: [
            ['bold', 'italic', 'underline', 'strike'], // toggled buttons
            ['blockquote', 'code-block'],

            [{
                'header': 1
            }, {
                'header': 2
            }], // custom button values
            [{
                'list': 'ordered'
            }, {
                'list': 'bullet'
            }],
            [{
                'script': 'sub'
            }, {
                'script': 'super'
            }], // superscript/subscript
            [{
                'indent': '-1'
            }, {
                'indent': '+1'
            }], // outdent/indent
            [{
                'direction': 'rtl'
            }], // text direction

            [{
                'size': ['small', false, 'large', 'huge']
            }], // custom dropdown
            [{
                'header': [1, 2, 3, 4, 5, 6, false]
            }],

            [{
                'color': []
            }, {
                'background': []
            }], // dropdown with defaults from theme
            [{
                'font': []
            }],
            [{
                'align': []
            }],
            ['link', 'image', 'video'],

            ['clean']
        ],
        clipboard: {
            // toggle to add extra line breaks when pasting HTML:
            matchVisual: false,
        }
    }

    /* 
     * Quill editor formats
     * See https://quilljs.com/docs/formats/
     */
    formats =[
        'header', 'font', 'size', 'background', 'color', 'script', 'underline',
        'bold', 'italic', 'underline', 'strike', 'code',
        'list', 'bullet', 'indent', 'align', 'direction', 'header', 'blockquote', 'code-block',
        'link', 'image', 'video'
    ];

    render() {
        return (
            <ReactQuill theme={ this.state.theme } onChange={ this.handleChange } value={ this.state.editorHtml } modules={ this.modules } formats={ this.formats } bounds={ '.app' }
              placeholder={ "RichTextEditor---react-quill" } 
              ref={(node) => this.refDom = node}/>
            );
    }
}


export default RichTextEditor;