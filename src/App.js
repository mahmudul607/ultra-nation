import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Country from './components/Country/Country';

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() =>{
    fetch("https://restcountries.com/v3.1/all")
    .then(res => res.json())
    .then(data => { 
       setCountries(data)
      .catch(err => console.log(err))
    })
  }, [])

  const handleAddCountry = (country) => {console.log("Add country clicked", country)};

  return (
    <div >
      <header>
      <h1 className='headline'>Details of {countries.length} Countries: </h1>
      <p></p>
      
      <div className='country-div'>
          {
          countries.map(country => <Country country={country} handleAddCountry = {handleAddCountry} key={country.ccn3}></Country>)
          }
      </div>
    
          
      
      </header>
    </div>
  );
}

export default App;
