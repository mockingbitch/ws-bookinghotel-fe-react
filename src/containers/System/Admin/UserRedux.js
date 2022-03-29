import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import "./UserRedux.scss";
// import swal from "sweetalert";
import { LANGUAGES } from "../../../utils";
import * as actions from "../../../store/actions";
import { css } from "@emotion/react";
import PacmanLoader from "react-spinners/PacmanLoader";
import Lightbox from 'react-image-lightbox';  
import 'react-image-lightbox/style.css';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

class UserManage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      genders: [],
      roles: [],
      positions: [],
      previewImageURL: '',
      isOpen: false
    };
  }

  async componentDidMount() {
    this.props.getGenderStart();
    this.props.getRoleStart();
    this.props.getPositionStart();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.genders !== this.props.genders) {
      this.setState({ genders: this.props.genders });
    }

    if (prevProps.roles !== this.props.roles) {
      this.setState({ roles: this.props.roles });
    }

    if (prevProps.positions !== this.props.positions) {
      this.setState({ positions: this.props.positions });
    }
  }

  handleOnChangeImage = (e) => {
    let data = e.target.files;
    let file = data[0];
    let objURL = URL.createObjectURL(file);
    this.setState({ previewImageURL: objURL });
    console.log(file);
  }

  handleOpenImage = () => {
    if (!this.state.previewImageURL) {
      return;
    }

    this.setState({ isOpen: true });
  }

  render() {
    let language = this.props.language;
    let genders = this.state.genders;
    let roles = this.state.roles;
    let positions = this.state.positions;
    let isLoadingGender = this.props.isLoadingGender;

    return (
      <div className="user-redux-container">
        <div className="title">User Redux</div>
        <div>{isLoadingGender === true ? "Loading Gender..." : ""}</div>
        <div className="user-redux-body">
          <div className="container">
            <div className="row">
              <form>
                <div className="form-group row mt-3">
                  <div className="form-group col-md-6">
                    <label htmlFor="inputEmail4">
                      <FormattedMessage id="user-redux.email" />
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="inputEmail4"
                      placeholder="Email"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="inputPassword4">
                      <FormattedMessage id="user-redux.password" />
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="inputPassword"
                      placeholder="Password"
                    />
                  </div>
                </div>
                <div className="form-group row mt-3">
                  <div className="form-group col-md-6">
                    <label htmlFor="inputEmail4">
                      <FormattedMessage id="user-redux.first-name" />
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="firstName"
                      placeholder="First name"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="">
                      <FormattedMessage id="user-redux.last-name" />{" "}
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="lastName"
                      placeholder="Last name"
                    />
                  </div>
                </div>
                <div className="form-group mt-3">
                  <label htmlFor="inputAddress">
                    <FormattedMessage id="user-redux.address" />
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputAddress"
                    placeholder="1234 Main St"
                  />
                </div>
                <div className="form-group mt-3">
                  <label htmlFor="inputAddress2">
                    <FormattedMessage id="user-redux.phone-number" />
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputAddress2"
                    placeholder="Apartment, studio, or floor"
                  />
                </div>
                <div className="form-group row mt-3">
                  <div className="form-group col-md-6">
                    <label htmlFor="inputGender">
                      <FormattedMessage id="user-redux.gender" />
                    </label>
                    <select className="form-control">
                      {genders &&
                        genders.length > 0 &&
                        genders.map((item, index) => {
                          return (
                            <option key={index}>
                              {language === LANGUAGES.VI
                                ? item.valueVI
                                : item.valueEN}
                            </option>
                          );
                        })}
                    </select>
                  </div>
                  <div className="form-group col-md-4">
                    <label htmlFor="inputState">
                      <FormattedMessage id="user-redux.role" />
                    </label>
                    <select id="inputRole" className="form-control">
                      {roles &&
                        roles.length > 0 &&
                        roles.map((item, index) => {
                          return (
                            <option key={index}>
                              {language === LANGUAGES.VI
                                ? item.valueVI
                                : item.valueEN}
                            </option>
                          );
                        })}
                    </select>
                  </div>
                  <div className="form-group col-md-2">
                    <label htmlFor="inputZip">
                      <FormattedMessage id="user-redux.position" />
                    </label>
                    <select id="inputPosition" className="form-control">
                      {positions &&
                        positions.length > 0 &&
                        positions.map((item, index) => {
                          return (
                            <option key={index}>
                              {language === LANGUAGES.VI
                                ? item.valueVI
                                : item.valueEN}
                            </option>
                          );
                        })}
                    </select>
                  </div>
                </div>
                <div className="form-group mt-3">
                  <label htmlFor="uploadImage" className="label-upload">
                    <FormattedMessage id="user-redux.upload-image" />
                    &nbsp;
                    <i className="fas fa-upload"></i>
                  </label>
                  <input
                    type="file"
                    name="files"
                    id="uploadImage"
                    onChange={(e) => this.handleOnChangeImage(e)}
                    hidden
                  />
                  <div
                    className="preview-image"
                    style={{
                      backgroundImage: `url(${this.state.previewImageURL})`,
                    }}
                    onClick={() => this.handleOpenImage()}
                  ></div>
                </div>
                <div className="form-group mt-3">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="gridCheck"
                    />
                    <label className="form-check-label" htmlFor="gridCheck">
                      <FormattedMessage id="user-redux.check-me-out" />
                    </label>
                  </div>
                </div>
                <button type="submit" className="btn btn-primary">
                  <FormattedMessage id="user-redux.submit" />
                </button>
              </form>
            </div>
          </div>
        </div>
        <PacmanLoader
          color={"#00FF4F"}
          loading={isLoadingGender}
          css={override}
          size={150}
        />
        {this.state.isOpen && (
          <Lightbox
            mainSrc={this.state.previewImageURL}
            onCloseRequest={() => this.setState({ isOpen: false })}
          />
        )}
        ;
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.app.language,
    genders: state.app.genders,
    roles: state.app.roles,
    positions: state.app.positions,
    isLoadingGender: state.app.isLoadingGender,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getGenderStart: () => dispatch(actions.fetchGenderStart()),
    getRoleStart: () => dispatch(actions.fetchRoleStart()),
    getPositionStart: () => dispatch(actions.fetchPositionStart()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
