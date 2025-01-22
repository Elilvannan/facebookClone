import "./feed.css"
import Share from "../share/share"
import Post from "../post/post"
import {Posts} from "../../dummyData"

export default function feed() {
  return (
    <div className="feedbar">
      <div className="feedwrapper">
        <Share/>
        {Posts.map(data=>(
          <Post key={data.id} post={data}/>
        ))}
      </div>
    </div>

  )
}
