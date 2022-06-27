import React, { Component } from "react";
import { connect } from "react-redux";
import swal from "sweetalert";
import { getAllUsers, searchUserService } from "../../services/UserService.jsx";
import avatar from "../../assets/images/avatar.jpg";
import { getAllCodeService } from "../../services/CodeService";

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
    await this.getAllCode();
  }

  getAllUsers = async () => {
    let response = await getAllUsers();
    if (response && response.errCode === 0) {
      this.setState({
        arrUsers: response.users,
      });
    }
  };

  getAllCode = async () => {
    let response = await getAllCodeService("POSITION");
    if (response && response.errCode === 0) {
      this.setState({
        codes: response.codes,
      });
    }
  };

  toggleModal = () => {
    this.setState({
      isOpenModalHandle: false,
    });
  };

  handleOnChange = (e, id) => {
    let twinState = { ...this.state };
    twinState[id] = e.target.value;
    this.setState({
      ...twinState,
    });
  };

  handleSearchUser = async () => {
    if (this.state.name_search === '' || this.state.name_search === null) {
      await this.getAllUsers();
    } else {
      let response = await searchUserService(this.state.name_search);
      if (response && response.errCode === 0) {
        this.setState({
          arrUsers: response.users
        });
      }
    }
  }

  render() {
    let arrUsers = this.state.arrUsers;
    let codes = this.state.codes;

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
        <div class="input-group">
          <div class="form-outline">
            <input type="search" id="form1" class="form-control" onChange={(e) => this.handleOnChange(e, "name_search")}/>
            <label class="form-label" for="form1">
              Search
            </label>
          </div>
          <button onClick={() => this.handleSearchUser()} type="button" class="btn btn-primary" style={{height: "fit-content"}}>
            <i class="fas fa-search"></i>
          </button>
        </div>
        <div className="card mb-4">
          <div className="card-header pb-0">
            <h6>Users</h6>
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
                                  src={avatar}
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
                              {codes &&
                                codes.map((itemCode, key) => {
                                  if (itemCode.key === item.position) {
                                    return <>{itemCode.value_vi}</>;
                                  }
                                })}
                            </span>
                          </td>
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
