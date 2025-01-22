import "./sidebar.css";
import {
  RssFeed,
  PlayCircle,
  Chat,
  Groups,
  Bookmarks,
  HelpOutline,
  WorkOutline,
  WorkspacePremium,
  CalendarMonth
} from "@mui/icons-material";

import {Users} from "../../dummyData"


export default function sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeed />
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
            <Chat />
            <span className="sidebarListItemText">Chat</span>
          </li>
          <li className="sidebarListItem">
            <PlayCircle />
            <span className="sidebarListItemText">Videos</span>
          </li>
          <li className="sidebarListItem">
            <Groups />
            <span className="sidebarListItemText">Groups</span>
          </li>
          <li className="sidebarListItem">
            <Bookmarks />
            <span className="sidebarListItemText">Bookmarks</span>
          </li>
          <li className="sidebarListItem">
            <HelpOutline />
            <span className="sidebarListItemText">Questions</span>
          </li>
          <li className="sidebarListItem">
            <WorkOutline />
            <span className="sidebarListItemText">Jobs</span>
          </li>
          <li className="sidebarListItem">
            <CalendarMonth />
            <span className="sidebarListItemText">Events</span>
          </li>
          <li className="sidebarListItem">
            <WorkspacePremium />
            <span className="sidebarListItemText">Courses</span>
          </li>
        </ul>

        <button className="sidebarButton">Show More</button>
        
        <hr className="sidebarHr"/>
        
        <ul className="sidebarFriendList">
          {Users.map(user=>(
            <li className="sidebarFriend">
                <img src={user.profilePicture} alt="" className="sidebarFriendImg" />
                <span className="sidebarFriendNAme">{user.username}</span>
            </li>
          ))}
            
        </ul>
      </div>
    </div>
  );
}
