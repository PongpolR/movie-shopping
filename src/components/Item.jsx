/* eslint-disable react/prop-types */
import { useCartContext } from "../provider/CartProvider";
export default function Item(props) {
  const { movie } = props;
  const { cartAction } = useCartContext();

  return (
    <div className="movie-item">
      <p>
        {movie.title} {movie.price}
      </p>
      <button onClick={() => cartAction.addToCart(movie)}>Add To Cart</button>
      <div> --- </div>
    </div>
  );
}
