import logo from './logo.svg';
import axios from 'axios';
import './App.css';

import UserForm from './components/UserForm';

const App = () => {
  const getUser = (e) => {
    e.preventDefault();
    const user = e.target.elements.username.value;
    axios
    .get(`https://api.github.com/users/${user}`)
    .then(res => console.log(res));

  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        HTTP Calls in React
        </p>
      </header>
      <UserForm getUser={getUser} />
    </div>
  );
}

export default App;
