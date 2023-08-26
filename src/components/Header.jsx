import { Link } from "react-router-dom";
import Cart from "./Cart";
import "../styles/Header.css";
export default function Header() {
  return (
    <header>
      <Link to={"/"}>
        <h1>Movie Shopping</h1>
      </Link>
      <div className="cart">
        <Cart />
      </div>
    </header>
  );
}
