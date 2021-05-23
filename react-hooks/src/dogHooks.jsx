import React, {useState, useEffect} from 'react';

export default function() {
  const [data, setData] = useState('');

  useEffect(() => {
    refresh();
  }, []);

  const refresh = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(res => res.json())
    .then(newData => setData(newData));
  }

  return [data, refresh];
}