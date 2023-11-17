import { useParams } from "react-router-dom";
import SideBarLeft from "../layout/SideBarLeft";
import SideBarRight from "../layout/SideBarRight";
import ProfileTweets from "../components/ProfileTweets";

const ProfilePage = () => {
  const { userHandle } = useParams<{ userHandle: string }>();

  return (
    <div className="flex">
      <SideBarLeft />
      <ProfileTweets userHandle={userHandle || ""} />
      <SideBarRight />
    </div>
  );
};

export default ProfilePage;
