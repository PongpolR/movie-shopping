/* eslint-disable react/prop-types */
import { useCartContext } from "../provider/CartProvider";
import "../styles/Item.css";
import { render } from "react-dom";

export default function Item(props) {
  const { movie } = props;
  const { cartAction } = useCartContext();
  // console.log(movie);

  return (
    <div className="movie-item">
      <p className="title">{movie.title}</p>
      <img
        src={"http://image.tmdb.org/t/p/w500/" + movie.poster_path}
        alt="img"
      />
      <p>{movie.price} baht</p>
      <button
        onClick={() => {
          cartAction.addToCart(movie);
        }}
        className="add-btn"
      >
        Add To Cart
      </button>
    </div>
  );
}
