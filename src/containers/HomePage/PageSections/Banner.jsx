import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, NavLink, Redirect, Route, Switch } from "react-router-dom";

class Banner extends Component {
  render() {
    let isLoggedIn = this.props.isLoggedIn;

    return (
      <>
        <div className="banner page-head">
          <div className="container">
            <div className="header-nav">
              <div className="logo">
                <h1>
                  <a href="index.html">
                    <span
                      className="glyphicon glyphicon-home"
                      aria-hidden="true"
                    />
                    BookingHotel
                  </a>
                </h1>
              </div>
              <div className="navigation">
                <span className="menu">
                  <img src="images/menu.png" alt="" />
                </span>
                <nav className="cl-effect-11" id="cl-effect-11">
                  <ul className="nav1">
                    <li>
                      <Link
                        to="/"
                        style={{ textDecoration: "none" }}
                        data-hover="HOME"
                      >
                        HOME
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/about"
                        style={{ textDecoration: "none" }}
                        data-hover="ABOUT"
                      >
                        ABOUT
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/service"
                        style={{ textDecoration: "none" }}
                        data-hover="SERVICES"
                      >
                        SERVICES
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/booking"
                        style={{ textDecoration: "none" }}
                        data-hover="BOOKING"
                      >
                        BOOKING
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/contact"
                        style={{ textDecoration: "none" }}
                        data-hover="CONTACT"
                      >
                        CONTACT
                      </Link>
                    </li>
                    {(() => {
                      if (isLoggedIn) {
                        return (
                          <li>
                            <Link
                              to="/dashboard"
                              style={{ textDecoration: "none" }}
                              data-hover="DASHBOARD"
                            >
                              DASHBOARD
                            </Link>
                          </li>
                        );
                      } else {
                        return (
                          <li>
                            <Link
                              to="/login"
                              style={{ textDecoration: "none" }}
                              data-hover="LOGIN"
                            >
                              LOGIN
                            </Link>
                          </li>
                        );
                      }
                    })()}
                  </ul>
                </nav>
              </div>
              <div className="social-icons">
                <ul>
                  <li>
                    <a href="#" className="f1" />
                  </li>
                  <li>
                    <a href="#" className="f2" />
                  </li>
                  <li>
                    <a href="#" className="f3" />
                  </li>
                  <li>
                    <a href="#" className="f4" />
                  </li>
                </ul>
              </div>
              <div className="clearfix" />
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Banner);
