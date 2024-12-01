import React, { useContext } from "react";
import "./ProfilePage.scss";
import apiRequest from "../../lib/apiRequest";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import noavatar from "../../picture/noavatar.png";
import {Link} from "react-router-dom"

export default function ProfilePage() {
  const { updateUser, currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await apiRequest.post("/auth/logout");
      updateUser(null);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="profilePage">
      <div className="details">
        <div className="title">
          <h1>User Information</h1>
          <Link to ="/profile/update">
          <button>Update Profile</button>
          </Link>
        </div>
        <div className="info">
          <span>
            Avatar: <img src={currentUser.avatar || noavatar} alt="" />
          </span>
          <span>
            Username: <b>{currentUser.username}</b>
          </span>
          <span>
            E-mail: <b>{currentUser.email}</b>
          </span>
          <button onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </div>
  );
}
