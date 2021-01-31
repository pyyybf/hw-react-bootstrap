import React from 'react'
import Media from "../component/media";

class Home extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="media col-xs-12 col-sm-offset-2 col-sm-8">
                <Media/>
            </div>
        );
    }
}

export default Home