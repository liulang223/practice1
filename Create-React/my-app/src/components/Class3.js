import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
    withRouter,
    Prompt,
    NavLink
} from 'react-router-dom';
const Page1 = () => <h1>Page1</h1>
const Page2 = () => <h1>Page2</h1>                                                                                                                           
const MenuLink=({to,label})=>{
    return(
        <Route path={to} 
        children={({match})=>{
            console.log(match);
            return  <div>
               {match ? "> " : ""}
                <Link to={to}>
                {label}</Link>
            </div>
        // children={({match})=>{
        //     console.log(match);
        //     return <div>{match ? '>': ''}
        //         <Link to={to}>{label}</Link>
        //     </div>
        }}>
        </Route>
    )
}
const RouterChange = withRouter(({history})=>{
    return <div>
        <button onClick={()=>{history.push('/page2')}}>编程导航</button>
    </div>
})
export default class Class3 extends Component {
    constructor(props){
        super(props);
        this.state={
            prompt:false
        }
    }
  render() {
      let url=this.props.match.url
    return(
      <div>
        <Router>
            <div>
                <MenuLink to={`${url}/page3`} label='自定义链接1'></MenuLink>
                <MenuLink to={`${url}/page4`} label='自定义链接2'></MenuLink>
                <NavLink activeClassName='aa' to='/page1'>Page1</NavLink>
                |<NavLink activeStyle={{color:'green'}} to='/page2'>Page2</NavLink>
                <Prompt when={this.state.prompt} message="确定离开?"></Prompt>
                <RouterChange />
                <Route path='/page1' component={Page1}></Route>
                <Route path='/page2' component={Page2}></Route>
            </div>
        </Router>
      </div>
    )
  }
}

