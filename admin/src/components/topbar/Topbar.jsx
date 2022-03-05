import React, { useState } from "react";
import { Link } from "react-router-dom";

//REDUX
import { useDispatch, useSelector } from "react-redux";
import { logoutReset } from "../../redux/actions/authActions";

//MUI
import {
  CircleNotifications,
  Language,
  Public,
  Settings,
} from "@mui/icons-material/";
import ControlCameraIcon from "@mui/icons-material/ControlCamera";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";



import "./topbar.css";

export default function Topbar() {

  const loggedUsername = useSelector((state) => state.auth.username);
  const loggingOut = useSelector((state) => state.auth.isProccessingLogout);
  const dispatch = useDispatch();
  const [toggleLogout, setToggleLogout] = useState(false);


  const userToggle = () => {
    setToggleLogout((toggleLogout) => !toggleLogout);
  };

  const handleLogout = async () => {
    dispatch(logoutReset());
  };

  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <Link to="/" className="link">
            <span className="logo">
              <div className="logoIcon">
                <ControlCameraIcon style={{ fontSize: 29 }} />
              </div>

              <span className="logoTitle">Control</span>
            </span>
          </Link>
        </div>
        <div className="topRight">
          {loggedUsername ? (
            <>
              <div className="topIcons">
                <CircleNotifications fontSize="large" />
                {/* <span className="topIconBadge">0</span> */}
              </div>
              <div className="topIcons">
                <Public fontSize="large" />
                {/* <span className="topIconBadge">0</span> */}
              </div>
              <div className="topIcons">
                <Settings fontSize="large" />
              </div>
              <div className="avatarUser" onClick={() => userToggle()}>
                <img
                  src="https://cdn.pixabay.com/photo/2022/01/11/14/09/bird-6930700_960_720.jpg"
                  alt=""
                  className="imgAvatar"
                />
                <span className="avatarUsername">{loggedUsername}</span>
                <div className="avatarArrow">
                  <KeyboardArrowDownIcon style={{ fontSize: 23 }} />
                </div>

                {toggleLogout ? (
                  <div className="logoutMessage">
                    Logout?
                    <button
                      onClick={function (event) {
                        userToggle();
                        handleLogout();
                      }}
                      className="logoutMessageButton"
                    >
                      Yes
                    </button>
                  </div>
                ) : null}
              </div>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
}
