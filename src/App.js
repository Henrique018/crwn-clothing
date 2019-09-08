import React from 'react';
import './App.css';
import Homepage from './pages/Homepage.Component.jsx'
import {Route,Switch} from 'react-router-dom'

const HatPage = ()=>{
  return(
  <div>    
    <h1>Hat's page</h1>    
  </div>
  );
}


function App() {
  return (
    <div >
    <Switch>
      <Route exact path='/' component={Homepage} />
      <Route path='/shop/hats' component={HatPage} />
    </Switch>
    </div>
  );
}

export default App;
