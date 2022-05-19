import React, { Component } from 'react';
import { connect } from "react-redux";

class Feature extends Component {

    render() {
        return (
          <>
         <div className="feature-serv">
        <div className="container">
          <h3 className="tittle">FEATURED SERVICES</h3>
          <div className="services-bottom-grids">
            <div className="col-md-4 services-bottom-grid">
              <div className="services-bottom-grd-left wel-grid">
                <div className="time-service">
                  <figure className="icon">
                    <span className="glyphicon glyphicon-time" aria-hidden="true" />
                  </figure>
                </div>
              </div>
              <div className="services-bottom-grd-right">
                <h4>dolorem eum fugia</h4>
                <p>To take a trivial example, which of us ever undertakes laborious 
                  physical exercise, except to obtain.</p>
              </div>
              <div className="clearfix"> </div>
            </div>
            <div className="col-md-4 services-bottom-grid">
              <div className="services-bottom-grd-left wel-grid btm-gre">
                <div className="time-service">
                  <figure className="icon">
                    <span className="glyphicon glyphicon-user" aria-hidden="true" />
                  </figure>
                </div>
              </div>
              <div className="services-bottom-grd-right">
                <h4>dolorem eum fugia</h4>
                <p>To take a trivial example, which of us ever undertakes laborious 
                  physical exercise, except to obtain.</p>
              </div>
              <div className="clearfix"> </div>
            </div>
            <div className="col-md-4 services-bottom-grid">
              <div className="services-bottom-grd-left wel-grid">
                <div className="time-service">
                  <figure className="icon">
                    <span className="glyphicon glyphicon-star" aria-hidden="true" />
                  </figure>
                </div>
              </div>
              <div className="services-bottom-grd-right">
                <h4>dolorem eum fugia</h4>
                <p>To take a trivial example, which of us ever undertakes laborious 
                  physical exercise, except to obtain.</p>
              </div>
              <div className="clearfix"> </div>
            </div>
            <div className="col-md-4 services-bottom-grid">
              <div className="services-bottom-grd-left wel-grid btm-gre">
                <div className="time-service">
                  <figure className="icon">
                    <span className="glyphicon glyphicon-home" aria-hidden="true" />
                  </figure>
                </div>
              </div>
              <div className="services-bottom-grd-right">
                <h4>dolorem eum fugia</h4>
                <p>To take a trivial example, which of us ever undertakes laborious 
                  physical exercise, except to obtain.</p>
              </div>
              <div className="clearfix"> </div>
            </div>
            <div className="col-md-4 services-bottom-grid">
              <div className="services-bottom-grd-left wel-grid">
                <div className="time-service">
                  <figure className="icon">
                    <span className="glyphicon glyphicon-cog" aria-hidden="true" />
                  </figure>
                </div>
              </div>
              <div className="services-bottom-grd-right">
                <h4>dolorem eum fugia</h4>
                <p>To take a trivial example, which of us ever undertakes laborious 
                  physical exercise, except to obtain.</p>
              </div>
              <div className="clearfix"> </div>
            </div>
            <div className="col-md-4 services-bottom-grid">
              <div className="services-bottom-grd-left wel-grid btm-gre">
                <div className="time-service">
                  <figure className="icon">
                    <span className="glyphicon glyphicon-map-marker" aria-hidden="true" />
                  </figure>
                </div>
              </div>
              <div className="services-bottom-grd-right">
                <h4>dolorem eum fugia</h4>
                <p>To take a trivial example, which of us ever undertakes laborious 
                  physical exercise, except to obtain.</p>
              </div>
              <div className="clearfix"> </div>
            </div>
            <div className="clearfix"> </div>
          </div>
        </div>
      </div>
          </>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Feature);
