import React,  {useState}  from 'react';

import './App.css';
import SearchPage from './components/SearchPage.js';
import HeaderPage from './components/HeaderPage.js';
import FooterPage from './components/FooterPage.js';

import { FaCaretDown } from 'react-icons/fa';
function App() {

  //create a state
  const [searchTerm, setSearchTerm] = useState('')
  const [totalCars, setTotalCars] = useState('')
  let searchHandler =(e) => {
    var searchTerm = e.target.value.toLowerCase();
    setSearchTerm(searchTerm);
   
  };


 
  /* add matching text */
  return (
    <div className="App"> 
      <HeaderPage />
      <div className="searchBar">
        <input className="searchInput" type="text" placeholder="search" onChange={searchHandler} /> 
        <p> {totalCars} cars in my Showroom </p>
        <ul className="hideMobileView">
          <li>
            <a href="#myShowroom">Best Terms</a>
            <FaCaretDown className="sygStyles" />
          </li> &nbsp; &nbsp; &nbsp;
          <li>
            <a href="#myShowroom">10,000 MPY</a>
            <FaCaretDown className="sygStyles" />
          </li>
        </ul>
      </div>
      <SearchPage input={searchTerm} updateNumOfCars={totalCars => setTotalCars(totalCars)} />
      {totalCars === 0 && <p className="errorMessageStyles">No cars found</p>}
      <FooterPage />
    </div>
  );
}

export default App;
