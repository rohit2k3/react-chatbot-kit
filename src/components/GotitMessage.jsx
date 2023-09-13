import React from "react";

const GotitMessage = (props) => {

  const message = "rohit"
  
  return <button onClick={props.actionProvider.handleGot} className="text-gray-900 bg-white border border-black focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2">Got it</button>

};

export default GotitMessage;