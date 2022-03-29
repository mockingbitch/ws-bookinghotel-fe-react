import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../../store/actions";
import Navigator from "../../components/Navigator";
import { adminMenu } from "./menuApp";
import "./Header.scss";
import { FormattedMessage } from "react-intl";
import { LANGUAGES } from "../../utils";
import { changeLanguageApp } from "../../store/actions";

class Header extends Component {

  handleLanguage = (language) => {
    this.props.changeLanguageAppRedux(language);
  };
    
  render() {
    const { processLogout } = this.props;
    let language = this.props.language;

    return (
      <div className="header-container">
        {/* thanh navigator */}
        <div className="header-tabs-container">
          <Navigator menus={adminMenu} />
        </div>
        <div className="change-lang">
          <div
            className="lang-vi"
            onClick={() => this.handleLanguage(LANGUAGES.VI)}
          ></div>
          <div
            className="lang-en"
            onClick={() => this.handleLanguage(LANGUAGES.EN)}
          ></div>
        </div>
        {/* nút logout */}
        <div className="btn btn-logout" onClick={processLogout}>
          <i className="fas fa-sign-out-alt"></i>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    processLogout: () => dispatch(actions.processLogout()),
    changeLanguageAppRedux: (language) => dispatch(changeLanguageApp(language)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
