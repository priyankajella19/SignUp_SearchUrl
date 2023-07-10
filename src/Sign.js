import React, { useState } from 'react';
import {Sign} from './Sign.css';
// const SearchBar=()=>{
//     return(
//         <div className="container">
//           <div className="">
//           <input type="text" placeholder="Search url here.." className='form-control w-20' />
//            <div class=""><button type="button" id="Searchbtn"className="btn btn-primary">Search</button></div>
//           </div>
//          <Login/>
//         </div>
//     )
// }
// export default SearchBar;



const SearchBar = () => {
  const [inputUrl, setInputUrl] = useState("");
  const [urlDetails, setUrlDetails] = useState(null);

  const handleInputChange = (event) => {
    setInputUrl(event.target.value);
  };
  const handleSearch = () => {
    try {
      const url = new URL(inputUrl);
      const details={
        protocol: url.protocol,
        hostname: url.hostname,
        pathname: url.pathname,
        search: url.search,
        searchParams: url.searchParams,
      };
      setUrlDetails(details);
      console.log(details);
    } catch (error) {
      console.error("Invalid URL:", error);
    }
  };

  const { protocol, hostname, pathname, search, searchParams } =
    urlDetails || {};
  return (
    <div className='container'>
      <div> 
        <input
          type="text" id='searchip'
          placeholder="Please Enter URL"
          value={inputUrl}
          onChange={handleInputChange}
        />
        <button id="searchurl"onClick={handleSearch} > 
          Shearch
        </button>
      </div>
      {urlDetails && (
        <div >
          <h2 >URL Details:</h2>
          <p> Protocol: {protocol}</p>
          <p> Hostname: {hostname}</p>
          <p>Pathname: {pathname}</p>
          <p id='ovdata'>Search: {search}</p>
          <p>Search Params:</p>
          <ul>
            {Array.from(searchParams.entries()).map(([key, value]) => (
              <li key={key}>
                {key}: {value}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchBar;