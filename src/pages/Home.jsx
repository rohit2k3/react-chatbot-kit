import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/chatbot");
  }
  return (

    <>
      <div className='w-screen	h-screen flex flex-col justify-center items-center'>
      <h1 className='m-4'>Enter into Student Info System</h1>
      <button onClick={handleClick} className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2'>Enroll Now!</button>  
      </div>
    </>
  )
}

export default Home