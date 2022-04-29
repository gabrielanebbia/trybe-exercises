""" Exercício 3 """

import random

WORDS = ["maça", "cidade", "gato", "cachorro", "flor", "cadeira"]


def random_word(words):
    word = random.choice(words)
    shuffle_word = "".join(random.sample(word, len(word)))
    return word, shuffle_word


def get_guesses():
    guesses = list()
    max_attempts = 3

    for attempt in range(max_attempts):
        guess = input(f"Qual a palavra?(tentativa {attempt}/{max_attempts})")
        guesses.append(guess)
    return guesses


def check_guesses(guesses, word):
    if word in guesses:
        print(f"Acertou! A palavra era {word}")
    else:
        print(f"Errou :( A palavra era {word}")
