import React from 'react';
import Tweet from './components/Tweet';
import CreateTweet from './components/CreateTweet';

function App() {
  const name = "Dev Ed";
  const message = 'I went to sleep today now.'

  return (
    <div>
      <h1>Hello React</h1>
      <CreateTweet />
      <Tweet name={name} message={message} />
    </div>
  );
}

export default App;
