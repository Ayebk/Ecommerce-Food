
import { forwardRef, useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import axios from "axios";

//REDUX
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../redux/actions/usersActions";

//MUI
import Snackbar from "@mui/material/Snackbar";
import Stack from "@mui/material/Stack";
import {
    CalendarToday,
    LocationSearching,
    MailOutline,
    PermIdentity,
    PhoneAndroid,
    Publish,
  } from "@mui/icons-material";

import "./user.css";


/**
 * Popup
 */

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function User() {
  const dispatch = useDispatch();
  const location = useLocation();
  const userId = location.pathname.split("/")[2];
  const [inputs, setInputs] = useState({});
  const [img, setImg] = useState();
  const [imgUrl, setImgUrl] = useState();
  const [open, setOpen] = useState(false);
  const [openError, setOpenError] = useState(false);

  const isFirstRun = useRef(true);

  const error = useSelector((state) => state.users.error);
  const seccuss = useSelector((state) => state.users.seccuss);



  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };


  const handleClickError = () => {
    setOpenError(true);
  };

  const handleCloseError = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenError(false);
  };

  useEffect(() => {
    if (error) {
      console.log("wwwwwwwwwww");
      handleClickError();
      handleClose();
    }
    if (seccuss) {
      handleClick();
      handleCloseError();
    }
  }, [error, seccuss]);


  /**
   * Update product with upload image to couldinary
   *
   */

  const postDetails = async () => {
    const data = new FormData();
    data.append("file", img);
    data.append("upload_preset", "e-commerce");
    data.append("cloud_name", "dzy0uevma");
    console.log(imgUrl);
    try {
      if (img) {
        axios
          .post("https://api.cloudinary.com/v1_1/dzy0uevma/image/upload", data)
          .then((result) => setImgUrl(result.data.secure_url));
      } else {
        updateUser(dispatch, userId, inputs, imgUrl);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const user = useSelector((state) =>
    state.users.users.find((u) => u._id == userId)
  );

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  useEffect(() => {
    if (!isFirstRun.current) {
      updateUser(dispatch, userId, inputs, imgUrl);
    }
  }, [imgUrl]);

  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
    }
    return () => {
      isFirstRun.current = false;
    };
  }, []);

  const handleUpdate = async (e) => {
    e.preventDefault();
    await postDetails();
  };



  return (
    <div className="user">
      <Stack spacing={2} sx={{ width: "100%" }}>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            successfully updated!
          </Alert>
        </Snackbar>
      </Stack>
      <Stack spacing={2} sx={{ width: "100%" }}>
        <Snackbar
          open={openError}
          autoHideDuration={6000}
          onClose={handleCloseError}
        >
          <Alert
            onClose={handleCloseError}
            severity="error"
            sx={{ width: "100%" }}
          >
            an error occurred!
          </Alert>
        </Snackbar>
      </Stack>
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              src={
                user?.img
                  ? user?.img
                  : "https://res.cloudinary.com/dzy0uevma/image/upload/v1645617415/e-commerce/lq5l1h0gr4vnbid8nc7a.webp"
              }
              alt=""
              className="userShowImg"
            />
            <div className="userShowTopTitle">
              <span className="userShowUsername">{user?.username}</span>
              <span className="userShowTitleUser">SOFTWARE AENGGIER</span>
            </div>
          </div>
          <div className="userShowBottom">
            <div className="userShowTitle">Account Details</div>
            <div className="userShowInfo">
              <div className="userShowIcon">
                <PermIdentity />
              </div>
              <span className="userShowInfoTitle">{user?.fullName}</span>
            </div>
            <div className="userShowInfo">
              <div className="userShowIcon">
                <CalendarToday />
              </div>
              <span className="userShowInfoTitle">
                {user?.createdAt.slice(0, 10)}
              </span>
            </div>
            <div className="userShowTitle">Connect Details</div>

            <div className="userShowInfo">
              <div className="userShowIcon">
                <PhoneAndroid />
              </div>
              <span className="userShowInfoTitle">{user?.phone}</span>
            </div>
            <div className="userShowInfo">
              <div className="userShowIcon">
                <MailOutline />
              </div>
              <span className="userShowInfoTitle">{user?.email}</span>
            </div>
            <div className="userShowInfo">
              <div className="userShowIcon">
                <LocationSearching />
              </div>
              <span className="userShowInfoTitle">{user?.location}</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm" onSubmit={handleUpdate}>
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <div className="userEditLabelInput">
                  <label>Username:</label>
                </div>
                <input
                  name="username"
                  type="text"
                  className="userUpdateInput"
                  placeholder={user?.username}
                  onChange={handleChange}
                />
              </div>
              <div className="userUpdateItem">
                <div className="userEditLabelInput">
                  <label>Full name:</label>
                </div>
                <input
                  name="fullName"
                  type="text"
                  className="userUpdateInput"
                  placeholder={user?.fullName}
                  onChange={handleChange}
                />
              </div>
              <div className="userUpdateItem">
                <div className="userEditLabelInput">
                  <label>Email:</label>
                </div>
                <input
                  name="email"
                  type="text"
                  className="userUpdateInput"
                  placeholder={user?.email}
                  onChange={handleChange}
                />
              </div>
              <div className="userUpdateItem">
                <div className="userEditLabelInput">
                  <label>Phone:</label>
                </div>
                <input
                  name="phone"
                  type="text"
                  className="userUpdateInput"
                  placeholder={user?.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="userUpdateItem">
                <div className="userEditLabelInput">
                  <label>Location:</label>
                </div>
                <input
                  name="location"
                  type="text"
                  className="userUpdateInput"
                  placeholder={user?.location}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img
                  src={img ? URL.createObjectURL(img) : null}
                  width="90%"
                  height="auto"
                  alt=""
                  className="userUpdateImg"
                />
                <div className="userInputFileIcon"></div>
                <div className="userInputFileIcon">
                  <label style={{ cursor: "pointer" }} htmlFor="file">
                    <Publish />
                  </label>
                  <input
                    type="file"
                    id="file"
                    style={{ display: "none" }}
                    onChange={(e) => setImg(e.target.files[0])}
                  />
                </div>
              </div>
              <button type="submit" className="userUpdateButton">
                Update
              </button>
            </div>
          </form>
        </div>
        <div className="userInfoCreate">
          <Link to="/newUser">
            <button className="userAddButton">Create</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
