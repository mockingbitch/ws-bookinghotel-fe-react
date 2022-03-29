import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
import * as actions from "../../store/actions";
import './Login.scss';
import { FormattedMessage } from 'react-intl';
import { handleLogin } from '../../services/userService';
import { userLoginSuccess } from '../../store/actions';
import ModalRegister from './ModalRegister';
import swal from 'sweetalert';
import { LANGUAGES } from '../../utils';
import { changeLanguageApp } from '../../store/actions';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            isShowPassword: false,
            errMessage: '',
            isOpenModalRegister: false
        }
    }

    handleOnChangeUsername = (e) => {
        this.setState({
            username: e.target.value
        })
    }

    handleOnChangePassword = (e) => {
        this.setState({
            password: e.target.value
        })
    }

    handleLogin = async () => {
        this.setState({
            errMessage: ''
        })

        try {
            let data = await handleLogin(this.state.username, this.state.password);

            if (data && data.errCode !== 0) {
                this.setState({
                    errMessage: data.message
                })
            }
            if (data && data.errCode === 0) {
                this.props.userLoginSuccess(data.user);
            }
        } catch (e) {
            if (e.response) {
                if (e.response.data) {
                    this.setState({
                        errMessage: e.response.data.message
                    })
                }
            }
        }
    }

    handleShowHidePassword = () => {
        this.setState({
            isShowPassword: !this.state.isShowPassword
        })
    }

    toggleModal = () => {
        this.setState({
            isOpenModalRegister: false,
        })
    }

    handleRegister = () => {
        this.setState({
            isOpenModalRegister: true
        })
    }

    createNewUser = (data) => {
        console.log(data.email);
        if (!data.email || !data.phoneNumber || !data.password) {
            swal("Something went wrong!", "Fields must be not empty!", "warning");
        } else {
            swal("Good job!", 'Register successfully, please check your email!', "success");
            this.setState({
                isOpenModalAddUser: false
            })
        }
    }

    handleLanguage = (language) => {
        this.props.changeLanguageAppRedux(language);
    }

    render() {
        return (

            <div className='login-background'>
                <div className='change-lang'>
                    <div className='lang-vi' onClick={() => this.handleLanguage(LANGUAGES.VI)}></div>
                    <div className='lang-en' onClick={() => this.handleLanguage(LANGUAGES.EN)}></div>
                </div>
                <div className='login-container'>
                    <div className='login-content'>
                        {this.state.isOpenModalRegister &&
                            <ModalRegister
                                isOpen={this.state.isOpenModalRegister}
                                toggleFromParent={this.toggleModal}
                                createNewUser={this.createNewUser}
                            />}
                        <div className='col-12 text-login'><FormattedMessage id='login.login' /></div>
                        <div className='col-12 form-group login-input'>
                            <input type='text'
                                className='form-control'
                                placeholder='Enter your username'
                                value={this.state.username}
                                onChange={(e) => this.handleOnChangeUsername(e)}
                            />
                        </div>
                        <div className='col-12 form-group login-input'>
                            <div className='custom-input-password'>
                                <input type={this.state.isShowPassword ? 'text' : 'password'}
                                    className='form-control'
                                    placeholder='Enter your password'
                                    value={this.state.password}
                                    onChange={(e) => this.handleOnChangePassword(e)}
                                />
                                <span onClick={() => { this.handleShowHidePassword() }}>
                                    <i className={this.state.isShowPassword ? 'far fa-eye-slash' : 'far fa-eye'}></i>
                                </span>
                            </div>
                        </div>
                        <div className='col-12' style={{ color: 'red' }}>
                            {this.state.errMessage}
                        </div>
                        <div className='col-12 form-group'>
                            <button className='btn-login' onClick={() => { this.handleLogin() }}><FormattedMessage id='login.submit' /></button>
                        </div>
                        <hr />
                        <div className='col-12 text-center'>
                            <span className='register' onClick={() => this.handleRegister()}><FormattedMessage id='login.register' /> </span>
                            <span> || </span>
                            <span className='forgot-password '><FormattedMessage id='login.forgot-password' />?</span>
                        </div>
                        <div className='col-12 text-center mt-3'>
                            <span className='text-orther-login'><FormattedMessage id='login.or-login-with' /></span>
                        </div>
                        <div className='col-12 social-login'>
                            <i className="fab fa-google-plus-g google"></i>
                            <i className="fab fa-facebook-f facebook"></i>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        userLoginSuccess: (userInfo) => dispatch(actions.userLoginSuccess(userInfo)),
        changeLanguageAppRedux: (language) => dispatch(changeLanguageApp(language))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
