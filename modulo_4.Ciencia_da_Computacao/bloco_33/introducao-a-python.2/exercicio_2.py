""" Exercício 2 """


import random

WORDS = ["maça", "cidade", "gato", "cachorro", "flor", "cadeira"]
MAX_ATTEMPTS = 3


def random_word(words):
    word = random.choice(words)
    shuffle_word = "".join(random.sample(word, len(word)))
    print(f"A palavra embaralhada é {shuffle_word}")
    return word, shuffle_word


def get_guesses():
    guesses = list()

    for attempt in range(MAX_ATTEMPTS):
        guess = input(f"Qual a palavra?(tentativa {attempt}/{MAX_ATTEMPTS} )")
        guesses.append(guess)
    return guesses


def check_guesses(guesses, word):
    if word in guesses:
        print(f"Acertou! A palavra era {word} !")
    else:
        print(f"Errou :( A palavra era {word} !")


word, shuffle_word = random_word(WORDS)
guesses = get_guesses()
print(check_guesses(guesses, word))
