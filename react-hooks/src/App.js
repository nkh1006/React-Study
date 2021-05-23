import React, {useState, useEffect} from 'react';

function App() {

  return (
    <div className="App">
      <img src={data?.message} />
      <button onClick={refresh}>
        Refresh
      </button>
    </div>
  );
}

export default App;
