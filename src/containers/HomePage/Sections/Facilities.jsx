import React, { Component } from "react";
import { connect } from "react-redux";
import img111 from "../../../assets/images/111.jpg";
import img222 from "../../../assets/images/222.jpg";
import img333 from "../../../assets/images/333.jpg";
import img444 from "../../../assets/images/444.jpg";

class Facilities extends Component {
  render() {
    return (
      <>
        <div className="facilities">
          <div className="container">
            <h3 className="tittle">FACILITIES</h3>
            <div className="facilities-grids">
              <div className="col-md-6 facilities-grid">
                <img src={img111} alt="" />
              </div>
              <div className="col-md-6 facilities-grid-left">
                <div className="fac-grids">
                  <div className="facilities-left">
                    <img src={img222} alt="" />
                  </div>
                  <div className="facilities-right">
                    <img src={img333} alt="" />
                  </div>
                  <div className="clearfix" />
                </div>
                <div className="fac-rig-btm">
                  <img src={img444} alt="" />
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Facilities);
