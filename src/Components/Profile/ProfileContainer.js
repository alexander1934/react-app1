import { connect } from "react-redux";
import React from "react";
import Axios from "axios";
import Profile from "./Profile";
import { getProfile } from "../../Redux/reducers/profileReducer";
import Preloader from "../Common/Preloader/Preloader";

class ProfileContainer extends React.Component {
  componentDidMount() {
    Axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(
      (response) => {
        this.props.getProfile(response.data);
      }
    );
  }

  render() {
    return <>{this.props.profilePage.profile ? <Profile profilePage={this.props.profilePage} /> : <Preloader width = "80px"/>}</>;
  }
}

const mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage,
  };
};

export default connect(mapStateToProps, { getProfile })(ProfileContainer);
