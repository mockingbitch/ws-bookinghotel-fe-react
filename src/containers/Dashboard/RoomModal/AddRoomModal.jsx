import React, { Component } from "react";
// import { FormattedMessage } from 'react-intl';
import { connect } from "react-redux";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { getHotels } from "../../../services/HotelService";

class AddRoomModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      allstock: "",
      type: "",
      hotel_id: "",
      image: "",
      arrHotels: [],
      message: {
        content: "",
        class: "",
      },
    };
  }

  async componentDidMount() {
    await this.getAllHotels();
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
    let arrInput = ["name", "description", "allstock", "type", "hotel_id"];
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
      this.props.createNewRoom(this.state);
      this.setState({
        name: "",
        description: "",
        allstock: "",
        type: "",
        hotel_id: "",
        image: ""
      });
    }
  };

  render() {
    let arrHotels = this.state.arrHotels;

    return (
      <Modal
        isOpen={this.props.isOpen}
        toggle={() => this.toggle()}
        className={"modal-room"}
        size="l"
      >
        <ModalHeader toggle={() => this.toggle()}>Add New Room</ModalHeader>
        <ModalBody>
          <span className={this.state.message.class}>
            {this.state.message.content}
          </span>
          <div className="modal-body-content">
            <div id="create-form" className="card mb-4">
              <div className="form-group mt-4">
                <label htmlFor="inputName">Room name</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputName"
                  aria-describedby="nameHelp"
                  placeholder="Enter room name"
                  value={this.state.name}
                  onChange={(e) => this.handleOnChange(e, "name")}
                />
              </div>
              <div className="form-group mt-4">
                <label htmlFor="inputName">Description</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputName"
                  aria-describedby="nameHelp"
                  placeholder="Enter description"
                  value={this.state.description}
                  onChange={(e) => this.handleOnChange(e, "description")}
                />
              </div>
              <div className="form-group mt-4">
                <label htmlFor="inputName">Allstock</label>
                <input
                  type="number"
                  name="allstock"
                  className="form-control"
                  id="inputName"
                  aria-describedby="nameHelp"
                  placeholder="Enter number of stock"
                  value={this.state.allstock}
                  onChange={(e) => this.handleOnChange(e, "allstock")}
                />
              </div>
              <div className="form-group">
                <label htmlFor="inputCity">Type</label>
                <select
                  name="type"
                  value={this.state.type}
                  onChange={(e) => this.handleOnChange(e, "type")}
                  className="form-control"
                >
                  <option>Please choose type</option>
                  <option value={1}>Normal</option>
                  <option value={2}>V.I.P</option>
                  <option value={3}>V.V.I.P</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="inputHotline">Hotel</label>
                <select
                  value={this.state.r}
                  onChange={(e) => this.handleOnChange(e, "hotel_id")}
                  className="form-control"
                >
                  <option>Choose hotel</option>
                  {arrHotels &&
                    arrHotels.map((item, key) => {
                      return <option value={item.id}>{item.name}</option>;
                    })}
                </select>
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

export default connect(mapStateToProps, mapDispatchToProps)(AddRoomModal);
