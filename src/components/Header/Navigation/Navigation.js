import React, { useState } from "react";
import "./Navigation.scss";
import netflix3 from "../../../assets/images/netflix3.png";
import profile3 from "../../../assets/images/profile3.png";
import { useEffect } from "react";

const Navigation = () => {
  const [bgBlcak, setBgBlack] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setBgBlack(true);
      } else {
        setBgBlack(false);
      }
    });
  }, []);
  const dropDown = () => {
    // setShow(true);
    console.log("clicked");
  };
  return (
    <>
      <nav className={`nav-container ${bgBlcak && "nav-black"}`}>
        <img className="netflix-logo" src={netflix3} alt="netflix-logo" />

        <div
          className="profile-block"
          onClick={() => {
            dropDown();
          }}
        >
          <div className="dropdown">
            <img className="profile-logo" src={profile3} alt="profile-logo" />
            <div className="options">
              <span>Sign in</span>
              <span>Sign out</span>
              <span>Settings</span>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
