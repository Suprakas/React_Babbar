import React from 'react'
import { useNavigate } from 'react-router-dom'

const Labs = () => {

    let navigate = useNavigate()

    function clickHandler(){

        navigate("/about");
    }

  return (
    <div>
         <div>This is my Labs Page</div>
         <button onClick={clickHandler}>Move to About Page</button>
    </div>
   
  )
}

export default Labs