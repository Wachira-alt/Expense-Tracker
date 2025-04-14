import React from 'react';

const SearchBar = ({searchTerm, setSearchTerm}) => {
  return (
    <div style={{marginBottom: '1rem'}}>
      <input
       type="text" 
       placeholder='Search expenses...'
       value={searchTerm}
       onChange={(e) => setSearchTerm(e.target.value)}
     
       />
    </div>
  )
};

export default SearchBar;