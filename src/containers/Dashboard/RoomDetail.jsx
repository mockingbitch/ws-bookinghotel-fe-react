import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import FullCalendar from "@fullcalendar/react";
import daygridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { getAmountService } from "../../services/AmountService";
import { getAvailabilityService } from "../../services/AvailabilityService";
import SetStockRoomModal from "./RoomModal/SetStockRoomModal";
import SetPriceRoomModal from "./RoomModal/SetPriceRoomModal";
import swal from "sweetalert";
import { setAmountService } from "../../services/AmountService";
import { setAvailabilityService } from "../../services/AvailabilityService";

class RoomDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      room: {},
      amounts: [],
      availabilities: [],
      events: [],
      avais: [],
      isOpenModalSetStockRoom: false,
      isOpenModalSetPriceRoom: false,
    };
  }

  handleDateClick = (e) => {
    console.log(e.dateStr);
  };
  async componentDidMount() {
    let room = this.props.location.state;
    this.setState({
      room: room,
    });
    await this.getRoomDetail(room.id);
  }

  getRoomDetail = async (room_id) => {
    let amounts = await getAmountService(room_id);
    let availabilities = await getAvailabilityService(room_id);
    this.setState({
      amounts: amounts.amounts,
      availabilities: availabilities.availabilities,
    });
    let arrAmount = this.state.amounts;
    let arrAvai = this.state.availabilities;
    var datas = [];
    if (arrAmount != null) {
      for (let i = 0; i < arrAmount.length; i++) {
        var data = {
          title: "Price: " + arrAmount[i].price,
          date: arrAmount[i].date,
        };
        datas[i] = data;
        this.setState({
          events: datas,
        });
      }
    }
    var dataAvais = [];
    if (arrAvai != null) {
      for (let i = 0; i < arrAvai.length; i++) {
        var dataAvai = {
          title: "Stock: " + arrAvai[i].stock,
          date: arrAvai[i].date,
        };
        dataAvais[i] = dataAvai;
        this.setState({
          avais: dataAvais,
        });
      }
    }
  };

  handleSetStock = () => {
    this.setState({
      isOpenModalSetStockRoom: true,
    });
  };

  handleSetPrice = () => {
    this.setState({
      isOpenModalSetPriceRoom: true,
    });
  };

  setStock = async (data) => {
    try {
      let response = await setAvailabilityService(data);

      if (response && response.errCode !== 0) {
        swal("Something went wrong!", response.message, "warning");
      } else {
        swal("Good job!", response.message, "success");
        await this.getRoomDetail(this.state.room.id);
        this.setState({
          isOpenModalSetStockRoom: false,
        });
      }
    } catch (e) {
      swal("Something went wrong!", "create failed!", "warning");
      console.log(e);
    }
  };

  setPrice = async (data) => {
    try {
      let response = await setAmountService(data);

      if (response && response.errCode !== 0) {
        swal("Something went wrong!", response.message, "warning");
      } else {
        swal("Good job!", response.message, "success");
        await this.getRoomDetail(this.state.room.id);
        this.setState({
          isOpenModalSetPriceRoom: false,
        });
      }
    } catch (e) {
      swal("Something went wrong!", "create failed!", "warning");
      console.log(e);
    }
  };

  toggleModal = () => {
    this.setState({
      isOpenModalSetPriceRoom: false,
      isOpenModalSetStockRoom: false,
    });
  };

  render() {
    let events = this.state.events;
    var datas = [];
    for (let i = 0; i < events.length; i++) {
      let data = {
        title: events[i].title,
        date: events[i].date,
      };
      datas[i] = data;
    }
    let avais = this.state.avais;
    var dataAvais = [];
    for (let i = 0; i < avais.length; i++) {
      let data = {
        title: avais[i].title,
        date: avais[i].date,
      };
      dataAvais[i] = data;
    }
    let finalData = datas.concat(dataAvais);

    return (
      <>
        <div className="card mb-4">
          <div className="card-header pb-0">
            <div>
              {this.state.isOpenModalSetStockRoom && (
                <SetStockRoomModal
                  isOpen={this.state.isOpenModalSetStockRoom}
                  toggleFromParent={this.toggleModal}
                  currentRoom={this.state.room}
                  setStock={this.setStock}
                />
              )}
              {this.state.isOpenModalSetPriceRoom && (
                <SetPriceRoomModal
                  isOpen={this.state.isOpenModalSetPriceRoom}
                  toggleFromParent={this.toggleModal}
                  currentRoom={this.state.room}
                  setPrice={this.setPrice}
                />
              )}
            </div>
            <h4>
              Room Detail
              <button
                onClick={() => this.handleSetStock()}
                style={{ float: "right" }}
                className="btn btn-primary mx-1 font-weight-bold"
                data-toggle="tooltip"
              >
                Set stock
              </button>
              <button
                onClick={() => this.handleSetPrice()}
                style={{ float: "right" }}
                className="btn btn-primary mx-1 font-weight-bold"
                data-toggle="tooltip"
              >
                Set price
              </button>
            </h4>
          </div>
          <hr />
          <FullCalendar
            selectable={true}
            initialView="dayGridMonth"
            plugins={[daygridPlugin, interactionPlugin]}
            dateClick={(e) => this.handleDateClick(e)}
            events={finalData}
            // eventContent={renderEvenContent}
          />
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

export default connect(mapStateToProps, mapDispatchToProps)(RoomDetail);
