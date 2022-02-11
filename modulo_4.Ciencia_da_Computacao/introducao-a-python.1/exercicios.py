""" Exercício 1 """


def get_higher_number(x, y):
    if x > y:
        return x
    return y


""" Exercício 2 """


def get_average(list):
    sum = 0
    for number in list:
        sum += number
    return sum / len(list)


""" Exercício 3 """


def print_square(n):
    size = range(n)
    for row in size:
        print(n * '*')


""" Exercício 4 """


def get_biggest_name(names_list):
    biggest = ''
    for name in names_list:
        if len(name) > len(biggest):
            biggest = name
    return biggest
