import { useParams } from "react-router-dom";
import SideBarLeft from "../layout/SideBarLeft";
import SideBarRight from "../layout/SideBarRight";

const ProfilePage = () => {
  let { userHandle } = useParams();

  return (
    <div className="flex">
      <SideBarLeft />
      ProfilePage
      <SideBarRight />
    </div>
  );
};

export default ProfilePage;
