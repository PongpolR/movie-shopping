import "./App.css";
// import axios from "axios";
// import { useEffect, useState } from "react";
import Header from "./components/Header";
import Data from "./components/Data";
import Cart from "./components/Cart";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import CartProvider from "./provider/CartProvider";
import CartPurchase from "./components/CartPurchase";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/cart"
          element={
            <CartProvider>
              <Header />
              <CartPurchase />
            </CartProvider>
          }
        />
        <Route
          path="/"
          element={
            <CartProvider>
              <Header />
              <Data />
            </CartProvider>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
