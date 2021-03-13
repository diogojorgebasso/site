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
        <LocationOnIcon />
        <div className="headerOption">
          <span className="HeaderTextUp">Olá!</span>
          <span className="HeaderTextDown">Selecione aqui</span>
        </div>
      </div>
      <div className="headerNav">
        <Link to={!currentUser.email && "/login"}>
          <div onClick={handleSign} className="headerOption">
            <span className="HeaderTextUp">
              Hello {!user ? "Guest" : user.email}
            </span>
            <span className="HeaderTextDown">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <div className="headerOption">
          <span className="HeaderTextUp">Return</span>
          <span className="HeaderTextDown">&amp; orders</span>
        </div>
        <Link to="/orders">
          <div className="headerOption">
            <span className="HeaderTextUp">Your</span>
            <span className="HeaderTextDown">Prime</span>
          </div>
        </Link>
        <Link to="/checkout">
          <div className="headerOptionBasket">
            <AddShoppingCartIcon />
            <span className="HeaderTextDown HeaderBasketCart">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
      <p>↷Check More</p>
    </div>
  );
}
