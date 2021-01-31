import React from 'react'
import EditorArea from "../component/editor";

class Editor extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="media col-xs-12 col-sm-offset-2 col-sm-8">
                <nav className="navbar navbar-transparent"/>
                <EditorArea/>
            </div>
        );
    }
}

export default Editor