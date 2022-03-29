import React, { Component } from 'react';
// import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './HomeHeader.scss';
import logo from '../../assets/images/logo-bookingcare.svg';
import { FormattedMessage } from 'react-intl';
import { LANGUAGES } from '../../utils';
import { changeLanguageApp } from '../../store/actions';

class HomeHeader extends Component {

    handleLanguage = (language) => {
        this.props.changeLanguageAppRedux(language);
    }

    render() {
        let language = this.props.language;
        // console.log('lang: ', language);
        return (
            <React.Fragment>
                <div className='home-header-container'>
                    <div className='home-header'>
                        <div className='left-content'>
                            <i className='fas fa-bars menu-icon'></i>
                            <a href='#'><img width='200px' height='160px' src={logo} alt='logo' /></a>
                        </div>
                        <div className='center-content'>
                            <div className='menu-content'>
                                <div><b><FormattedMessage id='home-header.specialty' /></b></div>
                                <div className='sub-title'><FormattedMessage id='home-header.search-doctor' /></div>
                            </div>
                            <div className='menu-content'>
                                <div><b><FormattedMessage id='home-header.health-facilities' /></b></div>
                                <div className='sub-title'><FormattedMessage id='home-header.choose-hospital-clinic' /></div>
                            </div>
                            <div className='menu-content'>
                                <div><b><FormattedMessage id='home-header.doctor' /></b></div>
                                <div className='sub-title'><FormattedMessage id='home-header.choose-a-good-doctor' /></div>
                            </div>
                            <div className='menu-content'>
                                <div><b><FormattedMessage id='home-header.examination-package' /></b></div>
                                <div className='sub-title'><FormattedMessage id='home-header.general-health-check' /></div>
                            </div>
                        </div>
                        <div className='right-content'>
                            <div className='support'><i className='fas fa-question-circle'></i><FormattedMessage id='home-header.support' /></div>
                            <div className={language === LANGUAGES.VI ? 'flag-vietnamese active' : 'flag-vietnamese'}>
                                <span onClick={() => this.handleLanguage(LANGUAGES.VI)}>Vi</span>
                            </div>
                            <div className={language === LANGUAGES.EN ? 'flag-english active' : 'flag-english'}>
                                <span onClick={() => this.handleLanguage(LANGUAGES.EN)}>En</span>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        changeLanguageAppRedux: (language) => dispatch(changeLanguageApp(language))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
