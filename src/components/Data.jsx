import axios from "axios";
import { useEffect, useState } from "react";

export default function Data() {
  const [movie, setMovie] = useState(
    JSON.parse(localStorage.getItem("movie")) || []
  );
  const [searchMovie, setSearchMovie] = useState(
    JSON.parse(localStorage.getItem("movie")) || []
  );
  const [search, setSearch] = useState("");
  async function fetchData() {
    let response = await axios(
      "https://api.themoviedb.org/3/search/movie?api_key=ac70bed77550b024ac4d0cd98fa1df92&query=a"
    );
    let data = response.data;
    setMovie(data.results);
  }

  useEffect(() => {
    fetchData();
    localStorage.setItem("movie", JSON.stringify(movie));
  }, []);

  function test(e) {
    e.preventDefault();
    const result = movie.filter((item) =>
      item.title.toLowerCase().includes(search)
    );
    console.log(result);
    setSearch("");
    setSearchMovie(result);
  }

  function clear(e) {
    e.preventDefault();
    setSearchMovie(movie);
  }

  return (
    <>
      <form onSubmit={test}>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit">Submit</button>
        <button onClick={clear}>Clear</button>
      </form>

      {searchMovie.map((item) => {
        return <div key={item.id}>{item.title}</div>;
      })}
    </>
  );
}
