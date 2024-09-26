import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const Support = () => {

    const navigate = useNavigate();

    function clickHandler(){
        navigate("/labs");
    }

    function backHandler(){
        navigate(-1);
    }
  return (
    <div>
         <div> This is my Support page</div>
         <button onClick={clickHandler}>Move to Labs Page</button>
         <button onClick={backHandler}>Back to Home page</button>
    </div>
  
  )
}

export default Support