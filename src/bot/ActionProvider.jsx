// in ActionProvider.jsx
import React from "react";
import { createClientMessage } from "react-chatbot-kit";

import { useDispatch } from 'react-redux'
import { setAge, setName ,  setTime } from "../redux/reducer/slicer";

const ActionProvider = ({createChatBotMessage,setState,children,}) => {
  const dispatch = useDispatch();
  const handleGot = () => {
    const clientMessage = createClientMessage("Got it");
    const gotMessage = createChatBotMessage("Pick a slot !", {
      widget: "PickTimeSlot",
    });
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages,clientMessage, gotMessage],
    }));
  };
  const handleTimeSlot = (message) => {
    const timeMsgClient = createClientMessage(message)
    dispatch(setTime(message))

    const timeMessage = createChatBotMessage("Enter your Name");
    setState((prev) => {
      
      return {...prev,
        messages: [...prev.messages,timeMsgClient, timeMessage],}
    });
  };


  const agePickHandle = (age) => {
    setState(
      (prev) => {
        let botMessage;
        if (
          prev.messages[prev.messages.length - 2].message === "Enter your Name"
        ) {
          dispatch(setName(prev.messages[prev.messages.length - 1].message))
          botMessage = createChatBotMessage("Enter your Age",{
            widget:"agePick"
          });
          return {
            ...prev,
            messages: [...prev.messages, botMessage],
          };
        } else if (age) {
          const ageMessage = createClientMessage(age);
          dispatch(setAge(age))
          botMessage = createChatBotMessage(
            "Thank you. In 5 seconds, bot will exit.",
            {widget:"timeout"}
          );
          return {
            ...prev,
            messages: [...prev.messages,ageMessage, botMessage],
          };
        } else {
          return prev;
        }
      }
    );
  };


  // Put the handleHello function in the actions object to pass to the MessageParser
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleGot,
            handleTimeSlot,
            agePickHandle
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
