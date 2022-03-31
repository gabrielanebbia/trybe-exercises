import React from 'react';
import Pokemon from './Pokemon';
import Button from './Button'
import './pokedex.css'

class Pokedex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            filteredType: 'Fire',
        };
    }

    nextPokemon(numberOfPokemons) {
        this.setState(state => ({
            index: (state.index + 1) % numberOfPokemons,
        }));
    }

    fetchPokemonTypes() {
        const { pokemons } = this.props;

        return [...new Set(pokemons.reduce((types, { type }) => [...types, type], []))];
    }

    fetchFilteredPokemons() {
        const { pokemons } = this.props;
        const { filteredType } = this.state;

        return pokemons.filter(pokemon => {
            if (filteredType === 'all') return true;
            return pokemon.type === filteredType;
        });
    }

    render() {
        const filteredPokemons = this.fetchFilteredPokemons();
        const pokemonTypes = this.fetchPokemonTypes();
        const pokemon = filteredPokemons[this.state.index];

        return (
            <div className="pokedex">
                <Pokemon pokemon={pokemon} />
                <div className="pokedex-buttons-panel">
                    {pokemonTypes.map(type => (
                        <Button
                            key={type}
                            onClick={() => this.filterPokemons(type)}
                            className="filter-button"
                        >
                            {type}
                        </Button>
                    ))}
                </div>
                <Button
                    className="pokedex-button"
                    onClick={() => this.nextPokemon(filteredPokemons.length)}
                >
                    Next
                </Button>
            </div>
        );
    }
}

export default Pokedex;