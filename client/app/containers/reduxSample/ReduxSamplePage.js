import React from "react";
import { connect } from 'react-redux';

import {Button} from "react-bootstrap";

import { fetchReduxSampleInfo } from '../../actions/reduxSample/reduxSample';

const ReduxSamplePage = React.createClass({
    componentDidMount() {
        setTimeout(function() {
            this.props.dispatch(fetchReduxSampleInfo());
        }.bind(this), 2000);
    },
    render () {
        return ( <Button bsStyle={this.props.style} ref='target'>{this.props.name}</Button> );
    }
});

function mapStateToProps(state) {
   return {
       name: state.reduxSample.name,
       style: state.reduxSample.style
   };
}

export default connect(mapStateToProps)(ReduxSamplePage);
