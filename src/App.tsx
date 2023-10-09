import React, { useEffect } from 'react';
import './App.css';
import socketIO from 'socket.io-client';
const WS = 'http://localhost:8080';
function App() {

  useEffect(()=>{
    socketIO(WS);
  },[]);
  return (
    <div className="App  flex items-center justify-center w-screen h-screen">
      <button className='bg-slate-500 text-white py-2 px-8 rounded-lg'>start new meeting</button>
    </div>
  );
}

export default App;
