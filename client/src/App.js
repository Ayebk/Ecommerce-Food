import Home from "./pages/Home"
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Login from './pages/Login'
import Register from './pages/Register'
import Cart from './pages/Cart'

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";


function App() {

  const user = false;


  const LoginWrapper = ({ children, currentUser }) => {
    return currentUser ? <Navigate to="/" replace /> : children;
  };
  const RegisterWrapper = ({ children, currentUser }) => {
    return currentUser ? <Navigate to="/" replace /> : children;
  };

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/cart/:id" element={<Cart />} />
        <Route
          path='/login'
          element={<LoginWrapper currentUser={user}>
            <Login />
          </LoginWrapper>}
        />
        <Route
          path='/register'
          element={<RegisterWrapper currentUser={user}>
            <Register />
          </RegisterWrapper>}
        />
      </Routes>
    </Router>
  );
}

export default App;
