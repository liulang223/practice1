import React, { Component } from 'react';
import './App.css';
import Class1 from './components/Class1';
import Class2 from './components/Class2';
import Class3 from './components/Class3';
import Class4 from './components/Class4';
import Class5 from './components/Class5';
import Class6 from './components/Class6';
import { BrowserRouter as Router, Route, Link,Redirect,Switch } from "react-router-dom";
import {Provider} from 'react-redux'
import store from './store'
const Test = ()=><h1>hello world</h1>
const Error404= ()=><h1>Error 404</h1>
class App extends Component {
  render() {
    return (
      <div className="App">
      <Provider store={store}>
      <Router>
        <div>
          <Link to='/'>Class1</Link>|
          <Link to='/class2/100'>Class2</Link>|
          <Link to='/class3'>Class3</Link>|
          <Link to='/class4'>Class4</Link>|
          <Link to='/class5'>Class5</Link>|
          <Link to='/class6'>Class6</Link>|
          <Link to='/test'>Test</Link>|
          <Link to='render'>render</Link>
          <Switch>
          <Route path={'/class2/:id'} component={Class2}></Route>
          <Route path={'/class3'} component={Class3}></Route>
          <Route path={'/class4'} component={Class4}></Route>
          <Route path={'/class5'} component={Class5}></Route>
          <Route path={'/class6'} component={Class6}></Route>
          <Route path={'/test'} component={Test}></Route>
          <Route path={'/render'} render={()=><Redirect to={'/'}></Redirect>}></Route>
          <Route path={'/'} component={Class1}></Route>
          <Route component={Error404}/>
          </Switch>
        </div>
      </Router>
      </Provider>
      
 
      </div>
    );
  }
}

export default App;
