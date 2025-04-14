import React from 'react';

const SearchBar = ({searchTerm, setSearchTerm}) => {
  return (
    <div style={{marginBottom: '1rem'}}>
      <input
       type="text" 
       placeholder='Search expenses...'
       value={searchTerm}
       onChange={(e) => setSearchTerm(e.target.value)}
       style={{
          padding: '0.5rem',
          width: '100%',
          maxWidth: '300px',
          border: '1px solid #ccc',
          borderRadius: '4px',
       }}
       />
    </div>
  )
};

export default SearchBar;