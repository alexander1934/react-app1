import profile from "./Profile.module.css";
import UserName from "./Username/Username";

const Profile = () => {
  return (
    <div className={profile.page}>
      <img
        src="https://img.freepik.com/free-vector/cute-weather-pattern-background-wallpaper-weather-vector-illustration_53876-140174.jpg?w=1380&t=st=1663161628~exp=1663162228~hmac=e97b80a5efa60bfd58a5ff5c06befef4f6a1ea0f40810af121a7392c99b1dfa9"
        className={profile.background}
      />
      <UserName
        firstName="Alexander"
        lastName="Kovalenko"
        id="@alexanderkovalenko"
      />
    </div>
  );
};

export default Profile;
