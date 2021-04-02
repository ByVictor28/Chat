import './App.scss';
import {useEffect} from "react";
import Login from './components/Login/Login';
import {Switch,Route} from "react-router-dom";
import Main from './components/Main/Main';
// import openSocket from "socket.io-client";

function App() {

  useEffect(() => {
    // const socket = openSocket("http://localhost:3000");

  }, [])
  return (
    <div className="App">
      <Switch>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/main">
          <Main/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
