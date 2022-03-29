import React, { Component } from 'react';
// import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'
import _ from 'lodash';

class ModalEditUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            message: {
                content: '',
                class: ''
            }
        }
    }

    componentDidMount() {
        let user = this.props.currentUser;
        console.log(user.id);
        if (user && !_.isEmpty(user)) {
            this.setState({
                email: user.email,
                phoneNumber: user.phoneNumber,
                firstName: user.firstName,
                lastName: user.lastName,
                address: user.address,
                gender: user.gender
            })
        }
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
        console.log(this.state);
    }

    checkValidateInput = () => {
        let arrInput = ['phoneNumber', 'firstName', 'lastName', 'address', 'gender'];
        let isValid = true;
        for (let i = 0; i < arrInput.length; i++) {
            if (!this.state[arrInput[i]]) {
                isValid = false;
                this.setState({
                    message: {
                        content: 'Missing parameters: ' + arrInput[i],
                        class: 'alert alert-danger'
                    }
                })
                break;
            }
        }

        return isValid;
    }

    handleEditUser = () => {
        let isValid = this.checkValidateInput();

        if (isValid === true) {
            this.props.editUser(this.props.currentUser.id, this.state);
        }
    }

    render() {
        return (
            <Modal
                isOpen={this.props.isOpen}
                toggle={() => this.toggle()}
                className={'modal-user'}
                size='xl'
            >
                <ModalHeader toggle={() => this.toggle()}>Update User</ModalHeader>
                <ModalBody>
                    <span className={this.state.message.class}>{this.state.message.content}</span>
                    <div className='modal-body-content'>
                        <div className='input-container'>
                            <label>Email</label>
                            <input
                                type='text'
                                value={this.state.email}
                                disabled
                            />
                        </div>
                        <div className='input-container'>
                            <label>Phone Number</label>
                            <input
                                type='number'
                                onChange={(e) => { this.handleOnChange(e, 'phoneNumber') }}
                                value={this.state.phoneNumber}
                                disabled
                            />
                        </div>
                        <div className='input-container'>
                            <label>First Name</label>
                            <input
                                type='text'
                                onChange={(e) => { this.handleOnChange(e, 'firstName') }}
                                value={this.state.firstName}
                            />
                        </div>
                        <div className='input-container'>
                            <label>Last Name</label>
                            <input
                                type='text'
                                onChange={(e) => { this.handleOnChange(e, 'lastName') }}
                                value={this.state.lastName}
                            />
                        </div>
                        <div className='input-container max-width-input'>
                            <label>Address</label>
                            <input
                                type='text'
                                onChange={(e) => { this.handleOnChange(e, 'address') }}
                                value={this.state.address}
                            />
                        </div>
                        <div className='input-container max-width-input'>
                            <label>Gender</label>
                            <input
                                type='number'
                                onChange={(e) => { this.handleOnChange(e, 'gender') }}
                                value={this.state.gender}
                            />
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" className='px-3' onClick={() => this.handleEditUser()}>Save</Button>{' '}
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

export default connect(mapStateToProps, mapDispatchToProps)(ModalEditUser);
