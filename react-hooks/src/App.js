import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  // [변수이름, 이 변수를 핸들링할 함수명] = useState(초기값)
  const [ counter, setCounter ] = useState(0);

  const countUp = () => {
    setCounter(counter + 1);
  }

  useEffect(()=> {
    console.log('USE EFFECT RAN');
  })

  return (
    <div className="App">
      <div stlye={{
        paddingTop:80,
        fontSize:30
      }}>
        count : {counter}
      </div>
      <button onClick={countUp}>
        COUNT UP !
      </button>
    </div>
  );
}

export default App;
