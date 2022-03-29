import React, { Component } from 'react';
// import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './HomeFooter.scss';
// import { FormattedMessage } from 'react-intl';

class HomeFooter extends Component {

    render() {
        return (
            <React.Fragment>
                <footer>
                    <p>Author: Jarvis Phong Trần<br />
                        <a href="mailto:hege@example.com">jarvis.ejr@gmail.com</a></p>
                </footer>
            </React.Fragment>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter);
