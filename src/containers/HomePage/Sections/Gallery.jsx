import React, { Component } from "react";
import { connect } from "react-redux";
import imgaaa from '../../../assets/images/aaa.jpg';
import imgbbb from '../../../assets/images/bbb.jpg';
import imgccc from '../../../assets/images/ccc.jpg';
import imgddd from '../../../assets/images/ddd.jpg';
import imgeee from '../../../assets/images/eee.jpg';
import imgggg from '../../../assets/images/ggg.jpg';

class Gallery extends Component {
  render() {
    return (
      <>
        <div className="gallery" id="gallery">
          <div className="container">
            <h3 className="tittle">GALLERY</h3>
            <div className="gallery-bottom">
              <div className="col-md-4 gal-grid">
                <div className="view view-fifth">
                  <a
                    className="b-link-stripe b-animate-go  thickbox"
                    title="Image Title"
                  >
                    <img
                      src={imgaaa}
                      alt=""
                      className="img-responsive"
                    />
                    <div className="mask">
                      <h4>CLASSIC HOTEL</h4>
                      <p>
                        A wonderful serenity has taken possession of my entire
                        soul.
                      </p>
                      <span>More</span>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-md-4 gal-grid">
                <div className="view view-fifth">
                  <a
                    className="b-link-stripe b-animate-go  thickbox"
                    title="Image Title"
                  >
                    <img
                      src={imgbbb}
                      alt=""
                      className="img-responsive"
                    />
                    <div className="mask">
                      <h4>CLASSIC HOTEL</h4>
                      <p>
                        A wonderful serenity has taken possession of my entire
                        soul.
                      </p>
                      <span>More</span>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-md-4 gal-grid">
                <div className="view view-fifth">
                  <a
                    className="b-link-stripe b-animate-go  thickbox"
                    title="Image Title"
                  >
                    <img
                      src={imgccc}
                      alt=""
                      className="img-responsive"
                    />
                    <div className="mask">
                      <h4>CLASSIC HOTEL</h4>
                      <p>
                        A wonderful serenity has taken possession of my entire
                        soul.
                      </p>
                      <span>More</span>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-md-4 gal-grid">
                <div className="view view-fifth">
                  <a
                    className="b-link-stripe b-animate-go  thickbox"
                    title="Image Title"
                  >
                    <img
                      src={imgddd}
                      alt=""
                      className="img-responsive"
                    />
                    <div className="mask">
                      <h4>CLASSIC HOTEL</h4>
                      <p>
                        A wonderful serenity has taken possession of my entire
                        soul.
                      </p>
                      <span>More</span>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-md-4 gal-grid">
                <div className="view view-fifth">
                  <a
                    className="b-link-stripe b-animate-go  thickbox"
                    title="Image Title"
                  >
                    <img
                      src={imgeee}
                      alt=""
                      className="img-responsive"
                    />
                    <div className="mask">
                      <h4>CLASSIC HOTEL</h4>
                      <p>
                        A wonderful serenity has taken possession of my entire
                        soul.
                      </p>
                      <span>More</span>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-md-4 gal-grid">
                <div className="view view-fifth">
                  <a
                    className="b-link-stripe b-animate-go  thickbox"
                    title="Image Title"
                  >
                    <img
                      src={imgbbb}
                      alt=""
                      className="img-responsive"
                    />
                    <div className="mask">
                      <h4>CLASSIC HOTEL</h4>
                      <p>
                        A wonderful serenity has taken possession of my entire
                        soul.
                      </p>
                      <span>More</span>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-md-4 gal-grid">
                <div className="view view-fifth">
                  <a
                    className="b-link-stripe b-animate-go  thickbox"
                    title="Image Title"
                  >
                    <img
                      src={imgggg}
                      alt=""
                      className="img-responsive"
                    />
                    <div className="mask">
                      <h4>CLASSIC HOTEL</h4>
                      <p>
                        A wonderful serenity has taken possession of my entire
                        soul.
                      </p>
                      <span>More</span>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-md-4 gal-grid">
                <div className="view view-fifth">
                  <a
                    className="b-link-stripe b-animate-go  thickbox"
                    title="Image Title"
                  >
                    <img
                      src={imgbbb}
                      alt=""
                      className="img-responsive"
                    />
                    <div className="mask">
                      <h4>CLASSIC HOTEL</h4>
                      <p>
                        A wonderful serenity has taken possession of my entire
                        soul.
                      </p>
                      <span>More</span>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-md-4 gal-grid">
                <div className="view view-fifth">
                  <a
                    className="b-link-stripe b-animate-go  thickbox"
                    title="Image Title"
                  >
                    <img
                      src={imgaaa}
                      alt=""
                      className="img-responsive"
                    />
                    <div className="mask">
                      <h4>CLASSIC HOTEL</h4>
                      <p>
                        A wonderful serenity has taken possession of my entire
                        soul.
                      </p>
                      <span>More</span>
                    </div>
                  </a>
                </div>
              </div>
              <div className="clearfix"> </div>
            </div>
            {/*light-box-files */}
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

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
