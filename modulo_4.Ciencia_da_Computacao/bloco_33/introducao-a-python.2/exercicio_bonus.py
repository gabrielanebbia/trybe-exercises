import json
import random


def get_random_pokemon(file_path):
    with open(file_path) as file:
        pokemons = json.load(file)["results"]
        pokemon = random.choice(pokemons)
        pokemon_name = pokemon["name"]
    return pokemon_name


if __name__ == "__main__":
    random_pokemon = get_random_pokemon("pokemons.json")
    print(random_pokemon)
