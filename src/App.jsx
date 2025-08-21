import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/admin/dashboard/dashboard";
import Layout from "./components/admin/Layout";
import Product from "./pages/admin/dashboard/product/Product";
import Login from "./pages/auth/Login";
import CreateProduct from "./pages/admin/dashboard/product/createProduct";
import EditProduct from "./pages/admin/dashboard/product/EditProduct";
import Home from "./pages/user/Home";





const App = () => {
  
  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Home/>} />

          <Route path="/admin/" element={<Layout />}>
            <Route path="" element={<Dashboard />} />
            <Route path="product" element={<Product />} />
            <Route path="createProduct" element={<CreateProduct/>}/>
            <Route path='editProduct/:id' element= {<EditProduct/>} /> 
          </Route>

        <Route path="/login" element={<Login/>} />
          
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
