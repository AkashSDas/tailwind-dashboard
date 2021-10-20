import { BsHash } from "react-icons/bs";

function TopicSelection({ selection }) {
  return (
    <div className="dropdown-selection">
      <BsHash size="24" className="text-gray-400" />
      <h5 className="dropdown-selection-text">{selection}</h5>
    </div>
  );
}

export default TopicSelection;
