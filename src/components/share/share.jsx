import "./share.css";

import { PermMedia,LocalOffer, LocationOn,EmojiEmotions} from "@mui/icons-material";

export default function share() {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img src="/assert/person/1.jpeg" alt="" className="shareProfileImg" />
          <input placeholder="What's in your mind?" className="shareInput" />
        </div>

        <hr className="shareHr" />

        <div className="shareButtom">
          <div className="shareOptions">
            <div className="shareOption">
              <PermMedia htmlColor="tomato" className="shareIcon" />
              <span className="shareOptionText">Photo or Video</span>
            </div>
            <div className="shareOption">
              <LocalOffer htmlColor="blue" className="shareIcon" />
              <span className="shareOptionText">Tag</span>
            </div>
            <div className="shareOption">
              <LocationOn htmlColor="green" className="shareIcon" />
              <span className="shareOptionText">Location</span>
            </div>
            <div className="shareOption">
              <EmojiEmotions htmlColor="goldenrod" className="shareIcon" />
              <span className="shareOptionText">Feelings</span>
            </div>
          </div>
          <button className="shareButton">share</button>
        </div>
      </div>
    </div>
  );
}
