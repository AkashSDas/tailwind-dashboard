import { UserCircle, HashtagIcon, Title, BellIcon } from "./icons";
import Search from "./search";
import ThemeIcon from "./theme-icon";

function TopNavigation() {
  return (
    <div className="top-navigation">
      <HashtagIcon />
      <Title />
      <ThemeIcon />
      <Search />
      <BellIcon />
      <UserCircle />
    </div>
  );
}

export default TopNavigation;
