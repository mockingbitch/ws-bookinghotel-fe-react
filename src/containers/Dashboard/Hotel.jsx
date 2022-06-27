import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getHotels,
  deleteHotelService,
  createHotelService,
  editHotelService,
  getUserTest,
} from "../../services/HotelService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import swal from "sweetalert";
import hotelImg from "../../assets/images/222.jpg";
import AddHotelModal from "./HotelModal/AddHotelModal";
import EditHotelModal from "./HotelModal/EditHotelModal";
import "./Hotel.scss";
import { getAllCityService } from "../../services/CityService";

class Hotel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrHotels: [],
      hotel: {},
      cities: [],
      isOpenModalAddHotel: false,
      isOpenModalEditHotel: false,
    };
  }

  async componentDidMount() {
    await this.getAllHotels();
    await this.getAllCities();
    await this.getUser();
  }

  getAllHotels = async () => {
    let response = await getHotels();
    if (response && response.errCode === 0) {
      this.setState({
        arrHotels: response.hotels,
      });
    }
  };

  getUser = async () => {
    let response = await getUserTest();
    console.log(response);
    console.log("test");
  };

  getAllCities = async () => {
    let response = await getAllCityService();
    if (response && response.errCode === 0) {
      this.setState({
        cities: response.cities,
      });
    }
  };

  handleAddnewHotel = () => {
    console.log("add");
    this.setState({
      isOpenModalAddHotel: true,
    });
  };

  createNewHotel = async (data) => {
    try {
      let response = await createHotelService(data);

      if (response && response.errCode !== 0) {
        swal("Something went wrong!", response.message, "warning");
      } else {
        swal("Good job!", response.message, "success");
        await this.getAllHotels();
        this.setState({
          isOpenModalAddHotel: false,
        });
      }
    } catch (e) {
      console.log(e);
    }
  };

  handleEdit = (data) => {
    this.setState({
      isOpenModalEditHotel: true,
      hotel: data,
    });
  };

  editHotel = async (id, data) => {
    try {
      data["id"] = id;
      let response = await editHotelService(data);

      if (response && response.errCode !== 0) {
        swal("Something went wrong!", response.message, "warning");
      } else {
        swal("Good job!", response.message, "success");
        await this.getAllHotels();
        this.setState({
          isOpenModalEditHotel: false,
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
          let response = await deleteHotelService(data.id);
          await this.getAllHotels();
          if (response) {
            swal(response.message, {
              icon: response.errCode === 0 ? "success" : "warning",
            });
          }
        } catch (e) {
          console.log(e);
        }
      } else {
        swal("Your data is safe!");
      }
    });
  };

  toggleModal = () => {
    this.setState({
      isOpenModalAddHotel: false,
      isOpenModalEditHotel: false,
    });
  };

  render() {
    let arrHotels = this.state.arrHotels;
    let cities = this.state.cities;

    return (
      <>
        <div>
          {this.state.isOpenModalAddHotel && (
            <AddHotelModal
              isOpen={this.state.isOpenModalAddHotel}
              toggleFromParent={this.toggleModal}
              createNewHotel={this.createNewHotel}
            />
          )}
          {this.state.isOpenModalEditHotel && (
            <EditHotelModal
              isOpen={this.state.isOpenModalEditHotel}
              toggleFromParent={this.toggleModal}
              currentHotel={this.state.hotel}
              editHotel={this.editHotel}
            />
          )}
        </div>
        <div className="card mb-4">
          <div className="card-header pb-0">
            <h6>
              Hotels table
              <button
                onClick={() => this.handleAddnewHotel()}
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
                      Hotel
                    </th>
                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                      City
                    </th>
                    <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                      Hotline
                    </th>
                    <th className="text-secondary opacity-7" />
                  </tr>
                </thead>
                <tbody>
                  {arrHotels &&
                    arrHotels.map((item, index) => {
                      return (
                        <tr>
                          <td>
                            <div className="d-flex px-2 py-1">
                              <div>
                                <img
                                  src={hotelImg}
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
                            {cities &&
                              cities.map((itemCity, key) => {
                                return (
                                  <p className="text-xs text-secondary mb-0">
                                    {itemCity.id == item.city_id
                                      ? itemCity.name
                                      : ""}
                                  </p>
                                );
                              })}
                          </td>
                          <td className="align-middle text-center text-sm">
                            <span className="badge badge-sm bg-gradient-success">
                              {item.hotline}
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

export default connect(mapStateToProps, mapDispatchToProps)(Hotel);
