import React, { Component } from "react";
import { connect } from "react-redux";
import swal from "sweetalert";
import { getAllUsers } from "../../services/UserService.jsx";

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrUsers: [],
      isOpenModalHandle: false,
    };
  }

  async componentDidMount() {
    await this.getAllUsers();
  }

  getAllUsers = async () => {
    let response = await getAllUsers();
    if (response && response.errCode === 0) {
      this.setState({
        arrUsers: response.users,
      });
    }
  };

  toggleModal = () => {
    this.setState({
      isOpenModalHandle: false,
    });
  };

  render() {
    let arrUsers = this.state.arrUsers;

    return (
      <>
        {/* <div>
          {this.state.isOpenModalHandle && (
            <HandleBookingModal
              isOpen={this.state.isOpenModalHandle}
              toggleFromParent={this.toggleModal}
              currentBooking={this.state.booking}
              handleBookingStatus={this.handleBookingStatus}
            />
          )}
        </div> */}
        <div className="card mb-4">
          <div className="card-header pb-0">
            <h6>
              Users
            </h6>
          </div>
          <div className="card-body px-0 pt-0 pb-2">
            <div className="table-responsive p-0">
              <table className="table align-items-center mb-0">
                <thead>
                  <tr>
                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                      Name
                    </th>
                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                      Phone
                    </th>
                    <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                      Email
                    </th>
                    <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                      Position
                    </th>
                    <th className="text-secondary opacity-7" />
                  </tr>
                </thead>
                <tbody>
                  {arrUsers &&
                    arrUsers.map((item, index) => {
                      return (
                        <tr>
                          <td>
                            <div className="d-flex px-2 py-1">
                              <div>
                                <img
                                //   src={avatar}
                                  className="avatar avatar-lg me-3"
                                  alt="user1"
                                />
                              </div>
                              <div className="d-flex flex-column justify-content-center">
                                <h6 className="mb-0 text-sm">{item.name}</h6>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle text-center text-sm">
                            {item.phone}
                          </td>
                          <td className="align-middle text-center text-sm">
                            <span className="badge badge-sm bg-gradient-success">
                              {item.email}
                            </span>
                          </td>
                          <td className="align-middle text-center text-sm">
                            <span className="badge badge-sm bg-gradient-success">
                              {item.position}
                            </span>
                          </td>
                          {/* <td
                            className="align-middle"
                            style={{ fontSize: "20px" }}
                          >
                            <button
                              onClick={() => this.handleEdit(item)}
                              className="btn btn-primary mx-1 font-weight-bold"
                              data-toggle="tooltip"
                            >
                              Edit
                            </button>
                            <button
                              onClick={() => this.handleDelete(item)}
                              className="btn btn-primary mx-1 font-weight-bold"
                              data-toggle="tooltip"
                            >
                              Trash
                            </button>
                          </td> */}
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(User);
