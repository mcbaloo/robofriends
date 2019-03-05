import React, {Component} from 'react';
import CardList from './CardList';
import {robot} from './robot';
import Search from './Search';
class App extends Component{
  constructor(){
    super()
    this.state= {
      robots: [],
      searchfield : ''
    }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(respose=>respose.json())
    .then(users=>this.setState({robots: users}));
    
  }
  onSearchChange= (event)=>{
 this.setState({searchfield:event.target.value})
  }
  render(){
    const filteredRobots = this.state.robots.filter(robots=>{
      const text = this.state.searchfield.toLowerCase();
      return robots.name.toLowerCase().includes(text) || 
      robots.username.toLowerCase().includes(text)||
      robots.occupation.toLowerCase().includes(text)||
      robots.email.toLowerCase().includes(text);
    })
  return(
    <div className="tc">
      <h1>Robo Friends</h1>
    <Search searchChange={this.onSearchChange}/>
  <CardList robot={filteredRobots}/>
</div>
  ); 
}
}
export default App;
