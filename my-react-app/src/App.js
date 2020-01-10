import React from 'react';
import './App.css';
import Info from './Info'
import {data} from './data'


class App extends React.Component {
  constructor(){
    super()
    this.state={
        data: data,
        displayIndex: 0

    }
}
last = () => {
  this.setState({displayIndex: this.state.displayIndex -1})
  if(this.state.displayIndex === 0){
    this.setState({displayIndex: 24})
  }
}
next = () => {
  this.setState({displayIndex: this.state.displayIndex +1})
  if(this.state.displayIndex === 24){
    this.setState({displayIndex: 0})
}
}

  render(){
    // console.log(this.state.displayIndex)
  return (
    <div className="App">
      <p className='header'>Home</p>
      <div className='theBox'>
      <div className='theOne'>
        <Info index={this.state.displayIndex}/>
      </div>
      <div className='clickable'>
        <button onClick={this.last} className='nextLast' > {`< Last`} </button>
        <div className="pantsParty">
        <button className='other'> Edit</button>
        <button className='other' > Delete</button>
        <button className='other'> New</button>
        </div>
        <button onClick={this.next} className='nextLast'> {`Next >`} </button>
      </div>
    </div>
      </div>
  );
}
}

export default App;
