import { FunctionComponent, useState } from "react";
import CreatePostComponent from "../../components/CreatePost/CreatePostComponent";
import PostItem from "../../components/PostList/PostListComponent";
import Profile from "../../assets/images/profile.svg";
import Profile2 from "../../assets/images/profile2.svg";
import ModalComponent from "../../components/Modal/ModalComponent";

const MainPage: FunctionComponent = () => {
  const [showPopup, setShowPopup] = useState(false);
  const posts = [
    {
      user: "Theresa Webb",
      time: "5",
      content:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      commentsCount: 24,
      userImage: Profile,
      edited: false,
    },
    {
      user: "Marvin McKinney",
      time: "8",
      content:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      commentsCount: 10,
      userImage: Profile2,
      edited: true,
    },
  ];

  const handleShowPopup = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="container">
      <h1>Hello Jane</h1>
      <p>
        How are you doing today? Would you like to share something with the
        community 🤗
      </p>
      <CreatePostComponent clicked={() => handleShowPopup()} />
      {posts.map((post) => (
        <PostItem
          user={post.user}
          time={post.time}
          content={post.content}
          commentsCount={post.commentsCount}
          userImage={post.userImage}
          edited={post.edited}
        />
      ))}
      <ModalComponent
        show={showPopup}
        onHide={handleClosePopup}
        formType="register"
      />
    </div>
  );
};
export default MainPage;
