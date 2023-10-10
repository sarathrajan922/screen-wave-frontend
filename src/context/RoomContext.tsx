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
    const [me, setMe] = useState<Peer>();
    const [stream,setStream] = useState<MediaStream>();
 const enterRoom = ({roomId}:{roomId: 'string'})=>{
    console.log(roomId)
    navigate(`/room/${roomId}`)
 }
 const getUsers = ({roomId, participants}:{roomId: string, participants:string[]})=>{
  console.log(roomId)
  console.log(participants)
 }
useEffect(()=>{
  const meId = uuidV4();

  const peer = new Peer(meId);
  setMe(peer)

  try{
    navigator.mediaDevices.getUserMedia({video: true, audio: true}).then((stream)=>{
      setStream(stream)
    })

  }catch(error){
    console.error(error)
  }
    ws.on('room-created', enterRoom);
    ws.on('get-users', getUsers);
},[])

useEffect(()=>{
  if(!me) return;
  if(!stream) return;
  ws.on('user-joined',({peerId})=>{
     const call = me.call(peerId,stream);
  })

  me.on('call',(call)=>{
    call.answer(stream)
  })
},[me,stream]);
return(
<RoomContext.Provider value={{ ws, me, stream }}>{children}</RoomContext.Provider>
)}