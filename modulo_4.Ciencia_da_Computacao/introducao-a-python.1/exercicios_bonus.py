""" Exercício bônus 1 """


def find_smaller_number(numbers):
    smaller_number = numbers[0]
    for number in numbers:
        if number < smaller_number:
            smaller_number = number
    return smaller_number


"""" Exercício bônus 2 """


def triangle(n):
    for row in range(1, n + 1):
        print(row * '*')


""" Exercício bônus 3 """


def sum_numbers(N):
    sum = 0
    for number in range(1, N + 1):
        sum += number
    return sum
