import { createChatBotMessage } from "react-chatbot-kit";
import AgePick from "../components/AgePick";
import GotitMessage from "../components/GotitMessage";
import Timer from "../components/Timer";
import TimeSlot from "../components/TimeSlot";

const config = {
  botName: "Student Info System",
  initialMessages: [createChatBotMessage(`Hello, Welcome to student info system!` , {
    widget:"GotitMessage"
  })],
  widgets: [
    {
      widgetName:"GotitMessage",
      widgetFunc:(props) => <GotitMessage {...props} />
    },
    {
      widgetName:"PickTimeSlot",
      widgetFunc:(props) => <TimeSlot {...props} />
    },
    {
      widgetName:"agePick",
      widgetFunc:(props) => <AgePick {...props} />
    },
    {
      widgetName:"timeout",
      widgetFunc:(props) => <Timer {...props} />
    }
  ],
};

export default config;
