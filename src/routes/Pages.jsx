import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, NavLink, Redirect, Route, Switch } from "react-router-dom";
import * as actions from "../store/actions";
import "../assets/css/style.css";
import "../assets/css/homepage-font.css";
import Banner from "../containers/HomePage/PageSections/Banner";
import Footer from "../containers/HomePage/Sections/Footer";
import Booking from "../containers/HomePage/PageSections/Booking";
import Hotels from "../containers/HomePage/PageSections/Hotels";
import Rooms from "../containers/HomePage/PageSections/Rooms";
import Search from "../containers/HomePage/PageSections/Search";

class Pages extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { processLogout } = this.props;

    return (
      <>
        <Banner />
        <Switch>
          <Route path="/page/hotels" component={Hotels} />
          <Route path="/page/booking" component={Booking} />
          <Route path="/page/room" component={Rooms} />
          <Route path="/page/search" component={Search} />
        </Switch>
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

export default connect(mapStateToProps, mapDispatchToProps)(Pages);
