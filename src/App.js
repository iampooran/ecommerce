import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import { BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";

function App() {
  const user = true;
  return (
    <>

  <Router>
      <Routes>
        
        <Route path="/"  element={<Home/>} />
        <Route exact path="/login" element={user ? <Navigate to="/"/> : <Login/>} />
        <Route exact path="/register" element={user ? <Navigate to="/"/> : <Register/>} />
        <Route exact path="/products/:category" element={<ProductList/>} />
        <Route exact path="/product/:id" element={<Product/>} />
        <Route exact path="/cart" element={<Cart/>} />
      </Routes>
    </Router>
    </> 
  );
}

export default App;
