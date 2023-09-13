import React from "react";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import ActionProvider from "../bot/ActionProvider";
import config from "../bot/config";
import MessageParser from "../bot/MessageParser";
import "../bot/botStyle.css"


const ChatBot = () => {

;
  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen">
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </div>
  );
};

export default ChatBot;
