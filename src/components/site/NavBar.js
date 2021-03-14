import React from "react";
import logo from "../../public/logo512.png";
import Link from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
export default function NavBar() {
  const { currentUser, logout } = useAuth();

  return (
    <div className="NavBar">
      <Link to="/">
        <img className="headerLogo" src={logo} alt="Diogo Logo" />
      </Link>
      <div className="headerLocation">
        <div className="headerOption">
          <span className="HeaderTextUp">Olá!</span>
          <span className="HeaderTextDown">Selecione aqui</span>
        </div>
      </div>
      <div className="headerNav">
        <Link to={!currentUser.email && "/login"}>
          <div className="headerOption">
            <span className="HeaderTextUp">
              Hello {!currentUser ? "Guest" : currentUser.email}
            </span>
            <span className="HeaderTextDown">
              {currentUser ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <div className="headerOption">
          <span className="HeaderTextUp">Return</span>
          <span className="HeaderTextDown">&amp; orders</span>
        </div>
        <Link to="/checkout">
          <div className="headerOptionBasket">
            <span className="HeaderTextDown HeaderBasketCart"></span>
          </div>
        </Link>
      </div>
    </div>
  );
}
