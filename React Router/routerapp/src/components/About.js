import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const About = () => {

    const navigate =  useNavigate();

    function clickHandler(){
        navigate("/support");
    }
  return (
    <div>
         <div>This is my About Page</div>
         <button onClick={clickHandler}>Move to Support Page</button>
    </div>
   
  )
}

export default About