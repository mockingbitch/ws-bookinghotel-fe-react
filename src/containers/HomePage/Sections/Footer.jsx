import React, { Component } from "react";
import { connect } from "react-redux";

class HomePage extends Component {
  render() {
    return (
      <>
        <div>
          <div className="footer-homepage">
            <div className="container">
              <div className="col-md-3 ftr_navi ftr">
                <h3>NAVIGATION</h3>
                <ul>
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>
                    <a href="about.html">About</a>
                  </li>
                  <li>
                    <a href="typography.html">Services</a>
                  </li>
                  <li>
                    <a href="booking.html">Booking</a>
                  </li>
                  <li>
                    <a href="contact.html">Contact</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-3 ftr_navi ftr">
                <h3>FACILITIES</h3>
                <ul>
                  <li>
                    <a href="#">Double bedrooms</a>
                  </li>
                  <li>
                    <a href="#">Single bedrooms</a>
                  </li>
                  <li>
                    <a href="#">Royal facilities</a>
                  </li>
                  <li>
                    <a href="#">Connected rooms</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-3 ftr_navi ftr">
                <h3>GET IN TOUCH</h3>
                <ul>
                  <li>Trieu Khuc,</li>
                  <li>Thanh Xuan, Ha Noi</li>
                  <li>+19000000</li>
                </ul>
              </div>
              <div className="col-md-3 ftr-logo">
                <a href="index.html">
                  <span
                    className="glyphicon glyphicon-home"
                    aria-hidden="true"
                  />
                  BookingHotel
                </a>
                <ul>
                  <li>
                    <a href="#" className="f1">
                    </a>
                  </li>
                  <li>
                    <a href="#" className="f2">
                    </a>
                  </li>
                  <li>
                    <a href="#" className="f3">
                    </a>
                  </li>
                </ul>
              </div>
              <div className="clearfix"> </div>
            </div>
          </div>
          {/*footer*/}
          {/* copy */}
          <div className="copy-right">
            <div className="container">
              <p>
                © 2022 Booking Hotel. All Rights Reserved | Design by
                <a href=""> Nhóm 8</a>
              </p>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
