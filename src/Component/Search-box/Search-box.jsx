import "./Searchbox.css";

const Searchbox = ({ onSearchChange }) => {
  return (
    <>
      <input
        type="search"
        className="search-box"
        placeholder="Search Monsters"
        onChange={onSearchChange}
      />
    </>
  );
};

export default Searchbox;
