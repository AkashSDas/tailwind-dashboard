import ChannelBlock from "./channel-block";
import DropDown from "./dropdown";

const topics = ["tailwind-css", "react"];
const questions = ["jit-compilation", "purge-files", "dark-mode"];
const random = ["variants", "plugins"];

function ChannelBar() {
  return (
    <div className="channel-bar shadow-lg">
      <ChannelBlock />
      <div className="channel-container">
        <DropDown header="Topics" selections={topics} />
        <DropDown header="Questions" selections={questions} />
        <DropDown header="Random" selections={random} />
      </div>
    </div>
  );
}

export default ChannelBar;
