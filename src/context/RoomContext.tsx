import socketIOClient from 'socket.io-client';
import { createContext } from 'react';


const roomContext= createContext<null | any>(null);

 
const WS = 'http://localhost:8080';

const ws = socketIOClient(WS)