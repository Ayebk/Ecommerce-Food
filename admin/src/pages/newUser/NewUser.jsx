import { forwardRef, useEffect, useRef, useState } from "react";

import axios from "axios";

//REDUX
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../../redux/actions/usersActions";

//MUI
import Snackbar from "@mui/material/Snackbar";
import Stack from "@mui/material/Stack";
import MuiAlert from "@mui/material/Alert";
import { Publish } from "@mui/icons-material";

import "./newUser.css";

/**
 * Popup
 */


const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


export default function NewUser() {
  const dispatch = useDispatch();
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
   * Create product with upload image to couldinary
   *
   */

  const postDetails = async () => {
    const data = new FormData();
    data.append("file", img);
    data.append("upload_preset", "e-commerce");
    data.append("cloud_name", "dzy0uevma");
    try {
      if (img) {
        axios
          .post("https://api.cloudinary.com/v1_1/dzy0uevma/image/upload", data)
          .then((result) => setImgUrl(result.data.secure_url));
      } else {
        addUser(dispatch, inputs, imgUrl);
      }
    } catch (err) {
      console.log(err);
    }
  };

  console.log(imgUrl);
  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };


  useEffect(() => {
    if (!isFirstRun.current) {
      console.log("bbbbbbbbb");
      addUser(dispatch, inputs, imgUrl);
    }
  }, [imgUrl]);

  const handleUpdate = async (e) => {
    e.preventDefault();

    await postDetails();
  };

  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
    }
    return () => {
      isFirstRun.current = false;
    };
  }, []);


  return (
    <div className="newUser">
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
      <div className="newUserTitle">New User</div>
      <form className="newUserForm" onSubmit={handleUpdate}>
        <div className="newUserItem">
          <label> Username</label>
          <input
            onChange={handleChange}
            name="username"
            type="text"
            placeholder="Bob"
          />
        </div>
        <div className="newUserItem">
          <label> Full Name</label>
          <input
            onChange={handleChange}
            name="fullName"
            type="text"
            placeholder="Bob Robert"
          />
        </div>
        <div className="newUserItem">
          <label> Email</label>
          <input
            onChange={handleChange}
            name="email"
            type="email"
            placeholder="bob@gmail.com"
          />
        </div>
        <div className="newUserItem">
          <label> Password</label>
          <input
            onChange={handleChange}
            name="password"
            type="text"
            placeholder="password"
          />
        </div>
        <div className="newUserItem">
          <label> Phone</label>
          <input
            onChange={handleChange}
            name="phone"
            type="text"
            placeholder="0590545646"
          />
        </div>
        <div className="newUserItem">
          <label> Address</label>
          <input
            onChange={handleChange}
            name="location"
            type="text"
            placeholder="New York"
          />
        </div>
        <div className="newUserItem">
          <label> Gender</label>
          <div className="newUserGender">
            <div className="newUserGenderOption">
              <input
                onChange={handleChange}
                name="gender"
                type="radio"
                name="gender"
                id="male"
                value="male"
              />
              <label for="male">Male</label>
            </div>
            <div className="newUserGenderOption">
              <input
                onChange={handleChange}
                name="gender"
                type="radio"
                name="gender"
                id="female"
                value="female"
              />
              <label for="female">Female</label>
            </div>
          </div>
        </div>
        <div className="newUserItem">
          <label> Admin</label>
          <select className="newUserSelect" name="isAdmin" id="active">
            <option className="newUserSelectOption" value="true">
              Yes
            </option>
            <option value="false ">No</option>
          </select>
        </div>
        <div className="userUpdateUpload">
          <img
            src={img ? URL.createObjectURL(img) : null}
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
        <div className="newUserContainerButton">
          <button type="submit" className="newUserButtonSubmit">
            Create
          </button>
        </div>
      </form>
    </div>
  );
}
