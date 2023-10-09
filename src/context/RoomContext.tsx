import socketIOClient from 'socket.io-client';
import React, { createContext ,ReactNode } from 'react';
const WS = 'http://localhost:8080';


export const RoomContext= createContext<null | any>(null);

const ws = socketIOClient(WS)
interface RoomProviderProps {
    children: ReactNode;
  }
export const RoomProvider: React.FunctionComponent<RoomProviderProps> =({ children })=><RoomContext.Provider value={{ ws }}>{children}</RoomContext.Provider>