import React , { useState } from 'react';
import { Button } from "antd";
import './App.css';


const App = () => {

  const [s,fun] = useState(0);
  const increment =()  =>{
     fun(s+1);
  }
  const decrement =() =>{
    fun(s-1);
  }
  const reset =() =>{
    fun(0);
  }
  return (
    <div className="App">
        <h1>{s}</h1>
        <Button  onClick={increment}>Increment</Button>
        <Button  onClick={decrement}> Decrement</Button>
        <Button  onClick={reset}> Reset</Button>
        

        

        
        
    </div>
  );

}


export default App;
