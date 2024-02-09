import { useGlobalContext } from "./Context";

function SearchForm() {
  function handleSubmit(event) {
    event.preventDefault();
    const searchValue = event.target.elements.search.value;
    if (!searchValue) return;
    setSearchTerm(searchValue);
  }

  const { setSearchTerm } = useGlobalContext();

  return (
    <section>
      <h1 className="title"> unsplash images</h1>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-input search-input"
          name="search"
          placeholder="sun"
        />
        <button type="submit" className="btn">
          Search
        </button>
      </form>
    </section>
  );
}

export default SearchForm;
