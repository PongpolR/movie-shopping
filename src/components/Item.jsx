/* eslint-disable react/prop-types */
export default function Item(props) {
  const { movie } = props;
  return (
    <div>
      <p>
        {movie.title} {movie.price}
      </p>
    </div>
  );
}
