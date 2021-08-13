import React, { useState, useEffect } from 'react';
import './App.css';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const App = (props) => {
  const classes = props.classes;
  const [hours, setHours] = useState('');
  const [minutes, setMinutes] = useState('');
  const [seconds, setSeconds] = useState('');
  const [isAm] = useState(new Date().getHours() >= 12 ? false : true);

  const getTime = () => {
    const clock = new Date();
    const nowHours = clock.getHours() >= 12 ? clock.getHours() - 12 : clock.getHours();
    const nowMinutes = clock.getMinutes();
    const nowSeconds = clock.getSeconds();

    setHours(convertTime(nowHours));
    setMinutes(convertTime(nowMinutes));
    setSeconds(convertTime(nowSeconds));
  }

  const convertTime = (time) => {
    return time < 10 ? `0${time}` : time;
  }

  useEffect(() => {
    getTime();
  },[]);

  setInterval(() => {
    getTime();
  }, 1000);

  return (
    <div className="App">
      <Typography variant="h4" gutterBottom className={clsx(classes.title)} align="center">
        React Clock
      </Typography>
      <Typography variant="h4" className={clsx(classes.title)} align="center">
        {isAm ? "AM" : "PM"}
      </Typography>
      <Typography variant="h1" className={clsx(classes.clock)} align="center">
        {hours}:{minutes}:{seconds}
      </Typography>      
    </div>
  );
}

const styles = {
  title: {
    color: 'white',
    fontFamily: 'Inconsolata'
  },
  clock: {
    color: 'white',
    fontFamily: 'Inconsolata'
  }
};

export default withStyles(styles)(App);
