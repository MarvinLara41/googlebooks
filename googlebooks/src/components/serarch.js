import React from 'react';


//enter props in the parameter to acces the properties passed down from the book.js file 
const Search = (props) => {

    return(
       <div className='search'>
           <form onSubmit={props.searchBook} action="">
               <input onChange={props.handleSearch} type='text'/>
               <button type="submit">Search your book</button>
               <select defaultValue='Sort' onChange={props.handleSort}>
                   <option disabled value="Sort">Sort</option>
                   <option value='Newest'>Newest</option>
                   <option value='Oldest'>Oldest</option>
               </select>
           </form>
       </div>
    )
}

export default Search;