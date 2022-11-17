import { Route, Routes } from "react-router-dom";
import Feed from "./components/Feed";
import Login from "./components/Login";


function App() {
  return (
    <div className="App">
   <Routes>
    <Route path="/login" element={<Login/>}/>
    <Route path="/feed" element={<Feed/>}/>
   </Routes>
    </div>
  );
}

export default App;
