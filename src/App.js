import React,{useEffect} from 'react';
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import './App.css';
import Layout from './Layout'

function App() {
  useEffect(() => {
    M.AutoInit()
    // eslint-disable-next-line
  }, []);
  return (
    <div className="App">
      <Layout/>
    </div>
  );
}

export default App;
