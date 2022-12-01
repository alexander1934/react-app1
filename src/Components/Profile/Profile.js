import Background from "./Background/Background";
import Posts from "./Posts/Posts";
import profile from "./Profile.module.css";
import Status from "./Status/Status";
import UserName from "./Username/Username";

const Profile = (props) => {
  return (
    <div className={profile.page}>
      <Background src="https://images.unsplash.com/photo-1493130952181-47e36589f64d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1554&q=80" />
      <div className={profile.info}>
        <UserName
          firstName="Alexander"
          lastName="Kovalenko"
          id="@alexanderkovalenko"
        />
        <Status value="Hi!!" />
        <Posts
          posts={props.posts}
          dispatch={props.dispatch}
          newPostText={props.newPostText}
        />
      </div>
    </div>
  );
};

export default Profile;
