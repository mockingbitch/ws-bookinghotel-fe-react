import React, { Component } from "react";
// import { FormattedMessage } from 'react-intl';
import { connect } from "react-redux";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { getAllCityService } from "../../../services/CityService";

class AddHotelModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      city_id: 1,
      address: "",
      hotline: "",
      description: "",
      image: "",
      cities: [],
      message: {
        content: "",
        class: "",
      },
    };
  }

  async componentDidMount() {
      await this.getAllCities();
  }

  getAllCities = async () => {
    let response = await getAllCityService();
    if (response && response.errCode === 0) {
      this.setState({
        cities: response.cities,
      });
    }
  };

  toggle = () => {
    this.props.toggleFromParent();
    this.setState({
      message: {
        content: "",
        class: "",
      },
    });
  };

  handleOnChange = (e, id) => {
    let twinState = { ...this.state };
    twinState[id] = e.target.value;
    this.setState({
      ...twinState,
    });
  };

  checkValidateInput = () => {
    let arrInput = ["name", "city_id", "hotline", "description"];
    let isValid = true;
    for (let i = 0; i < arrInput.length; i++) {
      if (!this.state[arrInput[i]]) {
        isValid = false;
        this.setState({
          message: {
            content: "Missing parameters: " + arrInput[i],
            class: "alert alert-danger",
          },
        });
        break;
      }
    }

    return isValid;
  };

  handleAddNewUser = () => {
    let isValid = this.checkValidateInput();

    if (isValid === true) {
      this.props.createNewHotel(this.state);
      this.setState({
        name: "",
        city: "",
        hotline: "",
        description: "",
        image: "",
      });
    }
  };

  render() {
    let cities = this.state.cities;

    return (
      <Modal
        isOpen={this.props.isOpen}
        toggle={() => this.toggle()}
        className={"modal-hotel"}
        size="l"
      >
        <ModalHeader toggle={() => this.toggle()}>Add New Hotel</ModalHeader>
        <ModalBody>
          <span className={this.state.message.class}>
            {this.state.message.content}
          </span>
          <div className="modal-body-content">
            <div id="create-form" className="card mb-4">
              <div className="form-group mt-4">
                <label htmlFor="inputName">Hotel name</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputName"
                  aria-describedby="nameHelp"
                  placeholder="Enter hotel name"
                  onChange={(e) => this.handleOnChange(e, "name")}
                  value={this.state.name}
                />
              </div>
              <div className="form-group">
                <label htmlFor="inputCity">City</label>
                <select
                  onChange={(e) => this.handleOnChange(e, "city_id")}
                  className="form-control"
                >
                  {cities &&
                    cities.map((item, key) => {
                      return <option value={item.id}>{item.name}</option>;
                    })}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="inputCity">Address</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputCity"
                  placeholder="Enter city"
                  onChange={(e) => this.handleOnChange(e, "address")}
                  value={this.state.address}
                />
              </div>
              <div className="form-group">
                <label htmlFor="inputHotline">Hotline</label>
                <input
                  type="text"
                  className="form-control"
                  name="hotline"
                  id="inputHotline"
                  placeholder="Enter hotline"
                  onChange={(e) => this.handleOnChange(e, "hotline")}
                  value={this.state.hotline}
                />
              </div>
              <div className="form-group">
                <label htmlFor="inputDescription">Description</label>
                <input
                  type="text"
                  className="form-control"
                  name="description"
                  id="inputDescription"
                  placeholder="Enter description"
                  onChange={(e) => this.handleOnChange(e, "description")}
                  value={this.state.description}
                />
              </div>
              <div className="form-group">
                <label htmlFor="inputImage">Image</label>
                <input
                  type="file"
                  className="form-control"
                  name="image"
                  id="inputImage"
                  placeholder="Upload image"
                />
              </div>
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            className="px-3"
            onClick={() => this.handleAddNewUser()}
          >
            Save
          </Button>{" "}
          <Button
            color="secondary"
            className="px-3"
            onClick={() => this.toggle()}
          >
            Close
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(AddHotelModal);
