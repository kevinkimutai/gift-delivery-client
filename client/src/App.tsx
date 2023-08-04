import React from "react";

import "./App.css";
import {
  Gifts,
  GiftId,
  AdminOrders,
  DashboardLayout,
  HomeDashBoard,
  AddGift,
  Login,
  Signup,
  ShoppingCart,
  Unauthorized,
} from "./views";
import { Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import { Shipping } from "./components";

function App() {
  return (
    <>
      <Routes>
        {/*USER ROUTES*/}
        <Route path="/" element={<Navigate to="/gifts" />} />
        <Route path="/gifts" element={<Gifts />} />
        <Route path="/gifts/:id" element={<GiftId />} />

        {/*AUTH USERS ROUTES*/}
        <Route path="/user/cart" element={<ShoppingCart />} />
        <Route path="/user/shipping" element={<Shipping />} />
        {/*Admin Route */}

        <Route
          path="/admin"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              {/*@ts-ignore*/}
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route path="/admin/dashboard" element={<HomeDashBoard />} />
          <Route path="/admin/orders" element={<AdminOrders />} />
          <Route path="/admin/add-gift" element={<AddGift />} />
        </Route>

        {/*Auth Route */}
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/signup" element={<Signup />} />

        <Route path="/unauthorized" element={<Unauthorized />} />
      </Routes>
    </>
  );
}

export default App;

// let unirest = require("unirest");
// let req = unirest(
//   "GET",
//   "https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials"
// )
//   .headers({
//     Authorization:
//       "Bearer cFJZcjZ6anEwaThMMXp6d1FETUxwWkIzeVBDa2hNc2M6UmYyMkJmWm9nMHFRR2xWOQ==",
//   })
//   .send()
//   .end((res) => {
//     if (res.error) throw new Error(res.error);
//     console.log(res.raw_body);
//   });
