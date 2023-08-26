import { Link } from "react-router-dom";
import Cart from "./Cart";
export default function Header() {
  return (
    <div>
      <Link to={"/"}>
        <h1>Movie Shopping</h1>
      </Link>
      <Cart />
    </div>
  );
}
