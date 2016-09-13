import React from "react"
import Navigation from "./UI/Navigation"
import RootModal from "../containers/RootModal";

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
			<RootModal/>
        </div>);
    }
}

export default App;