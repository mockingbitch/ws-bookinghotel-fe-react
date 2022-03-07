import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './UserManage.scss';
import { showUserService, createUserService } from '../../services/userService';
import ModalAddUser from './ModalAddUser';
class UserManage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            arrUsers: [],
            isOpenModalAddUser: false,
            response: ''
        }
    }

    async componentDidMount() {
        await this.getAllUsers();
    }

    getAllUsers = async () => {
        let response = await showUserService('ALL');
        if (response && response.errCode === 0) {
            this.setState({
                arrUsers: response.users
            })
        }
    }

    handleAddNewUSer = () => {
        this.setState({
            isOpenModalAddUser: true
        })
    }

    toggleModalAddUser = () => {
        this.setState({
            isOpenModalAddUser: false
        })
    }

    createNewUser = async (data) => {
        try {
            let response = await createUserService(data);

            if (response && response.errCode !== 0) {
                this.setState({
                    response: response.errMessage,
                })

            } else {
               
                await this.getAllUsers();
                this.setState({
                    response: response.errMessage,
                    isOpenModalAddUser: false
                })
            }
        } catch (e) {
            console.log(e);
        }
        
    }

    /**
     * Life Cycle component
     * 1. Run constructor -> init state
     * 2. Component did mount (set state)
     * 3. Render
     */
    render() {
        let arrUsers = this.state.arrUsers;

        return (
            <div className="user-container">
                <ModalAddUser
                    isOpen={this.state.isOpenModalAddUser}
                    toggleFromParent={this.toggleModalAddUser}
                    createNewUser={this.createNewUser}
                />
                <div className='title'>
                    <h3 className='text-center'>Manage Users</h3>
                </div>
                <div className='mx-3'>
                    <button
                        className='btn btn-primary px-3'
                        onClick={() => this.handleAddNewUSer()}
                    ><i className='fas fa-plus'></i>&nbsp;Add new user</button>
                    <span>{this.state.response}</span>
                </div>
                <div className='user-table mt-4 mx-4'>
                    <table id="customers">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Email</th>
                                <th>Name</th>
                                <th>Address</th>
                                <th>Phone Number</th>
                                <th>Image</th>
                                <th>Gender</th>
                                <th>Role</th>
                                <th>Position</th>
                                <th>Created At</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {arrUsers && arrUsers.map((item, index) => {
                                return (
                                    <tr>
                                        <td>{item.id}</td>
                                        <td>{item.email}</td>
                                        <td>{item.firstName + ' ' + item.lastName}</td>
                                        <td>{item.address}</td>
                                        <td>{item.phoneNumber}</td>
                                        <td>{item.image}</td>
                                        <td>{item.gender}</td>
                                        <td>{item.roleId}</td>
                                        <td>{item.positionId}</td>
                                        <td>{item.createdAt}</td>
                                        <td>
                                            <button className='btn-edit mx-1'><i className='fas fa-pencil-alt'></i></button>
                                            <button className='btn-delete mx-1'><i className='fas fa-trash'></i></button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>

                    </table>
                </div>
            </div>
        );
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

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
