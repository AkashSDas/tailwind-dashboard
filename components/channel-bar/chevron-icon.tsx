import { FaChevronDown, FaChevronRight } from "react-icons/fa";

const ChevronIcon = ({ expanded }: { expanded: boolean }) => {
  const chevClass = "text-accent text-opacity-80 my-auto mr-1";

  return expanded ? (
    <FaChevronDown size="14" className={chevClass} />
  ) : (
    <FaChevronRight size="14" className={chevClass} />
  );
};

export default ChevronIcon;
