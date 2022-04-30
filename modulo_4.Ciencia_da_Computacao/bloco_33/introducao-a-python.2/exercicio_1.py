""" Exercício 1 """

NAME = input('Digite seu nome: ')


def print_letters(NAME):
    for letter in NAME:
        print(letter)


def print_name_in_stairs(NAME):
    while len(NAME) - 1:
        name_step = NAME[:-1]
        print(name_step)
