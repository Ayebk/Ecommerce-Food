
import { Link, useNavigate } from "react-router-dom";

//REDUX
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteProduct,
  getProducts,
} from "../../redux/actions/productsActions";

//MUI
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";

import "./productList.css";


export default function ProductList() {

  /**
   * Checking screen width
   */
  
  const [screenWidth, setScreenWidth] = useState();

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
  });

  const handleResize = () => {
    setScreenWidth(window.outerWidth);
  };


  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const navigate = useNavigate();

  useEffect(() => {
    getProducts(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    deleteProduct(dispatch, id);
  };

  const columns = [
    {
      field: "_id",
      headerName: "ID",
      flex: 3,

      renderCell: (params) => {
        return (
          <Link to={"/product/" + params.row._id} className="link">
            <div className="userListEdit">{params.row._id}</div>
          </Link>
        );
      },
    },
    {
      field: "product",
      headerName: "Prodcut",
      flex: 3,
      renderCell: (params) => {
        return (
          <Link to={"/product/" + params.row._id} className="link">
            <div className="productListproduct">
              <img className="productListImg" src={params.row.img} alt="" />
              {params.row.title}
            </div>
          </Link>
        );
      },
    },
    { field: "stock", headerName: "Stock", flex: 2 },

    {
      field: "price",
      headerName: "Price",
      flex: 2,
    },
    {
      field: "action",
      headerName: "Action",
      flex: 2,
      renderCell: (params) => {
        return (
          <div className="userListEdit">
            <Link to={"/product/" + params.row._id}>
              <button className="productListEditButton">Edit</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </div>
        );
      },
    },
  ];

  const columnsResposive = [
    { field: "_id", headerName: "ID", flex: 3 },
    {
      field: "product",
      headerName: "Prodcut",
      flex: 10,
      renderCell: (params) => {
        return <div className="productListproduct">{params.row.title}</div>;
      },
    },

    {
      field: "price",
      headerName: "Price",
      flex: 2,
    },
    {
      field: "action",
      headerName: "Action",
      flex: 3,
      renderCell: (params) => {
        return (
          <div className="userListEdit">
            <Link to={"/product/" + params.row._id}>
              <button className="productListEditButton">Edit</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </div>
        );
      },
    },
  ];


  /**
   * Responsive screen
   */

  if (screenWidth < 600) {
    return (
      <div className="prodcutList">
        <div className="productListTitle">Products</div>
        <div className="helper">Click on a Product for more info</div>

        <DataGrid
          rows={products}
          columns={columnsResposive}
          pageSize={12}
          getRowId={(row) => row._id}
          disableSelectionOnClick
          sx={{
            padding: "",
            fontSize: "18px",
          }}
        />
      </div>
    );
  } else {
    return (
      <div className="prodcutList">
        <div className="productListTitle">Products</div>
        <div className="helper">Click on a Product for more info</div>
        <DataGrid
          rows={products}
          getRowId={(row) => row._id}
          columns={columns}
          pageSize={12}
          checkboxSelection
          disableSelectionOnClick
          sx={{
            padding: "",
            fontSize: "18px",
          }}
        />
      </div>
    );
  }
}
