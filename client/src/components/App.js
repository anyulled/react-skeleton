import React from "react"
import DbNavigation from "./UI/DbNavigation"
import {Table, Grid, Row, Col, PageHeader, Pagination} from "react-bootstrap"

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    handleChange() {

    }

    render() {
        return (<div>
            <DbNavigation/>
			{this.props.children}
        </div>);
    }
}

export default App;