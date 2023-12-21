import logo from "../assets/logo3.png";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "../pages/home";
import Menu from "../pages/menu";
import "./nav.css";
function Nav() {
  return (
    <>
      <nav>
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        
        <div className="list">
          <Link to={"/"}>home</Link>
          <Link to={"/menu"}>menu</Link>
        </div>
      </nav>
    </>
  );
}

export default Nav;
