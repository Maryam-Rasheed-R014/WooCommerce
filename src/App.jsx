import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Navbar from "./components/shared/navbar";
import Footer from "./components/shared/footer";
import Feature from "./pages/feature";
import Products from "./pages/products";
import Review from "./pages/review";
import SingleProduct from "./pages/singleProduct";
import CreateAccount from "./pages/createAccount";
import LostPassword from "./pages/lostPassword";
import Cart from "./pages/cart";
import Checkout from "./pages/checkout";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/feature" element={<Feature />} />
        <Route path="/products" element={<Products />} />
        <Route path="/review" element={<Review />} />
        <Route path="/singleProduct" element={<SingleProduct />} />
        <Route path="/createAccount" element={<CreateAccount />} />
        <Route path="/lostPassword" element={<LostPassword/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/checkout" element={<Checkout/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
