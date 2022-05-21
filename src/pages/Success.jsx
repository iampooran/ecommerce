import React from 'react'
import {  useNavigate } from "react-router-dom";


const Success = () => {
    const location = useNavigate();
    console.log(location)
  return (
    <div>
        Success
    </div>
  )
}

export default Success