import React, { useEffect, useState } from 'react';
import PicksTable from './components/PicksTable';

function App() {
  const [picks, setPicks] = useState([]);

  useEffect(() => {
    fetch('/api/picks')
      .then(res => res.json())
      .then(setPicks);
  }, []);

  return (
    <div>
      <h1>MLB Picks</h1>
      <PicksTable picks={picks} />
    </div>
  );
}

export default App;
