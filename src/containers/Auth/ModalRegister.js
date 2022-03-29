import React, { Component } from 'react';
// import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'

class ModalRegister extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            rePassword: '',
            phoneNumber: '',
            address: '',
            firstName: '',
            lastName: '',
            gender: '',
            message: {
                content: '',
                class: ''
            }
        }
    }

    componentDidMount() {
    }

    toggle = () => {
        this.props.toggleFromParent();
        this.setState({
            message: {
                content: '',
                class: ''
            }
        })
    }

    handleOnChange = (e, id) => {
        let twinState = { ...this.state };
        twinState[id] = e.target.value;
        this.setState({
            ...twinState
        })
    }

    handleAddNewUser = () => {
        this.props.createNewUser(this.state);
        this.setState({
            email: '',
            password: '',
            rePassword: '',
            phoneNumber: '',
            address: '',
            firstName: '',
            lastName: '',
            gender: ''
        })
    }

    render() {
        return (
            <Modal
                isOpen={this.props.isOpen}
                toggle={() => this.toggle()}
                className={'modal-user'}
                size='xl'
            >
                <ModalHeader toggle={() => this.toggle()}>Register new user</ModalHeader>
                <ModalBody>
                    <span className={this.state.message.class}>{this.state.message.content}</span>
                    <div className='modal-body-content'>
                        <div className='input-container'>
                            <label>Email</label>
                            <input
                                type='text'
                                onChange={(e) => { this.handleOnChange(e, 'email') }}
                                placeholder='Example@abc.com'
                                value={this.state.email}
                            />
                        </div>
                        <div className='input-container'>
                            <label>Password</label>
                            <input
                                type='password'
                                onChange={(e) => { this.handleOnChange(e, 'password') }}
                                placeholder='********'
                                value={this.state.password}
                            />
                        </div>
                        <div className='input-container'>
                            <label>Re-Password</label>
                            <input
                                type='password'
                                onChange={(e) => { this.handleOnChange(e, 'rePassword') }}
                                placeholder='********'
                                value={this.state.rePassword}
                            />
                        </div>
                        <div className='input-container'>
                            <label>Phone Number</label>
                            <input
                                type='text'
                                onChange={(e) => { this.handleOnChange(e, 'phoneNumber') }}
                                placeholder='0123456789'
                                value={this.state.phoneNumber}
                            />
                        </div>
                        <div className='input-container'>
                            <label>First Name</label>
                            <input
                                type='text'
                                onChange={(e) => { this.handleOnChange(e, 'firstName') }}
                                placeholder='Nguyen '
                                value={this.state.firstName}
                            />
                        </div>
                        <div className='input-container'>
                            <label>Last Name</label>
                            <input
                                type='text'
                                onChange={(e) => { this.handleOnChange(e, 'lastName') }}
                                placeholder='Van A'
                                value={this.state.lastName}
                            />
                        </div>
                        <div className='input-container max-width-input'>
                            <label>Address</label>
                            <input
                                type='text'
                                onChange={(e) => { this.handleOnChange(e, 'address') }}
                                placeholder='Ha Noi - Viet Nam'
                                value={this.state.address}
                            />
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" className='px-3' onClick={() => this.handleAddNewUser()}>Register</Button>{' '}
                    <Button color="secondary" className='px-3' onClick={() => this.toggle()}>Close</Button>
                </ModalFooter>
            </Modal>
        )
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalRegister);
