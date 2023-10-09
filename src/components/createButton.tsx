import { useContext } from "react";
import { RoomContext } from "../context/RoomContext";

const JoinButton: React.FC = () => {
  const { ws } = useContext(RoomContext);
  const createRoom = () => {
    ws.emit("create-room");
  };
  return (
    <button
      onClick={createRoom}
      className="bg-slate-500 text-white py-2 px-8 rounded-lg"
    >
      start new meeting
    </button>
  );
};

export default JoinButton;
