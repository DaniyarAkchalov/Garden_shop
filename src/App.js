import "./App.css";
import { Routes, Route } from "react-router-dom";
import CategoriesPage from "./pages/CategoriesPage";
import ProductsPage from "./pages/ProductsPage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";
import NotFoundPage from "./pages/NotFoundPage";
import Layout from "./components/Layout";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route index element={<HomePage />} />
        <Route path="categories_page" element={<CategoriesPage />} />
        <Route path="categories_page/:category" element={<ProductsPage />} />
        <Route path="products/:id" element={<ProductPage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="+" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
