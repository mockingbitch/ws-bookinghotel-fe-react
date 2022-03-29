import React, { Component } from 'react';
// import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './Banner.scss';
import { FormattedMessage } from 'react-intl';

class Banner extends Component {

    render() {
        return (
            <React.Fragment>
                <div className='home-banner'>
                    <div className='search'>
                        <div className='search-area'>
                            <h1>
                                <FormattedMessage id={'banner.medical-background'} />
                                <br />
                                <b><FormattedMessage id={'banner.comprehensive-health-care'} /></b>
                            </h1>
                            <div className='search-form'>
                                <i className='fas fa-search'></i>
                                <input />
                            </div>
                        </div>
                    </div>
                    <div className='options'>
                        <ul>
                            <li>
                                <a href='' className='open-window'>
                                    <div className='service chuyen-khoa'></div>
                                    <FormattedMessage id={'banner.examination'} />
                                    <br />
                                    <FormattedMessage id={'banner.specialty'} />
                                </a>
                            </li>
                            <li>
                                <a href='' className='open-window'>
                                    <div className='service tu-xa'></div>
                                    <FormattedMessage id={'banner.examination'} />
                                    <br />
                                    <FormattedMessage id={'banner.remote'} />
                                </a>
                            </li>
                            <li>
                                <a href='' className='open-window'>
                                    <div className='service tong-quat'></div>
                                    <FormattedMessage id={'banner.examination'} />
                                    <br />
                                    <FormattedMessage id={'banner.generality'} />
                                </a>
                            </li>
                            <li>
                                <a href='' className='open-window'>
                                    <div className='service xet-nghiem'></div>
                                    <FormattedMessage id={'banner.test'} />
                                    <br />
                                    <FormattedMessage id={'banner.medical'} />
                                </a>
                            </li>
                            <li>
                                <a href='' className='open-window'>
                                    <div className='service suc-khoe'></div>
                                    <FormattedMessage id={'banner.health'} />
                                    <br />
                                    <FormattedMessage id={'banner.mental'} />
                                </a>
                            </li>
                            <li>
                                <a href='' className='open-window'>
                                    <div className='service nha-khoa'></div>
                                    <FormattedMessage id={'banner.examination'} />
                                    <br />
                                    <FormattedMessage id={'banner.dental'} />
                                </a>
                            </li>
                            <li>
                                <a href='' className='open-window'>
                                    <div className='service phau-thuat'></div>
                                    <FormattedMessage id={'banner.package'} />
                                    <br />
                                    <FormattedMessage id={'banner.surgery'} />
                                </a>
                            </li>
                            <li>
                                <a href='' className='open-window'>
                                    <div className='service san-pham-y-te'></div>
                                    <FormattedMessage id={'banner.products'} />
                                    <br />
                                    <FormattedMessage id={'banner.medical'} />
                                </a>
                            </li>
                        </ul>
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

export default connect(mapStateToProps, mapDispatchToProps)(Banner);
