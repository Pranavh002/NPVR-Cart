
import './App.css';
import Header from './components/Header';
import Home from './pages/Home'
import Footer from './components/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductDetail from './pages/ProductDetail';
import { useState } from 'react';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Register from './pages/Register';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  const [cartItems, setCartItems] = useState([]);
  return (
    <div className="App">
      <Router>
        <div>
          <ToastContainer theme='dark' position='top-center' autoClose={3000} />
          <Header cartItems={cartItems} />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/search' element={<Home />} />
            <Route path='/product/:id' element={<ProductDetail cartItems={cartItems} setCartItems={setCartItems} />} />
            <Route
              path="/cart"
              element={
                <ProtectedRoute>
                  <Cart cartItems={cartItems} setCartItems={setCartItems} />
                </ProtectedRoute>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
