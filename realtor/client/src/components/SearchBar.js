import React, {useState} from 'react';
import {FaSearch} from "react-icons/fa"
import "../Styling/SearchBar.css"


const SearchBar = ({setResults}) => {
    const [input, setInput] = useState("")


    const fetchData = (value) =>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((json) => {
            const results = json.filter((user) =>{
                return (
                    value && 
                    user && 
                    user.name &&
                    user.address.city && 
                    user.name.toLowerCase().includes(value))
            })
            setResults(results)
        })
    }

    const changeHandler = (value) => {
        setInput(value)
        fetchData(value)
    }
    return (
        <div>
           <div className='input-wrapper'>
            <form action="/search" method="GET"> 
                <FaSearch id="search-icon"/>
                    <input type="search" 
                        placeholder="Search"
                        value={input}
                        onChange={(e) => changeHandler(e.target.value)}
                        className="search-bar">
                    </input>
            </form>
                
           </div>
        </div>
    );
}

export default SearchBar;
