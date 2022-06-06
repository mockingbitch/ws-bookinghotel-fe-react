import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, NavLink, Redirect, Route, Switch } from "react-router-dom";
import swal from "sweetalert";
import { createBookingService } from "../../../services/BookingService";

class Booking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      room: {},
    };
  }

  async componentDidMount() {
    let room = await this.props.location.state;
    let user = this.props.user.userInfo;
    this.setState({
      room: room,
      room_id: room.id,
      members: 1,
      user_id: user.id,
    });
  }

  handleOnchange = (e, id) => {
    let twinState = { ...this.state };
    twinState[id] = e.target.value;
    this.setState({
      ...twinState,
    });
  };

  createBooking = async () => {
    try {
      let response = await createBookingService(this.state);

      if (response && response.errCode !== 0) {
        swal("Something went wrong!", response.message, "warning");
      } else {
        swal("Good job!", response.message, "success");
      }
    } catch (e) {
      swal("Something went wrong!", "Error", "warning");
      console.log(e);
    }
  };

  render() {
    let isLoggedIn = this.props.isLoggedIn;
    console.log(this.state)
    return (
      <>
        <div className="booking">
          <div className="container">
            <h2 className="tittle-one">BOOKING</h2>
            <div className="reservation-form">
              <div className="col-md-3 reservation-left">
                <h3>Hotels</h3>
                <ul>
                  <li>
                    <a href="booking.html">
                      <img src="images/333.jpg" alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="booking.html">
                      <img src="images/555.jpg" alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="booking.html">
                      <img src="images/666.jpg" alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="booking.html">
                      <img src="images/777.jpg" alt="" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-md-9 reservation-right">
                <h4>Room name</h4>
                <div className="dropdown-button">
                  <input type="text" value={this.state.room.name} disabled />
                </div>
                <h4>Room type</h4>
                <div className="dropdown-button">
                  <input type="text" value={this.state.room.type} disabled />
                </div>
                <h4>When would you like to come?</h4>
                <div className="book-pag">
                  <div className="book-pag-frm">
                    <label>Check In :</label>
                    <input
                      className="date"
                      id="datepicker1"
                      type="date"
                      onChange={(e) => this.handleOnchange(e, "start_date")}
                      required
                    />
                  </div>
                  <div className="book-pag-frm">
                    <label>Check Out:</label>
                    <input
                      className="date"
                      id="datepicker2"
                      type="date"
                      onChange={(e) => this.handleOnchange(e, "end_date")}
                    />
                  </div>
                  <div className="clearfix" />
                </div>
                <h4>Contact details</h4>
                <input
                  type="text"
                  placeholder="Name"
                  onChange={(e) => this.handleOnchange(e, "guest_name")}
                  required
                />
                <input
                  type="text"
                  placeholder="Email"
                  onChange={(e) => this.handleOnchange(e, "guest_email")}
                  required
                />
                <input
                  type="text"
                  placeholder="Telephone"
                  onfocus="this.value = '';"
                  onblur="if (this.value == '') {this.value = 'Telephone';}"
                  onChange={(e) => this.handleOnchange(e, "guest_phone")}
                  required
                />
                <textarea
                  placeholder="Messenger"
                  required
                  onChange={(e) => this.handleOnchange(e, "note")}
                />
                <button
                  className="btn1 btn-1 btn-1e"
                  onClick={() => this.createBooking()}
                >
                  RESERVE NOW
                </button>
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
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Booking);
