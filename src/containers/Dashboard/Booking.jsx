import React, { Component } from "react";
import { connect } from "react-redux";
import swal from "sweetalert";
import { getAllUsers } from "../../services/UserService.jsx";
import { getAllBookings, handleBookingService } from "../../services/BookingService";
// import NumberFormat from "react-number-format";
import HandleBookingModal from "./BookingModal/HandleBookingModal.jsx";

class Booking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrBookings: [],
      arrUsers: [],
      booking: {},
      isOpenModalHandle: false,
    };
  }

  async componentDidMount() {
    await this.getAllUsers();
    await this.getAllBookings();
  }

  getAllUsers = async () => {
    let response = await getAllUsers();
    if (response && response.errCode === 0) {
      this.setState({
        arrUsers: response.users,
      });
    }
  };

  getAllBookings = async () => {
    let response = await getAllBookings();
    if (response && response.errCode === 0) {
      this.setState({
        arrBookings: response.bookings,
      });
    }
  };

  handleBooking = (data) => {
    this.setState({
      isOpenModalHandle: true,
      booking: data,
    });
  };

  handleBookingStatus = async (id, data) => {
    try {
      data["booking_id"] = id;
      let response = await handleBookingService(data);

      if (response && response.errCode !== 0) {
        swal("Something went wrong!", response.message, "warning");
      } else {
        swal("Good job!", response.message, "success");
        await this.getAllBookings();
        this.setState({
          isOpenModalHandle: false,
        });
      }
    } catch (e) {
      console.log(e);
      swal("Something went wrong!", 'error', "warning");
    }
  }

  toggleModal = () => {
    this.setState({
      isOpenModalHandle: false,
    });
  };

  render() {
    let arrBookings = this.state.arrBookings;
    let arrUsers = this.state.arrUsers;

    return (
      <>
        <div>
          {this.state.isOpenModalHandle && (
            <HandleBookingModal
              isOpen={this.state.isOpenModalHandle}
              toggleFromParent={this.toggleModal}
              currentBooking={this.state.booking}
              handleBookingStatus={this.handleBookingStatus}
            />
          )}
        </div>
        <div className="card mb-4">
          <div className="card-header pb-0">
            <h6>Bookings</h6>
          </div>
          <div className="card-body px-0 pt-0 pb-2">
            <div className="table-responsive p-0">
              <table className="table align-items-center mb-0">
                <thead>
                  <tr>
                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                      Guest
                    </th>
                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                      Handler
                    </th>
                    <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                      Total
                    </th>
                    <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                      Status
                    </th>
                    <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                      Date
                    </th>
                    <th className="text-secondary opacity-7" />
                  </tr>
                </thead>
                <tbody>
                  {arrBookings &&
                    arrBookings.map((item, index) => {
                      return (
                        <tr>
                          <td>
                            <div className="d-flex px-2 py-1">
                              <div className="d-flex flex-column justify-content-center">
                                <h6 className="mb-0 text-sm">
                                  {arrUsers &&
                                    arrUsers.map((itemUser, key) => {
                                      return (
                                        <>
                                          {item.guest_id === itemUser.id
                                            ? itemUser.name
                                            : ""}
                                        </>
                                      );
                                    })}
                                </h6>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle text-center text-sm">
                            <div className="d-flex px-2 py-1">
                              <div className="d-flex flex-column justify-content-center">
                                <h6 className="mb-0 text-sm">
                                  {arrUsers &&
                                    arrUsers.map((itemUser, key) => {
                                      return (
                                        <>
                                          {item.admin_id === itemUser.id
                                            ? itemUser.name
                                            : ""}
                                        </>
                                      );
                                    })}
                                </h6>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle text-center text-sm">
                            <span className="">
                              {/* <NumberFormat
                                value={item.total}
                                displayType={"text"}
                                thousandSeparator={true}
                                prefix={"VND "}
                              /> */}
                              {item.total}
                            </span>
                          </td>
                          <td className="align-middle text-center text-sm">
                            <span className="badge badge-sm bg-gradient-success">
                              {item.status}
                            </span>
                          </td>
                          <td className="align-middle text-center text-sm">
                            <span className="">
                              {new Date(item.date * 1000).toLocaleDateString(
                                "en-US"
                              )}
                            </span>
                          </td>
                          <td
                            className="align-middle"
                            style={{ fontSize: "20px" }}
                          >
                            <button
                              onClick={() => this.handleBooking(item)}
                              className="btn btn-primary mx-1 font-weight-bold"
                              data-toggle="tooltip"
                            >
                              View
                            </button>
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

export default connect(mapStateToProps, mapDispatchToProps)(Booking);
