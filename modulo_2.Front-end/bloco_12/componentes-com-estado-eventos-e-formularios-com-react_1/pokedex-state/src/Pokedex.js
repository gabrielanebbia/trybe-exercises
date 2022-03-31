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

    nextPokemon() {
        this.setState(state => ({
            index: (state.index + 1),
        }));
    }

    render() {
        const { pokemons } = this.props;

        return (
            <div className="pokedex">
                <Pokemon pokemon={pokemons[this.state.index]} />
                <button
                    className="pokedex-button"
                    onClick={() => this.nextPokemon()}
                >
                    Next
                </button>
            </div>
        );
    }
}

export default Pokedex;