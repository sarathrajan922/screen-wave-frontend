import { useContext } from "react";
import { RoomContext } from "../context/RoomContext";

const JoinButton: React.FC = () => {
  const { ws } = useContext(RoomContext);
  const joinRoom = () => {
    ws.emit("join-room");
  };
  return (
    <button
      onClick={joinRoom}
      className="bg-slate-500 text-white py-2 px-8 rounded-lg"
    >
      start new meeting
    </button>
  );
};

export default JoinButton;
