import ChannelBar from "../components/channel-bar";
import ContentContainer from "../components/content-container";
import SideBar from "../components/sidebar";

function Index() {
  return (
    <div className="flex">
      <SideBar />
      <ChannelBar />
      <ContentContainer />
    </div>
  );
}

export default Index;
