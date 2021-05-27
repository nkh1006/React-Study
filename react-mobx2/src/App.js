import React, { useState, useContext  } from 'react';
import { useLocalStore, useObserver } from 'mobx-react';

const StoreContext = React.createContext();
const StoreProvider = ({children}) => {
  const store = useLocalStore(() => ({
    bugs: ["Centipede"],
    addBug: (bug) => {
      store.bugs.push(bug);
    },
  }));  

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  )
}

const BugsList = () => {
  const store = useContext(StoreProvider);

  return (
    <ul>
      {store.bugs.map(bug => (
        <li key={bug}>{bug}</li>
      ))}
    </ul>
  )
}

const BugsForm = () => {
  const store = React.useContext(StoreProvider);
  const [bug, setBug] = useState('');

  return (
    <form
      onSubmit = {e => {
        e.preventDefault();
      }}
    >
      <input type="text" value={bug} onChange={e => setBug(e.target.value)}/>
      <button type="submit">Add</button>
    </form>
  )
}

function App() {
  return (
    <StoreProvider>
      <main>
        <BugsList />
        <BugsForm />
      </main>
    </StoreProvider>
  );
}

export default App;