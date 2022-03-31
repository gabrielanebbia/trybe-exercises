import React from 'react';
import Pokemon from './Pokemon';
import './pokedex.css'

class Pokedex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0,
        };
        this.nextPokemon = this.nextPokemon.bind(this);
    }

    nextPokemon() {
        let newState = this.state.index;
        const { pokemons } = this.props;
        if (this.state.index === pokemons.length - 1) {
            newState = 0;
        } else {
            newState = this.state.index + 1;
        }

        return this.setState({index: newState});
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