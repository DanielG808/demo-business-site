import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header/index";
import Footer from "./components/Footer/index";
import "./App.css";

function App() {
  return (
    <>
      <Header />

      <Outlet />

      <Footer />
    </>
  );
}

export default App;
