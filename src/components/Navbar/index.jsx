import React from "react";
import { Link, useLocation } from "react-router-dom";
import SettingImg from "../../assets/image/gear.png";
import ProductImg from "../../assets/image/shopping-bag.png";
import CartImg from "../../assets/image/shopping-cart.png";
import CustomerImg from "../../assets/image/people.png";
import Dashboardimg from "../../assets/image/dashboard.png";
import { ImgActive, LiBox, NavbarWrapper } from "./style";

function Navbar() {
  // const {fname,lname}
  const location = useLocation();
  console.log(location);

  return (
    <NavbarWrapper>
      <div className="navbar-logo">
        <p>E-commers</p>
      </div>
      <div className="nav-navbar">
        <ul className="nav">
          <LiBox active={location.pathname==='/'}>
            <Link to="/" className="link" >
              <img src={Dashboardimg} />
              <p>Dashboard</p>
            </Link>
          </LiBox>
          <LiBox active={location.pathname==='/products'}>
            <Link to="/products" className="link" >
              <img src={ProductImg} />
              <p>Products</p>
            </Link>
          </LiBox>
          <LiBox active={location.pathname==='/cart'} >
            <Link to="/cart" className="link" >
              <img src={CartImg} />
              <p>Cart</p>
            </Link>
          </LiBox>
          <LiBox active={location.pathname==='/history'}>
            <Link to="/history" className="link">
              <img src={CustomerImg} />
              <p>History</p>
            </Link>
          </LiBox>
          <LiBox active={location.pathname==='/setting'}>
            <Link to="/setting" className="link">
              <img src={SettingImg} />
              <p>Setting</p>
            </Link>
          </LiBox>
        </ul>
      </div>
    </NavbarWrapper>
  );
}

export default Navbar;
