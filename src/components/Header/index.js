import React from 'react';
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import StorefrontSharpIcon from "@mui/icons-material/StorefrontSharp";
import ManageSearc from "@mui/icons-material/ManageSearch";
import { NavLink } from "react-router-dom";
import { useStateValue } from "../../provider/stateProvider";

import './header.css';

export const Header = () => {
  const [{ basket, logged, user }, dispatch] = useStateValue();

  const handleSesion = () => {
    if (logged) {
      dispatch({
        type: "LOGIN_STATUS",
        login: false,
      });
    }
  }
  return (
    <div className="header">
      <NavLink to="/" style={{ textDecoration: "none" }}>
        <div className="header__logo">
          <StorefrontSharpIcon color="primary" className="header__logoImage" fontSize="large"/>
          <h2 className="header__logoTitle">eStore</h2>
        </div>
      </NavLink>

      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <ManageSearc className="headerSearchIcon" fontSize="large" />
      </div>
      <div className="header__nav">
        <NavLink to="/login" style={{ textDecoration: "none" }} onClick={handleSesion}>
          <div className="nav__item">
            <span className="nav__itemLineOne">Hello {user}</span>
            <span className="nav__itemLineOne">{ logged ? 'Sign Out' : 'Sing In'}</span>
          </div>
        </NavLink>

        <div className="nav__item">
          <span className="nav__itemLineOne">Your</span>
          <span className="nav__itemLineOne">Shop</span>
        </div>
        <NavLink to="/checkout" style={{ textDecoration: "none" }}>
          <div className="nav__item">

            <AddShoppingCartIcon fontSize="large" className='itemBasket' />
            <span className="nav__itemLineTwo nav__basketCount">{basket.length}</span>
          </div>
        </NavLink>
      </div>
    </div>
  )
};
