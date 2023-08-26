/* eslint-disable react/prop-types */
import "../styles/SearchForm.css";
export default function SearchForm(props) {
  const { submitSearch, search, setSearch, refresh } = props;
  return (
    <form onSubmit={submitSearch}>
      <h1 className="title-search">Search Movie</h1>
      <input
        className="text-input"
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit" className="submit-btn">
        Submit
      </button>
      <button onClick={refresh} className="refresh-btn">
        Refresh
      </button>
    </form>
  );
}
