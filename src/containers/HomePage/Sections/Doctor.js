import React, { Component } from 'react';
// import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './Doctor.scss';
import { FormattedMessage } from 'react-intl';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

class Doctor extends Component {

    render() {
        let settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1
        }

        return (
            <React.Fragment>
                <div className='section-outstanding-doctor'>
                    <div className='section-doctor'>
                        <div className='doctor-container'>
                            <div className='doctor-header'>
                                <span className='section-title'><FormattedMessage id={'doctor.popular-specialties'} /></span>
                                <button className='btn-view-more'><FormattedMessage id={'doctor.view-more'} /></button>
                            </div>
                            <div className='slide'>
                                <Slider {...settings}>
                                    <div className='img-content'>
                                        <div className='doctor-image' />
                                        <span><FormattedMessage id={'doctor.musculoskeletal'} /></span>
                                    </div>
                                    <div className='img-content'>
                                        <div className='doctor-image' />
                                        <span><FormattedMessage id={'doctor.ear-nose-throat'} /></span>
                                    </div>
                                    <div className='img-content'>
                                        <div className='doctor-image' />
                                        <span><FormattedMessage id={'doctor.pediatrics'} /></span>
                                    </div>
                                    <div className='img-content'>
                                        <div className='doctor-image' />
                                        <span><FormattedMessage id={'doctor.dermatology'} /></span>
                                    </div>
                                    <div className='img-content'>
                                        <div className='doctor-image' />
                                        <span><FormattedMessage id={'doctor.supersonic'} /></span>
                                    </div>
                                    <div className='img-content'>
                                        <div className='doctor-image' />
                                        <span><FormattedMessage id={'doctor.obstetrics-gynecology'} /></span>
                                    </div>
                                </Slider>
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
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Doctor);
