import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Route,  
    Link,
   } from "react-router-dom";
   const Home = ()=><h1>Home</h1>
   const About = ()=><h1>About</h1>
   const MenuLink =({to,label}) =>{
       return (
       <Route path={to}
       children={({match})=>{
           console.log(match);
           return  <div>
              {match ? "> " : ""}
               <Link to={to}>
               {label}</Link>
           </div>
       }}/>)
   }
export default class Class4 extends Component {
  render() {
      let url = this.props.match.url
    return (
      <div>
        <Router>
            <div>
                <MenuLink to={`${url}/home`} label='home'/>
                <MenuLink to={`${url}/about`} label='about'/>
                <Route exact path={`${url}/home`} component={Home}></Route>
                <Route path={`${url}/about`} component={About}></Route>
            </div>
        </Router>
      </div>
    )
  }
}
