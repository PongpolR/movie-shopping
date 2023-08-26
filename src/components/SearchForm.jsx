/* eslint-disable react/prop-types */
export default function SearchForm(props) {
  const { submitSearch, search, setSearch, refresh } = props;
  return (
    <form onSubmit={submitSearch}>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit">Submit</button>
      <button onClick={refresh}>Refresh</button>
    </form>
  );
}
