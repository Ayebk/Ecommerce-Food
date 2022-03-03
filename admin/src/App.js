import Sidebar from './components/sidebar/Sidebar'
import Topbar from './components/topbar/Topbar'
import Home from './pages/home/Home'
import UserList from './pages/userList/UserList';
import User from './pages/user/User';
import NewUser from './pages/newUser/NewUser';


import "./app.css"


import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ProductList from './pages/productList/ProductList';
import Product from './pages/product/Product';
import NewProduct from './pages/newProduct/NewProduct';
import Login from './pages/login/Login';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {

const [user,setUser]=useState('')
const loggedUser = useSelector((state) => state.auth);

useEffect(() => {
  setUser(loggedUser.username)
}, [loggedUser])

  return (
    <Router>
             <ToastContainer
                position="top-right"
                hideProgressBar={true}
                autoClose={false}
                newestOnTop={true}
                closeOnClick={false}
                draggable={false}
                rtl={false}
            />
    <div className="App">
      <Topbar />
      <div className="container">
        <Sidebar />
        
          <Routes>
           
            <Route exact path="/" element={ user ? <Home /> : <Login /> } />
            <Route path="/users" element={user ? <UserList /> : <Login />} />
            <Route path="/user/:userId" element={user ? <User /> : <Login />} />
            <Route path="/newUser" element={user ? <NewUser /> : <Login />} />
            <Route path="/products" element={user ? <ProductList /> : <Login />} />
            <Route path="/product/:productId" element={user ? <Product /> : <Login />} />
            <Route path="/newProduct" element={user ? <NewProduct /> : <Login />} />
         
            <Route path="/login" element={<Login />} />
            
          </Routes>
      </div>
    </div>
    </Router>

  );
}

export default App;
