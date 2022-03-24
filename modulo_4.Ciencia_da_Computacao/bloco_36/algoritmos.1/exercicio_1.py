""" Exercício 1 """


def contains_duplicate(numbers):
    numbers.sort()
    previous_number = 'not a number'
    for number in numbers:
        if(previous_number == number):
            return True
        previous_number = number

    return False


# Complexidades para o:
# Melhor caso -
# Caso médio -
# Pior caso -
