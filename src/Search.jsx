import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Search.css";
import logo from "./assets/picture/logo.png"

function Search() {
  const [query,setQuery] = useState('');

  const nav = useNavigate();
  
  const handleChange = (e)=>{
    setQuery(e.target.value);
  }

  const handleSearch = () => {
    nav(`/search-result/?&query=${query}`)
    console.log(query)
  }

  return (
    <div className="App">
      <div className="background">
        {/* Logo */}
        <img src={logo} alt="Logo" className="logo" />

        {/* Search Bar */}
        <div className="search-container">
          <input 
          type="text" 
          placeholder="Search"
          className="search-bar"
          id="main-search"
          value={query}
          onChange={handleChange}
          />
          <button className="search-button" onClick={handleSearch}>Search</button>
          
        </div>
      </div>
    </div>
  );
}

export default Search;
