import React, {useEffect,useState} from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Section from "./components/Section/Section";
import axios from "axios";
import "./App.css";

function App() {
  const [topAlbums,setTopAlbums]= useState([]);

  useEffect(()=>{
    const fetchTopAlbums=async () => {
      try{
        const res = await axios.get("https://qtify-backend-labs.crio.do/albums/top");
        setTopAlbums(res.data);
      }catch(err){
        console.error("Failed to fetch albums",err);
      }
    };

    fetchTopAlbums();
  },[]);

  return (
    <div className="App">
      <Navbar />
      <Hero /> 
      <Section type='album' title="Top Albums" data={topAlbums} />
    </div>
  );
}

export default App;