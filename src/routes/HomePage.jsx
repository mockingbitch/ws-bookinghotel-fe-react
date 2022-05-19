import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, NavLink, Redirect, Route, Switch } from "react-router-dom";
import * as actions from "../store/actions";
import "../assets/css/style.css";
// import "../assets/css/homepage-font.css";
import Banner from "../containers/HomePage/Sections/Banner";
import Welcome from "../containers/HomePage/Sections/Welcome";
import Facilities from "../containers/HomePage/Sections/Facilities";
import Feature from "../containers/HomePage/Sections/Feature";
import Gallery from "../containers/HomePage/Sections/Gallery";
import Footer from "../containers/HomePage/Sections/Footer";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { processLogout } = this.props;

    return (
      <>
        <style src="../assets/css/bootstrap.css" dangerouslySetInnerHTML={{ __html: "" }} />
        <Banner />
        <Welcome />
        <Facilities />
        <Feature />
        <Gallery />
        <Footer />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    processLogout: () => dispatch(actions.processLogout()),
    // changeLanguageAppRedux: (language) => dispatch(changeLanguageApp(language)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
