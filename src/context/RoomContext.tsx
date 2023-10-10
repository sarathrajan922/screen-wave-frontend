import socketIOClient from 'socket.io-client';
import React, { createContext ,ReactNode, useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom'
import Peer from 'peerjs';
import {v4 as uuidV4 } from 'uuid';
const WS = 'http://localhost:8080';


export const RoomContext= createContext<null | any>(null);

const ws = socketIOClient(WS)
interface RoomProviderProps {
    children: ReactNode;
  }
export const RoomProvider: React.FunctionComponent<RoomProviderProps> =({ children })=>{
    const navigate = useNavigate();
    const [me, setMe] = useState<Peer>()
 const enterRoom = ({roomId}:{roomId: 'string'})=>{
    console.log(roomId)
    navigate(`/room/${roomId}`)
 }
useEffect(()=>{
  const meId = uuidV4();

  const peer = new Peer(meId);
  setMe(peer)
    ws.on('room-created', enterRoom)
},[])
return(
<RoomContext.Provider value={{ ws, me }}>{children}</RoomContext.Provider>
)}