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


""" Exercício bônus 4 """


def fuel_price(amount_liters, fuel_type):
    if fuel_type == 'A':
        price = 1.90
        if amount_liters < 20:
            discount = 0.03
        else:
            discount = 0.05

    if fuel_type == 'G':
        price = 2.50
        if amount_liters < 20:
            discount = 0.04
        else:
            discount = 0.06

    total_for_liters = price * amount_liters
    total_discount = total_for_liters * discount
    total = total_for_liters - total_discount
    return total
