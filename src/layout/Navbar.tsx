import React from "react";
import homeLogo from "../assets/home.png";
import explore from "../assets/explore.png";
import notification from "../assets/notification.png";
import messages from "../assets/messages.png";
import bookmarks from "../assets/bookmarks.png";
import lists from "../assets/lists.png";
import profileblack from "../assets/profileblack.png";
import more from "../assets/more.png";
import twitterL from "../assets/twitterLogo.png";
import picbobur from "../assets/ornekboburpic.png";

const Navbar: React.FC<object> = () => {
  const logoutHandler = () => {
    localStorage.clear();
  };

  return (
    <div className="w-[50rem] mt-20">
      <img
        src={twitterL}
        className="ml-12 mt-20 "
        alt="twitter"
        style={{ position: "fixed" }}
      />

      <nav
        className="flex flex-col ml-4 gap-4 mt-32"
        style={{ position: "fixed" }}
      >
        <div className="flex justify-start gap-2">
          <img src={homeLogo} alt="home" />
        </div>
        <div className="flex gap-2">
          <img src={profileblack} alt="profileblack" />
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
            Logout
          </button>
        </div>
      </nav>

      <div
        className="flex gap-4 ml-4 justify-center"
        style={{ position: "fixed" }}
      >
        <img
          className="h-[4rem] w-[4rem] rounded-full"
          src={picbobur}
          alt="bobur"
        />
        <div className="pt-4">
          <h1>first</h1>
          <p>user</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
