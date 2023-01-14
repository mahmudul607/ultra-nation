import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Country from './components/Country/Country';

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() =>{
    fetch("https://restcountries.com/v3.1/all")
    .then(res => res.json())
    .then(data => 

    { 
       setCountries(data.slice(0, 4))
      .catch(err => console.log(err))
    }
    
    )

  }, [])
  return (
    <div >
      <header>
      <h1>Countries: {countries.length}</h1>
      <div className='country-div'>
          {
          countries.map(country => <Country country={country} key={country.ccn3}></Country>)
          }
      </div>
          
      
      </header>
    </div>
  );
}

export default App;
