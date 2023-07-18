import React,{useState} from 'react';
import logo from "../img/logo.png";
import SearchBar from './SearchBar';
import "../Styling/NavBar.css"
import SearchResults from './SearchResults';


const NavBar = () => {
  
  const [results, setResults] = useState([])
    return (
        <div>
            <div className="navBarContainer">
        <button>Home</button>
        <button>About Me</button>
        <img src={logo} alt="website logo" className="logoPhoto"></img>
        <button>Contact Me</button>
        <div className="search-bar-container">
          <SearchBar/>
          {/* <SearchBar setResults={setResults}/> */}
          {/* <SearchResults results={results}/> */}
        
        </div>
      </div>
        </div>
    );
}

export default NavBar;
