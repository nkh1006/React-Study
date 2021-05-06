import React, { Component } from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';
import './App.css';
/*
function App() {
  const name = 'react';
  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: 24,
    padding: '1rem'
  }
  return (
    <>
      <Hello />
      <div>Bye !</div>
      <div style={style}>{name}</div>
      <div className="gray-box"></div>
    </>
  );
}
*/

function App(props) {
  return (
    <Wrapper>
      <Hello name="react" color="red" />
      <Hello color="pink" />
    </Wrapper>
  );
}

export default App;
