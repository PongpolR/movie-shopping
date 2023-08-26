import "./App.css";
// import axios from "axios";
// import { useEffect, useState } from "react";
import Header from "./components/Header";
import Data from "./components/Data";
import Cart from "./components/Cart";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { transitions, positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import CartProvider from "./provider/CartProvider";
import CartPurchase from "./components/CartPurchase";
const options = {
  // you can also just use 'bottom center'
  position: positions.TOP_CENTER,
  timeout: 3000,
  offset: "30px",
  // you can also just use 'scale'
  transition: transitions.SCALE,
};
function App() {
  return (
    <AlertProvider template={AlertTemplate} {...options}>
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
    </AlertProvider>
  );
}

export default App;
