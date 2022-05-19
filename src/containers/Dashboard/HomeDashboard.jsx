import React, { Component } from 'react';
import { BrowserRouter, Switch, Link, Route } from 'react-router-dom';
import { connect } from 'react-redux';

class HomeDashboard extends Component {

    render() {
        const { processLogout } = this.props;

        return (
            <h1>This is home page</h1>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeDashboard);
