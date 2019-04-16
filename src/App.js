import React, {Component} from 'react';
import {connect} from 'react-redux';
import CardList from './CardList';
import Search from './Search';
import {setSearchfield} from './Action'
const mapStateToProps = state =>{
  return {
    searchfield : state.searchfield
  }
}
const mapDispatchToProps = (dispatch)=>{
  return {
    onSearchChange:(event)=>dispatch(setSearchfield(event.target.value))
  }
  }
class App extends Component{
  constructor(){
    super()
    this.state= {
      robots: []
    }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(respose=>respose.json())
    .then(users=>this.setState({robots: users}));
    
  }
  render(){
    const {robots} = this.state;
    const {searchfield, onSearchChange} = this.props
    const filteredRobots = this.state.robots.filter(robots=>{
      const text = searchfield.toLowerCase();
      return robots.name.toLowerCase().includes(text) || 
      robots.username.toLowerCase().includes(text);    
    })
  return(
    <div className="tc">
      <h1>Robo Friends</h1>
    <Search searchChange={onSearchChange}/>
  <CardList robot={filteredRobots}/>
</div>
  ); 
}
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
