import React from 'react';
import "../Styling/SearchResults.css"
import SearchResult from './SearchResult';

const SearchResults = ({results}) => {
    return (
        <div className='search-results-list'>
            {/* {
                results.map((result,id) => {
                    return <SearchResult result={result} key={id}/>
                })
            } */}
        </div>
    );
}

export default SearchResults;
