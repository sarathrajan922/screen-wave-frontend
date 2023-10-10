import React, { useContext, useEffect } from "react";
import { useParams } from 'react-router-dom'
import { RoomContext } from "../context/RoomContext";
import VideoPlayer from "../components/videoPlayer";


const Room:React.FC = ()=>{

    const {id} = useParams();

    const {ws ,me, stream} = useContext(RoomContext);

    useEffect(()=>{
      if(me)  ws.emit('join-room', { roomId : id , peerId: me._id})
    },[id,me, ws])


    return (
        <div>
            Room Id : {id}
            <VideoPlayer stream={stream}/>
        </div>
    )
}

export default Room;