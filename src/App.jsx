import { BrowserRouter as Router , Routes , Route } from "react-router-dom";
import Timer from "./components/Timer";
import ChatBot from "./pages/chatBot";
import Home from './pages/Home'
import Result from "./pages/Result";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/result" element={<Result/>}/>
        <Route path="/time" element={<Timer/>}/>
        <Route path="chatbot" element={<ChatBot/>}/>
      </Routes>
    </Router>
  )
}

export default App
