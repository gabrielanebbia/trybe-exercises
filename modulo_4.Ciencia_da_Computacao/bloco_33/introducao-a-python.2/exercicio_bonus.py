import json
import random


def get_random_pokemon(file_path):
    with open(file_path) as file:
        pokemons = json.load(file)["results"]
        pokemon = random.choice(pokemons)
        pokemon_name = pokemon["name"]
    return pokemon_name


def guesses(pokemon_name):
    wrong_answer = True
    num_guesses = 0

    while wrong_answer:
        num_guesses += 1
        guess = input("Quem é esse pokemon? ")

        if guess == pokemon_name:
            print("Acertou!")
            break
        elif num_guesses == len(pokemon_name):
            print("Errou! Sem mais tentativas :(")
            break
        else:
            print("Dica: ", end="")
            for i in range(0, num_guesses):
                print(pokemon_name[i], end="")
            print("")


if __name__ == "__main__":
    random_pokemon = get_random_pokemon("pokemons.json")
    guesses(random_pokemon)
