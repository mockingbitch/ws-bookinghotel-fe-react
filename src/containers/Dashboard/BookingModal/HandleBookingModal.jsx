import React, { Component } from "react";
// import { FormattedMessage } from 'react-intl';
import { connect } from "react-redux";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import _ from "lodash";
import { getBookingDetail } from "../../../services/BookingDetailService";
import { getAllCodeService } from "../../../services/CodeService";

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
    let booking = await this.props.currentBooking;
    await this.getAllCode();
    if (booking && !_.isEmpty(booking)) {
      this.setState({
        id: booking.id,
        guest_email: booking.guest_email,
        guest_phone: booking.guest_phone,
        note: booking.note,
        total: booking.total,
      });
      await this.getBookingDetail(this.state.id);
    }
  }

  getBookingDetail = async (id) => {
    let response = await getBookingDetail(id);
    if (response && response.errCode === 0) {
      this.setState({
        guest_name: response.bookingDetail.guest_name,
        admin_name: response.bookingDetail.admin_name,
        room_name: response.bookingDetail.room_name,
        start_date: response.bookingDetail.start_date,
        end_date: response.bookingDetail.end_date,
      });
    }
  };

  getAllCode = async () => {
    let response = await getAllCodeService("BOOKINGSTATUS");
    if (response && response.errCode === 0) {
      this.setState({
        statusCode: response.codes,
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

  handleBooking = () => {
    this.props.handleBookingStatus(this.props.currentBooking.id, this.state);
  };

  render() {
    let statusCode = this.state.statusCode;

    return (
      <Modal
        isOpen={this.props.isOpen}
        toggle={() => this.toggle()}
        className={"modal-hotel"}
        size="l"
      >
        <ModalHeader toggle={() => this.toggle()}>
          View Booking Detail
        </ModalHeader>
        <ModalBody>
          <span className={this.state.message.class}>
            {this.state.message.content}
          </span>
          <div className="modal-body-content">
            <div id="create-form" className="card mb-4">
              <div className="row">
                <div className="form-group mt-4 col-6">
                  <label htmlFor="inputName">Guest name</label>
                  <input
                    className="form-control"
                    type="text"
                    value={this.state.guest_name}
                    disabled
                  />
                </div>
                <div className="form-group mt-4 col-6">
                  <label htmlFor="inputName">Handler</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputName"
                    value={this.state.admin_name}
                    disabled
                  />
                </div>
              </div>
              <div className="form-group mt-4">
                <label htmlFor="inputName">Room name</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputName"
                  value={this.state.room_name}
                  disabled
                />
              </div>
              <div className="row">
                <div className="form-group mt-4 col-6">
                  <label htmlFor="inputName">Start date</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputName"
                    value={this.state.start_date}
                    disabled
                  />
                </div>
                <div className="form-group mt-4 col-6">
                  <label htmlFor="inputName">End date</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputName"
                    value={this.state.end_date}
                    disabled
                  />
                </div>
              </div>
              <div className="row">
                <div className="form-group mt-4 col-6">
                  <label htmlFor="inputName">Email</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputName"
                    value={this.state.guest_email}
                    disabled
                  />
                </div>
                <div className="form-group mt-4 col-6">
                  <label htmlFor="inputName">Phone number</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputName"
                    value={this.state.guest_phone}
                    disabled
                  />
                </div>
              </div>
              <div className="form-group mt-4">
                <label htmlFor="inputName">Total</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputName"
                  value={this.state.total}
                  disabled
                />
              </div>
              <div className="form-group mt-4">
                <label htmlFor="inputName">Note</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputName"
                  value={this.state.note}
                  disabled
                />
              </div>
              <div className="form-group mt-4">
                <label htmlFor="inputName">Status</label>
                <select
                  onChange={(e) => this.handleOnChange(e, "status")}
                  className="form-control"
                >
                  {statusCode &&
                    statusCode.map((item, key) => {
                      if (statusCode == item.key) {
                        return (
                          <option value={item.key} selected>
                            {item.value_vi}
                          </option>
                        );
                      } else {
                        return (
                          <option value={item.key}>{item.value_vi}</option>
                        );
                      }
                    })}
                </select>
              </div>
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            className="px-3"
            onClick={() => this.handleBooking()}
          >
            Save
          </Button>
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

export default connect(mapStateToProps, mapDispatchToProps)(HandleBookingModal);
