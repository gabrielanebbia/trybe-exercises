""" Exercício 1 """


def higher_number(x, y):
    if x > y:
        return x
    return y


""" Exercício 2 """


def average(list):
    sum = 0
    for number in list:
        sum += number
    return sum / len(list)
