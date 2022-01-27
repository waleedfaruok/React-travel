import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Destination from "./components/Destination";
import Servese from "./components/Servese";
import Gallery from "./components/Gallery";
import Teame from "./components/Teame";
import Blogs from "./components/Blogs";
import World from "./components/World";
import Footer from "./components/Footer";
class App extends Component{
  render(){
    return(
      <div>
      <Navbar/>
      <Home/>
      <About/>
      <Destination/>
      <Servese/>
      <Gallery/>
      <Teame/>
      <Blogs/>
      <World/>
      <Footer/>
      </div>
    );
  }
}

export default App;

