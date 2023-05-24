import React from "react";
import { Routes, Route } from "react-router-dom";
import AddProductPage from "./pages/AddProductPage";
import ProductPage from "./pages/ProductPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import ProductContextProvider from "./context/ProductContextProvider";
import Navbar from "./components/Navbar";

import EditProductPage from "./pages/EditProductPage";

import CartContextProvider from "./context/CartContextProvider";

import CartPage from "./pages/CartPage";

const MyRoutes = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductPage />} />
        <Route path="/add" element={<AddProductPage />} />
        <Route path="/detail/:id" element={<ProductDetailsPage />} />
        <Route path="/edit/:id" element={<EditProductPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </div>
  );
};

export default MyRoutes;
