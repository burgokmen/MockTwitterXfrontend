import { useParams } from "react-router-dom";

const ProfilePage = () => {
  let { userHandle } = useParams();

  return <div>ProfilePage</div>;
};

export default ProfilePage;
