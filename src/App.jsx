import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header/index";
import Footer from "./components/Footer/index";
import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <Header />

        <div className="container">
          <Outlet />
        </div>

        <Footer />
      </div>
    </>
  );
}

export default App;
