import { useEffect, useState } from "react";
import "./App.css";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Navbar from "./Components/Navbar";
import axios from "axios";
import Home from "./Components/Home";
import Saved from "./Components/Saved";
const apy_key = "bECM7o99Wk6Ggj3exx75peUYaN6UP1jNzjqTGdsj0sXwo26CK9JHqJHY";

function App() {
  const [images,setImages] = useState([])
  const [search,setSearch] = useState("nature")
  useEffect(()=>{
    const fetchImage = async()=>{
      const res = await axios.get(
        `https://api.pexels.com/v1/search?query=${search}&per_page=50`,
        {
          headers:{
            Authorization:apy_key,
          }
        }
      )
      setImages(res.data.photos)
    }
    
    fetchImage()
  },[search])

  return (
    <div className="App">
      <Router>
        <Navbar setSearch={setSearch}/>
        <Routes>
          <Route path="/" element={<Home images={images}/>}/>
          <Route path="/saved" element={<Saved/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
