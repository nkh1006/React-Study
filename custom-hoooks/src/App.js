import React from 'react';
import useCounter from './useCounter';
import ScreenComponent from './ScreenComponent';

const App = () => {
  const [counter, increment, decrement, reset] = useCounter(0);

  return (
    <div className="App border">
      <h1>Custom Hook Examples</h1>
      <h2>{counter}</h2>
      <div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </div>
      <ScreenComponent />
    </div>
  );
}

export default App;
