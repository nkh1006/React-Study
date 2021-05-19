import React, { useState } from 'react';
import './App.css';
import Axios from 'axios';

function App() {
  const [joke, setJoke] = useState("");

  const getJoke = () => {
    Axios.get("https://official-joke-api.appspot.com/random_joke")
    .then((response) => response.json())
    .then((data) => {
      setJoke(data.setup + ' ... ' + data.punchline);
    })
  };

  return (
    <div>
      Hello Youtube<br />
      <button onClick={getJoke}>Get Joke</button><br />
      {joke}
    </div>
  );
}

export default App;
