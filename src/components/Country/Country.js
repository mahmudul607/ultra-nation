import React from 'react';
import './Country.css';
const Country = (props) => {
   console.log(props.country);
   const name = props.country.name.common
    const {population, flags} = props.country;
   
    
    return (
    
        <div className='main'>
        <div className='country'>
                <h3>{name}</h3>
                <img className='flag-img' src={flags.png} alt="" />
              <h3>{population}</h3>
        </div>
        </div>
    
    );
};

export default Country;