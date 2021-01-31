import React from 'react'
import {Editor, EditorState, RichUtils} from 'draft-js'

//块级样式
const BLOCK_TYPES = [
    {label: 'H1', style: 'header-one'},
    {label: 'H2', style: 'header-two'},
    {label: 'H3', style: 'header-three'},
    {label: 'H4', style: 'header-four'},
    {label: 'H5', style: 'header-five'},
    {label: 'H6', style: 'header-six'},
    {label: 'Blockquote', style: 'blockquote'},
    {label: 'UL', style: 'unordered-list-item'},
    {label: 'OL', style: 'ordered-list-item'},
    {label: 'Code Block', style: 'code-block'},
];

//行内
const INLINE_STYLES = [
    {label: 'Bold', style: 'BOLD'},
    {label: 'Italic', style: 'ITALIC'},
    {label: 'Underline', style: 'UNDERLINE'},
    {label: 'Monospace', style: 'CODE'},
];

function getBlockStyle(block) {
    if (block.getType() == 'blockquote') {
        return 'RichEditor-blockquote';
    }
    return '';
}

class StyleButton extends React.Component {
    constructor() {
        super();
        this.onToggle = this.onToggle.bind(this)
    }

    onToggle(event) {
        event.preventDefault();
        this.props.onToggle(this.props.style);
    }

    render() {
        return (
            <button className="btn btn-primary btn-sm" onClick={this.onToggle} style={{'margin-right': '3px'}}>
                {this.props.label}
            </button>
        );
    }
}

class BlockStyleButtons extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {BLOCK_TYPES.map(type =>
                    (<StyleButton
                        key={type.label}
                        label={type.label}
                        onToggle={this.props.onToggle}
                        style={type.style}
                    />))}
            </div>
        );
    }
}

class InlineStyleButtons extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {INLINE_STYLES.map(type =>
                    (<StyleButton
                        key={type.label}
                        label={type.label}
                        onToggle={this.props.onToggle}
                        style={type.style}
                    />))}
            </div>
        );
    }
}

class EditorArea extends React.Component {
    constructor(props) {
        super(props);
        this.state = {editorState: EditorState.createEmpty()};

        this.focus = () => this.editor.focus()
        this.onChange = editorState => this.setState({editorState});

        this.toggleBlockType = this.toggleBlockType.bind(this);
        this.toggleInlineStyle = this.toggleInlineStyle.bind(this);
    }

    toggleBlockType(blockType) {
        this.onChange(RichUtils.toggleBlockType(
            this.state.editorState,
            blockType
        ));
    }

    toggleInlineStyle(inlineStyle) {
        this.onChange(RichUtils.toggleInlineStyle(
            this.state.editorState,
            inlineStyle
        ));
    }

    render() {
        const {editorState} = this.state;
        return (
            <div>
                <div className="row">
                    <div className="col-xs-12 col-sm-12">
                        <input type="text" className="form-control" id="title" placeholder="请输入标题"/>
                    </div>
                </div>
                <h1></h1>
                <div className="row">
                    <div className="col-xs-12 col-sm-12">
                        <BlockStyleButtons editorState={editorState} onToggle={this.toggleBlockType}/>
                        <h6></h6>
                        <InlineStyleButtons editorState={editorState} onToggle={this.toggleInlineStyle}/>
                        <hr/>
                        <div onClick={this.focus}>
                            <Editor
                                blockStyleFn={getBlockStyle}
                                editorState={editorState}
                                onChange={this.onChange}
                                placeholder='请输入正文...'
                                ref={(c) => {
                                    this.editor = c
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default EditorArea