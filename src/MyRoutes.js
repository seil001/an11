import React from "react";
import { Routes, Route } from "react-router-dom";
import AddProductPage from "./pages/AddProductPage";
import ProductPage from "./pages/ProductPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import ProductContextProvider from "./context/ProductContextProvider";
import Navbar from "./components/Navbar";

const MyRoutes = () => {
  return (
    <div>
      <ProductContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<ProductPage />} />
          <Route path="/add" element={<AddProductPage />} />
          <Route path="/detail/:id" element={<ProductDetailsPage />} />
        </Routes>
      </ProductContextProvider>
    </div>
  );
};

export default MyRoutes;
