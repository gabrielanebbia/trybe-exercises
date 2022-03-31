import React from 'react';
import Pokemon from './Pokemon';
import './pokedex.css'

class Pokedex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0,
        };
    }

    render() {
        const { pokemons } = this.props;

        return (
            <div className="pokedex">
                <Pokemon pokemon={pokemons[this.state.index]} />
            </div>
        );
    }
}

export default Pokedex;