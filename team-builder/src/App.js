import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App(){
const [people, setPeople] = useState([
  {name: "Henry", email: "nice@try", role: "TL"},
  {name: "Henry", email: "nice@try", role: "TL"},
]);
return (
<div className="App">
  {people.map(person => <card person={person} />)}
    </div>
  );
}

export default App;
