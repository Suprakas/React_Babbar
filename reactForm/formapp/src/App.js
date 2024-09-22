import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  //process - 1

  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");

  // console.log(firstName);
  // console.log(lastName);

  // function changeFirstNameHandler(event){
  //   // console.log("Printing first name : ")
  //   // console.log(event.target.value);
  //   setFirstName(event.target.value);
  // }

  // function changeLastNameHandler(event){
  //   // console.log("Printing last name : ")
  //   // console.log(event.target.value);
  //   setLastName(event.target.value);
  // }

  // process - 2

  const [formData, setFormData] = useState( {firstName :"", lastName :"", email :"", 
    comments :"", isVisible:"{true}", mode:"{true}", favCar:""}); // useState Hook Re-renders the UI

  console.log(formData);

  function changeHandler (event) {
    const {name, value, type, checked} = event.target;
   setFormData ( (prevFormData) => {
    return{
      ...prevFormData,
      [name] : type  === "checkbox" ? checked : value
    }
   });
  }

  function submitHandler(event){
      event.preventDefault();
      console.log("Finally printing the given data :");
      console.log(formData);
  }

  return (
    <div className="App">
      <form onSubmit={submitHandler}>
      <br/>
        <input 
          type="text"
          placeholder='first name'
          onChange={changeHandler}
          name="firstName"
          value={formData.firstName}
        />

        <br />
        <br />

        <input 
          type="text"
          placeholder='last name'
          onChange={changeHandler}
          name="lastName"
          value={formData.lastName}
        />
        <br />
        <br />

        <input 
          type="text"
          placeholder='Enter your email here'
          onChange={changeHandler}
          name="email"
          value={formData.email}
        />

        <br />
        <br/>

        <textarea
          placeholder='Enter your comments here'
          onChange={changeHandler}
          name='comments'
          value={formData.comments}
        />

        <br />
        <br />

        <input 
          type="checkbox"
          onChange={changeHandler}
          name="isVisible"
          value={formData.isVisible} 
          id='isVisible'
          checked={formData.isVisible}
        />
        <label htmlFor="isVisible"> Am I Visible ?</label>

        <br />
        <br />

        <fieldset>
          <legend>Mode :</legend>
        <input 
          type="radio"
          onChange={changeHandler}
          name="mode"
          value="Online-mode"
          id="Online-mode"
          checked={formData.mode === "Online-mode"}
        />
        <label htmlFor="Online-mode">Online Mode</label>

        <input 
          type="radio"
          onChange={changeHandler}
          name="mode"
          value="Offline-mode"
          id="Offline-mode"
          checked={formData.mode === "Offline-mode"}
        />
        <label htmlFor="Offline-mode">Offline Mode</label> 

        </fieldset>
        <br />
        <label htmlFor="favCar">Tell me your favourite Car ?  </label>
        
        <select 
          name="favCar" 
          id="favCar"
          value={formData.favCar}
          onChange={changeHandler}
          >
            <option value="Scorpio">Scorpio</option>
            <option value="Buggati">Buggati</option>
            <option value="Audi">Audi</option>
            <option value="Fortuner">Fortuner</option>
            <option value="Mercedes">Mercedes</option>
            <option value="BMW">BMW</option>
          </select>
        
        <br />
        <br />
        {/* <input type="button" value='Submit'/> */}

        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
