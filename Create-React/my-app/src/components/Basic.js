import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
const Home = () =>{
    return <h1>Home</h1>
}
const About = () =>{
    return <h1>About</h1>
}
const Topic = ({match}) =>{
   return <div>
       <h2> Topic</h2>
       <ul>
           <li>Rendering with React</li>
           <li>Components</li>
           <li>Props v. State</li>
       </ul>
       <Route></Route>
   </div>
}
export default class Basic extends Component {
  render() {
    return (
      <div>
      <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>about</Link></li>
          <li><Link to='/topic'>topic</Link></li>
      </ul>
          <Route path='/' component={Home}> </Route>
          <Route path='/about' component={About}></Route>
          <Route path='/topic' component={Topic}></Route>
      </div>
    )
  }
}
