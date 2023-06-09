import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Project from "./pages/Project1";
import Contacts from "./pages/Contacts";
import Footer from "./components/footer/Footer";

function App() {
  return(
    <div className="App1">
      <Router>
      <Navbar/>
      <div className="App">
        <Routes>
        <Route path="/" element={<Home/>}></Route>
          <Route path="/projects" element={<Projects/>}></Route>
          <Route path="/project/:id" element={<Project/>}></Route>
          <Route path="/contacts" element={<Contacts/>}></Route>
      </Routes>
      </div>
      
        <Footer/>
      </Router>
    </div>
  )
}

export default App;
