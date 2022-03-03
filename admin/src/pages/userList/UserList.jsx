import "./userList.css"
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from "@mui/icons-material";
import { rows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, getUsers } from "../../redux/actions/usersActions";

export default function UserList() {



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

    }



    const [data, setData] = useState(rows);

    const dispatch = useDispatch();
    const users = [];

    useEffect(() => {

    }, [dispatch])

   
    console.log(users)

    const handleDelete = (id) =>{


         deleteUser(dispatch,id)
    }

    const columns = [
        { field: '_id', headerName: 'ID', flex: 1, },
        {
            field: 'username', headerName: 'Username', flex: 4, renderCell: (params) => {
                return (
                    <div className="userListUser">
                        <img className="userListImg" src={params.row.img? params.row.img : "https://res.cloudinary.com/dzy0uevma/image/upload/v1645617415/e-commerce/lq5l1h0gr4vnbid8nc7a.webp"} alt="" />
                        {params.row.username}
                    </div>
                )
            }
        },
        { field: 'email', headerName: 'Email', flex: 4, },
        {
            field: 'isAdmin',
            headerName: 'Admin',
            flex: 2,
        },
      
        {
            field: 'action',
            headerName: 'Action',
            flex: 2,
            renderCell: (params) => {
                return (
                    <div className="userListEdit">
                        <Link to={"/user/" + params.row._id}>
                            <button className="userListEditButton">Edit</button>
                        </Link>
                        <div className="userListDelete">
                            <DeleteOutline onClick={() => handleDelete(params.row._id)} />
                        </div>
                    </div>
                )
            }
        },
    ];


    const columnsResposive = [
        { field: '_id', headerName: 'ID', flex: 0.1, },
        {
            field: 'username', headerName: 'Username', flex: 3, renderCell: (params) => {
                return (
                    <div className="userListUser">
                        {params.row.username}
                    </div>
                )
            }
        },
   
        { field: 'email', headerName: 'Email', flex: 4, },
        {
            field: 'isAdmin',
            headerName: 'Admin',
            flex: 2,
        },

        {
            field: 'action',
            headerName: 'Action',
            flex: 2,
            renderCell: (params) => {
                return (
                    <div className="userListEdit">
                        <Link to={"/user/" + params.row._id}>
                            <button className="userListEditButton">Edit</button>
                        </Link>
                        <div className="userListDelete">
                            <DeleteOutline onClick={() => handleDelete(params.row._id)} />
                        </div>
                    </div>
                )
            }
        },
    ];



    if (screenWidth < 600) {
        return (
            <div className="userList">
                <div className="userListTitle">Users</div>

                <DataGrid
                    rows={users}
                    getRowId={(row)=> row._id}
                    columns={columnsResposive}
                    pageSize={12}
                    disableSelectionOnClick
                    autoPageSize

                    sx={{
                        padding: "",
                        fontSize: "18px"
                    }}
                />


            </div>
        )
    } else {
        return (



            <div className="userList">
                <div className="userListTitle">Users</div>

                <DataGrid
                    rows={users}
                    getRowId={(row)=> row._id}
                    columns={columns}
                    pageSize={12}
                    checkboxSelection
                    disableSelectionOnClick
                    autoPageSize

                    sx={{
                        padding: "",
                        fontSize: "18px"
                    }}
                />


            </div>
        )
    }
}
