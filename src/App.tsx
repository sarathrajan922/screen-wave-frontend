import React, { useEffect } from 'react';
import './App.css';
import socketIO from 'socket.io-client';

 
const WS = 'http://localhost:8080';

function App() {

  useEffect(()=>{
    socketIO(WS);
  },[]);
  return (
    <div className="App">
      <button>start new meeting</button>
    </div>
  );
}

export default App;
