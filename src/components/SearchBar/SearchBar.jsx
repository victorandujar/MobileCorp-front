import SearchBarStyled from "./SearchBarStyled";

const SearchBar = ({ searchMobile, handleMobileSearchInput, disabled }) => {
  return (
    <SearchBarStyled className="search-bar">
      <input
        type="text"
        placeholder="Find your mobile"
        className="search-bar__field"
        onChange={handleMobileSearchInput}
        value={searchMobile}
        disabled={disabled}
      />
    </SearchBarStyled>
  );
};

export default SearchBar;
