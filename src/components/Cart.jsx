import { useCartContext } from "../provider/CartProvider";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";
import "../styles/Cart.css";

export default function Cart() {
  const { cart } = useCartContext();
  const carts = cart.items;

  return (
    <div>
      <Link to={"/cart"}>
        <Badge
          overlap="rectangular"
          color="primary"
          badgeContent={carts.length}
        >
          <ShoppingCartIcon />
        </Badge>
      </Link>
    </div>
  );
}
