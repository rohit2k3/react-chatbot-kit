import React, { useState } from "react";

const TimeSlot = (props) => {
  const [date, setdate] = useState("");
  const [isVisible, setIsVisible] = useState(true);

  const handleButtonClick = (event) => {
    // Call a function provided by the actionProvider to handle the message
    props.actionProvider.handleTimeSlot(date + " " + event.target.innerText);
    setIsVisible(false); // Set isVisible to false after a button is clicked
  };

  const timeOptions = [
    { text: "10 AM", handler: handleButtonClick, id: 1 },
    { text: "11 AM", handler: handleButtonClick, id: 2 },
    { text: "1 PM", handler: handleButtonClick, id: 3 },
    { text: "2 PM", handler: handleButtonClick, id: 4 },
    { text: "3 PM", handler: handleButtonClick, id: 5 },
  ];

  const dateOptions = [
    { text: "14 Sep", id: 1 },
    { text: "15 Sep", id: 2 },
    { text: "16 Sep", id: 3 },
    { text: "17 Sep", id: 4 },
    { text: "18 Sep", id: 5 },
  ];

  const optionsButtoons = dateOptions.map((option) => (
    <button
      className={`text-gray-900 border border-black focus:outline-none focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 ${
        isVisible ? '' : 'hidden' // Hide the button when isVisible is false
      } ${
        date === option.text ? 'bg-blue-500 text-white hover:bg-blue-600' : 'bg-white hover:bg-gray-100'
      }`}
      key={option.id}
      onClick={() => setdate(option.text)}
    >
      {option.text}
    </button>
  ));

  const timeButtons = timeOptions.map((option) => (
    <button
      className={`text-gray-900 bg-white border border-black focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 ${
        isVisible ? '' : 'hidden' // Hide the button when isVisible is false
      }`}
      key={option.id}
      onClick={option.handler}
    >
      {option.text}
    </button>
  ));

  return <div className="learning-options-container">{optionsButtoons} <div>{timeButtons}</div></div>;
};

export default TimeSlot;