import React, {Component} from 'react';
import Ninjas from './Ninjas'
import AddNinja from './AddNinja'

class App extends Component {
  state = {
    ninjas: [
      { name: "Ryu", age: 30, belt: "black", id: 1 },
      { name: "Yoshi", age: 20, belt: "green", id: 2 },
      { name: "Benedict Cumberbatch", age: 43, belt: "Old black", id: 3 }
    ]
  }
  addNinja = (ninja) => {
    ninja.id =  Math.random()
    this.setState({
      ninjas: [...this.state.ninjas, ninja]
    })
    console.log(this.state.ninjas)
  }
  render() {
    return (
      <div className="App">
        <h1>My First React App</h1>
        <p>Welcome To my Web😉</p>
        <Ninjas ninjas={this.state.ninjas}/>
        <AddNinja addNinja={this.addNinja}/>
      </div>
    );
  }
}

export default App;
