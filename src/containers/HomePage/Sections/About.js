import React, { Component } from 'react';
// import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './About.scss';
// import { FormattedMessage } from 'react-intl';

class About extends Component {

    render() {
        return (
            <React.Fragment>
                <div className='section-about'>
                    <div className='section-about-header'>
                        Đôi lời về website
                    </div>
                    <div className='section-about-content'>
                        <div className='content-left'>
                            <iframe width="853" height="480"
                                src="https://www.youtube.com/embed/ONyrc0jHb3A?list=RDONyrc0jHb3A"
                                title="YouTube video player" frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen>
                            </iframe>
                        </div>
                        <div className='content-right'>
                            <p>Lorem ipsum dolor sit amet</p>
                        </div>
                    </div>
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(About);
