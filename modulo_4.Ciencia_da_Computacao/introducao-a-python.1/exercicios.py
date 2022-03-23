""" Exercício 1 """


def find_higher_number(x, y):
    if x > y:
        return x
    return y


""" Exercício 2 """


def calculate_average(list):
    sum = 0
    for number in list:
        sum += number
    return sum / len(list)


""" Exercício 3 """


def print_square(n):
    size = range(n)
    for row in size:
        print(n * "*")


""" Exercício 4 """


def find_biggest_name(names_list):
    biggest = ""
    for name in names_list:
        if len(name) > len(biggest):
            biggest = name
    return biggest


""" Exercício 5 """


def calculate_painting_costs(size):
    total_liters = size / 3
    cost_per_can = 80
    total_can = total_liters // 18
    if total_can <= 0:
        total_can = 1
    return total_can, total_can * cost_per_can


""" Exercício 6 """


def find_triangle_type(x, y, z):
    if x + y < z or y + z < x or x + z < y:
        return "Não é um triângulo"
    elif x == y == z:
        return "Triângulo equilátero"
    elif x == y or y == z or x == z:
        return "Triângulo isósceles"
    else:
        return "Triângulo escaleno"
