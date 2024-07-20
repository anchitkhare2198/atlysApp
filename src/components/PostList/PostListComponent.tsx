import { FunctionComponent } from "react";

import "./PostListComponent.scss";
import menuIcon from "../../assets/images/menu-icon.svg";
import reactIcon from "../../assets/images/hi.png";
import commentIcon from "../../assets/images/comment-icon.svg";

interface PostItemProps {
  user: string;
  time: string;
  content: string;
  commentsCount: number;
  userImage: string;
  edited?: boolean;
}

const PostItem: FunctionComponent<PostItemProps> = ({
  user,
  time,
  content,
  commentsCount,
  userImage,
  edited,
}) => {
  return (
    <div className="post-container">
      <div className="post-header">
        <div className="user-image-name-container">
          <img
            src={userImage}
            alt={`${user}'s profile`}
            className="user-image"
          />
          <div>
            <h5 className="user-name">{user}</h5>
            <span>
              <span className="post-time">{`${time} mins ago`}</span>
              {edited && (
                <span className="post-time" style={{ marginLeft: "5px" }}>
                  <span>&#x2022; Edited</span>
                </span>
              )}
            </span>
          </div>
        </div>
        <img src={menuIcon} alt="menu-icon" />
      </div>
      <div className="post-content mb-3">
        <div className="content-icon-container">
          <div>
            <div className="react-icon-container">
              <img src={reactIcon} alt="react" className="react-icon" />
            </div>
          </div>
          <p>{content}</p>
        </div>
      </div>
      <div className="post-footer">
        <img
          src={commentIcon}
          alt="comment-icon"
          style={{ marginRight: "10px" }}
        />
        <span style={{marginBottom: "0"}}>{commentsCount} comments</span>
      </div>
    </div>
  );
};
export default PostItem;
