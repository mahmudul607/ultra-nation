import React from 'react';
import './Country.css';
const Country = (props) => {
    console.log(props.country);
    const name = props.country.name.common
    const { population, flags, region, capital} = props.country;
    const handleAddCountry = props.handleAddCountry;



    return (

        <div className='main'>
            <div className='country'>
                <h3>Name of Country: {name}</h3>
                <p>National Flag:</p>
                <img className='flag-img' src={flags.png} alt="" />
            </div>
            <div className='details-of-country'>
                <h2>Capital: {capital}</h2>
                <h3>Population : {population}</h3>
                <h4>Region: {region}</h4>
                <button onClick={() => handleAddCountry(props.country)}>Add Country..</button>
            </div>
        </div>



    );
};

export default Country;