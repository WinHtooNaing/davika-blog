
import TopBar from "./components/topbar/TopBar";
import Single from "./pages/single/Single";
import Home from "./pages/home/Home";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { BrowserRouter , Routes , Route } from "react-router-dom";

function App() {
 
  return (
    <BrowserRouter>
      <TopBar />
      
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/write" element={<Write/> }/>
        <Route path="/contact" element={<Settings/> }/>
        <Route path="/about" element={<Single/>}/>
          
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
