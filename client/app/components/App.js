import React from "react";
import Navigation from "components/UI/Navigation";
import RootModal from "containers/RootModal";

class App extends React.Component {
    render() {
        return (<div>
            <Navigation/>
            {this.props.children}
            <RootModal/>
        </div>);
    }
}

export default App;