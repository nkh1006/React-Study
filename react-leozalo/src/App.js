import { useEffect, useState } from 'react';
import './App.css';
import JSONDATA from './MOCK_DATA.json';

function App() {
  const [username, setUsername] = useState("");

  useEffect(() => {
    
  },[username])

  return (
    <div className="App">
      <input type="text" placeholder="Search ..." onChange={(e) => setUsername(e.target.value)} />
      {JSONDATA.filter((val) => {
        if (username === "") {
          return val;
        } else if (val.first_name.toLowerCase().includes(username.toLowerCase())) {
          return val;
        }
      }).map((val, key) => {
        return <div>{val.first_name}</div>
      })}
    </div>
  );
}

export default App;
