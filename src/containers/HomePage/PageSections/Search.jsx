import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, NavLink, Redirect, Route, Switch } from "react-router-dom";
import imgHotel from "../../../assets/images/444.jpg";
import { getAllCityService } from "../../../services/CityService";
import { getHotelByCityService } from '../../../services/HotelService';
import { searchRoomService } from '../../../services/RoomService';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrHotels: [],
      cities: [],
      hotel_name_search: '',
      room_name_search: '',
      min_price_search: '',
      max_price_search: '',
      start_date_search: '',
      end_date_search: ''
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

  handleOnChange = (e, id) => {
    let twinState = { ...this.state };
    twinState[id] = e.target.value;
    this.setState({
      ...twinState,
    });
  };

  searchRoom = async () => {
    let response = await searchRoomService(
      this.state.hotel_name_search, 
      this.state.room_name_search, 
      this.state.min_price_search, 
      this.state.max_price_search, 
      this.state.start_date_search, 
      this.state.end_date_search);
    if (response && response.errCode === 0) {
      this.setState({
        rooms: response.rooms
      })
    }
  }

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
                  <h3 className="sear-head">Name contains:</h3>
                    <input
                      type="text"
                      placeholder="Hotel name..."
                      onChange={(e) => this.handleOnChange(e, "hotel_name_search")}
                    />
                    <input
                      type="text"
                      placeholder="Room name..."
                      onChange={(e) => this.handleOnChange(e, "room_name_search")}
                    />
                    <input
                      type="text"
                      placeholder="Min Price"
                      onChange={(e) => this.handleOnChange(e, "min_price_search")}
                    />
                    <input
                      type="text"
                      placeholder="Max Price"
                      onChange={(e) => this.handleOnChange(e, "max_price_search")}
                    />
                    <input
                      type="date"
                      onChange={(e) => this.handleOnChange(e, "start_date_search")}
                    />
                    <input
                      type="date"
                      className="datepicker"
                      onChange={(e) => this.handleOnChange(e, "end_date_search")}
                    />
                    <br />
                    <button className="btn btn-primary" onClick={() => this.searchRoom()}>Submit</button> 
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
                      <a href="#">
                        <span
                          className="glyphicon glyphicon-chevron-down"
                          aria-hidden="true"
                        />
                        Features
                      </a>
                      <ul>
                        <li className="subitem1">
                          <a href="#">Roll-in shower </a>
                        </li>
                        <li className="subitem2">
                          <a href="#">Comfortable bathroom</a>
                        </li>
                        <li className="subitem3">
                          <a href="#">WI-FI facility</a>
                        </li>
                      </ul>
                    </li>
                    <li className="item2">
                      <a href="#">
                        <span
                          className="glyphicon glyphicon-chevron-down"
                          aria-hidden="true"
                        />
                        Facilities
                      </a>
                      <ul>
                        <li className="subitem1">
                          <a href="#">Childcare </a>
                        </li>
                        <li className="subitem2">
                          <a href="#">Gym</a>
                        </li>
                        <li className="subitem3">
                          <a href="#">Bar</a>
                        </li>
                      </ul>
                    </li>
                    <li className="item3">
                      <a href="#">
                        <span
                          className="glyphicon glyphicon-chevron-down"
                          aria-hidden="true"
                        />
                        Accommodation type
                      </a>
                      <ul>
                        <li className="subitem1">
                          <a href="#">Resort</a>
                        </li>
                        <li className="subitem2">
                          <a href="#">Hostel</a>
                        </li>
                        <li className="subitem3">
                          <a href="#">Apartment</a>
                        </li>
                      </ul>
                    </li>
                    <li className="item4">
                      <a href="#">
                        <span
                          className="glyphicon glyphicon-chevron-down"
                          aria-hidden="true"
                        />
                        Landmarks
                      </a>
                      <ul>
                        <li className="subitem1">
                          <a href="#">Mexican City</a>
                        </li>
                        <li className="subitem2">
                          <a href="#">Park View Center</a>
                        </li>
                        <li className="subitem3">
                          <a href="#">Land Park Center</a>
                        </li>
                      </ul>
                    </li>
                    <li className="item5">
                      <a href="#">
                        <span
                          className="glyphicon glyphicon-chevron-down"
                          aria-hidden="true"
                        />
                        Neighbourhood
                      </a>
                      <ul>
                        <li className="subitem1">
                          <a href="#">Diamond Park Colony</a>
                        </li>
                        <li className="subitem2">
                          <a href="#">E Park Road</a>
                        </li>
                        <li className="subitem3">
                          <a href="#">lake View Center</a>
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
