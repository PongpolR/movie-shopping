import axios from "axios";
import { useEffect, useState } from "react";
import price from "../data/price";
import SearchForm from "./SearchForm";

export default function Data() {
  const [movie, setMovie] = useState(
    JSON.parse(localStorage.getItem("movie")) || []
  );
  const [searchMovie, setSearchMovie] = useState([]);
  const [search, setSearch] = useState("");
  const [priceItem, setPriceItem] = useState(price);
  async function fetchData() {
    let response = await axios(
      "https://api.themoviedb.org/3/search/movie?api_key=ac70bed77550b024ac4d0cd98fa1df92&query=a"
    );
    let data = response.data;
    setMovie(data.results);
    // localStorage.setItem("movie", JSON.stringify(movie));
    // console.log(movie);
    setPrice();
  }

  function setPrice() {
    console.log(priceItem);
    let objWithPrice = movie.map((item, id) => {
      item = {
        ...item,
        price: priceItem[id].price,
      };
      return item;
    });
    setMovie(objWithPrice);
  }

  useEffect(() => {
    fetchData();
    localStorage.setItem("movie", JSON.stringify(movie));
  }, []);

  function submitSearch(e) {
    e.preventDefault();
    const result = movie.filter((item) =>
      item.title.toLowerCase().includes(search)
    );
    setSearch("");
    setSearchMovie(result);
  }

  function refresh(e) {
    e.preventDefault();
    setSearchMovie(movie);
  }

  return (
    <>
      <SearchForm
        submitSearch={submitSearch}
        search={search}
        setSearch={setSearch}
        refresh={refresh}
      />

      {searchMovie.map((item) => {
        return (
          <div key={item.id}>
            {item.title} {item.price}
          </div>
        );
      })}

      {searchMovie == 0 &&
        movie.map((item) => {
          return (
            <div key={item.id}>
              {item.title} {item.price}
            </div>
          );
        })}
    </>
  );
}
