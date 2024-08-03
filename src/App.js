import logo from "./logo.svg";
import "./App.css";
import Add_agent from "./pages/Customer";

import Navbar from "./components/Navbar";
import toast, { Toaster } from "react-hot-toast";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Viewdata from "./pages/Viewdata";
import { Carousel, Footer } from "flowbite-react";

function App() {
  return (
    <>

      <Navbar />
      <Toaster />
      <Footer/>
      <Carousel/>

    </>
  );
}

export default App;
