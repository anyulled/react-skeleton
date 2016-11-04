import React from "react";
import { connect } from "react-redux";
import * as userActions from "../actions/users/users";
import * as modalActions from "../actions/modal/modal";
import {Button} from "react-bootstrap";
import ButtonWithTooltip from "../components/ButtonWithTooltip";

const mapStateToProps = (state, ownProps) => {
    return {
        hasTooltip: state.hasTooltip,
        text: state.text,
        tooltip: state.tooltip,
        type: state.type,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onAddUserClick: () => {
            dispatch(modalActions.modalNewUser());
        }
    };
};

var AddUserButtonContainer = React.createClass({
    getInitialState: function () {
        console.log ('AddUserButtonContainer::getInitialState');
        return {
            hasTooltip: false,
            text: 'Add user (default)',
            tooltip: '',
            type: 'primary'
        }
    },
    componentWillMount: function () {
        console.log ('AddUserButtonContainer::componentWillMount');
    },
    componentDidMount: function () {
        console.log ('AddUserButtonContainer::componentDidMount');
//        userActions.getButtonInfo('add')
//            .then(function (buttonInfo) {
//                console.log('buttonInfo: ', buttonInfo);
//                this.setState ({
//                    hasTooltip: buttonInfo.hasTooltip,
//                    text: buttonInfo.text,
//                    tooltip: buttonInfo.tooltip,
//                    type: buttonInfo.type
//                })}.bind(this))
//            .catch (function (err) {
//                console.log(err);
//            })
        this.setState ({
            hasTooltip: true,
            text: 'Add user',
            tooltip: 'Add a new user',
            type: 'primary'
        })
    },
    componentWillReceiveProps: function () {
        console.log ('AddUserButtonContainer::componentWillReceiveProps');
    },
    componentWillUnMount: function () {
        console.log ('AddUserButtonContainer::componentWillUnMount');
    },
    handleToogleTooltip: function (e) {
        console.log ('AddUserButtonContainer::handleToogleTooltip');
        let show = this.state.show;
        let placements = this.state.placements;
        let placement = this.state.placement;
        
        if (!show) {
            show = true;
        } else {
            show = false;
        }
        return this.setState({ target: e.target, show, placement });
    },
    render: function () {
        console.log ('AddUserButtonContainer::render');
        return (
            <ButtonWithTooltip hasTooltip={this.state.hasTooltip}
                               text={this.state.text}
                               tooltip={this.state.tooltip}
                               type={this.state.type}
                               onAddUserClick={this.props.onAddUserClick}
                               onToggleTooltip={this.handleToogleTooltip}
                               show={this.state.show}
                               target={this.state.target}
            />
        );
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddUserButtonContainer);
