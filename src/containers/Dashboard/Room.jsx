import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, NavLink, Redirect, Route, Switch } from "react-router-dom";
import {
  getAllRooms,
  deleteRoomService,
  createRoomService,
  editRoomService,
} from '../../services/RoomService';
import { getHotels } from '../../services/HotelService';
import roomImg from "../../assets/images/333.jpg";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import swal from "sweetalert";
import AddRoomModal from "./RoomModal/AddRoomModal";
import EditRoomModal from "./RoomModal/EditRoomModal";

import "./Room.scss";

class Room extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrRooms: [],
      room: {},
      arrHotels: [],
      isOpenModalAddRoom: false,
      isOpenModalEditRoom: false,
    };
  }

  async componentDidMount() {
    await this.getAllRooms();
    await this.getAllHotels();
  }

  getAllRooms = async () => {
    let response = await getAllRooms();
    if (response && response.errCode === 0) {
      this.setState({
        arrRooms: response.rooms,
      });
    }
  };

  getAllHotels = async () => {
    let response = await getHotels();
    if (response && response.errCode === 0) {
      this.setState({
        arrHotels: response.hotels,
      });
    }
  }

  handleAddnewRoom = () => {
    this.setState({
      isOpenModalAddRoom: true,
    });
  };

  toggleModal = () => {
    this.setState({
      isOpenModalAddRoom: false,
      isOpenModalEditRoom: false,
    });
  };

  createNewRoom = async (data) => {
    try {
      let response = await createRoomService(data);

      if (response && response.errCode !== 0) {
        swal("Something went wrong!", response.message, "warning");
      } else {
        swal("Good job!", response.message, "success");
        await this.getAllRooms();
        this.setState({
          isOpenModalAddRoom: false,
        });
      }
    } catch (e) {
      swal("Something went wrong!", "create failed!", "warning");
      console.log(e);
    }
  };

  handleEdit = (data) => {
    this.setState({
      isOpenModalEditRoom: true,
      room: data,
    });
  };

  editRoom = async (id, data) => {
    try {
      data["id"] = id;
      let response = await editRoomService(data);

      if (response && response.errCode !== 0) {
        swal("Something went wrong!", response.message, "warning");
      } else {
        swal("Good job!", response.message, "success");
        await this.getAllRooms();
        this.setState({
          isOpenModalEditRoom: false,
        });
      }
    } catch (e) {
      console.log(e);
    }
  };

  handleDelete = (data) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this data!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then(async (willDelete) => {
      if (willDelete) {
        try {
          let response = await deleteRoomService(data.id);
          await this.getAllRooms();
          if (response) {
            swal(response.message, {
              icon: response.errCode === 0 ? "success" : "warning",
            });
          }
        } catch (e) {
          swal("Something went wrong!", "Try again", "warning");
          console.log(e);
        }
      } else {
        swal("Your data is safe!");
      }
    });
  };

  render() {
    let arrRooms = this.state.arrRooms;
    let arrHotels = this.state.arrHotels;

    return (
      <div className="card mb-4">
        <div className="card-header pb-0">
          <div>
            {this.state.isOpenModalAddRoom && (
              <AddRoomModal
                isOpen={this.state.isOpenModalAddRoom}
                toggleFromParent={this.toggleModal}
                createNewRoom={this.createNewRoom}
              />
            )}
            {this.state.isOpenModalEditRoom && (
              <EditRoomModal
                isOpen={this.state.isOpenModalEditRoom}
                toggleFromParent={this.toggleModal}
                currentRoom={this.state.room}
                editRoom={this.editRoom}
              />
            )}
           
          </div>
          <h6>
            Rooms table
            <button
              onClick={() => this.handleAddnewRoom()}
              style={{ float: "right" }}
              className="btn btn-primary mx-1 font-weight-bold"
              data-toggle="tooltip"
            >
              Add
            </button>
          </h6>
        </div>
        <div className="card-body px-0 pt-0 pb-2">
          <div className="table-responsive p-0">
            <table className="table align-items-center mb-0">
              <thead>
                <tr>
                  <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                    Room
                  </th>
                  <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                    Hotel
                  </th>
                  <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                    Description
                  </th>
                  <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                    Type
                  </th>
                  <th className="text-secondary opacity-7" />
                </tr>
              </thead>
              <tbody>
                {arrRooms &&
                  arrRooms.map((item, index) => {
                    return (
                      <tr>
                        <td style={{ width: "40%" }}>
                          <div className="d-flex px-2 py-1">
                            <div>
                              <img
                                src={roomImg}
                                className="avatar avatar-lg me-3"
                                alt="user1"
                              />
                            </div>
                            <div className="d-flex flex-column justify-content-center">
                              <h6 className="mb-0 text-sm">{item.name}</h6>
                            </div>
                          </div>
                        </td>
                        <td>
                          <p className="text-xs text-secondary mb-0">
                            {arrHotels && arrHotels.map((itemHotel, key) => {
                              return (
                                <>{item.hotel_id == itemHotel.id ? itemHotel.name : ''}</>
                              )
                            })}
                          </p>
                        </td>
                        <td>
                          <p className="text-xs text-secondary mb-0">
                            {item.description}
                          </p>
                        </td>
                        <td
                          style={{ width: "30%" }}
                          className="align-middle text-center text-sm"
                        >
                          <span className="badge badge-sm bg-gradient-success">
                            {(() => {
                              if (item.type == 1) {
                                return <>Normal</>;
                              } else if (item.type == 2) {
                                return <>V.I.P</>;
                              } else if (item.type == 3) {
                                return <>V.V.I.P</>;
                              }
                            })()}
                          </span>
                        </td>

                        <td
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
                          <Link
                            to={{
                              pathname: "/dashboard/room-detail",
                              state: item,
                            }}
                          >
                            <button
                              className="btn btn-primary mx-1 font-weight-bold"
                              data-toggle="tooltip"
                            >
                              View
                            </button>
                          </Link>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Room);
