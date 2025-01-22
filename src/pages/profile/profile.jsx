import "./profile.css";

import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/sidebar";
import Rightbar from "../../components/rightbar/rightbar";
import Feed from "../../components/feed/feed";

export default function Profile() {
  return (
    <div>
      <Topbar></Topbar>
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">

            <div className="profileCover">
            <img src="assert/post/1.jpeg" alt="" className="profileCoverImg" />
            <img src="assert/post/1.jpeg" alt="" className="profileUserImg" />
            </div>

            <div className="profileInfo">
              <h4 className="profileInfoName">Ajay aj</h4>
              <h4 className="profileInfoDesc">Hello my friends!!!</h4>
            </div>

          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile/>
          </div>
        </div>
      </div>
    </div>
  );
}
