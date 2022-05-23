import React, { Component } from "react";
// import { FormattedMessage } from 'react-intl';
import { connect } from "react-redux";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import _ from "lodash";
import { getBookingDetail } from "../../../services/BookingDetailService";

class HandleBookingModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: {
        content: "",
        class: "",
      },
    };
  }

  async componentDidMount() {
    let booking = this.props.currentBooking;
    if (booking && !_.isEmpty(booking)) {
      this.setState({
        id: booking.id,
        guest_id: booking.guest_id,
        admin_id: booking.admin_id,
        guest_name: booking.guest_name,
        guest_email: booking.guest_email,
        guest_phone: booking.guest_phone,
        note: booking.note,
        total: booking.total
      });
      await this.getBookingDetail(booking.id);
    }
  }

  getBookingDetail = async (id) => {
    let response = await getBookingDetail(id);
    if (response && response.errCode === 0) {
      this.setState({
        room_id: response.bookingDetail.id,
        start_date: response.bookingDetail.start_date,
        end_date: response.bookingDetail.end_date,
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

//   handleEditUser = () => {
//     let isValid = this.checkValidateInput();

//     if (isValid === true) {
//       this.props.editHotel(this.props.currentHotel.id, this.state);
//     }
//   };

  render() {
    console.log(this.state);

    return (
      <Modal
        isOpen={this.props.isOpen}
        toggle={() => this.toggle()}
        className={"modal-hotel"}
        size="l"
      >
        <ModalHeader toggle={() => this.toggle()}>View Booking Detail</ModalHeader>
        <ModalBody>
          <span className={this.state.message.class}>
            {this.state.message.content}
          </span>
          <div className="modal-body-content">
            <div id="create-form" className="card mb-4">
              {/* <div className="form-group mt-4">
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
                      if (city_id == item.id) {
                        return (
                          <option value={item.id} selected>
                            {item.name}
                          </option>
                        );
                      } else {
                        return <option value={item.id}>{item.name}</option>;
                      }
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
              </div> */}
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          {/* <Button
            color="primary"
            className="px-3"
            onClick={() => this.handleEditUser()}
          >
            Save
          </Button>
          <Button
            color="secondary"
            className="px-3"
            onClick={() => this.toggle()}
          >
            Close
          </Button> */}
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

export default connect(mapStateToProps, mapDispatchToProps)(HandleBookingModal);
