import React from "react";
import twitterL from "../assets/twitterLogo.png";

const Navbar: React.FC<{}> = () => {
  return (
    <div className="w-[50rem] mt-20">
      <img
        src={twitterL}
        className="ml-12 mt-20 "
        alt="twitter"
        style={{ position: "fixed" }}
      />

      <nav
        className="flex flex-col items-center ml-4 gap-4 mt-32"
        style={{ position: "fixed" }}
      >
        <div className="flex gap-2">
          <img src={homeLogo} alt="home" />
          <Link to={`/homepage/${loggedInUser.id}`}>
            {" "}
            <p>Home</p>
          </Link>
        </div>
        <div className="flex gap-2">
          <img src={profileblack} alt="profileblack" />
          <Link to={`/profile/${loggedInUser.id}`}>
            {" "}
            <p>Profile</p>
          </Link>
        </div>
        <div className="flex gap-2">
          <img src={notification} alt="notification" />
          <p>Notification</p>
        </div>
        <div className="flex gap-2">
          <img src={messages} alt="messages" />
          <p>Messages</p>
        </div>
        <div className="flex gap-2">
          <img src={bookmarks} alt="bookmarks" />
          <p>Bookmarks</p>
        </div>
        <div className="flex gap-2">
          <img src={lists} alt="lists" />
          <p>Lists</p>
        </div>
        <div className="flex gap-2">
          <img src={explore} alt="explore" />
          <p>Explore</p>
        </div>
        <div className="flex gap-2">
          <img src={more} alt="more" />
          <p>More</p>
        </div>
        <div className="flex flex-col gap-4">
          <button className="bg-[#1D9BF0] text-[#FFFFFF] text-[1.125rem] rounded-[1.17rem] px-6 py-1">
            Tweet
          </button>
          <button
            onClick={() => logoutHandler()}
            className="bg-[#1D9BF0] text-[#FFFFFF] text-[1.125rem] rounded-[1.17rem] px-6 py-1"
          >
            Çıkış Yap
          </button>
        </div>
      </nav>

      <div
        className="flex gap-4 ml-4 justify-center"
        style={{ position: "fixed" }}
      >
        <img
          className="h-[4rem] w-[4rem] rounded-full"
          src={loggedInUser.profilePicture}
          alt="bobur"
        />
        <div className="pt-4">
          <h1>{loggedInUser.firstName}</h1>
          <p>{loggedInUser.userName}</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
