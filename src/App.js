import React, { useState } from 'react';
import {  Switch, Route, Redirect } from 'react-router-dom';
import NavBar from './components/Navbar';
import './App.css';
import SignUp from './components/Form/SignUp';
import Login from './components/Form/Login';
import Main from './Main';


function App() {
  const [muncul] = useState(true);
  
  return (
    <div>  
      
      <NavBar />
      <Switch>
        <Route exact path="/">
          { muncul ? <Main /> : <Redirect to="/login" /> }
        </Route>

        <Route exact path="/main">
          <Main />
        </Route>

        
        <Route path="/signup">
            <SignUp />
        </Route>
      

        <Route path="/login">
          <Login />
        </Route>
      </Switch>

      <footer>
        &copy; { new Date().getFullYear() } Copyright :  <a href="https://id.reactjs.org/" rel='noreferrer' target='_blank'> React JS </a> <br/>
        Created with Visual Studio Code by <a href="https://www.instagram.com/harcengaming" rel='noreferrer' target='_blank'> Harcen Gaming </a>
      </footer>
          
    </div>
  );
}

export default App;
