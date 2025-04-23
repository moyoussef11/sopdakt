import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Blog from "./pages/Blog";
import Categories from "./pages/Categories";
import Products from "./pages/Products";
import Header from "./components/Header/Header";
import TopBar from "./components/Header/TopBar";
import Footer from "./components/Footer/Footer";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";
import Product from "./pages/Product.jsx";
import Wishlist from "./pages/Wishlist.jsx";
import Compare from "./pages/Compare.jsx";
import Profile from "./pages/Profile.jsx";
import Faqs from "./pages/Faqs.jsx";
import Cart from "./pages/Cart.jsx";
import Checkout from "./pages/Checkout.jsx";
import Verify from "./pages/Verify.jsx";
import NotFound404 from "./pages/NotFound404.jsx";
import SessionExpired from "./pages/SessionExpired.jsx";
import Signup from "./pages/Signup.jsx";

function App() {
  return (
    <>
      <TopBar />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product" element={<Product />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/compare" element={<Compare />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/cart/checkout" element={<Checkout />} />
        <Route path="/cart/checkout/verify" element={<Verify />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/create-account" element={<Signup />} />
        <Route path="*" element={<NotFound404 />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
