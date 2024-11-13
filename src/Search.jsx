import "./Search.css";
import logo from "./assets/picture/logo.png"

function Search() {
  return (
    <div className="App">
      <div className="background">
        {/* Logo */}
        <img src={logo} alt="Logo" className="logo" />

        {/* Search Bar */}
        <div className="search-container">
          <input type="text" placeholder="Search" className="search-bar" id="main-search"/>
          <button className="search-button">Search</button>
        </div>
      </div>
    </div>
  );
}

export default Search;
