import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

const api = axios.create({
  baseURL: `http://localhost:3000/courses`,
});

class App extends Component {

  state = {
    courses: []
  }

  constructor() {
    super();
    api.get('/').then(res => {
      this.setState({ courses: res.data })
    });
  }

  createCourse = async () => {
    api.post('/', { title: "Test", id: 4, author: test })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {this.state.courses.map(course => <h2 key={course.id}>{course.title}</h2>)}
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
