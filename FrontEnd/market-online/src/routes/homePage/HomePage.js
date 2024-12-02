import React, { useContext } from "react";
import "./HomePage.scss";
import { AuthContext } from "../../context/AuthContext";

export default function HomePage() {
  const {currentUser} = useContext(AuthContext)
  console.log(currentUser);
  
  const data = ListData;

  return (
    <div className="homePage">
    </div>
  );
}
