import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, NavLink, Redirect, Route, Switch } from "react-router-dom";
import imgHotel from "../../../assets/images/444.jpg";
import { getAllCityService } from "../../../services/CityService";
import { getHotelByCityService } from '../../../services/HotelService';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrHotels: [],
      cities: [],
    };
  }

  async componentDidMount() {
    let city_id = this.props.location.state;
    await this.getHotelByCity(city_id);
    await this.getAllCities();
  }

  getHotelByCity = async (city_id) => {
    let response = await getHotelByCityService(city_id);
    
    if (response && response.errCode === 0) {
      this.setState({
        arrHotels: response.hotels,
      });
    }
  };

  getAllCities = async () => {
    let response = await getAllCityService();
    if (response && response.errCode === 0) {
      this.setState({
        cities: response.cities,
      });
    }
  };

  render() {
    let arrHotels = this.state.arrHotels;
    let cities = this.state.cities;

    return (
      <>
        <div className="search-page">
          <div className="container">
            <div className="search-grids">
              <div className="col-md-3 search-grid-left">
                <div className="search-hotel">
                  <h3 className="sear-head">Name contains</h3>
                  <form>
                    <input
                      type="text"
                      defaultValue="Hotel name..."
                      onfocus="this.value = '';"
                      onblur="if (this.value == '') {this.value = 'Hotel name...';}"
                      required
                    />
                    <input type="submit" defaultValue=" " />
                  </form>
                </div>
                <div className="range">
                  <h3 className="sear-head">Average nightly rate</h3>
                  <ul className="dropdown-menu6">
                    <li>
                      <div id="slider-range" />
                      <input
                        type="text"
                        id="amount"
                        style={{
                          border: 0,
                          color: "#ffffff",
                          fontWeight: "normal",
                        }}
                      />
                    </li>
                  </ul>
                  {/**/}
                </div>
                <div className="range-two">
                  <h3 className="sear-head">Distance from</h3>
                  <select className="sel">
                    <option value>Enter City Center</option>
                    <option value>Park View Center</option>
                    <option value>E Park Road</option>
                    <option value>Silver City</option>
                  </select>
                  <ul className="dropdown-menu5">
                    <li>
                      <div id="slider-range1" />
                      <input
                        type="text"
                        id="amount1"
                        style={{
                          border: 0,
                          color: "#ffffff",
                          fontWeight: "normal",
                        }}
                      />
                    </li>
                  </ul>
                  {/**/}
                </div>
                <div className="single-star-bottom">
                  <h3 className="sear-head">Star rating</h3>
                  <input type="checkbox" id="nike" defaultValue />
                  <label htmlFor="nike">
                    <span />
                    <b>
                      <img src="images/st2.png" alt="" />
                    </b>
                  </label>
                  <input type="checkbox" id="nike1" defaultValue />
                  <label htmlFor="nike1">
                    <span />
                    <b>
                      <img src="images/st3.png" alt="" />
                    </b>
                  </label>
                  <input type="checkbox" id="nike2" defaultValue />
                  <label htmlFor="nike2">
                    <span />
                    <b>
                      <img src="images/st4.png" alt="" />
                    </b>
                  </label>
                  <input type="checkbox" id="nike3" defaultValue />
                  <label htmlFor="nike3">
                    <span />
                    <b>
                      <img src="images/st5.png" alt="" />
                    </b>
                  </label>
                  <input type="checkbox" id="nike4" defaultValue />
                  <label htmlFor="nike4">
                    <span />
                    <b>
                      <img src="images/st.png" alt="" />
                    </b>
                  </label>
                </div>
                <div className="menu-grid">
                  <ul className="menu_drop">
                    <li className="item1">
                      <a >
                        <span
                          className="glyphicon glyphicon-chevron-down"
                          aria-hidden="true"
                        />
                        Features
                      </a>
                      <ul>
                        <li className="subitem1">
                          <a >Roll-in shower </a>
                        </li>
                        <li className="subitem2">
                          <a >Comfortable bathroom</a>
                        </li>
                        <li className="subitem3">
                          <a >WI-FI facility</a>
                        </li>
                      </ul>
                    </li>
                    <li className="item2">
                      <a >
                        <span
                          className="glyphicon glyphicon-chevron-down"
                          aria-hidden="true"
                        />
                        Facilities
                      </a>
                      <ul>
                        <li className="subitem1">
                          <a >Childcare </a>
                        </li>
                        <li className="subitem2">
                          <a >Gym</a>
                        </li>
                        <li className="subitem3">
                          <a >Bar</a>
                        </li>
                      </ul>
                    </li>
                    <li className="item3">
                      <a >
                        <span
                          className="glyphicon glyphicon-chevron-down"
                          aria-hidden="true"
                        />
                        Accommodation type
                      </a>
                      <ul>
                        <li className="subitem1">
                          <a >Resort</a>
                        </li>
                        <li className="subitem2">
                          <a >Hostel</a>
                        </li>
                        <li className="subitem3">
                          <a >Apartment</a>
                        </li>
                      </ul>
                    </li>
                    <li className="item4">
                      <a >
                        <span
                          className="glyphicon glyphicon-chevron-down"
                          aria-hidden="true"
                        />
                        Landmarks
                      </a>
                      <ul>
                        <li className="subitem1">
                          <a >Mexican City</a>
                        </li>
                        <li className="subitem2">
                          <a >Park View Center</a>
                        </li>
                        <li className="subitem3">
                          <a >Land Park Center</a>
                        </li>
                      </ul>
                    </li>
                    <li className="item5">
                      <a >
                        <span
                          className="glyphicon glyphicon-chevron-down"
                          aria-hidden="true"
                        />
                        Neighbourhood
                      </a>
                      <ul>
                        <li className="subitem1">
                          <a >Diamond Park Colony</a>
                        </li>
                        <li className="subitem2">
                          <a >E Park Road</a>
                        </li>
                        <li className="subitem3">
                          <a >lake View Center</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  {/* script for tabs */}
                  {/* script for tabs */}
                </div>
              </div>
              <div className="col-md-9 search-grid-right">
                {/* hotel */}
                {arrHotels &&
                  arrHotels.map((item, key) => {
                    return (
                      <div className="hotel-rooms">
                        <div className="hotel-left">
                          <a href="single.html">
                            <span
                              className="glyphicon glyphicon-bed"
                              aria-hidden="true"
                            />
                            {item.name}
                          </a>
                          <div className="hotel-left-grids">
                            <div className="hotel-left-one">
                              <a href="single.html">
                                <img src={imgHotel} alt="" />
                              </a>
                            </div>
                            <div className="hotel-left-two">
                              <div className="rating text-left">
                                <span>☆</span>
                                <span>☆</span>
                                <span>☆</span>
                                <span>☆</span>
                                <span>☆</span>
                              </div>
                              <a href="single.html">
                                <span
                                  className="glyphicon glyphicon-map-marker"
                                  aria-hidden="true"
                                />
                                {cities &&
                                  cities.map((itemCity, key) => {
                                    if (item.city_id == itemCity.id) {
                                      return <>{itemCity.name}</>;
                                    }
                                  })}
                              </a>
                              <p>
                                <span>Address: {item.address} </span>
                                <span> Hotline: {item.hotline}</span>
                              </p>
                            </div>
                            <div className="clearfix" />
                          </div>
                        </div>
                        <div className="hotel-right text-right">
                          <h4>
                            <span>$8,750</span> $4,850
                          </h4>
                          <p>Best price</p>
                          <Link to={{ pathname: "/page/room", state: item }}>
                            Continue
                          </Link>
                        </div>
                        <div className="clearfix" />
                      </div>
                    );
                  })}
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

export default connect(mapStateToProps, mapDispatchToProps)(Search);
