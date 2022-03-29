import React, { Component } from 'react';
// import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './Specialty.scss';
import { FormattedMessage } from 'react-intl';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

class Specialty extends Component {

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
                <div className='section'>
                    <div className='section-specialty'>
                        <div className='specialty-container'>
                            <div className='specialty-header'>
                                <span className='section-title'><FormattedMessage id={'specialty.popular-specialties'} /></span>
                                <button className='btn-view-more'><FormattedMessage id={'specialty.view-more'} /></button>
                            </div>
                            <div className='slide'>
                                <Slider {...settings}>
                                    <div className='img-content'>
                                        <div className='specialty-image' />
                                        <span><FormattedMessage id={'specialty.musculoskeletal'} /></span>
                                    </div>
                                    <div className='img-content'>
                                        <div className='specialty-image' />
                                        <span><FormattedMessage id={'specialty.ear-nose-throat'} /></span>
                                    </div>
                                    <div className='img-content'>
                                        <div className='specialty-image' />
                                        <span><FormattedMessage id={'specialty.pediatrics'} /></span>
                                    </div>
                                    <div className='img-content'>
                                        <div className='specialty-image' />
                                        <span><FormattedMessage id={'specialty.dermatology'} /></span>
                                    </div>
                                    <div className='img-content'>
                                        <div className='specialty-image' />
                                        <span><FormattedMessage id={'specialty.supersonic'} /></span>
                                    </div>
                                    <div className='img-content'>
                                        <div className='specialty-image' />
                                        <span><FormattedMessage id={'specialty.obstetrics-gynecology'} /></span>
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

export default connect(mapStateToProps, mapDispatchToProps)(Specialty);
