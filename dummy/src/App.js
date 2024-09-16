import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [text, setText] = useState('');

  const [name, setName] = useState('love');

  // Variation 1 -> Every Render

  // useEffect(() => {
  //   console.log("UI RENDERING DONE");
  // });

  // Variation 2 -> First Render

  // useEffect ( () => {
  //   console.log("UI Rendering Done");
  // }, []);

  // Variation 3 -> First Render + Whenever dependancy changes

  // useEffect( () => {
  //   console.log("UI Rendering Done");
  // }, [name]);

  // Variation 4 ->  to handle unmounting of a component

  useEffect( () => {

    // add event listener
 
   console.log("listener added");

   return() =>{
    console.log("listener removed");
   }

  }, [text]);

  function changeHandler(event){
    console.log(text);
    setText(event.target.value);
  }

  return (
    <div className="App">
     <input type="text" onChange={changeHandler}></input>
    </div>
  );
}

export default App;
