import React, { useState, useContext} from "react";
import "./Navbar.scss";
import logo from "../../picture/shopOnline.png";
import noavatar from "../../picture/noavatar.png";
import {Link} from "react-router-dom"
import { AuthContext } from "../../context/AuthContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const {currentUser} = useContext(AuthContext)

  const user = true;
  return (
    <nav>
      <div className="left">
        <a href="/" className="logo">
          <img src={logo} alt="logo" />
          <span>market online</span>
        </a>
      </div>
      <div className="right">
        {currentUser ? (
          <div className="user">
            <img src={currentUser.avatar || noavatar} />
            <span>{currentUser.username}</span>
            <Link to="/profile" className="profile">
              <span className="notification">3</span>
              <span>Profile</span>
            </Link>
          </div>
        ) : (
          <>
            {" "}
            <a href="/login">Log in</a>
            <a href="/register" className="register">
              Sign up
            </a>
          </>
        )}
        <div className="menuIcon">
          <img
            src="/menu.png"
            alt=""
            onClick={() => setOpen((prev) => !prev)}
          />
        </div>
      </div>
    </nav>
  );
}
