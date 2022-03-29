import React, { Component } from 'react';
// import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import HomeHeader from './HomeHeader';
import Banner from './Sections/Banner';
import Specialty from './Sections/Specialty';
import MedicalFecility from './Sections/MedicalFecility';
import Doctor from './Sections/Doctor';
import About from './Sections/About';
import HomeFooter from './HomeFooter';
class HomePage extends Component {

    render() {
        return (
            <div>
                <HomeHeader />
                <Banner />
                <Specialty />
                <MedicalFecility />
                <Doctor />
                <About />
                <HomeFooter />
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
