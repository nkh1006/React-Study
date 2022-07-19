import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import { Typography, Paper, Button, Container } from '@material-ui/core';

const App = (props) => {
  const classes = props.classes;
  const [joke, setJoke] = useState("");

  const API_URL = "http://api.icndb.com/jokes/random";

  const getJoke = () => {
    axios.get(API_URL)
    .then(res => {
      const randomJoke = res.data.value["joke"];
      console.log(typeof randomJoke);
      setJoke(randomJoke);
    })
    .catch(err => console.error(err));
  }

  return (
    <div className="App">
      <Container maxWidth="sm">
        <Typography variant="h4" gutterBottom className={clsx(classes.title)} align="center">
          React Random Joke Generator 🤣
        </Typography>      
        <Paper elevation={3} className={clsx(classes.jokeContainer)}>
          {joke && (
            <Typography variant="h6" gutterBottom className={clsx(classes.joke)} align="center">
              {joke}
            </Typography>
          )}
          <Button 
            variant="contained" 
            size="large" 
            color="primary" 
            className={clsx(classes.jokeBtn)} 
            fullWidth
            onClick={getJoke}
          >
              Get Joke 😁
          </Button>
        </Paper>
      </Container>
    </div>
  );
}

const styles = {
  title: {
    color: 'white',
    fontFamily: 'Inconsolata',
    marginBottom: '2rem'
  },
  jokeContainer: {
    padding: '1rem',
    textAlign: 'center'
  },
  joke: {
    marginBottom: '0.5rem'
  }
};

export default withStyles(styles)(App);
