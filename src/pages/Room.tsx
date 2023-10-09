import React, { useContext, useEffect } from "react";
import { useParams } from 'react-router-dom'
import { RoomContext } from "../context/RoomContext";


const Room:React.FC = ()=>{

    const {id} = useParams();

    const {ws} = useContext(RoomContext);

    useEffect(()=>{
        ws.emit('join-room', { roomId : id})
    },[id])


    return (
        <div>
            Room Id : {id}
        </div>
    )
}

export default Room;