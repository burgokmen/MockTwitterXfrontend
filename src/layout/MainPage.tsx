import PageBody from "./PageBody";
import SideBarLeft from "./SideBarLeft";
import SideBarRight from "./SideBarRight";

const MainPage = () => {
  return (
    <div className="flex justify-center">
      <SideBarLeft />
      <PageBody />
      <SideBarRight />
    </div>
  );
};

export default MainPage;
