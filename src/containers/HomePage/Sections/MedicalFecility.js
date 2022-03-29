import React, { Component } from 'react';
// import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './MedicalFecility.scss';
import { FormattedMessage } from 'react-intl';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

class MedicalFecility extends Component {

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
                <div className='section-medical'>
                    <div className='section-medical-fecility'>
                        <div className='medical-fecility-container'>
                            <div className='medical-fecility-header'>
                                <span className='section-title'><FormattedMessage id={'medical-fecility.popular-specialties'} /></span>
                                <button className='btn-view-more'><FormattedMessage id={'medical-fecility.view-more'} /></button>
                            </div>
                            <div className='slide'>
                                <Slider {...settings}>
                                    <div className='img-content'>
                                        <div className='medical-fecility-image' />
                                        <span><FormattedMessage id={'medical-fecility.musculoskeletal'} /></span>
                                    </div>
                                    <div className='img-content'>
                                        <div className='medical-fecility-image' />
                                        <span><FormattedMessage id={'medical-fecility.ear-nose-throat'} /></span>
                                    </div>
                                    <div className='img-content'>
                                        <div className='medical-fecility-image' />
                                        <span><FormattedMessage id={'medical-fecility.pediatrics'} /></span>
                                    </div>
                                    <div className='img-content'>
                                        <div className='medical-fecility-image' />
                                        <span><FormattedMessage id={'medical-fecility.dermatology'} /></span>
                                    </div>
                                    <div className='img-content'>
                                        <div className='medical-fecility-image' />
                                        <span><FormattedMessage id={'medical-fecility.supersonic'} /></span>
                                    </div>
                                    <div className='img-content'>
                                        <div className='medical-fecility-image' />
                                        <span><FormattedMessage id={'medical-fecility.obstetrics-gynecology'} /></span>
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

export default connect(mapStateToProps, mapDispatchToProps)(MedicalFecility);
