import React, { Component } from "react";
import { connect } from "react-redux";

class Welcome extends Component {
  render() {
    return (
      <>
        <div className="welcome">
          <div className="container">
            <h2 className="tittle-one">WELCOME</h2>
            <div className="welcome-grids">
              <div className="col-md-4 welcome-left">
                <ul>
                  <li>
                    <a >Lorem Ipsum is not simply random text.</a>
                  </li>
                  <li>
                    <a >There are many variations of passages.</a>
                  </li>
                  <li>
                    <a >The standard chunk of Lorem Ipsum.</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-4 welcome-middle">
                <ul>
                  <li>
                    <a >Lorem Ipsum is not simply random text.</a>
                  </li>
                  <li>
                    <a >There are many variations of passages.</a>
                  </li>
                  <li>
                    <a >The standard chunk of Lorem Ipsum.</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-4 welcome-right">
                <ul>
                  <li>
                    <a >Lorem Ipsum is not simply random text.</a>
                  </li>
                  <li>
                    <a >There are many variations of passages.</a>
                  </li>
                  <li>
                    <a >The standard chunk of Lorem Ipsum.</a>
                  </li>
                </ul>
              </div>
              <div className="clearfix" />
            </div>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
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

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);
