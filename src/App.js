import React from 'react';
import Timeline from './components/Timeline';
import data from './data/data.json';

function App() {
  return (

    <div className="">
      <Timeline data={data} />
    </div>
  );
}

export default App;
