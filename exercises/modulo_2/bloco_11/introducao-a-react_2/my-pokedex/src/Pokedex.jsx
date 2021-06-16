import React from 'react';
import Data from './data';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  render() {

    return (
      <div className='pokedex'>
       { Data.map(item => 
       <Pokemon 
       name={item.name} 
       type={item.type} 
       weight={item.averageWeight.value} 
       unit={item.averageWeight.measurementUnit} 
       image={item.image}
       />)}
      </div>
    );
  }
}

export default Pokedex;
