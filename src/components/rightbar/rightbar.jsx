import "./rightbar.css";
import { Users } from "../../dummyData";
export default function rightbar({pageName}) {
  const Home = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img src="assert/gift.png" alt="" className="birthdayImg" />
          <span className="birthText">
            {" "}
            <b>ajay</b> and <b>3 other friends</b> have a birthday today{" "}
          </span>
        </div>
        <img src="assert/ad.png" alt="" className="rightbarAdd" />

        <h4 className="rightbarTitle">Online friends</h4>

        <ul className="rightbarFriendsList">
          {Users.map((user) => (
            <li className="rightbarFriend">
              <div className="rightbarProfileImgContainer">
                <img
                  src={user.profilePicture}
                  alt=""
                  className="rightbarProfileImg"
                />
                <span className="rightbarOnline"></span>
              </div>
              <span className="rightbarUsername">{user.username}</span>
            </li>
          ))}
        </ul>
      </>
    );
  };

  const Profile = () => {
    return (
      <>
        <h1 className="rightbarTitle">User Information</h1>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City : </span>
            <span className="rightbarInfoValue">New York</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From : </span>
            <span className="rightbarInfoValue">Madrid</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship : </span>
            <span className="rightbarInfoValue">Single</span>
          </div>
        </div>

        <h1 className="rightbarTitle">User Friends</h1>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img
              src="assert/person/1.jpeg"
              alt=""
              className="rightbarFollwingImg"
            />
            <span className="rightbarFollowingName">Elilvannan</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assert/person/2.jpeg"
              alt=""
              className="rightbarFollwingImg"
            />
            <span className="rightbarFollowingName">Elilvannan</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assert/person/3.jpeg"
              alt=""
              className="rightbarFollwingImg"
            />
            <span className="rightbarFollowingName">Elilvannan</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assert/person/4.jpeg"
              alt=""
              className="rightbarFollwingImg"
            />
            <span className="rightbarFollowingName">Elilvannan</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assert/person/5.jpeg"
              alt=""
              className="rightbarFollwingImg"
            />
            <span className="rightbarFollowingName">Elilvannan</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assert/person/6.jpeg"
              alt=""
              className="rightbarFollwingImg"
            />
            <span className="rightbarFollowingName">Elilvannan</span>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="rightbar">
     <div className="rightbarWrapper">
        {console.log(pageName)}
        {pageName === "Home" ? <Home /> : <Profile />}
      </div>
    </div>
  );
}
