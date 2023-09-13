import React from 'react'
import { useSelector } from 'react-redux'

const Result = () => {
    const {name ,  age , time} = useSelector(state => state.user)
  return (
    <div className='shadow-2xl	 w-screen h-screen flex flex-col justify-center items-center text-center'><h1 className='bg-gradient-to-r to-emerald-600 from-sky-400 text-blue-800 text-2xl font-semibold mr-2 px-2.5 py-0.5 rounded ml-2'>Your name {name} age {age} has been added to student system. You may now exit.</h1></div>
  )
}

export default Result