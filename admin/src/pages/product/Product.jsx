
import { forwardRef, Fragment, useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Chart from "../../components/chart/Chart";

import axios from "axios";

//REDUX
import { useDispatch, useSelector } from "react-redux";
import { userRequest } from "../../requestMethods";
import { updateProduct } from "../../redux/actions/productsActions";

//MUI
import Snackbar from "@mui/material/Snackbar";
import Stack from "@mui/material/Stack";
import MuiAlert from "@mui/material/Alert";
import { Publish } from "@mui/icons-material";

import "./product.css";

/**
 * Popup
 */

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Product() {
  const dispatch = useDispatch();
  const location = useLocation();
  const productId = location.pathname.split("/")[2];
  const [prodcutsStats, setProductsStats] = useState([]);
  const [inputs, setInputs] = useState({});
  const [categories, setCategories] = useState([]);
  const [img, setImg] = useState();
  const [imgUrl, setImgUrl] = useState();
  const [openError, setOpenError] = useState(false);
  const [open, setOpen] = useState(false);

  const isFirstRun = useRef(true);

  const product = useSelector((state) =>
    state.products.products.find((p) => p._id == productId)
  );

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

  /**
   * Update product with upload image to couldinary
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
        const res = await updateProduct(dispatch, productId, inputs, imgUrl);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    await postDetails();
  };

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Agu",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await userRequest.get(
          "orders/salesProduct?pid=" + productId
        );
        const list = res.data.sort((a, b) => {
          return a._id - b._id;
        });
        list.map((item) => {
          setProductsStats((prev) => [
            ...prev,
            { name: months[item._id - 1], Sales: item.total },
          ]);
        });
      } catch (err) {
        console.log(err);
      }
    };
    getStats();
  }, []);

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleCat = (e) => {
    setCategories(e.target.value.split(","));
  };

  useEffect(async () => {
    if (!isFirstRun.current) {
      const res = await updateProduct(dispatch, productId, inputs, imgUrl);
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

  return (
    <div className="product">
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

      <div className="productInfo">
        <div className="productTopRight">
          <div className="productInfoTop">
            <img src={product?.img} alt="" className="productInfiImg" />
          </div>
          <div className="prodcutName">{product?.title}</div>
        </div>
        <div className="productBottom">
          <div className="productInfoItem">
            <span className="productInfoKey">Id:</span>
            <span className="productInfoValue">{product?._id}</span>
          </div>

          <div className="productInfoItemDesc">
            <span className="productInfoKey">Description:</span>
            <span className="productInfoValue">{product?.desc}</span>
          </div>

          <div className="productInfoItemDesc">
            <span className="productInfoKey">Details:</span>
            <span className="productInfoValue">{product?.details}</span>
          </div>

          <div className="productInfoItem">
            <span className="productInfoKey">Brand:</span>
            <span className="productInfoValue">{product?.brand}</span>
          </div>

          <div className="productInfoItem">
            <span className="productInfoKey">Categories:</span>
            <span className="productInfoValue">{product?.categories}</span>
          </div>

          <div className="productInfoItem">
            <span className="productInfoKey">Price:</span>
            <span className="productInfoValue">{product?.price}</span>
          </div>

          <div className="productInfoItem">
            <span className="productInfoKey">In Stock:</span>
            <span className="productInfoValue">Yes</span>
          </div>
        </div>

        <div className="productSales">
          <div className="productTitleContainer">
            <h1 className="productTitle">{product?.title}</h1>
          </div>
          <div className="productTop">
            <div className="productTopLeft">
              <Chart
                data={prodcutsStats}
                dataKey="Sales"
                title="Sales Number"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="productUpdate">
        <span className="productUpdateTitle">Edit</span>
        <form className="productUpdateForm" onSubmit={handleUpdate}>
          <div className="productUpdateLeft">
            <div className="productUpdateItem">
              <div className="productEditLabelInput">
                <label>Name:</label>
              </div>
              <input
                name="title"
                type="text"
                className="productUpdateInput"
                placeholder={product?.title}
                onChange={handleChange}
              />
            </div>
            <div className="productUpdateItemDesc">
              <div className="productEditLabelInput">
                <label>Description:</label>
              </div>
              <textarea
                name="desc"
                rows="3"
                className="productUpdateInputDesc"
                placeholder={product?.desc}
                onChange={handleChange}
              />
            </div>
            <div className="productUpdateItemDesc">
              <div className="productEditLabelInput">
                <label>Details:</label>
              </div>
              <textarea
                name="details"
                rows="3"
                className="productUpdateInputDesc"
                placeholder={product?.details}
                onChange={handleChange}
              />
            </div>
            <div className="productUpdateItem">
              <div className="productEditLabelInput">
                <label>Brand:</label>
              </div>
              <input
                name="brand"
                className="productUpdateInput"
                placeholder={product?.brand}
                onChange={handleChange}
              />
            </div>
            <div className="productUpdateItem">
              <div className="productEditLabelInput">
                <label>Categories:</label>
              </div>
              <input
                name="categories"
                className="productUpdateInput"
                placeholder={product?.categories}
                onChange={handleCat}
              />
            </div>
            <div className="productUpdateItem">
              <div className="productEditLabelInput">
                <label>Price:</label>
              </div>
              <input
                name="price"
                type="text"
                className="productUpdateInput"
                placeholder={product?.price}
                onChange={handleChange}
              />
            </div>
            <div className="productUpdateItem">
              <div className="productEditLabelInput">
                <label>Price Desc:</label>
              </div>
              <input
                name="priceDesc"
                type="text"
                className="productUpdateInput"
                placeholder="לק''ג"
                onChange={handleChange}
              />
            </div>

            <div className="productUpdateItemoption">
              <div className="productEditLabelInputoption">
                <label> In Stock:</label>
              </div>
              <select
                className="productEditLabelInputoption"
                name="inStock"
                id="active"
                onChange={handleChange}
              >
                <option vakue="yes">כן</option>
                <option vakue="no">לא</option>
              </select>
            </div>
          </div>
          <div className="productUpdateRight">
            <div className="productUpdateUpload">
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
            <button className="userUpdateButton" type="submit">
              Update
            </button>
          </div>
        </form>
      </div>

      <div className="productButtonCreateOn">
        <Link to="/newProduct">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
    </div>
  );
}
