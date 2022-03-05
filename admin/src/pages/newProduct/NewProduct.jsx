import { forwardRef, useEffect, useRef, useState } from "react";
import axios from "axios";

//REDUX
import { Publish } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../redux/actions/productsActions";

//MUI
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

import "./newProduct.css";


/**
 * Popup
 */

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});



export default function NewProduct() {
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({});
  const [categories, setCategories] = useState([]);
  const [img, setImg] = useState();
  const [imgUrl, setImgUrl] = useState();
  const [open, setOpen] = useState(false);
  const [openError, setOpenError] = useState(false);

  const isFirstRun = useRef(true);

  const error = useSelector((state) => state.products.error);
  const seccuss = useSelector((state) => state.products.seccuss);

  useEffect(() => {
    if (error) {
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
        const res = addProduct(dispatch, inputs, imgUrl);
        console.log(res);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    return () => {
      isFirstRun.current = true;
    };
  });

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
    if (!isFirstRun.current) {
      addProduct(dispatch, inputs, imgUrl);
    }
  }, [imgUrl]);

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleCat = (e) => {
    setCategories(e.target.value.split(","));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    await postDetails();
  };

  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
    }
  }, []);

  return (
    <div className="newProduct">
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

      <h1 className="newProductTitle">New Product</h1>
      <form className="newProductForm" onSubmit={handleUpdate}>
        <div className="newProductItem">
          <label> Product name</label>
          <input
            onChange={handleChange}
            name="title"
            type="text"
            placeholder="Title"
          />
        </div>

        <div className="newProductItemDesc">
          <label> Description</label>
          <textarea
            name="desc"
            onChange={handleChange}
            rows="3"
            type="text"
            placeholder="description"
          />
        </div>
        <div className="newProductItemDesc">
          <label> Details</label>
          <textarea
            name="details"
            onChange={handleChange}
            rows="3"
            type="text"
            placeholder="details"
          />
        </div>
        <div className="newProductItem">
          <label> Brand</label>
          <input
            name="brand"
            onChange={handleChange}
            type="text"
            placeholder="brand"
          />
        </div>
        <div className="newProductItem">
          <label> Categories</label>
          <input
            name="categories"
            onChange={handleCat}
            type="text"
            placeholder="category"
          />
        </div>
        <div className="newProductItem">
          <label> Price</label>
          <input
            name="price"
            onChange={handleChange}
            type="text"
            placeholder="price"
          />
        </div>

        <div className="newProductItem">
          <label> In Stock</label>
          <select
            name="inStock"
            onChange={handleChange}
            className="newProductSelect"
            id="active"
          >
            <option vakue="yes">Yes</option>
            <option vakue="no">No</option>
          </select>
        </div>
        <div className="userUpdateWrapper">
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
          <div className="newProductContainerButton">
            <button type="submit" className="newProductButtonSubmit">
              Create
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
