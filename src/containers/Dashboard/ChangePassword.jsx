import React, { Component } from "react";
import swal from "sweetalert";
import { connect } from 'react-redux';
import avatar from "../../assets/images/avatar.jpg";
import { getUserProfileService } from '../../services/UserService.jsx';

class ChangePassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
        user: {}
    };
  }

  async componentDidMount() {
    await this.getUserProfile();
  }

  getUserProfile = async () => {
    let user = this.props.user;
    let response = await getUserProfileService(user.token); 
    if (response && response.errCode === 0) {
        this.setState({
            user: response.user
        })
    }
  }

  render() {
    let user = this.state.user;
    console.log(user)

    return (
      <>
        <div className="card mb-4">
          <div className="card-header pb-0">
            <h4>
              Change Password
            </h4>
          </div>
          <hr />
          <div className="container rounded bg-white mt-5">
        <div className="row">
          <div className="col-md-4 border-right">
            <div className="d-flex flex-column align-items-center text-center p-3 py-5"><img className="rounded-circle mt-5" src={avatar} width={90} /><span className="font-weight-bold">{user.name}</span><span className="text-black-50">{user.email}</span><span>Vietnamese</span></div>
          </div>
          <div className="col-md-8">
            <div className="p-3 py-5">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <div className="d-flex flex-row align-items-center back"><i className="fa fa-long-arrow-left mr-1 mb-1" />
                </div>
                <h6 className="text-right">Edit Profile</h6>
              </div>
              <div className="row mt-2">
                <div className="col-md-6"><input type="text" className="form-control"  placeholder={user.name} /></div>
                <div className="col-md-6"><input type="password" className="form-control" placeholder="Enter your current password" /></div>
              </div>
              <div className="row mt-3">
                <div className="col-md-6"><input type="text" className="form-control" placeholder="Email" defaultValue={user.email} /></div>
                <div className="col-md-6"><input type="password" className="form-control" placeholder="Enter new password" /></div>
              </div>
              <div className="row mt-3">
                <div className="col-md-6"><input type="text" className="form-control" placeholder="address" defaultValue={user.position} /></div>
                <div className="col-md-6"><input type="password" className="form-control" placeholder="Confirm new password" /></div>
              </div>
              <div className="row mt-3">
                <div className="col-md-6"><input type="text" className="form-control" placeholder="Bank Name" defaultValue={user.phone} /></div>
                <div className="col-md-6"><input type="text" className="form-control"  placeholder="Account Number" /></div>
              </div>
              <div className="mt-5 text-right"><button className="btn btn-primary profile-button" type="button">Save Profile</button></div>
            </div>
          </div>
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
    user: state.user
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ChangePassword);
