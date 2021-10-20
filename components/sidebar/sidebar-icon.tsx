import { ReactElement } from "react";

interface Props {
  icon: ReactElement;
  text?: string;
}

function SideBarIcon({ icon, text = "tooltip 💡" }: Props) {
  return (
    <div className="sidebar-icon group">
      {icon}
      <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
    </div>
  );
}

export default SideBarIcon;
