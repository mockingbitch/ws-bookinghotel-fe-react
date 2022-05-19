import React, { Component } from "react";
// import { FormattedMessage } from 'react-intl';
import { connect } from "react-redux";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import _ from "lodash";
import { getHotels } from "../../../services/HotelService";
import DatePicker from "react-datepicker";

class SetPriceRoomModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrHotels: [],
      hotel_name: "",
      price: "",
      start_date: "",
      end_date: "",
      message: {
        content: "",
        class: "",
      },
    };
  }

  async componentDidMount() {
    await this.getAllHotels();
    let room = this.props.currentRoom;
    if (room && !_.isEmpty(room)) {
      this.setState({
        room_id: room.id,
        name: room.name,
        hotel_id: room.hotel_id,
      });
    }
    let arrHotels = this.state.arrHotels;
    for (let index = 0; index < arrHotels.length; index++) {
      if (arrHotels[index].id == this.state.hotel_id) {
        this.setState({
          hotel_name: arrHotels[index].name,
        });
      }
    }
    console.log(this.state.hotel_name);
  }

  getAllHotels = async () => {
    let response = await getHotels();
    if (response && response.errCode === 0) {
      this.setState({
        arrHotels: response.hotels,
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
    let arrInput = ["price", "start_date", "end_date"];
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

  handleSetPrice = () => {
    let isValid = this.checkValidateInput();

    if (isValid === true) {
      this.props.setPrice(this.state);
      this.setState({
        hotel_name: "",
        price: "",
        start_date: "",
        end_date: "",
      });
    }
  };

  render() {
    return (
      <Modal
        isOpen={this.props.isOpen}
        toggle={() => this.toggle()}
        className={"modal-room"}
        size="l"
      >
        <ModalHeader toggle={() => this.toggle()}>Set Price</ModalHeader>
        <ModalBody>
          <span className={this.state.message.class}>
            {this.state.message.content}
          </span>
          <div className="modal-body-content">
            <div id="create-form" className="card mb-4">
              <div className="form-group mt-4">
                <label htmlFor="inputName">Hotel</label>
                <input
                  type="text"
                  name="hotel"
                  className="form-control"
                  readOnly
                  id="inputName"
                  aria-describedby="nameHelp"
                  value={this.state.hotel_name}
                />
              </div>
              <div className="form-group mt-4">
                <label htmlFor="inputName">Room name</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  readOnly
                  id="inputName"
                  aria-describedby="nameHelp"
                  value={this.state.name}
                />
              </div>
              <div className="form-group mt-4">
                <label htmlFor="inputName">
                  Price <small style={{ opacity: "0.7" }}>(vnd)</small>
                </label>
                <input
                  type="text"
                  name="price"
                  className="form-control"
                  id="inputName"
                  aria-describedby="nameHelp"
                  placeholder="Enter price"
                  onChange={(e) => this.handleOnChange(e, "price")}
                />
              </div>
              <div className="form-group mt-4 row">
                <div className="form-group col-6">
                  <label htmlFor="inputStartDate">Start date</label>
                  <input
                    type="date"
                    className="form-control"
                    onChange={(e) => this.handleOnChange(e, "start_date")}
                  />
                </div>
                <div className="form-group col-6">
                  <label htmlFor="inputEndDate">
                    End date
                    <small>
                      <i style={{ opacity: "0.7" }}>( nullable )</i>
                    </small>
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    onChange={(e) => this.handleOnChange(e, "end_date")}
                  />
                </div>
              </div>
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            className="px-3"
            onClick={() => this.handleSetPrice()}
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

export default connect(mapStateToProps, mapDispatchToProps)(SetPriceRoomModal);
