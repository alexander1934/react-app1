import Background from "./Background/Background";
import profile from "./Profile.module.css";
import UserName from "./Username/Username";

const Profile = () => {
  return (
    <div className={profile.page}>
     <Background src="https://images.unsplash.com/photo-1493130952181-47e36589f64d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1554&q=80"/>
      <UserName
        firstName="Alexander"
        lastName="Kovalenko"
        id="@alexanderkovalenko"
      />
    </div>
  );
};

export default Profile;
