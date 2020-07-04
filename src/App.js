import React from 'react';
import Ninjas from './Ninjas'
function App() {
  return (
    <div className="App">
      <h1>My First React App</h1>
      <p>Welcome To my Web😉</p>
      <Ninjas name="Ryu" age="25" belt="black"/>
      <Ninjas name="Yoshi" age="55" belt="green"/>
    </div>
  );
}

export default App;
