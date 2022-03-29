import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './UserManage.scss';
import { showUserService, createUserService, editUserService, deleteUserService } from '../../../services/userService';
import ModalAddUser from './ModalUser/ModalAddUser';
import ModalEditUser from './ModalUser/ModalEditUser';
import swal from 'sweetalert';
import Moment from 'moment';


class UserManage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            arrUsers: [],
            isOpenModalAddUser: false,
            isOpenModalEditUser: false,
            user: {}
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

    handleEditUser = (user) => {
        this.setState({
            isOpenModalEditUser: true,
            user: user
        })
    }

    deleteUser = async (user) => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this user!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then(async (willDelete) => {
                if (willDelete) {
                    try {
                        let response = await deleteUserService(user.id);
                        await this.getAllUsers();

                        if (response) {
                            swal(response.errMessage, {
                                icon: response.errCode === 0 ? 'success' : 'warning'
                            })
                        }

                    } catch (e) {
                        console.log(e);
                    }
                } else {
                    swal("Your user is safe!");
                }
            });
    }

    toggleModal = () => {
        this.setState({
            isOpenModalAddUser: false,
            isOpenModalEditUser: false,
        })
    }

    createNewUser = async (data) => {
        try {
            let response = await createUserService(data); 
                                                          
            if (response && response.errCode !== 0) {     
                swal("Something went wrong!", response.errMessage, "warning");  
            } else {                                        
                swal("Good job!", response.errMessage, "success");
                await this.getAllUsers();
                this.setState({
                    isOpenModalAddUser: false
                })
            }
        } catch (e) {                       
            console.log(e);
        }

    }

    editUser = async (id, data) => {
        try {
            let response = await editUserService(id, data);

            if (response && response.errCode !== 0) {
                swal("Something went wrong!", response.errMessage, "warning");
            } else {
                swal("Good job!", response.errMessage, "success");
                await this.getAllUsers();
                this.setState({
                    isOpenModalEditUser: false
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
            {this.state.isOpenModalAddUser && (
              <ModalAddUser
                isOpen={this.state.isOpenModalAddUser}
                toggleFromParent={this.toggleModal}
                createNewUser={this.createNewUser}
              />
            )}
            {this.state.isOpenModalEditUser && (
              <ModalEditUser
                isOpen={this.state.isOpenModalEditUser}
                toggleFromParent={this.toggleModal}
                currentUser={this.state.user}
                editUser={this.editUser}
              />
            )}
            <div className="title">
              <h3 className="text-center">
                <FormattedMessage id="user-manage.user-manage" />
              </h3>
            </div>
            <div className="mx-3">
              <button
                className="btn btn-primary px-3"
                onClick={() => this.handleAddNewUSer()}
              >
                <i className="fas fa-plus"></i>&nbsp;
                <FormattedMessage id="user-manage.add-new-user" />
              </button>
            </div>
            <div className="user-table mt-4 mx-4">
              <table id="customers">
                <thead>
                  <tr>
                    <th>
                      <FormattedMessage id="user-manage.id" />
                    </th>
                    <th>
                      <FormattedMessage id="user-manage.email" />
                    </th>
                    <th>
                      <FormattedMessage id="user-manage.name" />
                    </th>
                    <th>
                      <FormattedMessage id="user-manage.address" />
                    </th>
                    <th>
                      <FormattedMessage id="user-manage.phone-number" />
                    </th>
                    <th>
                      <FormattedMessage id="user-manage.image" />
                    </th>
                    <th>
                      <FormattedMessage id="user-manage.gender" />
                    </th>
                    <th>
                      <FormattedMessage id="user-manage.role" />
                    </th>
                    <th>
                      <FormattedMessage id="user-manage.position" />
                    </th>
                    <th>
                      <FormattedMessage id="user-manage.created-at" />
                    </th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {arrUsers &&
                    arrUsers.map((item, index) => {
                      return (
                        <tr>
                          <td>{item.id}</td>
                          <td>{item.email}</td>
                          <td>{item.firstName + " " + item.lastName}</td>
                          <td>{item.address}</td>
                          <td>{item.phoneNumber}</td>
                          <td>{item.image}</td>
                          <td>{item.gender}</td>
                          <td>{item.roleId}</td>
                          <td>{item.positionId}</td>
                          <td>{Moment(item.createdAt).format("DD-MM-YYYY")}</td>
                          <td>
                            <button
                              className="btn-edit mx-1"
                              onClick={() => this.handleEditUser(item)}
                            >
                              <i className="fas fa-pencil-alt"></i>
                            </button>
                            <button
                              className="btn-delete mx-1"
                              onClick={() => this.deleteUser(item)}
                            >
                              <i className="fas fa-trash"></i>
                            </button>
                          </td>
                        </tr>
                      );
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
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
