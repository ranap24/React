import { useState } from 'react';

import Counter from './components/Counter/Counter.jsx';
import Header from './components/Header.jsx';
import { log } from './log.js';
import ConfigCounter from './components/Counter/ConfigCounter.jsx';

function App() {
  log('<App /> rendered');

  
  const [chosenCount, setChosenCount] = useState(0);

  function handleSetCount(enteredNumber)
  {
    setChosenCount(enteredNumber);
  }


  return (
    <>
      <Header />
      <main>
        <ConfigCounter  onSetCount={handleSetCount}/>
        <Counter initialCount={chosenCount} />
      </main>
    </>
  );
}

export default App;
