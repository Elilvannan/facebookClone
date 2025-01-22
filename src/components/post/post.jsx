import "./post.css";
import {Users} from "../../dummyData"
import { useState } from 'react';


import {MoreVert
  } from "@mui/icons-material";

export default function Post({post}) {

  const [like,setLike] = useState(post.like);  
  const [isLiked,setIsLiked] = useState(false);

 const likeHander=()=>{
  setLike(isLiked ? like-1 : like + 1)
  setIsLiked(isLiked? false :true)
 }
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img src={Users.filter(user=>user.id===post.userId)[0].profilePicture}  alt="" className="PostProfileImg" />
            <span className="postUsername">
              {Users.filter(user=>user.id===post.userId)[0].username} 
            </span>
            <span className="postDate">
            {post.date}
            </span>
          </div>
          <div className="postTopRight">
            <MoreVert/>
          </div>
        </div>

        <div className="postCenter">
            <span className="postText"> {post?.desc}</span>
            <img className="postImg" src={post.photo} alt="" />
        </div>

        <div className="postBottom">
            <div className="postButtonLeft">
                <img className="likeIcon" src="assert/like.png" alt="" onClick={likeHander} />
                <img className="likeIcon" src="assert/heart.png" alt="" onClick={likeHander} />
                <span className="postLikeCounter">{like} people like it</span>
            </div>
            <div className="postButtonRight">
                <span className="postCommentText">{post.comments}</span>
            </div>
        </div>
      </div>
    </div>
  );
}
