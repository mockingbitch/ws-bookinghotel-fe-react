import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, NavLink, Redirect, Route, Switch } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import { getAllCityService } from '../../../services/CityService';

class Banner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cities: [],
      city: ''
    };
  }

  async componentDidMount() {
    await this.getAllCities();
  }

  getAllCities = async () => {
    let response = await getAllCityService();
    if (response && response.errCode === 0) {
      this.setState({
        cities: response.cities,
      });
    }
  };

  handleOnChange = (e, id) => {
    let twinState = { ...this.state };
    twinState[id] = e.target.value;
    this.setState({
      ...twinState,
    });
  };

  render() {
    let isLoggedIn = this.props.isLoggedIn;
    let cities = this.state.cities;

    return (
      <>
        <div className="banner">
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
                    <a  className="f1" />
                  </li>
                  <li>
                    <a  className="f2" />
                  </li>
                  <li>
                    <a  className="f3" />
                  </li>
                  <li>
                    <a  className="f4" />
                  </li>
                  <li>
                    <a href="" className="f4" />
                  </li>
                </ul>
              </div>
              <div className="clearfix" />
            </div>
            <div className="banner-info">
              <div id="top" className="callbacks_container">
                <ul className="rslides" id="slider3">
                  <li>
                    <div className="banner-text">
                      <h3>WELCOME</h3>
                      <h4>EXCELLENT SERVICES WITH BEST PRICE</h4>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="banner-bottom" style={{ borderRadius: "15px" }}>
              <div className="droop-down">
                <div className="droop">
                  <div className="sort-by">
                    <select onChange={(e) => this.handleOnChange(e, 'city')}>
                      <option value>CHOOSE WHERE YOU WANNA GO</option>
                      {cities && cities.map((item, key) => {
                        return <option value={item.id}>{item.name}</option>
                      })}
                    </select>
                  </div>
                </div>
                <div className="radio-btns">
                  <div className="swit">
                    <div className="check_box">
                      <div className="radio">
                        <label>
                          <input type="radio" name="radio" defaultChecked />
                          <i />
                          Daily
                        </label>
                      </div>
                    </div>
                    <div className="check_box">
                      <div className="radio">
                        <label>
                          <input type="radio" name="radio" />
                          <i />
                          Hourly
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="search">
                  <button className="btn btn-danger">
                  <Link to={{ pathname: "/page/search", state: this.state.city }}>Search</Link>
                  </button>
                </div>
                <div className="clearfix" />
              </div>
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
