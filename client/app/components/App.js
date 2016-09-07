import React from "react"
import Navigation from "./UI/Navigation"

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    handleChange() {

    }

    render() {
        return (<div>
            <Navigation/>
            {this.props.children}
        </div>);
    }
}

export default App;