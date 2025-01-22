import React from "react";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/sidebar";
import Rightbar from "../../components/rightbar/rightbar";
import Feed from "../../components/feed/feed";
import "./Home.css";

export default function Home() {
  return (
    <div>
      <Topbar />
      <div className="homeContainer">
        <Sidebar />
        <Feed />
        {/* Pass the string 'Home' as the pageName prop */}
        <Rightbar pageName="Home" />
      </div>
    </div>
  );
}
